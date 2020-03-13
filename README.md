## Merge Options Default

`merge-options-default` is a very simple library, so simple that it only provides one function, and the function works the parameters, with the default parameter, we call it options, since they are received through an object !

<a href="https://github.com/yoicalsin/merge-options-default"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/merge-options-default" target="_blank">
<img src="https://img.shields.io/npm/v/merge-options-default" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/merge-options-default" target="_blank">
<img src="https://img.shields.io/npm/l/merge-options-default" alt="Package License" /></a>
<a href="https://www.npmjs.com/merge-options-default" target="_blank">
<img src="https://img.shields.io/npm/dm/merge-options-default" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/merge-options-default" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/merge-options-default"><img src="https://img.shields.io/badge/Github%20Page-sass.colors-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

## 📦 Installation

In order to start using the merge function, we'll first need to install it as follows.

```bash
# To install
npm install --save merge-options-default
```

## Usage

As I mentioned, `merge-options-default` has only one function, so it is easier to use than you think !

```ts
const merge = require('merge-options-default');

// Here's the example

// First we will create the object with the default options
const defaultOptions = {
   isGlobal: false,
   url: 'http://localhost',
   port: 8080,
};

function funcionPrueba(options) {
   options = merge(defaultOptions, options);
   return options;
}

// We execute the function without any parameter
funcionPrueba({
   isGlobal: true,
});
// Return to:
/*
   {
      isGlobal: true,
      url: 'http://localhost',
      port: 8080,
   }
   */
```

Let's understand how the function works, _the function `Merge` receives unlimited objects of type object as parameters_

-  The variable `defaultOptions` is the default object, that is if it doesn't exist, another one with the name `authorName`, it will be added what you added in the object `defaultOptions`.
-  The variable `options` is the object that will replace the `defaultOptions`.

```ts
// Default options
const defaultOptions = {
   authorName: 'Samuel Calsin',
};

// These are the options that replace the default options.
const options = {
   authorName: 'Yoni Calsin',
};
merge(defaultOptions, options);
```

### Example 2

One last feature, I mentioned earlier that the `merge` function receives unlimited objects as parameters, that's true !

And of course I'll show you:

```ts
// 1: Default options
const defaultOptions = {
   authorName: 'Samuel Calsin',
};

// 2: Main Options
const options = {
   authorName: 'Yoni Calsin',
};

// 3: Extra options
// Example for author socials
const options3 = {
   twitter: 'https://twitter.com/yoicalsin',
   github: 'https://github.com/yoicalsin',
   instagram: 'https://www.instagram.com/yoicalsin',
};

// 4: Extra options
const options4 = {
   country: 'Peru',
};

// You can add unlimited options
// ....

const returnOptions = merge(defaultOptions, options, options3, options4);
console.log(returnOptions);
// And surely you can imagine that this will come back !
/*
{
  authorName: 'Yoni Calsin',
  twitter: 'https://twitter.com/yoicalsin',
  github: 'https://github.com/yoicalsin',
  instagram: 'https://www.instagram.com/yoicalsin',
  country: 'Peru'
}
*/
```

## ⭐ Support for

`merge-options-default` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyoicalsin@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/yoicalsin"><img src="https://avatars0.githubusercontent.com/u/58490737?v=4" width="70px;" alt=""/><br /><sub><b>Yoni Calsin</b></sub></a><br /><a href="https://github.com/merge-options-default/merge-options-default/commits?author=yoicalsin" title="Code">💻</a> <a href="https://github.com/merge-options-default/merge-options-default/issues?q=author%3Ayoicalsin" title="Bug reports">🐛</a> <a href="https://github.com/merge-options-default/merge-options-default/commits?author=yoicalsin" title="Documentation">📖</a> <a href="#blog-yoicalsin" title="Blogposts">📝</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 📜 License

`merge-options-default` is [MIT licensed](LICENSE).
