using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using MiniMint.Data;
using MiniMint.ViewModels;
using System.Web.Mvc;
using System.Collections.Generic;
using SubSonic;
using MiniMint.Models.generated;

namespace MiniMint.Models
{
    public class MiniMintDB:MiniMint.Data.MiniMintDbContext
    {
        public MiniMintDB()
        {
        }
        public MiniMintDB(string DbProvider)
            : base(DbProvider)
        {
        }
        public CheckRegistryViewModel GetViewModel()
        {
            return new CheckRegistryViewModel
            {
                AccountList = GetAccountListCollection(),
                Accounts = GetAccountSummary().ToList(),
                Register = GetLast45DaysOfRegister().ToList(),
                Categories = GetCategoriesListCollection(),
                LastRetrieve = String.Format("{0:MM/dd/yyyy hh:mm:ss}", DateTime.Now)
            };
        }

        public CheckRegistryViewModel GetViewModelForEntriesAfterForJsonResult(DateTime dtLastDataRetrieve)
        {
            var vm = new CheckRegistryViewModel
            {
                Accounts = GetAccountSummary().ToList(),
                Register = GetRegisterEntriesAfter(dtLastDataRetrieve).ToList()
            };

            // There are a number of improvements that could be made.. for instance we could just return the accounts
            // that changed

            vm.LastRetrieve = String.Format("{0:MM/dd/yyyy hh:mm:ss}", DateTime.Now);
            return vm;
        }
        public IEnumerable<AccountSummary> GetAccountSummary()
        {
            var result = (from accsum in this.accountsummaries
                          select new AccountSummary { AccountName = accsum.account_name, CurrentTotal = accsum.CurrentTotal??0 });

            return result;
        }

        private IQueryable<DailyRegistry> GetDailyRegister(DateTime EntriesAfterThisDate)
        {
            return (from register in this.dailyregisters
                    where register.registry_date > EntriesAfterThisDate
                    select new DailyRegistry
                    {
                        AccountId = register.registry_account,
                        CategoryId = register.register_category_id,
                        RegistryAmount = register.registry_amount,
                        EntryDate = register.registry_date,
                        RegistryDesc = register.registry_enteredby,
                        RegistryId = register.registry_id
                        //,
                        //AccountName=(register.RegistryAccount)??new Account{AccountName=""}).AccountName,
                        //CategoryName=(CategoryRepository.GetByKey(register.RegisterCategoryId)??new Registercategory{RegisterCategoryName=""}).RegisterCategoryName
                    });
        }
        public IEnumerable<DailyRegistry> GetLast45DaysOfRegister()
        {
            var date46DaysAgo = DateTime.Today.AddDays(-46);

            var result = GetDailyRegister(date46DaysAgo).OrderByDescending(r => r.EntryDate).ToList();
            result.ForEach(i=>{
                        i.AccountName=(accounts.Where(a=>i.AccountId==a.account_id).Select(a=>a.account_name).FirstOrDefault()??"");
                        i.CategoryName=(registercategories.Where(r=>i.CategoryId==r.register_category_id).Select(r=>r.register_category_name).FirstOrDefault()??"");
                    });
            return result;
        
        }
        private IEnumerable<DailyRegistry> GetRegisterEntriesAfter(DateTime dtLastDataRetrieve)
        {
            var result = GetDailyRegister(dtLastDataRetrieve).Distinct().OrderByDescending(r => r.EntryDate).ToList();
            result.ForEach(i =>
            {
                i.AccountName = (accounts.Where(a => i.AccountId == a.account_id).Select(a => a.account_name).FirstOrDefault() ?? "");
                i.CategoryName = (registercategories.Where(r => i.CategoryId == r.register_category_id).Select(r => r.register_category_name).FirstOrDefault() ?? "");
            });
            return result;
        }
        public IEnumerable<SelectListItem> GetCategoriesListCollection()
        {
            return (from category in registercategories
             select new SelectListItem { Text = category.register_category_name, Value = category.register_category_id.ToString() });
            

        }
        public IEnumerable<SelectListItem> GetAccountListCollection()
        {
            return (from Account in accounts
                    select new SelectListItem { Text = Account.account_name, Value = Account.account_id.ToString() });

        }

        public account GetAccountById(int id)
        {
            return accounts.Where(acc=>acc.account_id==id).Select(acc=>acc).FirstOrDefault();
        }
        public registercategory GetCategoryByName(string Category)
        {
            return registercategories.Where(cat => cat.register_category_name.Equals(Category, StringComparison.InvariantCultureIgnoreCase)).Select(cat => cat).FirstOrDefault();
        }
        public registercategory GetCategoryById(int id)
        {
            return registercategories.Where(cat=>cat.register_category_id==id).Select(cat=>cat).FirstOrDefault();
        }
        public dailyregister GetRegisterById(int id)
        {
            return dailyregisters.Where(reg => reg.registry_id == id).Select(reg => reg).FirstOrDefault();
        }
        public registercategory CreateCategory(string Category)
        {
            var result = new registercategory() {
                register_category_name=Category
            };
            registercategories.InsertOnSubmit(result);
            return result;

        }

        public dailyregister CreateRegisterEntry(account Account, registercategory Category, double Amount, DateTime EntryDate, string What)
        {
            var result = new dailyregister() {
                account=Account,
                registercategory=Category,
                registry_amount=Amount,
                registry_date = EntryDate,
                registry_enteredby = What
            };
            dailyregisters.InsertOnSubmit(result);
            return result;
        }
        public void DeleteEntry(int id)
        {
            var entry = GetRegisterById(id);
            if (entry != null)
            {
                dailyregisters.DeleteOnSubmit(entry);
                SubmitChanges();
            }
        }
    }
}
