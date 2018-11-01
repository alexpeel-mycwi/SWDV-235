Create database website;
GO
Use website;
GO
--Create contact table:
CREATE TABLE [dbo].[contact](
[contact_id] [int] IDENTITY(1,1) NOT NULL,
[contact_fname] [nchar](50) NOT NULL,
[contact_lname] [nchar](50) NOT NULL,
[contact_email] [nchar](50) NOT NULL,
[contact_msg] [nchar](200) NOT NULL
) ON [PRIMARY]

GO

create procedure Insertcontact
@contact_fname nchar(50),
@contact_lname nchar(50),
@contact_email nchar(50),
@contact_msg nchar(200)
as
INSERT INTO [website].[dbo].[contact]
           ([contact_fname]
		   ,[contact_lname]
           ,[contact_email]
           ,[contact_msg])
     VALUES
           (@contact_fname
		   ,@contact_lname
           ,@contact_email
           ,@contact_msg)
GO
execute Insertcontact "Default", "contact", "contact@email.com", "Insert using SP from SSMS";

select * from contact;

Use website;
GO
--Create newsletter table:
CREATE TABLE [dbo].[newsletter](
[newsletter_id] [int] IDENTITY(1,1) NOT NULL,
[newsletter_fname] [nchar](50) NOT NULL,
[newsletter_lname] [nchar](50) NOT NULL,
[newsletter_email] [nchar](50) NOT NULL
) ON [PRIMARY]

GO

create procedure Insertnewsletter
@newsletter_fname nchar(50),
@newsletter_lname nchar(50),
@newsletter_email nchar(50)
as
INSERT INTO [website].[dbo].[newsletter]
           ([newsletter_fname]
		   ,[newsletter_lname]
           ,[newsletter_email])
     VALUES
           (@newsletter_fname
		   ,@newsletter_lname
           ,@newsletter_email)
GO
execute Insertnewsletter "Default", "newsletter", "newsletter@email.com";

select * from newsletter;

CREATE LOGIN [WebApp] WITH PASSWORD='Pa$$w0rd', DEFAULT_DATABASE=[website]
go
use website
go
CREATE USER [WebApp] FOR LOGIN [WebApp] WITH DEFAULT_SCHEMA=[dbo]
GO
grant execute on Insertcontact to WebApp
go
grant execute on Insertnewsletter to WebApp
go
