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

namespace MiniMint.ViewModels
{
    public class GraphsViewData
    {
        public List<CategoryGraphData> DataForAllTime
        {
            get;
            set;
        }
        public List<CategoryGraphData> DataForLast3CompleteMonths
        {
            get;
            set;
        }
        public List<CategoryGraphData> DataForLastMonth
        {
            get;
            set;
        }

        public List<CategoryGraphData> DataForThisMonth
        {
            get;
            set;
        }
    }
    public class CategoryGraphData
    {
        public string CategoryName
        {
            get;
            set;
        }

        public double AmountForCategory
        {
            get;
            set;
        }
    }
}
