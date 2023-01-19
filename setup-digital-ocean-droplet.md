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
  
  not implemented
</details>

<br />

### Create user for database user management
  Change it by dbeaver in 'security' path

<br />

### Application
  - push the application inside droplet (by git or ftp)
  - pm2
    ```
    $ pm2 startup ubuntu -u deploy
    ```
  - get the command and paste it
