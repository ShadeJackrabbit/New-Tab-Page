#New Tab Start Page#
A start page for your browser to be used as a New Tab replacement. Built not as an extension, but as a web page, it can be used with most modern standard-compliant web browsers.

![Screenshot](http://i.imgur.com/o55MuXp.jpg)

**How to use?**

Depends on your browser. Some browsers, you just set your homepage. Others, you'll need an extension, like [Custom New Tab](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab/) for Firefox. 

Background images will have to be inserted into a "backgrounds" zip file. The .zip can be any layout, but only .png and .jpg files will be loaded. If you want icons for links, they can go into an "icons" subfolder. (See below.)

##Version Info##

###Current Progress###
    Colour Shifting          [████████  ]
	Background Image Loading [██████████]
	Quote Processing		 [██████████]
	Link Loading			 [██████████]

**v1.0 - Zip Im**

- Images are now loaded from a zip file called "backgrounds"

**v0.9 - Github Wubwub**

- You can load images from a "backgrounds" folder, though the number of files must be manually entered into background.js
- Links will show up with associated images from the "icons" folder. Icons must be a PNG with the same name as the link.
- Quotes are formatted with markdown, where positive reinforcement is bold, and negative reinforcement is italics.

##Tech##
Uses jQuery, which is linked via Google's hosted libraries. Also uses:

- [Jquery Adaptive Backgrounds](http://briangonzalez.github.io/jquery.adaptive-backgrounds.js/) by [Brian Gonzalez](http://briangonzalez.org/) 
- [Colour.js](http://code.stephenmorley.org/javascript/colour-handling-and-processing/) by [Stephen Morley](http://stephenmorley.org/)
- [markdown-js](https://github.com/cadorn/markdown-js) by [Christoph Dorn](www.christophdorn.com/)
- banksean's [Mersenne Twister](https://gist.github.com/banksean/300494) js implementation
- [Jszip](https://stuk.github.io/jszip/)
- jonleighton's [arraybuffer encoder](https://gist.github.com/jonleighton/958841)

##Special Thanks##
- Wikimedia for [Wikiquote](en.wikiquote.org/), from which most of my quotes were taken.
- My artist friends for helping me with colour theory
- [/r/startpages](https://www.reddit.com/r/startpages) for inspiring me.