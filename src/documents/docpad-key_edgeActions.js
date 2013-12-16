/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
              // insert code to be run when the symbol is created here
              console.log('Start');
         
             function isScrolledIntoView(elem)
             {
                 var docViewTop = $(window).scrollTop();
                 var docViewBottom = docViewTop + $(window).height();
         
                 var elemTop = $(elem).offset().top;
                 var elemBottom = elemTop + $(elem).height();
         
                 return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
                   && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
             }         
         
              $(window).on("scroll", function(e) {
                  if(isScrolledIntoView(sym.element)) {
                     console.log('Start me up'); 
                      sym.play(0);
                      $(window).off("scroll");
                  }
              });
         
         
           });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "docpad-keys-animation");