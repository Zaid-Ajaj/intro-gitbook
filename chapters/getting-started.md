# Getting started

Getting started with this gitbook template is easy. First of all you need to install the developement dependencies from from npm using:

```
npm install
```

After that you will have three commands you will use:
- Building the gitbook
- Serve gitbook and watch/reload on every change
- Publish your gitbook output to github pages (gh-pages branch)

You run these commands as npm scripts:
```
npm run build
npm run serve
npm run publish
```

Notice that `npm run publish` requires you set up the repo information in your package.json file, for example, the `repo.url` option is retrieved from package.json. 