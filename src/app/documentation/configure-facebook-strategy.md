## Configure Facebook Strategy

In order to use Facebook login strategy with Thau, you'll have to:

1. Setup Facebook application inside Facebook Developers Portal.
2. Request needed permimissions for your Facebook App that are required for Thau 
3. Add Facebook app `client_id` and `client_secret` to the environment varables for yor Thau API deployment (under `THAU_STRATEGIES_FACEBOOK_CLIENT_ID` and `THAU_STRATEGIES_FACEBOOK_CLIENT_SECRET`).

### Setup Facebook application

1. Visit [Facebook Developers Portal](https://developers.facebook.com/apps/)
2. Click on "Create app" button
3. Select an apppropriate category ("For everything else" in most cases)
4. Fill up required fields and click on "Create App ID"
5. Click on "Set Up" button inside the "Facebook login" card
6. Select "Web" platform
7. Follow the setup flow (No need to do anything else, like copy any code or sommething)
8. On the left side menu, click on "Settings" under the "Facebook Login section"
9. Insert your website URL under "Valid OAuth Redirect URIs" (you can enter multiple URLs inccluding your local developent URLs like `http://localhost:3000`)
10. Click on "Save changes" on the bottom of the screen.

### Request needed permimissions for your Facebook App

There are multiple ways of doing so, and here is the one we, at Thau, prefer the most:

1. Visit [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. In the right menu select the application you want to use with Thau
3. In the same right side menu, in the Text input with "Add a Permissions" label type `email` and `user_birthday`
4. Click on "Generate Access Token"
5. Type `me?fields=id,name` in the Text input on top of the page
6. Click on "Submit"

Now your have requested `email` and `user_birthday` fields for your application

Now you are ready to go for Facebook strategy with Thau! Note - when going to production, you'll have to switch your Facebook App into Live mode (on top of the screen, the toggle whicch is set to "Development" initially)

### Integrate Facebook into your Thau deployment

1. Go to your Facebook App page
2. Click on "Settings" button on the left side menu, just under the "Dashboard" button
3. Copy the value of `App ID` into the `THAU_STRATEGIES_FACEBOOK_CLIENT_ID` environment variable
4. Copy the value of `App Secret` into the `THAU_STRATEGIES_FACEBOOK_CLIENT_SECRET` environment variable
5. Run Thau API