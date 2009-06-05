using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using MiniMint.ViewModels;
using MiniMint.Models;

namespace MiniMint.Controllers
{
    public class GraphsController : Controller
    {
        MiniMintDB dbcontext = null;
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
        // GET: /Graphs/
        public ActionResult Index()
        {
            GraphsViewData data = Dbcontext.GetGraphsData();

            return View(data);
        }

    }
}
