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
            id:'BG_Rectangle',
            type:'rect',
            rect:['0px','0px','550px','414px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[3,"rgba(0,94,172,1.00)","solid"],
            transform:[]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['32px','24px','139px','37px','auto','auto'],
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
               font:['Arial, Helvetica, sans-serif',11,"rgba(235,237,255,1.00)","100","none","italic"]
            }]
         },
         {
            id:'RoundRect2Copy',
            type:'rect',
            rect:['173px','24px','139px','37px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:1,
            fill:["rgba(174,178,212,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text2Copy',
               type:'text',
               rect:['14px','3px','auto','auto','auto','auto'],
               text:"Web App",
               align:"left",
               font:['Arial, Helvetica, sans-serif',11,"rgba(235,237,255,1)","100","none","normal"]
            }]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['22px','40px','510px','37px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgba(50,119,176,1.00)","solid"],
            transform:[]
         },
         {
            id:'RoundRect3',
            type:'rect',
            rect:['22px','97px','512px','297px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:0.77,
            fill:["rgba(192,191,219,1.00)",[270,[['rgba(192,191,219,1.00)',0],['rgba(192,191,219,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect3Copy',
            type:'rect',
            rect:['289px','118px','233px','252px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:1,
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect3Copy4',
            type:'rect',
            rect:['33px','152px','245px','120px','auto','auto'],
            borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
            opacity:1,
            fill:["rgba(0,94,172,1.00)",[270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'RoundRect4',
               type:'rect',
               rect:['27px','38px','188px','45px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(255,255,255,1.00)"],
               stroke:[1,"rgb(0, 94, 172)","solid"],
               c:[
               {
                  id:'Text',
                  type:'text',
                  rect:['20px','12px','auto','auto','auto','auto'],
                  text:"Começar Agora",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',19,"rgba(0,94,172,1.00)","900","none",""]
               }]
            }]
         },
         {
            id:'EllipseCopy2',
            type:'ellipse',
            rect:['153px','30px','6px','6px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:0.88,
            fill:["rgba(207,231,255,1.00)"],
            stroke:[1,"rgba(220,239,255,1.00)","none"],
            transform:[]
         },
         {
            id:'EllipseCopy3',
            type:'ellipse',
            rect:['294px','30px','6px','6px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:1,
            fill:["rgba(207,231,255,1.00)"],
            stroke:[1,"rgba(220,239,255,1.00)","none"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect3}": [
            ["style", "top", '97px'],
            ["gradient", "background-image", [270,[['rgba(192,191,219,1.00)',0],['rgba(192,191,219,1.00)',100]]]],
            ["color", "background-color", 'rgba(192,191,219,1.00)'],
            ["style", "height", '297px'],
            ["style", "opacity", '0.77'],
            ["style", "left", '22px'],
            ["style", "width", '512px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '24px'],
            ["style", "left", '173px'],
            ["color", "background-color", 'rgba(174,178,212,1.00)']
         ],
         "${_RoundRect2}": [
            ["style", "top", '24px'],
            ["gradient", "background-image", [270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]]],
            ["style", "left", '32px'],
            ["color", "background-color", 'rgba(174,178,212,1.00)']
         ],
         "${_Text2Copy}": [
            ["style", "top", '3px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(235,237,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '14px'],
            ["style", "font-size", '11px']
         ],
         "${_BG_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '414px'],
            ["color", "border-color", 'rgba(0,94,172,1.00)'],
            ["style", "border-width", '3px'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '3px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(235,237,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '13px'],
            ["style", "font-size", '11px']
         ],
         "${_EllipseCopy3}": [
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "opacity", '1'],
            ["color", "border-color", 'rgb(220, 239, 255)'],
            ["style", "top", '30px'],
            ["style", "height", '6px'],
            ["style", "border-style", 'none'],
            ["style", "left", '294px'],
            ["style", "width", '6px']
         ],
         "${_RoundRect4}": [
            ["style", "top", '38px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "opacity", '1'],
            ["style", "border-width", '1px'],
            ["style", "left", '27px']
         ],
         "${_RoundRect3Copy}": [
            ["style", "top", '118px'],
            ["style", "height", '252px'],
            ["style", "opacity", '1'],
            ["style", "left", '289px'],
            ["style", "width", '233px']
         ],
         "${_Text}": [
            ["style", "top", '12px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(0,94,172,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '20px'],
            ["style", "font-size", '19px']
         ],
         "${_RoundRect}": [
            ["style", "top", '40px'],
            ["style", "border-style", 'solid'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgba(50,119,176,1.00)'],
            ["style", "left", '22px'],
            ["style", "width", '510px']
         ],
         "${_RoundRect3Copy4}": [
            ["style", "top", '152px'],
            ["gradient", "background-image", [270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "height", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '33px'],
            ["style", "width", '245px']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "left", '153px'],
            ["style", "width", '6px'],
            ["style", "top", '30px'],
            ["style", "height", '6px'],
            ["color", "border-color", 'rgba(220,239,255,1.00)'],
            ["style", "opacity", '0.88']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '422px'],
            ["style", "width", '556px']
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
})(jQuery, AdobeEdge, "EDGE-26053714");
