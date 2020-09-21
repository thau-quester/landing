## Configure Twitter Strategy

In order to use Twitter login strategy with Thau, you'll have to:

1. Setup Twitter application inside GitHub.
2. Add Twitter app `client_id` and `client_secret` to the environment varables for yor Thau API deployment (under `THAU_STRATEGIES_TWITTER_CLIENT_ID` and `THAU_STRATEGIES_TWITTER_CLIENT_SECRET`).

### Setup Twitter application

1. Visit [Twitter Developers Portal](https://developer.twitter.com/en/portal/projects-and-apps).
2. Click on **New Project**.
3. Follow instructions up to the application creation.
4. Save `API Key`, `API secret key` somewhere, it will be used later.
5. Click on **App Settings**.
6. Click on **Edit** near the **Authentication settings** section.
7. Switch on both of the toggles, **Enable 3rd party authentication** and **Request email address from users**.
8. Add URLs you'll be using Twitter Login on into the **Callback URLs** section.
9. Add your website URL. If you do not have any feel free to put `https://google.com`.
10. Make the same for other required fields.
11. Click on **Save**

Now you are ready to go for Twitter strategy with Thau!

### Integrate Twitter into your Thau deployment

1. Copy the value of `API Key` into the `THAU_STRATEGIES_TWITTER_CLIENT_ID` environment variable
2. Copy the value of `API secret key` into the `THAU_STRATEGIES_TWITTER_CLIENT_SECRET` environment variable
3. Run Thau API