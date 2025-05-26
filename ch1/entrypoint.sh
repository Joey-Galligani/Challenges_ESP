#!/bin/bash

echo "Listen 13337" > /etc/apache2/ports.conf
echo "ServerName localhost" >> /etc/apache2/apache2.conf

echo "ServerTokens Prod" >> /etc/apache2/conf-available/security.conf
echo "ServerSignature Off" >> /etc/apache2/conf-available/security.conf

echo "Options -Indexes" >> /etc/apache2/conf-available/security.conf
echo "Header set X-Content-Type-Options nosniff" >> /etc/apache2/conf-available/security.conf
echo "Header set X-Frame-Options DENY" >> /etc/apache2/conf-available/security.conf
echo "Header set X-XSS-Protection \"1; mode=block\"" >> /etc/apache2/conf-available/security.conf

a2enmod headers

exec apache2ctl -D FOREGROUND
