<%@ Page Language="C#" %>
<%@ Import Namespace="System.Data.SqlClient" %>

<!DOCTYPE html>

<script runat="server">
    protected void submitButton_Click(object sender, EventArgs e)
    {
        if (Page.IsValid)
        {
            // Code that uses the data entered by the user
            // Define data objects
            SqlConnection conn;
            SqlCommand comm;
            // Read the connection string from Web.config
            string connectionString =
                ConfigurationManager.ConnectionStrings[
                "website"].ConnectionString;
            // Initialize connection
            conn = new SqlConnection(connectionString);
            // Create command 
            comm = new SqlCommand("EXEC Insertcontact @firstnameTextBox, @lastnameTextBox, @emailTextBox, @commentsareaTextBox", conn);
            comm.Parameters.Add("@firstnameTextBox", System.Data.SqlDbType.NChar, 50);
            comm.Parameters["@firstnameTextBox"].Value = firstname.Text;
            comm.Parameters.Add("@lastnameTextBox", System.Data.SqlDbType.NChar, 50);
            comm.Parameters["@lastnameTextBox"].Value = lastname.Text;
            comm.Parameters.Add("@emailTextBox", System.Data.SqlDbType.NChar, 50);
            comm.Parameters["@emailTextBox"].Value = email.Text;
            comm.Parameters.Add("@commentsareaTextBox", System.Data.SqlDbType.NChar, 200);
            comm.Parameters["@commentsareaTextBox"].Value = commentsarea.Text;

            // Enclose database code in Try-Catch-Finally
            try
            {
                // Open the connection
                conn.Open();
                // Execute the command
                comm.ExecuteNonQuery();
                // Reload page if the query executed successfully
                Response.Redirect("contact-success.html");
            }
            catch (SqlException ex)
            {
                // Display error message
                dbErrorMessage.Text =
                   "Error submitting the data!" + ex.Message.ToString();

            }
            finally
            {
                // Close the connection
                conn.Close();
            }
        }
    }

</script>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>SWDV-235 - Project 1</title>

    <!-- Stylesheets -->
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/index.css" rel="stylesheet"/>
    <link href="css/contact.css" rel="stylesheet"/>

    <!-- JavaScripts -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/contact.js"></script>

</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html"><img src="imgs/logo.png" alt="logo"/></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="index.html">About<span class="sr-only">(current)</span></a></li>
                    <li><a href="showtimes.html">Showtimes</a></li>
                    <li><a href="upcoming.html">Upcoming</a></li>
                    <li><a href="faqs.html">FAQS</a></li>
                    <li><a href="newsletter.aspx">Newsletter</a></li>
                    <li class="active"><a href="contact.aspx">Contact</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>

    <div class="container well">
        <main>
            <h1>Have an question? Want to book a private viewing? Have some feedback?</h1>
            <h2>Let us know!</h2>
            <!-- Contact Form-->
            <div class="form container">
                <form name="form1" runat="server">
                    <div class="form-group">
                        <label for="firstName" class="col-sm-2 control-label">First Name</label>
                        <div class="col-sm-10">
                            <asp:TextBox ID="firstname" runat="server" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="lastName" class="col-sm-2 control-label">Last Name</label>
                        <div class="col-sm-10">
                            <asp:TextBox ID="lastname" runat="server" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <asp:TextBox ID="email" runat="server" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label>
                                    <asp:checkBox ID="genfeedback" runat="server" /> General Feedback
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                <label>
                                    <asp:checkBox ID="privviewing" runat="server" /> Private Viewing
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="commentsArea" class="col-sm-2 control-label">Comments</label>
                        <div class="col-sm-10">
                            <asp:TextBox ID="commentsarea" runat="server" Height="100px" Width="200px" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-5 col-sm-10">
                            <asp:Button ID="submitButton" runat="server"
                Text="Submit" onclick="submitButton_Click" />
<br />
        <asp:Label ID="dbErrorMessage" runat="server"></asp:Label>

                        </div>
                    </div>
                </form>
            </div>
    </main>
        </div>
</body>
</html>