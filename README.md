需要在服务器上做一些配置

a2enmod proxy
a2enmod proxy_http

开启代理和转发模块


站点配置：

ios.transit.gf.ppgame.com.conf

<VirtualHost *:80>
    ServerAdmin aaa@163.com
    ServerName ios.transit.gf.ppgame.com
    ProxyPass / http://localhost:9999/
    ProxyPassReverse / http://localhost:9999/
</VirtualHost>

开启站点：
a2ensite ios.transit.gf.ppgame.com

