function notify() {
  alert("These controls are not tied to any logic.")
}

function animateCount(element) {
  var original = parseFloat(element.innerHTML);
  if (isNaN(original)) return;
  
  var num = 0;

  var interval = setInterval(function() {
    element.innerHTML = Math.floor(num);

    num += original / 50;

    if (num > original) {
      element.innerHTML = original;
      clearInterval(interval);
    }
  }, 16);
}

window.addEventListener('load', function() {
  var nums = document.querySelectorAll('.animate-count');
  if (nums.length == 0) return;

  for (var i = 0; i < nums.length; i++) {
    animateCount(nums[i]);
  }
});