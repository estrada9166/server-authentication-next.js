# Server authentication on Next.js using JWT

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> it works with node version 7.8.0 or above

## Main Idea
The main idea behind this example is to handle the sessions on the server, letting you
validate if the user is logged before the view is rendered, as you know and if you don't know now you know 😂 to access to local storage on server render you must do `componenDidMount` so this example prevent the render before the validation.
[More info here](https://github.com/facebook/react/issues/9647)

## How it works

```
Clone the repo

npm install
npm run dev

```

## Sign
You can create you're own account until you Log Out (The user will not be save);
you can access using the next credentials

````
email: demo@demo.com
password: demo
````

