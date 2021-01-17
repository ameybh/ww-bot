## Deployment
We will deploy the bot to Heroku here, but you may choose any host that provides support for Node apps.

1. [Install](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) Heroku CLI following instructions for your system. Make sure to do `heroku login` to connect your account.

2. Change directory to your project folder on local. (It is assumed you have already cloned the repository)

3. Create the heroku app.
    ```bash
    heroku create <app-name>
    ```
    Leave `<app-name>` blank to let Heroku choose a random name.

4. Go to [Personal apps | Heroku](https://dashboard.heroku.com/apps/) &#8594; `<app-name>` &#8594; Settings.
    Scroll down to Buildpacks and add the following buildpacks:

    a. Puppeteer for Heroku
    ```
    https://github.com/jontewks/puppeteer-heroku-buildpack
    ```

    b. Google Chrome for Heroku
    ```
    https://github.com/heroku/heroku-buildpack-google-chrome
    ```

    ![Buildpacks](https://i.imgur.com/SWMVgR8.png)

5. Push your local repository to heroku application.
    ```bash
    git push heroku master
    ```

6. The app is now running. Set a `worker` dyno to serve the app.
    ```bash
    heroku ps:scale worker=1
    ```

### Authentication
The app is now successfully deployed. Next up, you need to authenticate Whatsapp Web.
Once the app is running, run
```
heroku logs --tail
```

This will show display the logs of the application in realtime. 

If the deployment and configuration was successful, then you should see a QR code like the following:

![Terminal Window with QR code](https://i.imgur.com/f2Q5ncB.png)

Scan this QR code with Whatsapp Web on your phone. If you get the message `Client is Ready!`, you're all set to go!

#### Session storage
To skip authentication next time, you need to save the current session keys.
Once authentication is done, the session keys will be printed to your terminal.

To setup Heroku to use them next time create a new Heroku config variable `WW_SESSION`. Set it to the session string printed in terminal. Heroku should automatically use it to authenticate your session next time the app is started.

Happy Hacking!
