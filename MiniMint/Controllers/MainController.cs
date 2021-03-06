using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using MiniMint.Models;
using System.Text.RegularExpressions;
using MiniMint.ViewModels;
using MiniMint.Models.generated;

namespace MiniMint.Controllers
{
    public class MainController : Controller
    {
        private const string kCategoryIDNameField = "RegisterCategoryId";
        private const string kCategoryNameField = "RegisterCategoryName";
        MiniMintDB dbcontext=null;
        public MiniMintDB Dbcontext
        {
            get
            {
                if (dbcontext == null)
                    dbcontext = new MiniMintDB();
                return dbcontext;
            }
            set
            {
                dbcontext = value;
            }
        }

        //
        // GET: /Main/
        public ActionResult Index()
        {
            return View("Main", Dbcontext.GetViewModel());
        }


        //
        // POST: /Main/Create
        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Create(FormCollection collection)
        {
            try
            {

                registercategory category = null; 
                if (collection.AllKeys.Contains(kCategoryIDNameField))
                {
                    var catID = collection.GetValue(kCategoryIDNameField).AttemptedValue;
                    category = Dbcontext.GetCategoryById(Convert.ToInt32(catID));
                }
                else if (collection.AllKeys.Contains(kCategoryNameField))
                {
                    var categoryName = collection.GetValue(kCategoryNameField).AttemptedValue;
                    category = Dbcontext.GetCategoryByName(categoryName)??Dbcontext.CreateCategory(categoryName);
                    
                }
                // The entry will return, but we don't need it.. model context prepares to add it on submitchanges
                Dbcontext.CreateRegisterEntry(
                                Dbcontext.GetAccountById(Convert.ToInt32(collection.GetValue("AccountID").AttemptedValue)), 
                                category,
                                Convert.ToDouble(collection.GetValue("Amount").AttemptedValue), 
                                DateTime.Now,
                                collection.GetValue("Who").AttemptedValue);
                Dbcontext.SubmitChanges();
                
                var vm = Dbcontext.GetViewModel();
                vm.Message = "Created item";
                return View("Main", vm);
            }
            catch(Exception ex)
            {
                var vmex = Dbcontext.GetViewModel();
                vmex.Message = String.Format("Error while creating item ({0})", ex.Message);
                return View("Main", vmex);
            }
        }

        public ActionResult Delete(int id)
        {
            try
            {
                Dbcontext.DeleteEntry(id);

                    var vm = Dbcontext.GetViewModel();
                    vm.Message = "Item deleted";
                if (!Request.IsAjaxRequest())
                {
                    return View("Main", vm);
                }
                else
                {
                    return Content(vm.Message);
                }
            }
            catch (Exception ex)
            {
                var vmex = Dbcontext.GetViewModel();
                vmex.Message = String.Format("Error while deleting item ({0})", ex.Message);
                if (!Request.IsAjaxRequest())
                {
                    return View("Main", vmex);
                }
                else
                {

                    return Content(vmex.Message);
                }
            }

        }
    }
}
