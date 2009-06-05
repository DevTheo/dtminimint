<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<MiniMint.ViewModels.GraphsViewData>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Graphs</h2>
    <div style="width:800px">
    <div id="PlotHereCurrentMonth" style="height:200px;width:200px; float:left;">
    </div>
    <div id="PlotHereLastMonth" style="height:200px;width:200px; float:left;">
    </div>
    <div id="PlotHere3Months" style="height:200px;width:200px; float:left;">
    </div>
    <div id="PlotHereAll" style="height:200px;width:200px; float:left;">
    </div>
    <br style="clear:both" />
    </div>
    <textarea id="dataset" style="display:none" rows="10" cols="100">
    {
    <%
          var DataTitle = "This_Month_So_Far";
          var DataLabel = "This Month So Far";
          var data = Model.DataForThisMonth;
          var firstTime = false;
          var htable = new List<String>(Model.DataForAllTime.Count);
          var catID =0;
          // item.CategoryName.Replace(" ", "")
          if(data.Count > 0) {
 %>     <%=DataTitle %>": { 
            label:"<%=DataLabel%>",
            bars: { show: true },
            data:[<% 
              firstTime = true;
              foreach (var item in data) {
                if(!htable.Contains(item.CategoryName))
                {
                    htable.Add(item.CategoryName);
                }
                catID = htable.IndexOf(item.CategoryName);
           %><%if(!firstTime){ %>,<%} else firstTime=false; %>[<%=catID%>,<%=item.AmountForCategory%>]<%
              } %>]
        },<%}
          DataTitle = "Last_Month"; 
          DataLabel = "Last Month";
          data = Model.DataForLastMonth;
          if (data.Count > 0)
          {
        %>
        "<%=DataTitle%>":{ 
            label:"<%=DataLabel%>",
            bars: { show: true },
            data:[<% 
              firstTime = true;
              foreach (var item in data) {
           if(!htable.Contains(item.CategoryName))
                {
                    htable.Add(item.CategoryName);
                }
                catID = htable.IndexOf(item.CategoryName);
           %><%if(!firstTime){ %>,<%} else firstTime=false; %>[<%=catID%>,<%=item.AmountForCategory%>]<%
              } %>]
        },<% }
          DataTitle = "Last_3_Months";
          DataLabel = "Last 3 Months";
          data = Model.DataForLast3CompleteMonths;
          if (data.Count > 0)
          {
%>
        "<%=DataTitle%>":
        { 
            label:"<%=DataLabel%>",
            bars: { show: true },
            data:[<% 
              firstTime = true;
              foreach (var item in data) {
           if(!htable.Contains(item.CategoryName))
                {
                    htable.Add(item.CategoryName);
                }
                catID = htable.IndexOf(item.CategoryName);
           %><%if(!firstTime){ %>,<%} else firstTime=false; %>[<%=catID%>,<%=item.AmountForCategory%>]<%
            } %>]
        },<%  }
          DataTitle = "All";
          DataLabel = "All";
          data = Model.DataForAllTime;          
                if(data.Count > 0) {
      %>
        "<%=DataTitle %>":
        { 
            label:"<%=DataLabel%>",
            bars: { show: true },
            data:[<% 
              firstTime = true;
              foreach (var item in data) {
           if(!htable.Contains(item.CategoryName))
                {
                    htable.Add(item.CategoryName);
                }
                catID = htable.IndexOf(item.CategoryName);
           %><%if(!firstTime){ %>,<%} else firstTime=false; %>[<%=catID%>,<%=item.AmountForCategory%>]<%
            } %>]
        }<%} %>
    }
    </textarea>
    <div style="width:800px; text-align:center;">
    <table>
<%for(int i=0; i<htable.Count;i++) {%>
        <tr>
            <td><%=i %></td>
            <td><%=htable[i] %></td>
        </tr>
<%} %>
</table>
</div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HtmlHeadArea" runat="server">
    <script src="../../Scripts/MicrosoftAjax.debug.js" type="text/javascript"></script>
    <script src="../../Scripts/jquery-1.3.2.debug.js" type="text/javascript"></script>
    <script src="../../Scripts/excanvas-compressed.js" type="text/javascript"></script>

    <script type="text/javascript" src="../../Scripts/JqueryPlugin/jquery.flot.js"></script>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="ScriptArea" runat="server">
    <script type="text/javascript" src="../../Scripts/Graphs.js"></script>
</asp:Content>

