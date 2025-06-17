
RewriteEngine on
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://LYC1191.github.io/lezuohome/index.html$1 [R,L]
