// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Fade in content
(function() {

  var swInstance = new ScrollWatch({
      watch: 'div, footer',
      watchOnce: true,
      inViewClass: 'fade-in--animate',
      watchOffset: -100,
      infiniteScroll: false
  });

  var swInstance = new ScrollWatch({
      watch: '.button',
      watchOnce: true,
      inViewClass: 'bounce--animate',
      watchOffset: -200,
      infiniteScroll: false

  });

})();

// Day of week
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var day = n;
$(".weekday").html(day);


// Tab toggling, toggles title

window.onblur = function () { document.title = 'Read me later!'; }
window.onfocus = function () { document.title = 'Kin: The Co-living Digest Newsletter'; }

// Lettering
$(function() {
  $(".title em").lettering();
});



// Price toggle

function hideShow() {

  var checkBox = document.getElementById("annualOrMonthly");
  var miniLabel = document.getElementById("savings-label");
  var annualPay = document.getElementById("annual-pay");
  var monthlyPay = document.getElementById("monthly-pay");

  var tinyPrice = document.getElementById("tiny-price");
  var sosoPrice = document.getElementById("soso-price");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    // Fades out elements on click
    miniLabel.classList.add("low-op");
    annualPay.classList.add("low-op");
    monthlyPay.classList.remove("low-op");
    tinyPrice.innerHTML = "€49"
    sosoPrice.innerHTML = "€149"
  } else {
    // Fades out elements on click
    miniLabel.classList.remove("low-op");
    annualPay.classList.remove("low-op");
    monthlyPay.classList.add("low-op");
    tinyPrice.innerHTML = "€42"
    sosoPrice.innerHTML = "€127"
    
  }
}



/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
