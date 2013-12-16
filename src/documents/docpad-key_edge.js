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
            id:'keys',
            type:'rect',
            rect:['-1','70','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'keys',
            symbolName:'keys'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '271px'],
            ["style", "width", '318px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         labels: {
            "finale": 2250
         },
         timeline: [
         ]
      }
   }
},
"keys": {
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
      rect: ['305px','46px','151px','59px','auto','auto'],
      id: 'docpad-key-1',
      transform: [[],['-270'],[],['1','-1.03391']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/docpad-key.svg','0px','0px']
   },
   {
      rect: ['-105px','40px','151px','59px','auto','auto'],
      id: 'docpad-key-bottom',
      transform: [[],['90'],[],['1.03508','-1']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/docpad-key-bottom.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_docpad-key-1}": [
            ["style", "top", '151px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '-270deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '108px'],
            ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_docpad-key-bottom}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '-1'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '191px'],
            ["style", "width", '318px']
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
            { id: "eid123", tween: [ "transform", "${_docpad-key-1}", "scaleY", '1', { fromValue: '-1'}], position: 750, duration: 750 },
            { id: "eid33", tween: [ "style", "${_docpad-key-bottom}", "left", '66px', { fromValue: '0px'}], position: 0, duration: 750 },
            { id: "eid74", tween: [ "style", "${_docpad-key-bottom}", "left", '125px', { fromValue: '66px'}], position: 750, duration: 750 },
            { id: "eid81", tween: [ "style", "${_docpad-key-bottom}", "left", '63px', { fromValue: '125px'}], position: 1500, duration: 750 },
            { id: "eid62", tween: [ "transform", "${_docpad-key-bottom}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1500, duration: 750 },
            { id: "eid68", tween: [ "style", "${_docpad-key-bottom}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid552", tween: [ "style", "${_docpad-key-bottom}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid553", tween: [ "style", "${_docpad-key-bottom}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid554", tween: [ "style", "${_docpad-key-bottom}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid555", tween: [ "style", "${_docpad-key-bottom}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 2250, duration: 0 },
            { id: "eid114", tween: [ "style", "${_docpad-key-1}", "left", '40px', { fromValue: '108px'}], position: 0, duration: 750 },
            { id: "eid125", tween: [ "style", "${_docpad-key-1}", "left", '99px', { fromValue: '40px'}], position: 750, duration: 750 },
            { id: "eid131", tween: [ "style", "${_docpad-key-1}", "left", '105px', { fromValue: '99px'}], position: 1500, duration: 750 },
            { id: "eid35", tween: [ "transform", "${_docpad-key-bottom}", "scaleY", '1', { fromValue: '-1'}], position: 750, duration: 750 },
            { id: "eid87", tween: [ "style", "${_docpad-key-bottom}", "top", '56px', { fromValue: '40px'}], position: 1500, duration: 750 },
            { id: "eid130", tween: [ "style", "${_docpad-key-1}", "top", '25px', { fromValue: '151px'}], position: 1500, duration: 750 },
            { id: "eid116", tween: [ "style", "${_docpad-key-1}", "-webkit-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid556", tween: [ "style", "${_docpad-key-1}", "-moz-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid557", tween: [ "style", "${_docpad-key-1}", "-ms-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid558", tween: [ "style", "${_docpad-key-1}", "msTransformOrigin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid559", tween: [ "style", "${_docpad-key-1}", "-o-transform-origin", [100,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,0]}], position: 750, duration: 0 },
            { id: "eid127", tween: [ "transform", "${_docpad-key-1}", "rotateZ", '-360deg', { fromValue: '-270deg'}], position: 1500, duration: 750 }         ]
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
