# preact-starter

> Webpack3 boilerplate for building SPA / PWA / offline front-end apps with :atom_symbol: [Preact](https://github.com/developit/preact)

Using `preact-starter` will kickstart your next application! :100: It is designed to fit the "90% use-case" for those who want to build offline-first web apps (see [features](#features) below).

> :triangular_flag_on_post: **Important:** This is meant for _client-side_ apps only; there is **no support** included for universal / server-side rendering. I plan to release my own SSR kit shortly!

**Please note:** Boilerplate _does not_ incorporate the latest ["css-in-js" or "css modules" technique](https://github.com/MicheleBertoli/css-in-js). Instead, the more traditional approach is taken, wherein `styles` and `scripts` are kept separate. That said, you may **certainly and easily** take that route if desired. :white_check_mark:

---

<p align="center">:warning: Boilerplate & commands will evolve as my own development process does. :warning:</p>

---

## Install

```sh
git clone https://github.com/lukeed/preact-starter
cd preact-starter
npm install
npm run build
npm start
```

> :exclamation: **Pro Tip:** Use [Yarn](https://yarnpkg.com/) to install dependencies 3x faster than NPM!

## Features

* Offline Caching (via `serviceWorker`)
* SASS & Autoprefixer
* Asset Versioning (aka "cache-busting")
* ES2015 (ES6) and ES2016 (ES7) support
* Hot Module Replacement (HMR) for all files
* Preact's [Developer Tools](#preact-developer-tools)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) certified

  ![lightouse](src/static/img/lighthouse.jpg)

## Development

### Commands

Any of the following commands can (and should :wink:) be run from the command line.

> If using [Yarn](https://yarnpkg.com/), all instances of `npm` can be replaced with `yarn`. :ok_hand:

#### build

```
$ npm run build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```
$ npm start
```

Runs your application (from the `dist` directory) in the browser.

#### watch

```
$ npm run watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.

### Preact Developer Tools

You can inspect and modify the state of your Preact UI components at runtime using the [React Developer Tools](https://github.com/facebook/react-devtools) browser extension.

1. Install the [React Developer Tools](https://github.com/facebook/react-devtools) extension
2. [Import the `preact/devtools`](src/index.js#L23) module in your app
3. Reload and go to the 'React' tab in the browser's development tools

## License

MIT © [Luke Edwards](https://lukeed.com)
