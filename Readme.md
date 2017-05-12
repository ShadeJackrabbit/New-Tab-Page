# New Tab Start Page
A start page for your browser to be used as a New Tab replacement. Built not as an extension, but as a web page, it can be used with most modern standard-compliant web browsers.

![Screenshot](http://i.imgur.com/o55MuXp.jpg)

**How to use?**

Depends on your browser. Some browsers, you just set your homepage. Others, you'll need an extension, like [Custom New Tab](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab/) for Firefox.

Background images are loaded from the backgrounds folder, which contains an index file of all the images. When new images are added, this file will have to be updated (a simple powershell script is included).  If you want icons for links, they can go into an "icons" subfolder. (See below.) Any missing icons will be loaded using Google's favicon engine.

## Version Info

**v1.4 - JS upgrade**

- Returned to using HTML and JS instead of PHP, to reduce dependency on server usage.
- JS for loading favicons has been switched to asynchronous

**v1.3 - Resizing Revolution**

- Dynamically resizes images to screen size, always maximizing the screen usage.

**v1.2 - Magical Image Reading**

- Dynamically retrieves favicons for URLs that don't have one cached. You can run the entire thing without any saved favicons at all, technically.
- Switched to using PHP for image loading

**v0.9 - Github Wubwub**

- You can load images from a "backgrounds" folder, though the number of files must be manually entered into background.js
- Links will show up with associated images from the "icons" folder. Icons must be a PNG with the same name as the link.
- Quotes are formatted with markdown, where positive reinforcement is bold, and negative reinforcement is italics.

## Tech
Uses jQuery, which is linked via Google's hosted libraries. Also uses:

- [Jquery Adaptive Backgrounds](http://briangonzalez.github.io/jquery.adaptive-backgrounds.js/) by [Brian Gonzalez](http://briangonzalez.org/)
- [Colour.js](http://code.stephenmorley.org/javascript/colour-handling-and-processing/) by [Stephen Morley](http://stephenmorley.org/)
- [markdown-js](https://github.com/cadorn/markdown-js) by [Christoph Dorn](www.christophdorn.com/)
- banksean's [Mersenne Twister](https://gist.github.com/banksean/300494) js implementation

## Special Thanks
- Wikimedia for [Wikiquote](en.wikiquote.org/), from which most of my quotes were taken.
- My artist friends for helping me with colour theory
- [/r/startpages](https://www.reddit.com/r/startpages) for inspiring me.
