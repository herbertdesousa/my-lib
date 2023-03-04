# Deploy Digital Ocean

## Setup Droplet
### SSH Access
  - Create SSH in your machine
  ```
  $ ssh-keygen
  ```
  - Copy 'id_rsa.pub' file content

<br />

### Digital Ocean Dashboard
  - Create Droplet
  - Add and Paste 'id_rsa.pub' in SSH section

<br />

---------------------

<br />

## Update/Upgrade Droplet
  ```
  $ apt update & apt upgrade
  ```

<br />

---------------------

<br />

## Create User 'Deploy'
### Create Deploy
  ```
  $ adduser deploy
  ```

<br />

### Add Permissions
  ```
  $ usermod -aG sudo deploy
  & cd /home/deploy/
  & mkdir .ssh
  & cp ~/.ssh/authorized_keys /home/deploy/.ssh/authorized_keys
  & chmod 600 authorized_keys
  & cd ..
  & chmod 700 .ssh/
  & cd ..
  & chown -R deploy:deploy .ssh/
  ```

<br />

---------------------

<br />

## Install NVM for Node
  ```
  $ sudo apt install curl 
  & curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
  & source ~/.profile 
  ```
  
### Install Node
  ```
  $ nvm install --lts
  & nvm use --lts
  ```

<br />

---------------------

<br />

## Docker
  ```
  $ apt install docker.io
  ```

### Give permission to 'deploy' access docker
  ```
  & usermod -aG docker deploy
  ```

<br />

### Images
<details>
  <summary>SQL Server Image</summary>
  
  ```
  $ docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest --restart always
  ```

  **Use Other Versions**
  [Microsoft MsSQL Server Site](https://hub.docker.com/_/microsoft-mssql-server)

  **Note password restrictions**:
  - At least 8 characters
  - Including uppercase and lowercase letters
  - Base-10 digits and/or non-alphanumeric symbols.
</details>

<details>
  <summary>Postgres Image</summary>
  
  ```
  $ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
  ```
</details>

<br />

### Create user for database user management
  Change it by dbeaver in 'security' path

<br />

---------------------

<br />

## Application
  - push the application inside droplet (by git or ftp)
  - pm2
    ```
    $ pm2 startup ubuntu -u deploy
    ```
  - get the command and paste it

<br />

---------------------

<br />

## Nginx
```
$ apt install nginx
```
- disabled default nginx home page (remove link from sites-available)
```
$ rm /etc/nginx/sites-enabled/default
$ sudo service nginx restart
```
- create new site available
```
$ cp /etc/nginx/sites-available/default /etc/nginx/sites-available/[site-name]
$ vim /etc/nginx/sites-available/[site-name]
```
- clear all file press 'd' then shift+g, and paste this:
```
server {
  server_name [site-name];

  location / {
    proxy_pass http://127.0.0.1:[port];
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```
- save and exit (esc, type ':wq', hit enter)
-  link in sites-enabled
```
$ ln -s /etc/nginx/sites-available/backend-crm-web /etc/nginx/sites-enabled/
```
- check if has some error
```
$ nginx -t
```
- restart
```
$ sudo service nginx restart
```

<br />

### HTTPS

[certbot](https://certbot.eff.org)

