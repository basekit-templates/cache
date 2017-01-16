
var featureHeight = $(".feature-container").height();
var featurePosition = $(".feature-container").position();
var featureTriggerValue = featureHeight + featurePosition.top;
var window_height = window.innerHeight;
var offsetAmount;

function checkFeatureDimensions() {
    featureHeight = $(".feature-container").height();
    featurePosition = $(".feature-container").position();
    featureTriggerValue = featureHeight + featurePosition.top;
    window_height = window.innerHeight;
}



var elem = document.querySelector('.content-wrap');

if (elem !== null) {
    // Feature parralax fade effect
    var scrollEffect = function (elem) {

        // How high the window is
        if ( window.pageYOffset > (featureTriggerValue - window_height)  ) {

            if(featureTriggerValue > window_height) {
                offsetAmount = window.pageYOffset - (featureTriggerValue - window_height);
            }
            else {
                offsetAmount = window.pageYOffset;
            }

            // Apply styles as user scrolls
            elem.setAttribute(
                "style", "opacity:" + Math.max(0, parseFloat(1-(2/window_height*offsetAmount)).toFixed(2)) + "; -webkit-transform: translateY(" + offsetAmount + "px)"
            );
        }
    };

    window.onscroll = function(e) {
        scrollEffect(elem);
    };

    $( window ).resize(function() {
        checkFeatureDimensions();
    });
} else {
}
