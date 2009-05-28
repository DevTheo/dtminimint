<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<MiniMint.ViewModels.CheckRegistryViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Main Ajaxified
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Main Ajaxified</h2>
<div id="MainContent">
    <div id="MessageArea">
        <%=Model.Message %>
    </div>
    <div id="AccountTable">
    <table id="AccountTableActual">
<% foreach(var a in Model.Accounts){%>
    <tr id='<%= a.AccountName.Replace(" ", "_")%>'>
        <td><%= a.AccountName %></td>
        <td>$<%=a.CurrentTotal %></td>
    </tr>
<%} %>
</table></div>
<hr class="breakLayout" />
    <table id="CheckRegistry">
    <tr id="RegistryLabelRow">
        <td><img alt="loading" src="../../Content/ajax-loader.gif" id="ajaxLoaderImage" class="notbusy" /></td>
        <td>Date</td>
        <td>What</td>
        <td>Account</td>
        <td>Category</td>
        <td>Amount</td>
        <td>&nbsp;</td>
    </tr>
    <tr id="RegistryCreateRow">
        <td>&nbsp;</td>
        <td><%= String.Format("{0:d}", DateTime.Now) %></td>
    <%using (Html.BeginForm("Create", "MainAjaxed")) { %>
        <td><input type="text" name="Who" value="" /></td>
        <td><%=Html.DropDownList("AccountID", Model.AccountList) %></td>
        <td><%=Html.DropDownList("RegisterCategoryId", Model.Categories) %></td>
        <td>$<input type="text" name="Amount" value="" size="7" /></td>
        <td><input type="submit" value="Add" />
            <input type="hidden" name="LastRetrieveDate" id="LastRetrieved" value="<%= Model.LastRetrieve%>" />
        </td>
    </tr>
    <tr id="template">
            <td id="r{0}">
                <a id="deleteLinkItem{0}" class="deleteLink" href="<%= Url.Action("Delete", "MainAjaxed", new {ID="{0}"}) %>">Delete</a>
            </td>
            <td>{1}</td>
            <td>{2}</td>
            <td>{3}</td>
            <td>{4}</td>
            <td>${5}</td>
    </tr>
    <%}
    foreach(var r in Model.Register){%>
        <tr>
            <td id="r<%=r.RegistryId %>">
                <a id="deleteLinkItem<%=r.RegistryId %>" class="deleteLink" href="<%= Url.Action("Delete", "MainAjaxed", new {ID=r.RegistryId}) %>">Delete</a>
            </td>
            <td><%= String.Format("{0:d}", r.EntryDate) %></td>
            <td><%= r.RegistryDesc %></td>
            <td><%= r.AccountName%></td>
            <td><%= r.CategoryName%></td>
            <td>$<%=-1 * r.RegistryAmount %></td>
        </tr>
    <%}%>
    </table>
    
    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="HtmlHeadArea" ID="htmlHeadContent" runat="server">    
    <script src="../../Scripts/MicrosoftAjax.debug.js" type="text/javascript"></script>
    <script src="../../Scripts/jquery-1.3.2.debug.js" type="text/javascript"></script>
    <!-- AjaxCT jquery Plugin-->
    <script src="../../Scripts/JqueryPlugin/jquery.MicrosoftAjax.js" type="text/javascript"></script>
    
    <script src="../../Scripts/MicrosoftAjaxTimer.debug.js" type="text/javascript"></script>    
    <script src="../../Scripts/MicrosoftAjaxWebForms.debug.js" type="text/javascript"></script>    
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.ExtenderBase.BaseScripts.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.Common.Common.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.Animation.Animations.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.AlwaysVisibleControl.AlwaysVisibleControlBehavior.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.Compat.Timer.Timer.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.DropShadow.DropShadowBehavior.js" type="text/javascript"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="ScriptArea" ID="ScriptContent" runat="server">
    <script src="../../Scripts/MainAjaxed.js" type="text/javascript"></script>
</asp:Content>

