# OADW ReactJs Front End Template :tada:

This is an opinionated Reactjs boilerplate to help you get started making front end applications. The boilerplate takes care of your theme and component libraries, project structure, routing, I18N, OpenID login, testing libraries, redux store, and code linting. :fire: 

You are always free to add and remove features or packages that you need!

This project will not provide your app with a graphQL backend / data store, but not to worry, [we have a template for that too!](https://github.com/gctools-outilsgc/micro_service_template) :sunglasses:

## Getting Starting :raised_hands:

### Step 0
You will need to have [Nodejs](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/) installed.

### Step 1 - Install
```
git clone https://github.com/ethanWallace/front_end_template.git
cd front_end_template
yarn install
yarn start
```

### Step 2 - Config :wrench:

You will need to create an `oidcConfig.dev.js` file in the `src` directory to allow your app to login to your OpenID authentication provider. The file should be formated a little something like so:

```
const url = window.location.origin;

module.exports = {
  authority: 'https://your.OpenID.provider/openid',
  client_id: '123456',
  client_secret:
  'shhhhhhhh-its-a-secret-to-everyone-replace-me',
  scope: 'openid YOUR_SCOPES_HERE,
  post_logout_redirect_uri: `${url}/#!logout`,
  redirect_uri: `${url}/#!callback`,
  silent_redirect_uri: `${url}/#!silent`,
};
```

Next if you have a graphQL backend set up that you wish to point your front end app to, in `src/index.js` replace the Apollo Client uri with your endpoint:

```
const client = new ApolloClient({
  uri: 'https://link.to.your.backend/graphql',
});
```
Need a graphQL backend? [Here is handy template to help you build one!](https://github.com/gctools-outilsgc/micro_service_template)

Now you're ready to go! :cake:

## Features / What's Included :thumbsup:

All the packages discussed are already included in the project.

### Project Structure :file_folder:

```
|-/config/
|-/i18n/  # Translations
|-/public/
|-/scripts/
|-/src/
|  |-/assets/
|  |  |-css # A place for additional styling
|  |  |-imgs  # Image / graphic assets
|  |-/components/
|  |  |-/core/  # Ideally components you know that will be used in multiple places
|  |  |-/page_or_feature_specific/ # Create folders for each page
|  |-/conatiners/ # Top level page containers for your app
|  |-/gql/ # Place your graphQL queries and mutations in one place to be leveraged througout the app
```

### Component Library and Styling :art:
We leverage the [Aurora Design](https://design.gccollab.ca/) system which is a theme based on [Bootstrap](https://getbootstrap.com/).
The boilerplate comes already packaged with the [Aurora stylesheet](https://www.npmjs.com/package/@gctools-components/aurora-css) and [reactstrap](https://reactstrap.github.io/components/alerts/) to help you build components quickly.

### Apollo Client and GraphQL

Learn about how to leverage Apollo Client for react to handle [queries](https://www.apollographql.com/docs/react/essentials/queries.html) and [mutations](https://www.apollographql.com/docs/react/essentials/mutations.html).

### I18N :earth_americas:

Localization is set up and configured with this [I18N translation webpack plugin](https://github.com/gctools-outilsgc/gctools-components/tree/master/packages/i18n-translation-webpack-plugin) and it's [React Helper package](https://github.com/gctools-outilsgc/gctools-components/tree/master/packages/react-i18n-translation-webpack).

#### How to use it
```
import React from 'react';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

class MyComponent extends React.Component {
  render() {
    <p>{__('this is translated text')}</p>
  }
}

export default LocalizedComponent(MyComponent);
```

### Testing :pencil2:

Run `yarn test` to run the testing library.

This project leverages [Jest](https://jestjs.io/docs/en/tutorial-react.html) and [React Testing Library](https://github.com/kentcdodds/react-testing-library).

### Routing :blue_car:

Routing in the application in handled by [React-Router-Dom](https://github.com/ReactTraining/react-router#readme).

Routes are defined in `src/containers/App.js` and should ideally route to another container component.

### Linting :sparkles:

Please keep your code pretty, or else the app will not compile. [ESLint](https://eslint.org/) is configured through [this config package](https://github.com/gctools-outilsgc/gctools-components/tree/master/packages/eslint-config). It is an extension of the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript) with some small changes.

### Github Pages Deployment :octocat:

The tempalte already come prepared to deploy your front-end to github pages. To do so first change the `homepage` in the `package.json` to the repo you want.

```
"homepage": "http://username.github.io/repo",
```

Then run `yarn deploy-gh-pages` (give it a moment to build :wink:)

:warning: Watch and make sure your `config` or `env` files do not get pushed with the build!

### Additional Links :wink:
To learn React, check out the [React documentation](https://reactjs.org/).

Learn about [Storybook](https://storybook.js.org/) for building custom components in your project. Storybook is included in this template. Run `yarn run storybook`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
