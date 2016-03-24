# SPA Test

Simple hybrid SPA / multi page app architecture.

Based on [Webpack's hybrid-routing example](https://github.com/webpack/webpack/tree/master/examples/hybrid-routing)


# Running webpack to build stuff statically

    npm run build


# Running a browser-sync development server


    npm run dev-server


# What it does

  * Each page has isolated JS/SCSS/Template files
    * Each page specifies their own dependency tree via
    require() calls in page.js

  * Common files are automatically refactored into common.js as they are used
  by multiple pages

  * Full hybrid web app architecture:

    * Behaves like an SPA
      * As you transition from one page to another, it only has to fetch things that
      haven't already been loaded.
      * Once you've loaded two pages in a single session, you can go back and forth
      without going back to the network.
    * Smarter and smaller than an SPA
      * Doesn't have to load the entire app to show a single page
      * Uses HTML5 history API to make it appear like multi page app
    * Behaves like a multi page app
      * You can load index.html, contact.html or about.html and things work fine
