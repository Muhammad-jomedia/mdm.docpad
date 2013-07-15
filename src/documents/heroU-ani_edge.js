/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';


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
            id:'master',
            type:'rect',
            rect:['558px','0px','556px','422px','auto','auto'],
            overflow:'visible',
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Web_Site_Tab',
               type:'rect',
               rect:['9px','1px','139px','37px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(174,178,212,1.00)",[270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'Text2',
                  type:'text',
                  rect:['13px','3px','auto','auto','auto','auto'],
                  text:"Web Site",
                  align:"left",
                  font:['open-sans, sans-serif',11,"rgba(255,255,255,1)","100","none","normal"]
               },
               {
                  id:'EllipseCopy2',
                  type:'ellipse',
                  rect:['121px','7px','6px','6px','auto','auto'],
                  borderRadius:["50%","50%","50%","50%"],
                  opacity:0.88,
                  fill:["rgba(207,231,255,1)"],
                  stroke:[1,"rgba(220,239,255,1.00)","none"],
                  transform:[]
               }]
            },
            {
               id:'Web_App_Tab',
               type:'rect',
               rect:['150px','1px','139px','37px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(0,94,172,1.00)"],
               stroke:[2,"rgba(0,94,172,1.00)","none"],
               c:[
               {
                  id:'Text2Copy',
                  type:'text',
                  rect:['14px','3px','auto','auto','auto','auto'],
                  text:"Web App",
                  align:"left",
                  font:['open-sans, sans-serif',11,"rgba(255,255,255,1.00)","100","none","normal"]
               },
               {
                  id:'EllipseCopy3',
                  type:'ellipse',
                  rect:['121px','7px','6px','6px','auto','auto'],
                  borderRadius:["50%","50%","50%","50%"],
                  opacity:1,
                  fill:["rgba(207,231,255,1.00)"],
                  stroke:[1,"rgba(220,239,255,1.00)","none"],
                  transform:[]
               }]
            },
            {
               id:'BG_Rectangle',
               type:'rect',
               rect:['0px','20px','550px','394px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[3,"rgba(0,94,172,1.00)","solid"],
               transform:[]
            },
            {
               id:'Address_Bar',
               type:'rect',
               rect:['2px','21px','550px','24px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","0px","0px"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[1,"rgba(50,119,176,1.00)","solid"],
               transform:[]
            },
            {
               id:'RoundRect3',
               type:'rect',
               rect:['22px','71px','512px','323px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:0.77,
               fill:["rgba(192,191,219,1.00)",[270,[['rgba(192,191,219,1.00)',0],['rgba(192,191,219,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RoundRect3Copy',
               type:'rect',
               rect:['auto','92px','486px','278px','34px','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(255,255,255,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RoundRect3Copy2',
               type:'rect',
               rect:['33px','127px','245px','207px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(0,94,172,1.00)",[270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_master}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '557px']
         ],
         "${_RoundRect3}": [
            ["color", "background-color", 'rgba(192,191,219,1.00)'],
            ["style", "top", '71px'],
            ["style", "opacity", '0.77'],
            ["style", "height", '323px'],
            ["gradient", "background-image", [270,[['rgba(192,191,219,1.00)',0],['rgba(192,191,219,1.00)',100]]]],
            ["style", "left", '22px'],
            ["style", "width", '512px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '11px']
         ],
         "${_RoundRect3Copy}": [
            ["style", "top", '92px'],
            ["style", "right", '34px'],
            ["style", "height", '278px'],
            ["style", "opacity", '1'],
            ["style", "left", 'auto'],
            ["style", "width", '486px']
         ],
         "${_BG_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '20px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '394px'],
            ["color", "border-color", 'rgba(0,94,172,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-width", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "left", '13px'],
            ["style", "font-size", '11px']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '7px'],
            ["style", "opacity", '1'],
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "height", '6px'],
            ["color", "border-color", 'rgb(220, 239, 255)'],
            ["style", "left", '121px'],
            ["style", "width", '6px']
         ],
         "${_Web_Site_Tab}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "border-width", '0px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '9px'],
            ["style", "top", '1px']
         ],
         "${_Web_App_Tab}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(0,94,172,1.00)'],
            ["style", "left", '150px'],
            ["style", "top", '1px']
         ],
         "${_Address_Bar}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '550px'],
            ["style", "top", '21px'],
            ["style", "height", '24px'],
            ["color", "border-color", 'rgba(50,119,176,1.00)'],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px']
         ],
         "${_RoundRect3Copy2}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "top", '127px'],
            ["gradient", "background-image", [270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "height", '207px'],
            ["style", "opacity", '0'],
            ["style", "left", '-111px'],
            ["style", "width", '245px']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "opacity", '0.88'],
            ["color", "border-color", 'rgba(220,239,255,1.00)'],
            ["style", "top", '7px'],
            ["style", "height", '6px'],
            ["style", "border-style", 'none'],
            ["style", "left", '121px'],
            ["style", "width", '6px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '556px'],
            ["style", "height", '422px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "style", "${_RoundRect3Copy2}", "left", '33px', { fromValue: '-111px'}], position: 1077, duration: 173, easing: "swing" },
            { id: "eid18", tween: [ "style", "${_RoundRect3Copy}", "width", '486px', { fromValue: '486px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid27", tween: [ "style", "${_RoundRect3Copy}", "width", '233px', { fromValue: '486px'}], position: 1077, duration: 173, easing: "swing" },
            { id: "eid17", tween: [ "color", "${_Web_Site_Tab}", "background-color", 'rgba(174,178,212,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,94,172,1.00)'}], position: 1077, duration: 73, easing: "swing" },
            { id: "eid31", tween: [ "style", "${_RoundRect3Copy2}", "opacity", '1', { fromValue: '0'}], position: 1077, duration: 173, easing: "swing" },
            { id: "eid6", tween: [ "style", "${_master}", "left", '0px', { fromValue: '557px'}], position: 0, duration: 1077, easing: "swing" },
            { id: "eid16", tween: [ "gradient", "${_Web_Site_Tab}", "background-image", [270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1077, duration: 73, easing: "swing" }         ]
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
})(jQuery, AdobeEdge, "EDGE-26053714");
