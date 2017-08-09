# sigil-lang
A visual language for illustrating property graphs

**To run the project**
```
npm start
```

**To push the project up to `http://sigil-lang.github.io/sigil-lang`**
```
npm run build & npm run deploy
```

## Adding a section of content

Content is written with Markdown, divided into the most top-level sections.
1. Create a file, name it `{name}.md.js`.
2. Save it in the `/src/sections/`directory.
3. Within the file, make sure to have as wrapper:
```
export default `
  // write content in here
`;
```
4. In `App.js`, add file name to `sectionIds` array, in the order you want it to appear.

And that's it!  It should now appear in the homepage, with a corresponding navigation link.

## Adding an interactive into the content

For ease, the interactives are loaded into the page with an iframe, instead of trying to create them as React components.  This way we don't have to get too deeploy invested with the React code.

1. Create a folder under `/public/visuals/`, and place the files for the interactive inside it.
2. Within the Markdown file the interactive belongs in, add an iframe:
```
<iframe width='100%' height='600px' src=${process.env.PUBLIC_URL + '/visuals/graph-explorer'}></iframe>
```
In this case, the interactive will load from the **graph-explorer** folder.  Make sure to include `process.env.PUBLIC_URL` in the `src` so Webpack knows to point to the `/public` directory.  Also make sure to set the `width` and `height` of the iframe.

