window.onload = function () {
    document.getElementById( "container" ).onmouseover = function(){
     var elm = document.getElementById("container");
     elm.className ="demo-card-square mdl-card mdl-shadow--16dp";
     componentHandler.upgradeElement(elm);
   };

   document.getElementById( "container" ).onmouseout = function(){
     var elm = document.getElementById("container");
     elm.className ="demo-card-square mdl-card mdl-shadow--2dp";
     componentHandler.upgradeElement(elm);
   };
 }
