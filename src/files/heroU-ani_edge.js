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
            id:'master',
            type:'rect',
            rect:['558px','0px','556px','422px','auto','auto'],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Web_Site_Tab',
               type:'rect',
               rect:['14px','1px','139px','37px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(174,178,212,1.00)",[270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'website_close',
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
               id:'webAppTab',
               type:'rect',
               rect:['157px','1px','auto','auto','auto','auto']
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
               id:'webSite-white-rect',
               type:'rect',
               rect:['22px','57px','512px','323px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:0.77,
               fill:["rgba(255,255,255,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Group2',
               type:'group',
               rect:['18','71px','517','297','auto','auto'],
               c:[
               {
                  id:'content',
                  type:'rect',
                  rect:['0px','0px','517px','297px','auto','auto'],
                  borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                  opacity:0.77,
                  fill:["rgba(192,191,219,1.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'white-rect',
                  type:'rect',
                  rect:['auto','15px','486px','272px','172px','auto'],
                  borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                  opacity:1,
                  fill:["rgba(255,255,255,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'video-player',
                  type:'rect',
                  rect:['15px','46px','320px','270px','auto','auto'],
                  borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                  opacity:1,
                  fill:["rgba(0,94,172,1.00)",[270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  c:[
                  {
                     id:'iconmonstr-arrow-37-icon2',
                     type:'image',
                     rect:['138px','100px','59px','75px','auto','auto'],
                     opacity:0.88,
                     fill:["rgba(0,0,0,0)",'icons/iconmonstr-arrow-37-icon.svg','0px','0px']
                  }]
               }]
            },
            {
               id:'webAppBar',
               type:'rect',
               rect:['24px','29px','509px','23px','auto','auto'],
               borderRadius:["0px","0px","13px 13px","13px 13px"],
               fill:["rgba(188,188,255,0.05)"],
               stroke:[1,"rgba(50,119,176,1.00)","none"],
               transform:[]
            },
            {
               id:'app1',
               type:'rect',
               rect:['78px','133px','84px','84px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(234,234,246,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'app1Copy',
               type:'rect',
               rect:['198px','253px','84px','84px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(234,234,246,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'app1Copy3',
               type:'rect',
               rect:['78px','253px','84px','84px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(234,234,246,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'app1Copy4',
               type:'rect',
               rect:['198px','133px','84px','84px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               opacity:1,
               fill:["rgba(234,234,246,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Address_Bar',
               type:'rect',
               rect:['2px','21px','550px','24px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","0px","0px"],
               fill:["rgba(245,245,249,1.00)"],
               stroke:[1,"rgba(50,119,176,1.00)","solid"],
               transform:[],
               c:[
               {
                  id:'inner-address-bar',
                  type:'rect',
                  rect:['5px','5px','402px','18px','auto','auto'],
                  borderRadius:["7px 7px","7px 7px","0px","0px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[1,"rgb(50, 119, 176)","solid"]
               }]
            }]
         }],
         symbolInstances: [
         {
            id:'webAppTab',
            symbolName:'webAppTab'
         }
         ]
      },
   states: {
      "Base State": {
         "${_web-projectCopy2}": [
            ["style", "top", '28px'],
            ["style", "left", '21px'],
            ["style", "font-size", '40px']
         ],
         "${_webAppTab}": [
            ["style", "left", '157px'],
            ["style", "top", '1px']
         ],
         "${_white-rect}": [
            ["style", "top", '15px'],
            ["style", "right", '172px'],
            ["style", "height", '272px'],
            ["style", "opacity", '1'],
            ["style", "left", 'auto'],
            ["style", "width", '489px']
         ],
         "${_Web_Site_Tab}": [
            ["style", "top", '1px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '14px'],
            ["style", "width", '139px']
         ],
         "${_app1Copy}": [
            ["style", "top", '253px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '84px']
         ],
         "${_app1Copy3}": [
            ["style", "top", '253px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "width", '84px']
         ],
         "${_Group2}": [
            ["style", "top", '71px']
         ],
         "${_webSite-white-rect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "top", '57px'],
            ["style", "height", '323px'],
            ["style", "opacity", '0.7699999809265137'],
            ["style", "left", '22px'],
            ["style", "width", '512px']
         ],
         "${_iconmonstr-arrow-37-icon2}": [
            ["style", "top", '100px'],
            ["style", "height", '75px'],
            ["style", "opacity", '0.88'],
            ["style", "left", '138px'],
            ["style", "width", '59px']
         ],
         "${_app1Copy4}": [
            ["style", "top", '133px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '84px']
         ],
         "${_video-player}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "top", '13px'],
            ["gradient", "background-image", [270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "height", '270px'],
            ["style", "opacity", '0'],
            ["style", "left", '-129px'],
            ["style", "width", '320px']
         ],
         "${_app1}": [
            ["style", "top", '133px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "width", '84px']
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
         "${_content}": [
            ["color", "background-color", 'rgba(246,246,255,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '297px'],
            ["style", "opacity", '0.77'],
            ["style", "left", '0px'],
            ["style", "width", '517px']
         ],
         "${_webAppBar}": [
            ["color", "background-color", 'rgba(188,188,255,0.05)'],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '509px'],
            ["style", "top", '29px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '23px'],
            ["color", "border-color", 'rgb(50, 119, 176)'],
            ["style", "opacity", '0'],
            ["style", "left", '24px']
         ],
         "${_inner-address-bar}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '5px'],
            ["style", "height", '18px'],
            ["style", "left", '5px'],
            ["style", "border-top-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '402px']
         ],
         "${_master}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '557px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '556px'],
            ["style", "height", '422px'],
            ["style", "overflow", 'hidden']
         ],
         "${_website_close}": [
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "opacity", '0.88'],
            ["style", "top", '7px'],
            ["color", "border-color", 'rgba(220,239,255,1.00)'],
            ["style", "height", '6px'],
            ["style", "border-style", 'none'],
            ["style", "left", '121px'],
            ["style", "width", '6px']
         ],
         "${_Address_Bar}": [
            ["color", "background-color", 'rgba(245,245,249,1.00)'],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '550px'],
            ["style", "top", '21px'],
            ["style", "height", '24px'],
            ["color", "border-color", 'rgba(50,119,176,1.00)'],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4241,
         autoPlay: true,
         labels: {
            "webSite": 1174,
            "webApp": 2012
         },
         timeline: [
            { id: "eid18", tween: [ "style", "${_white-rect}", "width", '489px', { fromValue: '489px'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid79", tween: [ "style", "${_white-rect}", "width", '330px', { fromValue: '489px'}], position: 1447, duration: 552, easing: "swing" },
            { id: "eid83", tween: [ "style", "${_white-rect}", "width", '489px', { fromValue: '330px'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid37", tween: [ "style", "${_video-player}", "left", '15px', { fromValue: '-129px'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid114", tween: [ "color", "${_content}", "background-color", 'rgba(234,234,246,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(246,246,255,1.00)'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid17", tween: [ "color", "${_Web_Site_Tab}", "background-color", 'rgba(174,178,212,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,94,172,1.00)'}], position: 1174, duration: 273, easing: "swing" },
            { id: "eid112", tween: [ "style", "${_video-player}", "top", '13px', { fromValue: '13px'}], position: 1999, duration: 0, easing: "swing" },
            { id: "eid113", tween: [ "style", "${_video-player}", "top", '76px', { fromValue: '13px'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid31", tween: [ "style", "${_video-player}", "opacity", '1', { fromValue: '0'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid69", tween: [ "style", "${_webSite-white-rect}", "left", '-168px', { fromValue: '22px'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid80", tween: [ "style", "${_Web_Site_Tab}", "width", '139px', { fromValue: '139px'}], position: 2012, duration: 0, easing: "swing" },
            { id: "eid16", tween: [ "gradient", "${_Web_Site_Tab}", "background-image", [270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1174, duration: 273, easing: "swing" },
            { id: "eid158", tween: [ "style", "${_app1Copy4}", "opacity", '1', { fromValue: '0'}], position: 3665, duration: 576, easing: "swing" },
            { id: "eid66", tween: [ "style", "${_webSite-white-rect}", "opacity", '0', { fromValue: '0.7699999809265137'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid6", tween: [ "style", "${_master}", "left", '0px', { fromValue: '557px'}], position: 0, duration: 1077, easing: "swing" },
            { id: "eid155", tween: [ "style", "${_app1Copy}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 576, easing: "swing" },
            { id: "eid42", tween: [ "style", "${_Web_Site_Tab}", "top", '5px', { fromValue: '1px'}], position: 1174, duration: 135, easing: "swing" },
            { id: "eid43", tween: [ "style", "${_Web_Site_Tab}", "top", '1px', { fromValue: '5px'}], position: 1309, duration: 138, easing: "swing" },
            { id: "eid157", tween: [ "style", "${_app1Copy3}", "opacity", '1', { fromValue: '0'}], position: 2924, duration: 576, easing: "swing" },
            { id: "eid123", tween: [ "style", "${_app1}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 576, easing: "swing" }         ]
      }
   }
},
"webAppTab": {
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
      type: 'rect',
      borderRadius: ['13px 13px','13px 13px','13px 13px','13px 13px'],
      id: 'Web_App_Tab',
      opacity: 1,
      cursor: ['pointer'],
      rect: ['0px','0px','139px','37px','auto','auto'],
      stroke: [2,'rgba(0,94,172,1.00)','none'],
      fill: ['rgba(0,94,172,1.00)',[180,[['rgba(0,110,203,1.00)',0],['rgba(0,94,172,1.00)',100]]]],
      c: [
      {
         transform: [],
         rect: ['121px','7px','6px','6px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         stroke: [1,'rgba(220,239,255,1.00)','none'],
         id: 'web-app_close',
         opacity: 1,
         type: 'ellipse',
         fill: ['rgba(207,231,255,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '139px']
         ],
         "${_web-app_close}": [
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "top", '7px'],
            ["color", "border-color", 'rgb(220, 239, 255)'],
            ["style", "height", '6px'],
            ["style", "border-style", 'none'],
            ["style", "left", '121px'],
            ["style", "width", '6px']
         ],
         "${_Web_App_Tab}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "left", '0px'],
            ["gradient", "background-image", [180,[['rgba(0,110,203,1.00)',0],['rgba(0,94,172,1.00)',100]]]],
            ["color", "border-color", 'rgba(0,94,172,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '2px'],
            ["style", "cursor", 'pointer']
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
