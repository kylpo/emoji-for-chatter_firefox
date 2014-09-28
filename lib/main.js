// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: "*.salesforce.com",
    contentScriptFile: [
      self.data.url("libs/jquery.js"),
      self.data.url("libs/jquery.caret.js"),
      self.data.url("libs/jquery.atwho/js/jquery.atwho.min.js"),
      self.data.url("libs/emojify.js/emojify.js"),
      self.data.url("content.js")
    ],
    contentScriptOptions: {
        imageFolder: self.data.url("libs/emojify.js/images/emoji")
    },
    contentStyleFile: [
        self.data.url("libs/jquery.atwho/css/jquery.atwho.min.css"),
        self.data.url("style.css")
    ]
});
