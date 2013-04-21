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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         //console.log('pageX: ' + e.pageX + ' pageY: ' + e.pageY);
         //console.log("eyeX: " + originalEyeLeft);
         var stageWidth = $('#Stage').width();
         var stageHeight = $('#Stage').height();
         
         console.log('stageWidth: ' + stageWidth + ' stageHeight: ' + stageHeight);
         
         var radius = 9;
         var offsetX = ((e.pageX / stageWidth) - 0.5) * radius;
         var offsetY = ((e.pageY / stageHeight) - 0.5) * radius;
         
         //get the value of a Symbol variable
         var originalEyeLeft = sym.getVariable("originalEyeLeft");
         var originalEyeTop = sym.getVariable("originalEyeTop");
         
         var eyeLeft = parseInt(originalEyeLeft) + offsetX;
         var eyeTop = parseInt(originalEyeTop) + offsetY;
         
         var eyeLeftStr = eyeLeft.toString() + "%"
         var eyeTopStr = eyeTop.toString() + "%"
         
         console.log("eyetop: "+eyeTop)
         
         sym.$("eye").css({left:eyeLeft, top:eyeTop});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var originalEyeLeft = sym.$("eye").css("left");
         var originalEyeTop = sym.$("eye").css("top");
         console.log("eyeX: " + originalEyeLeft);
         console.log("eyeY: " + originalEyeTop);
         //var oPosition = sym.getSymbol("eye").getPosition();
         //console.log("eyeP: " + oPosition);
         //set the value of a Symbol variable
         sym.setVariable("originalEyeLeft", originalEyeLeft);
         sym.setVariable("originalEyeTop", originalEyeTop);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://jfpark.taobao.com", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-264815076");