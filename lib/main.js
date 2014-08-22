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
      self.data.url("bower_components/jquery/dist/jquery.min.js"),
      self.data.url("bower_components/Caret.js/dist/jquery.caret.min.js"),
      self.data.url("bower_components/jquery.atwho/dist/js/jquery.atwho.min.js"),
      self.data.url("bower_components/emojify.js/emojify.js"),
      self.data.url("content.js")
    ],
    contentScriptOptions: {
        imageFolder: self.data.url("bower_components/emojify.js/images/emoji")
//        fontFolder: self.data.url("chrome/font")
    },
    contentStyleFile: [
        self.data.url("bower_components/jquery.atwho/dist/css/jquery.atwho.min.css"),
        self.data.url("style.css")
    ]
});
