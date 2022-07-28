const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMdTable = require('markdown-it-multimd-table');
const markdownItFrontMatter = require('markdown-it-front-matter');
const path = require("path");
const fs = require('fs');
const beautify = require("js-beautify");

module.exports = function(eleventyConfig) {
  eleventyConfig.dir = {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "public",
    copy: "content"
  };

  eleventyConfig.markdownTemplateEngine= "njk";
  eleventyConfig.htmlTemplateEngine= "njk";
  eleventyConfig.dataTemplateEngine= false;

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setTemplateFormats([ "md", "njk", "html" ]);

  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItAttrs)
  .use(markdownItMdTable, { 
    multiline:  true,
    rowspan:    true,
    headerless: true
  });

  eleventyConfig.addPassthroughCopy("./src/images");
  
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addShortcode("spacer", function(spacerHeight = 10, hideOnMobile = false){
    let hideSpacerOnMobile = (hideOnMobile)? 'm-table' : 'spacer';
    if(spacerHeight != 0){
      return '<table class="'+ hideSpacerOnMobile +'" width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:0px; line-height:0px; text-align:center; width:100%; min-width:100%; mso-cellspacing:0px; mso-padding-alt:0px 0px 0px 0px"><tr><td height="'+ spacerHeight +'" style="font-size:0px; line-height:0px; text-align:center; width:100%; min-width:100%; mso-cellspacing:0px; mso-padding-alt:0px 0px 0px 0px">&nbsp;</td></tr></table>';
    } else {
      return '';
    }
  });

  eleventyConfig.addShortcode("markdown", function() {
    const file = arguments[0];
    const markDown = markdownLibrary.use(markdownItFrontMatter, function(){});
    let validFile = (file != undefined)? ((path.extname(file) != '.md')? false : true ) : false;
    if(validFile) {
      let relativeFilePath = './'+ eleventyConfig.dir.input +'/'+ eleventyConfig.dir.data +'/'+ eleventyConfig.dir.copy +'/'+ file;
      console.log(relativeFilePath);
      let data = fs.readFileSync(relativeFilePath, function (err, content) {
        if(err){
          console.error("**** Content parsing error: " + err );
          return;
        }
        return content;
      });
      return markDown.render(data.toString());
    }
  });

  eleventyConfig.addFilter("roman", function(index){
    const romanNumerals = ["", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]
    let numbers = String(index).split("");
    let roman = '';
    for(let n in numbers){
      roman += romanNumerals[numbers[n]] + '';
    }
    return roman;

  });

  eleventyConfig.addFilter("letter", function(index){
      return String.fromCharCode(96 + index);
  });
  
  eleventyConfig.addFilter('typeOf', function(v){
    let type = typeof v;
    if(type == "object"){ if(Array.isArray(v)){ return "array"; } else { return type; } } else { return type; }
  });

  eleventyConfig.addTransform("beautify", function(content, outputPath) {
    if(outputPath.endsWith(".html")){
      content = beautify.html(content, {
        "indent-size": 2,
        "max-preserve-newlines": 0
      });
    };
    return content;
  });

  return eleventyConfig;
};