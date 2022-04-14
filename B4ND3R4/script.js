// ## Rotating with arrows code ##

// document.addEventListener('keydown', (event) => {
//     var code = event.code;
//     var el = document.getElementById("bandera");

//     var st = window.getComputedStyle(el, null);

//     var tr = st.getPropertyValue("-webkit-transform") ||
//          st.getPropertyValue("-moz-transform") ||
//          st.getPropertyValue("-ms-transform") ||
//          st.getPropertyValue("-o-transform") ||
//          st.getPropertyValue("transform") ||
//          "Either no transform set, or browser doesn't do getComputedStyle";
//          var values = tr.split('(')[1],
//     values = values.split(')')[0],
//     values = values.split(',');

//     var a = values[0];
//     var b = values[1];
//     var c = values[2]; 
//     var d = values[3];

//     var angle = Math.round(Math.asin(b) * (180/Math.PI));
//     console.log(angle);

//     if (code === 'ArrowLeft') {
//         dera = document.getElementById("bandera");
//         dera.style.transform = 'rotate(180deg)';
//     } else if (code === 'ArrowRight') {
//         dera = document.getElementById("bandera");
//         dera.style.transform = 'rotate(0deg)';
//     } else if (code === 'ArrowUp') {
//         dera = document.getElementById("bandera");
//         dera.style.transform = 'rotate(-90deg)';
//     } else if (code === 'ArrowDown') {
//         dera = document.getElementById("bandera");
//         dera.style.transform = `rotate(90deg)`;
//     }
//   }, false);

// ## Rotating with arrows code end ##
var pane = $('.game'),
    box = $('#bandera'),
    maxValue = pane.width() - box.width(),
    keysPressed = {},
    distancePerIteration = 5;

function calculateNewValue(oldValue, keyCode1, keyCode2) {
    var newValue = parseInt(oldValue, 10)
                   - (keysPressed[keyCode1] ? distancePerIteration : 0)
                   + (keysPressed[keyCode2] ? distancePerIteration : 0);
    return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
}

$(window).keydown(function(event) { keysPressed[event.which] = true; });
$(window).keyup(function(event) { keysPressed[event.which] = false; });

setInterval(function() {
    box.css({
        left: function(index ,oldValue) {
            return calculateNewValue(oldValue, 37, 39);
        },
        top: function(index, oldValue) {
            return calculateNewValue(oldValue, 38, 40);
        }
    });
}, 10);