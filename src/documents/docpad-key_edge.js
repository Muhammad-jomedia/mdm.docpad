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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'docpad-key-1',
            type:'image',
            rect:['304px','116px','151px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"docpad-key.svg",'0px','0px'],
            transform:[[],['-270'],[],['1','-1.03391']]
         },
         {
            id:'docpad-key-bottom',
            type:'image',
            rect:['-106px','110px','151px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"docpad-key-bottom.svg",'0px','0px'],
            transform:[[],['90'],[],['1.03508','-1']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '271px'],
            ["style", "width", '318px']
         ],
         "${_docpad-key-1}": [
            ["style", "top", '221px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '-270deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '107px'],
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_docpad-key-bottom}": [
            ["style", "top", '110px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-1px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid127", tween: [ "transform", "${_docpad-key-1}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 750 },
            { id: "eid33", tween: [ "style", "${_docpad-key-bottom}", "left", '65px', { fromValue: '-1px'}], position: 0, duration: 750 },
            { id: "eid74", tween: [ "style", "${_docpad-key-bottom}", "left", '124px', { fromValue: '65px'}], position: 750, duration: 750 },
            { id: "eid81", tween: [ "style", "${_docpad-key-bottom}", "left", '62px', { fromValue: '124px'}], position: 1500, duration: 750 },
            { id: "eid87", tween: [ "style", "${_docpad-key-bottom}", "top", '126px', { fromValue: '110px'}], position: 1500, duration: 750 },
            { id: "eid68", tween: [ "style", "${_docpad-key-bottom}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid400", tween: [ "style", "${_docpad-key-bottom}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid401", tween: [ "style", "${_docpad-key-bottom}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid402", tween: [ "style", "${_docpad-key-bottom}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid403", tween: [ "style", "${_docpad-key-bottom}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_docpad-key-bottom}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1500, duration: 750 },
            { id: "eid116", tween: [ "style", "${_docpad-key-1}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid404", tween: [ "style", "${_docpad-key-1}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid405", tween: [ "style", "${_docpad-key-1}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid406", tween: [ "style", "${_docpad-key-1}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid407", tween: [ "style", "${_docpad-key-1}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid114", tween: [ "style", "${_docpad-key-1}", "left", '39px', { fromValue: '107px'}], position: 0, duration: 750 },
            { id: "eid125", tween: [ "style", "${_docpad-key-1}", "left", '98px', { fromValue: '39px'}], position: 750, duration: 750 },
            { id: "eid131", tween: [ "style", "${_docpad-key-1}", "left", '104px', { fromValue: '98px'}], position: 1500, duration: 750 },
            { id: "eid35", tween: [ "transform", "${_docpad-key-bottom}", "scaleY", '1', { fromValue: '-1'}], position: 750, duration: 750 },
            { id: "eid123", tween: [ "transform", "${_docpad-key-1}", "scaleY", '1', { fromValue: '-1'}], position: 750, duration: 750 },
            { id: "eid130", tween: [ "style", "${_docpad-key-1}", "top", '95px', { fromValue: '221px'}], position: 1500, duration: 750 }         ]
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
})(jQuery, AdobeEdge, "docpad-keys-animation");
