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

namespace MiniMint.ViewModels
{
    public class DailyRegistry
    {
        public int RegistryId { get; set; }
        public string RegistryDesc { get; set; }
        public int AccountId { get; set; }
        public string AccountName { get; set; }
        public Int32? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public double RegistryAmount { get; set; }
        public DateTime EntryDate { get; set; }
    }
}
