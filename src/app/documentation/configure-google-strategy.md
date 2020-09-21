## Configure Google Strategy

In order to use Google login strategy with Thau, you'll have to:

1. Setup Google application inside Google API Console.
2. Add Google app `client_id` and `client_secret` to the environment varables for yor Thau API deployment (under `THAU_STRATEGIES_GOOGLE_CLIENT_ID` and `THAU_STRATEGIES_GOOGLE_CLIENT_SECRET`).

### Setup Facebook application

1. Visit [Google API Console](https://console.developers.google.com/)
2. From the project drop-down, select an existing project, or create a new one by selecting **Create a new project**.
3. In the sidebar under "APIs & Services", select **Credentials**, then click **Configure consent screen**. Choose an Email Address, specify a Product Name, and press Save.
4. In the **Credentials** tab, select the **Create credentials** drop-down list, and choose **OAuth client ID**.
5. Under **Application type**, select **Web application**.
Register the origins from which your app is allowed to access the Google APIs, as follows. An origin is a unique combination of protocol, hostname, and port.
    * In the Authorized JavaScript origins field, enter the origin for your app. You can enter multiple origins to allow for your app to run on different protocols, domains, or subdomains. You cannot use wildcards. In the example below, the second URL could be a production URL.
        ```
        http://localhost:8080
        https://myproductionurl.example.com
        ```
    * The Authorized redirect URI field does not require a value. Redirect URIs are not used with JavaScript APIs.

    * Press the Create button.
6. From the resulting OAuth client dialog box, copy the Client ID. The Client ID lets your app access enabled Google APIs.

Now you are ready to go for Google strategy with Thau!

### Integrate Google into your Thau deployment

3. Copy the value of `Client ID` into the `THAU_STRATEGIES_GOOGLE_CLIENT_ID` environment variable
4. Copy the value of `Client Secret` into the `THAU_STRATEGIES_GOOGLE_CLIENT_SECRET` environment variable
5. Run Thau API