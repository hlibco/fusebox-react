# About
---

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

---

This is a lean React project that demonstrates how to create a 2 pages SPA and bundle it using `Fuse-box` instead of the well-known `Webpack`.

Here is what you get by checking this project out:

0. HMR (Hot Module Replacement) & Dev Server
1. Routes (react-router)
2. Stylus (with)
3. SVG
4. Custom fonts (self-hosted fonts)
5. Containers and Components (pure stateless component)
6. JSX
7. Bundling (using Fuse-box)

This project DOES NOT HAVE server-side rendering. This SPA (Single Page Application) is a great fit for projects like Admins.


### What should you know about Fuse-box?

1. To use relative paths inside stylesheets (custom fonts / images) is not trivial.
2. It's tricky to use `@import` and `@require` in Stylus.
3. You need to activate the Cache in order to HMR make effect whenever you change the JSX.

Read the `fuse.js` file to fully understand what I mean.

---

# Requirements

```
npm install fuse-box -g
```

---

# Setup

Install dependencies:

```
yarn install
```

For a fresh install, use this:

```
rm -rf node_modules && yarn cache clean && yarn install
```

# Are you ready?

Start the *dev server* created by Fuse-box by typing:

```
npm start
```

If you want to expose your local project to the world, I'd recommend using [Ngrok](https://ngrok.com/) and then `npm run expose` to expose the default port `9005`.

---

### Notes

This project uses `Express` as a dependency to create the Dev Server used by Fuse-box. Feel free to make changes to better suit your use-case and own preferences.
