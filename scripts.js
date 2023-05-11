document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("slider");
    var politics = document.getElementById("politics");
    var currentUrl;

    chrome.runtime.sendMessage({message: 'get_current_url'}, function(response) {
      console.log('Current URL in script.js:', response.currentUrl);
      currentUrl = response.currentUrl;
    });
    
  
    function setPolitics() {
      var value = slider.value;
      var stance;
  
      if (value === "1") {
        stance = "Far-Left";
      } else if (value === "2") {
        stance = "Liberal";
      } else if (value === "3") {
        stance = "Moderate";
      } else if (value === "4") {
        stance = "Conservative";
      } else {
        stance = "Far-Right";
      }
      politics.innerHTML = "You chose a political stance of: <strong>" + stance + "</strong>";
    }
  
    slider.addEventListener("input", setPolitics);

    setPolitics();
  
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", async function() {
      var value = slider.value;
      var stance;
  
      if (value === "1") {
        stance = "far-left";
      } else if (value === "2") {
        stance = "liberal";
      } else if (value === "3") {
        stance = "moderate";
      } else if (value === "4") {
        stance = "conservative";
      } else {
        stance = "far-right";
      }

      window.open(`https://point-of-view.github.io/POV-Website/?url=${currentUrl}&bias=${stance}`, "_blank");

    });
});