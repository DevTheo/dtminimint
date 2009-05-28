<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<MiniMint.ViewModels.CheckRegistryViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Main
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Main</h2>
<div id="MainContent">
    <div id="MessageArea">
        <%=Model.Message %>
    </div>
    <table id="AccountTable">
<% foreach(var a in Model.Accounts){%>
    <tr>
        <td><%= a.AccountName %></td>
        <td>$<%=a.CurrentTotal %></td>
    </tr>
<%} %>
</table>
<hr class="breakLayout" />
    <table>
    <tr>
        <td>&nbsp;</td>
        <td>Date</td>
        <td>What</td>
        <td>Account</td>
        <td>Category</td>
        <td>Amount</td>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td><%= String.Format("{0:d}", DateTime.Now) %></td>
    <%using (Html.BeginForm("Create", "Main")) { %>
        <td><input type="text" name="Who" value="" /></td>
        <td><%=Html.DropDownList("AccountID", Model.AccountList) %></td>
        <td><%=Html.DropDownList("RegisterCategoryId", Model.Categories) %></td>
        <td>$<input type="text" name="Amount" value="" size="7" /></td>
        <td><input type="submit" value="Add" /></td>
    </tr>
    <%}
        bool firstTime = true;
    foreach(var r in Model.Register){%>
        <tr>
            <td><%if(firstTime){%>
                <a href="<%= Url.Action("Delete", "Main", new {ID=r.RegistryId}) %>">Delete</a>
                <%}
                  firstTime = false;%></td>
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
