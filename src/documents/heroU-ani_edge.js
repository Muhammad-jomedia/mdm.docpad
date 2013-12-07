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
               rect:['9px','1px','139px','37px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:1,
               fill:["rgba(174,178,212,1.00)",[270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'Text2',
                  type:'text',
                  rect:['23px','3px','auto','auto','auto','auto'],
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
               },
               {
                  id:'iconmonstr-globe-icon',
                  type:'image',
                  rect:['7px','4px','13px','13px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'icons/iconmonstr-globe-icon.svg','0px','0px']
               }]
            },
            {
               id:'webAppTab',
               type:'rect',
               rect:['150px','1px','auto','auto','auto','auto']
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
               id:'content',
               type:'rect',
               rect:['22px','71px','512px','323px','auto','auto'],
               borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
               opacity:0.77,
               fill:["rgba(192,191,219,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'webSite',
                  type:'rect',
                  rect:['0px','0px','512px','323px','auto','auto'],
                  borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                  opacity:0.77,
                  fill:["rgba(255,255,255,0.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  c:[
                  {
                     id:'video-player',
                     type:'rect',
                     rect:['11px','56px','245px','207px','auto','auto'],
                     borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                     opacity:1,
                     fill:["rgba(0,94,172,1.00)",[270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
                     stroke:[0,"rgb(0, 0, 0)","none"],
                     c:[
                     {
                        id:'playerUI-BG',
                        type:'rect',
                        rect:['0px','170px','245px','37px','auto','auto'],
                        borderRadius:["0px","0px","13px 13px","13px 13px"],
                        fill:["rgba(0,71,130,1.00)"],
                        stroke:[0,"rgb(0, 0, 0)","none"]
                     },
                     {
                        id:'play-button',
                        type:'rect',
                        rect:['0px','170px','34px','35px','auto','auto'],
                        cursor:['pointer'],
                        borderRadius:["0px","0px","0px","13px 13px"],
                        fill:["rgba(31,66,96,1.00)"],
                        stroke:[1,"rgba(0,113,208,1.00)","solid"],
                        c:[
                        {
                           id:'iconmonstr-arrow-37-icon2',
                           type:'image',
                           rect:['12px','11px','11px','14px','auto','auto'],
                           opacity:0.88,
                           fill:["rgba(0,0,0,0)",'icons/iconmonstr-arrow-37-icon.svg','0px','0px']
                        }]
                     },
                     {
                        id:'play-bar',
                        type:'rect',
                        rect:['35px','170px','172px','35px','auto','auto'],
                        fill:["rgba(31,66,96,1)",[270,[['rgba(23,78,124,1.00)',0],['rgba(4,49,86,1.00)',100]]]],
                        stroke:[1,"rgb(0, 113, 208)","solid"]
                     }]
                  },
                  {
                     id:'web-project',
                     type:'text',
                     rect:['21px','34px','auto','auto','auto','auto'],
                     text:"Your site.",
                     align:"left",
                     font:['open-sans, sans-serif',40,"rgba(18,19,91,1)","400","none","normal"]
                  }]
               },
               {
                  id:'white-rect',
                  type:'rect',
                  rect:['auto','21px','486px','278px','11px','auto'],
                  borderRadius:["13px 13px","13px 13px","13px 13px","13px 13px"],
                  opacity:1,
                  fill:["rgba(255,255,255,1)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'webAppBar',
                  type:'rect',
                  rect:['2px','-25px','509px','23px','auto','auto'],
                  borderRadius:["0px","0px","13px 13px","13px 13px"],
                  fill:["rgba(188,188,255,0.05)"],
                  stroke:[1,"rgba(50,119,176,1.00)","none"],
                  transform:[]
               }]
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
               },
               {
                  id:'website_urlText',
                  type:'text',
                  rect:['23px','10px','auto','auto','auto','auto'],
                  text:"MassDistributionMedia.com/site",
                  align:"left",
                  font:['open-sans, sans-serif',9,"rgba(0,1,47,1.00)","100","none","normal"]
               },
               {
                  id:'app_urlText',
                  type:'text',
                  rect:['23px','10px','auto','auto','auto','auto'],
                  text:"MassDistributionMedia.com/apps",
                  align:"left",
                  font:['open-sans, sans-serif',9,"rgba(0,1,47,1.00)","100","none","normal"]
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
         "${_webSite}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "top", '0px'],
            ["style", "height", '323px'],
            ["style", "opacity", '0.7699999809265137'],
            ["style", "left", '0px'],
            ["style", "width", '512px']
         ],
         "${_web-project}": [
            ["style", "top", '34px'],
            ["style", "font-weight", '400'],
            ["style", "opacity", '0'],
            ["style", "left", '-149px'],
            ["style", "font-size", '40px']
         ],
         "${_app1Copy4}": [
            ["style", "top", '133px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "width", '84px']
         ],
         "${_app1}": [
            ["style", "top", '133px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '78px'],
            ["style", "width", '84px']
         ],
         "${_Text2}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '100'],
            ["style", "left", '23px'],
            ["style", "font-size", '11px']
         ],
         "${_white-rect}": [
            ["style", "top", '21px'],
            ["style", "right", '11px'],
            ["style", "height", '278px'],
            ["style", "opacity", '1'],
            ["style", "left", 'auto'],
            ["style", "width", '489px']
         ],
         "${_Web_Site_Tab}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "border-width", '0px'],
            ["style", "left", '9px'],
            ["style", "top", '1px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "cursor", 'pointer'],
            ["style", "width", '139px']
         ],
         "${_playerUI-BG}": [
            ["style", "top", '170px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '37px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,71,130,1.00)']
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
         "${_app_urlText}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(18,19,91,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '23px'],
            ["style", "font-size", '10px']
         ],
         "${_iconmonstr-arrow-37-icon2}": [
            ["style", "top", '11px'],
            ["style", "height", '14px'],
            ["style", "opacity", '0.88'],
            ["style", "left", '12px'],
            ["style", "width", '11px']
         ],
         "${_website_urlText}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(18,19,91,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '23px'],
            ["style", "font-size", '10px']
         ],
         "${_iconmonstr-globe-icon}": [
            ["style", "top", '4px'],
            ["style", "height", '13px'],
            ["style", "left", '7px'],
            ["style", "width", '13px']
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
            ["style", "left", '2px'],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_play-button}": [
            ["color", "background-color", 'rgba(31,66,96,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '34px'],
            ["style", "top", '170px'],
            ["style", "height", '35px'],
            ["color", "border-color", 'rgba(0,113,208,1.00)'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
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
            ["style", "border-width", '3px'],
            ["style", "left", '0px']
         ],
         "${_play-bar}": [
            ["style", "top", '170px'],
            ["gradient", "background-image", [270,[['rgba(23,78,124,1.00)',0],['rgba(4,49,86,1.00)',100]]]],
            ["style", "left", '35px']
         ],
         "${_webAppBar}": [
            ["color", "background-color", 'rgba(188,188,255,0.05)'],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '509px'],
            ["style", "top", '-42px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '23px'],
            ["color", "border-color", 'rgb(50, 119, 176)'],
            ["style", "left", '2px'],
            ["style", "opacity", '0']
         ],
         "${_inner-address-bar}": [
            ["style", "top", '5px'],
            ["style", "border-top-left-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '18px'],
            ["style", "border-top-right-radius", [7,7], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '5px'],
            ["style", "width", '402px']
         ],
         "${_content}": [
            ["color", "background-color", 'rgba(246,246,255,1.00)'],
            ["style", "top", '71px'],
            ["style", "height", '323px'],
            ["style", "opacity", '0.77'],
            ["style", "left", '22px'],
            ["style", "width", '512px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '422px'],
            ["style", "width", '556px']
         ],
         "${_video-player}": [
            ["color", "background-color", 'rgba(0,94,172,1.00)'],
            ["style", "top", '85px'],
            ["style", "opacity", '0'],
            ["style", "height", '207px'],
            ["gradient", "background-image", [270,[['rgba(0,94,172,0.46)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '-133px'],
            ["style", "width", '245px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0.88'],
            ["color", "background-color", 'rgba(207,231,255,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "height", '6px'],
            ["color", "border-color", 'rgba(220,239,255,1.00)'],
            ["style", "left", '121px'],
            ["style", "width", '6px']
         ],
         "${_master}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '557px'],
            ["style", "top", '0px']
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
            { id: "eid79", tween: [ "style", "${_white-rect}", "width", '233px', { fromValue: '489px'}], position: 1447, duration: 552, easing: "swing" },
            { id: "eid83", tween: [ "style", "${_white-rect}", "width", '489px', { fromValue: '233px'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid48", tween: [ "style", "${_website_urlText}", "opacity", '1', { fromValue: '0'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid86", tween: [ "style", "${_website_urlText}", "opacity", '0', { fromValue: '1'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid96", tween: [ "style", "${_app_urlText}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 553, easing: "swing" },
            { id: "eid37", tween: [ "style", "${_video-player}", "left", '11px', { fromValue: '-133px'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid66", tween: [ "style", "${_webSite}", "opacity", '0', { fromValue: '0.7699999809265137'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid42", tween: [ "style", "${_Web_Site_Tab}", "top", '5px', { fromValue: '1px'}], position: 1174, duration: 135, easing: "swing" },
            { id: "eid43", tween: [ "style", "${_Web_Site_Tab}", "top", '1px', { fromValue: '5px'}], position: 1309, duration: 138, easing: "swing" },
            { id: "eid123", tween: [ "style", "${_app1}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 576, easing: "swing" },
            { id: "eid114", tween: [ "color", "${_content}", "background-color", 'rgba(234,234,246,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(246,246,255,1.00)'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid17", tween: [ "color", "${_Web_Site_Tab}", "background-color", 'rgba(174,178,212,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,94,172,1.00)'}], position: 1174, duration: 273, easing: "swing" },
            { id: "eid69", tween: [ "style", "${_webSite}", "left", '-190px', { fromValue: '0px'}], position: 2012, duration: 600, easing: "swing" },
            { id: "eid158", tween: [ "style", "${_app1Copy4}", "opacity", '1', { fromValue: '0'}], position: 3665, duration: 576, easing: "swing" },
            { id: "eid157", tween: [ "style", "${_app1Copy3}", "opacity", '1', { fromValue: '0'}], position: 2924, duration: 576, easing: "swing" },
            { id: "eid80", tween: [ "style", "${_Web_Site_Tab}", "width", '139px', { fromValue: '139px'}], position: 2012, duration: 0, easing: "swing" },
            { id: "eid155", tween: [ "style", "${_app1Copy}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 576, easing: "swing" },
            { id: "eid57", tween: [ "style", "${_web-project}", "opacity", '1', { fromValue: '0'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid31", tween: [ "style", "${_video-player}", "opacity", '1', { fromValue: '0'}], position: 1447, duration: 553, easing: "swing" },
            { id: "eid61", tween: [ "style", "${_web-project}", "left", '16px', { fromValue: '-149px'}], position: 1447, duration: 303, easing: "swing" },
            { id: "eid116", tween: [ "style", "${_web-project}", "left", '21px', { fromValue: '16px'}], position: 1750, duration: 249, easing: "swing" },
            { id: "eid112", tween: [ "style", "${_video-player}", "top", '86px', { fromValue: '86px'}], position: 1999, duration: 0, easing: "swing" },
            { id: "eid113", tween: [ "style", "${_video-player}", "top", '86px', { fromValue: '86px'}], position: 2000, duration: 0, easing: "swing" },
            { id: "eid6", tween: [ "style", "${_master}", "left", '0px', { fromValue: '557px'}], position: 0, duration: 1077, easing: "swing" },
            { id: "eid16", tween: [ "gradient", "${_Web_Site_Tab}", "background-image", [270,[['rgba(174,178,212,1.00)',0],['rgba(202,208,253,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1174, duration: 273, easing: "swing" }         ]
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
         font: ['open-sans, sans-serif',11,'rgba(255,255,255,1.00)','100','none','normal'],
         type: 'text',
         id: 'Text2Copy',
         text: 'Web App',
         align: 'left',
         rect: ['24px','3px','auto','auto','auto','auto']
      },
      {
         transform: [],
         rect: ['121px','7px','6px','6px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         type: 'ellipse',
         id: 'EllipseCopy3',
         stroke: [1,'rgba(220,239,255,1.00)','none'],
         opacity: 1,
         fill: ['rgba(207,231,255,1.00)']
      },
      {
         id: 'iconmonstr-window-apps-icon',
         type: 'image',
         rect: ['8px','4px','13px','13px','auto','auto'],
         fill: ['rgba(0,0,0,0)','icons/iconmonstr-window-apps-icon.svg','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'open-sans, sans-serif'],
            ["style", "left", '24px'],
            ["style", "font-size", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '139px']
         ],
         "${_iconmonstr-window-apps-icon}": [
            ["style", "top", '4px'],
            ["style", "height", '13px'],
            ["style", "left", '8px'],
            ["style", "width", '13px']
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
         "${_Web_App_Tab}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "border-width", '2px'],
            ["style", "border-style", 'none'],
            ["color", "border-color", 'rgba(0,94,172,1.00)'],
            ["gradient", "background-image", [180,[['rgba(0,110,203,1.00)',0],['rgba(0,94,172,1.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,94,172,1.00)']
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
