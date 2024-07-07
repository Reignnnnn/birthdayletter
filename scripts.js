$(document).ready(function() {
    $("#messageState").on("change", (x) => {
      $(".message").removeClass("openNor").removeClass("closeNor");
      if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Opening");
      } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("Closing");
      }
    });
  
    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      console.log("Animation End");
      if ($(".message").hasClass("closeNor"))
        $(".message").addClass("closed");
      $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
    });
  
    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      console.log("Animation End");
      if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
      else
        $(".heart").addClass("no-anim").removeClass("beating");
      $(".heart").removeClass("openHer").removeClass("closeHer");
    });
  });