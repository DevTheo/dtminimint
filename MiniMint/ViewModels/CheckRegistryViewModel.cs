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
using System.Collections.Generic;
using MiniMint.Models;
using MiniMint.Data;
using System.Web.Mvc;

namespace MiniMint.ViewModels
{
    public class CheckRegistryViewModel
    {
        public IEnumerable<SelectListItem> AccountList { get; set; }
        public List<AccountSummary> Accounts { get; set; }
        public List<DailyRegistry> Register { get; set; }
        public string Message { get; set; }
        public IEnumerable<SelectListItem> Categories { get; set; }
        public object AdditionalInfo { get; set; }
        public string LastRetrieve { get; set; }
    }
}

