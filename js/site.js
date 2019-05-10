        // document.addEventListener('DOMContentLoaded', function() {
        //   var navBit = document.getElementsByClassName("nav-item");

        //   for (i = 0; i < navBit.length; i++) {
        //     var randomColor = Math.floor(Math.random()*16777215).toString(16);
        //     navBit[i].style["background-color"] = '#' + randomColor;
        //   }
        // }, false);



// Update the "WIND" font-variation-setting of the logo in reaction to the mouse position around the centre of the browser
        window.addEventListener('mousemove', function(event) {
          var x = event.clientX;
          var y = event.clientY;
          
          var body = document.getElementsByTagName("body")[0];
          var flow = document.getElementById("flow");
          var midX = body.getBoundingClientRect().left + body.getBoundingClientRect().right/2; // relative to centre of window
          var midY = body.getBoundingClientRect().top + body.getBoundingClientRect().bottom/2; // close enough anyway (minus scrollbars etc.)
          
          //Added this block to make the rotation more consistent across pages
          windowWidth = document.documentElement.clientWidth;
          windowHeight = document.documentElement.clientHeight;
          var deltaX = x - windowWidth/2;
          var deltaY = y - windowHeight/2;
        
        //   Was previously
        //   var deltaX = x - midX;
        //   var deltaY = y - midY;
          
          var angleRad = Math.atan(deltaY/deltaX);
          var angleDeg = (90 + 360 + (angleRad * 180 / Math.PI)) %360; // returned angle is relative to horizontal axis, plus we don't want negative
          if (deltaX < 0) angleDeg+=180; // fix for West/East (all positive before, e.g. East)
          
          flow.style["color"] = "white";
          
          var windCSS = "'WIND' " + angleDeg;
          flow.style["font-variation-settings"] = windCSS;
        });
        
        // Do the same for devices with accelorometers e.g. phones
        window.addEventListener('deviceorientation', function(event) {
            var angleRad = Math.atan(event.gamma/event.beta);
            var angleDeg = (90 + 360 + (angleRad * 180 / Math.PI)) %360; // returned angle is relative to horizontal axis, plus we don't want negative
            if (event.beta < 0) angleDeg+=180; // fix for West/East (all positive before, e.g. East)
            
            var flow = document.getElementById("flow");
          
            flow.style["color"] = "white";
          
            var windCSS = "'WIND' " + angleDeg;
            flow.style["font-variation-settings"] = windCSS;
            
        });
