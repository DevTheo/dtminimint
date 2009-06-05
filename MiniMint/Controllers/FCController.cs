using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Text;
using JSCompress;

namespace MiniMint.Controllers
{
    public class FCController : Controller
    {
        //
        // GET: /Script/
        [AcceptVerbs(HttpVerbs.Get)]
        public ActionResult Index(string s)
        {
            var scripts = s.Split('|');
            StringBuilder sb = new StringBuilder();

            foreach (var scriptFN in scripts)
            {
                var FN = Server.MapPath(scriptFN);
                using (var fs = System.IO.File.OpenText(FN))
                {
                    sb.AppendLine(fs.ReadToEnd());
                }
            }
            //var compressor = new JSCompressor(true, false);
            var result = sb.ToString(); //compressor.Compress(sb.ToString());
            return Content(result);
        }

    }
}
