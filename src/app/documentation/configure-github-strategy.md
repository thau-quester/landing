## Configure GitHub Strategy

In order to use GitHub login strategy with Thau, you'll have to:

1. Setup GitHub application inside GitHub.
2. Add GitHub app `client_id` and `client_secret` to the environment varables for yor Thau API deployment (under `THAU_STRATEGIES_GITHUB_CLIENT_ID` and `THAU_STRATEGIES_GITHUB_CLIENT_SECRET`).

### Setup GitHub application

1. Visit [Register a new OAuth application](https://github.com/settings/applications/new) page
2. Fill out all the required fields
3. For the **Authorization callback URL** please put the URL of the page where you'll need to be redirected after successfull login (for the Single Page Applications that could be the same page you have the login button on)
4. **IMPORTANT** Add to your **Authorization callback URL** the following parameter: `?strategy=github`. This is required for Thau frontend lib to be able to login you sucessfully.
5. Click on **Register application**
6. You'll be redirected to a page with your app information, including `clientId` and `clientSecret`. You'll need these values later

Now you are ready to go for GitHub strategy with Thau!

### Integrate GitHub into your Thau deployment

3. Copy the value of `Client ID` into the `THAU_STRATEGIES_GITHUB_CLIENT_ID` environment variable
4. Copy the value of `Client Secret` into the `THAU_STRATEGIES_GITHUB_CLIENT_SECRET` environment variable
5. Run Thau API