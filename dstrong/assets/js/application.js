
var myGlobals = {};

// Global timers
myGlobals.timeouts = new Array();
myGlobals.intervals = new Array();

function clearTimers() {
  for (var i = 0; i < myGlobals.timeouts.length; i++)
  {
      clearTimeout(myGlobals.timeouts[i]);
  }
  myGlobals.timeouts = new Array();

  for (var i = 0; i < myGlobals.intervals.length; i++)
  {
      clearInterval(myGlobals.intervals[i]);
  }
  myGlobals.intervals = new Array();
}

function clearLastTimeout() {
  if (myGlobals.timeouts.length > 0) {
    window.clearTimeout(myGlobals.timeouts[myGlobals.timeouts.length - 1]);
    myGlobals.timeouts.pop();
  }
}

function clearLastInterval() {
  if (myGlobals.intervals.length > 0) {
    window.clearInterval(myGlobals.intervals[myGlobals.intervals.length - 1]);
    myGlobals.intervals.pop();
  }
}

$(document).on('click', '.video-preview-button', function() {
  videoPlayer = $(this).children(".video-preview-player");
  videoId = $(this).data("videoid");
  videoPlayer.toggle("slow", function() {
    if (videoPlayer.is(':visible')) {
      $.ajax({
        url: "/video-preview/" + videoId,
        method: "GET"
      }).done(function(data) {
          videoPlayer.html(data);
        });
    }
  });
});

$(document).mouseup(function (e) {
    var container = $(".video-preview-player");

    if (!container.is(e.target) // if the target of the click is neither the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $(".video-preview-player").hide("slow");
    }
});
