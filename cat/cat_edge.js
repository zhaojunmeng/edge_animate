/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'eye',
            type:'image',
            rect:['25px','16px','99px','84px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cat_eye.png",'0px','0px','99.18px','84.47px']
         },
         {
            id:'body',
            type:'image',
            rect:['0px','0px','128px','176px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cat_body.png",'0px','0px','128px','176px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_eye}": [
            ["style", "left", '25px'],
            ["style", "top", '16px']
         ],
         "${_body}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '176px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '176px'],
            ["style", "max-width", '128px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-264815076");
