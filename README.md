boilerJS
========

A boilerplate for JS lovers!

Setup
--------

1. You need to set a virtua host:
<VirtualHost *:80>
    DocumentRoot "D:\trabajos\boilerJS"
    ServerName local.boilerjs.com
	ErrorLog "logs/boilerjs.log"
    CustomLog "logs/boilerjs.log" common
	<Directory "D:\trabajos\boilerJS">
		Options Indexes FollowSymLinks MultiViews
		AllowOverride all
			Order Allow,Deny 
		Allow from all
	</Directory>
</VirtualHost>
