需要在服务器上做一些配置

apache2配置示例：

apache2.conf:

加入

LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
这两个文件可能不在这个位置，可以到/usr/lib/apache2/下看看

站点配置：

<VirtualHost *>
    ServerAdmin aaa@163.com
    ServerName ios.transit.gf.ppgame.com
    ProxyPass / http://localhost:9999/
    ProxyPassReverse / http://localhost:9999/
</VirtualHost>