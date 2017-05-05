// Define actions array
var player_actions = [];
var action_id = 0;
var actionTime = 0;
var timerInt = 0;
var current_round = 0;
var total_rounds = 0;
var current_set = 0;
var total_sets = 0;
var last_rest_action_id = 0;
var pendingTimer = true;
var isCounting = false;
var total_exercises = 0;

// Clear any prexisting timers
stopTimer();

// Loop through sets and their exercises, creating actions for each


    total_rounds = 2;

    for (i = 1; i <= total_rounds; i++) {
      current_round = i;


        current_set = 0;


            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 2";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "871",
                                  name: "Test Exercise 2",
                                  estimated_seconds: "145",
                                  seconds: "0",
                                  rest_seconds: "99",
                                  swap_sides: "",
                                  text: "5 Reps",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "99",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;

            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 1";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "870",
                                  name: "Test Exercise 1",
                                  estimated_seconds: "6",
                                  seconds: "3",
                                  rest_seconds: "3",
                                  swap_sides: "swap",
                                  text: "1 Second Each Side",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "3",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;
    }


    total_rounds = 1;

    for (i = 1; i <= total_rounds; i++) {
      current_round = i;


        current_set = 0;


            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 2";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "871",
                                  name: "Test Exercise 2",
                                  estimated_seconds: "28",
                                  seconds: "0",
                                  rest_seconds: "3",
                                  swap_sides: "swap",
                                  text: "5 Reps Each Side",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "3",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;

            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 2";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "871",
                                  name: "Test Exercise 2",
                                  estimated_seconds: "28",
                                  seconds: "0",
                                  rest_seconds: "3",
                                  swap_sides: "swap",
                                  text: "5 Reps Each Side",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "3",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;

            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 3";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "882",
                                  name: "Test Exercise 3",
                                  estimated_seconds: "13",
                                  seconds: "10",
                                  rest_seconds: "3",
                                  swap_sides: "swap",
                                  text: "5 Seconds Each Side",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "3",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;

            total_sets = 2;

            if (current_set < total_sets) {
              ++current_set;
            } else {
              current_set = 1;
            }

            if (player_actions.length > 0) {
              player_actions[last_rest_action_id].next_exercise_name = "Test Exercise 3";
              last_rest_action_id = 0;
            }

            player_actions.push({ type: "video",
                                  object_id: "882",
                                  name: "Test Exercise 3",
                                  estimated_seconds: "13",
                                  seconds: "10",
                                  rest_seconds: "3",
                                  swap_sides: "swap",
                                  text: "5 Seconds Each Side",
                                  rounds: [current_round, total_rounds],
                                  sets: [current_set, total_sets],
                                  exercise_index: ++total_exercises });

              player_actions.push({ type: "rest",
                                    seconds: "3",
                                    text: "Get ready for the next exercise!",
                                    rounds: [current_round, total_rounds],
                                    sets: [current_set, total_sets],
                                    next_exercise_name: "" });

              last_rest_action_id = player_actions.length - 1;
    }


  if (player_actions[player_actions.length - 1].type == "rest") {
    player_actions.pop()
  }


function doAction () {

  $("#workout-preview-container").hide();

  stopTimer();
  isCounting = false;
  timerInt = 0;
  showTime();


  if (action_id < player_actions.length) {
    if (player_actions[action_id].type == "video") {
      //$("#workout-video-player").show();

      $.ajax({
        url: "assets/videos/big_buck_bunny.webm",
        method: "GET"
      }).done(function(data) {
          $("#workout-video-player").html(data);

          actionTime = player_actions[action_id].seconds;
          timerInt = actionTime;

          $("#seconds-timer").css('color', '#fff');
          $("#player-text").css('color', '#fff');

          $("#rest-fields").hide();

          current_round = player_actions[action_id].rounds[0];
          total_rounds = player_actions[action_id].rounds[1];

          current_set = player_actions[action_id].sets[0];
          total_sets = player_actions[action_id].sets[1];

          showActivityFields();

          ++action_id;

          pendingTimer = true;

          $("#video-tag").on("timeupdate", function(event){
              onTrackedVideoFrame(this.currentTime, this.duration);
            });

        });

    } else if (player_actions[action_id].type == "rest") {

      $("#activity-fields").hide();

      $("#seconds-timer").css('color', '#000');
      $("#player-text").css('color', '#000');

      actionTime = player_actions[action_id].seconds;

      ++action_id;



      if (actionTime !== "99") {
        timerInt = actionTime;

        // Clear timers, and create new ones
        stopTimer();
        startTimers(actionTime);

        $("#player-text").html( '<p>' + player_actions[action_id - 1].text + '</p><p>(' +
                                player_actions[action_id - 1].next_exercise_name + ')</p>');

      } else {
        $("#countdown-timer").html("");
        $("#player-text").html( '<p>REST AS NEEDED</p><p>' + player_actions[action_id - 1].text + "</p><p>(" +
                                player_actions[action_id - 1].next_exercise_name + ")</p><p onclick='doAction();'>CONTINUE</p>");
      }

      // Hide video
      $("#video-tag").remove()
      $("#workout-video-player").append('<video id="video-tag" height="480" width="480"></video>');

      showRestFields();
    }
  } else {
    stopTimer();
    $(".player-nav-button").hide();
    $("#activity-fields").hide();
    $("#rest-fields").hide();
    $("#timer-container").hide();
    $("#toggle-control").hide();
    $("#reset-control").hide();
    $("#workout-video-player").html('<p id="player-info-screen">Workout Complete</p>');
  }
}

function showRestFields() {

  $("#rest-fields").show();

  if (total_exercises > 1) {
    $("#total-info").html("Completed " + player_actions[action_id - 2].exercise_index + " of " + total_exercises + " exercises");
  } else {
    $("#total-info").html("");
  }

  showNavButtons();

}

function showActivityFields() {
  $("#activity-fields").show();

  if (total_rounds > 1) {
    round_color = ""
    $("#rounds-info").html("Rounds: ")

    for (i = 1; i <= total_rounds; i++) {
      if (i <= current_round) {
        round_color = "#0000FF"
      } else {
        round_color = "#000"
      }
      $("#rounds-info").append('<span style="color: ' + round_color + '">' + i + ' <span>')
    }
  } else {
    $("#rounds-info").html("");
  }

  if (total_sets > 1) {
    set_color = ""
    $("#sets-info").html("Sets: ")

    for (i = 1; i <= total_sets; i++) {
      if (i <= current_set) {
        set_color = "#CC0000"
      } else {
        set_color = "#000"
      }
      $("#sets-info").append('<span style="color: ' + set_color + '">' + i + ' <span>')
    }
  } else {
    $("#sets-info").html("");
  }

  showNavButtons();

}

function showNavButtons() {
  if (action_id > 1) {
    $("#prev-control").removeClass("unavailable");
  } else if ($("#prev-control").hasClass("unavailable") == false) {
    $("#prev-control").addClass("unavailable");
  }

  if ($("#next-control").hasClass("unavailable")) {
    $("#next-control").removeClass("unavailable");
  }
}

function showTime() {
  if (timerInt > 0) {
    if (player_actions[action_id - 1].type == "video") { checkSwap(); }
    isCounting = true
    $("#toggle-control").html("PAUSE")
    $("#reset-control").html("RESET")
    var totalSeconds = timerInt--
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;
    var formattedSeconds = ("0" + Number(seconds)).slice(-2);
    var timeString = (minutes > 0 ? minutes + ":" + formattedSeconds : ":" + formattedSeconds);
    $("#seconds-timer").html(timeString);
  } else {
    isCounting = false
    $("#seconds-timer").html("");
    $("#toggle-control").html("");
    $("#reset-control").html("");
  }
}

$(document).ready(function() {

  $.fn.timer = function( userdefinedoptions ){
      var $this = $(this), opt, count = 0;


      opt = $.extend( {
          // Config
          'timer' : 300, // 300 second default
          'width' : $("#video-tag").prop('height') + 2,
          'height' : $("#video-tag").prop('height') + 2,
          'fgColor' : "#fff" ,
          'bgColor' : "#0000dd",
          'start_count' : 0
          }, userdefinedoptions
      );

      $this.knob({
          'min':0,
          'max': opt.timer,
          'readOnly': true,
          'width': opt.width,
          'height': opt.height,
          'fgColor': opt.fgColor,
          'bgColor': opt.bgColor,
          'displayInput' : true,
          'thickness': 0.06
      });

      count = opt.start_count

      myGlobals.intervals.push(setInterval(function(){
          newVal = ++count;
          $this.val(newVal).trigger('change');
      }, 1000));
  };

  if (player_actions[action_id].type == "rest-day") {
    $("#main-workout-title").html("Rest. You\'ve earned it!");
  } else {
    showWorkoutPreview();
    $("#workout-video-player").html('<span class="start-button" id="player-info-screen" onclick="doAction();">Begin This Workout</span>');
  }
});

function onTrackedVideoFrame(currentTime, duration){
  if (pendingTimer && currentTime >= 0) {
    $("#video-tag").show()

    if (actionTime > 0) {
      // Clear timers, and create new ones
      stopTimer();
      startTimers(actionTime);

    } else {
      $("#timer-container").css('height', '482');
      $("#timer-container").css('width', '487');
      $("#countdown-timer").html("");
      $("#player-text").html( '<p>' + player_actions[action_id - 1].text + '</p><p onclick="doAction();">CONTINUE</p>');
    }

    pendingTimer = false

  } else if (pendingTimer == false && $("#video-tag").is(":visible") == false ) {
    $("#video-tag").show()
  }
}

function toggleTimer() {
  if (isCounting) {
    isCounting = false;
    clearTimers();
    $("#toggle-control").html("RESUME")
  } else {
    startTimers(actionTime, actionTime - timerInt);
  }
}

function resetTimer() {
  action_id--;
  doAction();
}

function startTimers(withSeconds, startCount) {
  startCount = (typeof startCount === 'undefined') ? 0 : startCount;

  myGlobals.timeouts.push(setTimeout('doAction()', (withSeconds - startCount) * 1000));
  showTime();
  myGlobals.intervals.push(setInterval('showTime()', 1000));
  $(".countdown-timer").show();
  tempElem = $(".countdown-timer").first().clone();
  tempElem.appendTo($('#timer-container')).prop('class', 'countdown-timer');
  $(".countdown-timer").timer({'timer': withSeconds - 1, "start_count": startCount});
  $("#timer-container").children('div:not([id])').first().remove();
}

function stopTimer() {
  clearTimers();
  var canvas = $("canvas").get(0);
  if (canvas == undefined) { return };
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function checkSwap() {
  var swapText = (player_actions[action_id - 1].swap_sides == "swap" ? "<p>SWAP SIDES!</p>" : "")
  var flashDuration = 3;
  var startFlash = (actionTime / 2) - (flashDuration / 2)
  var endFlash = startFlash + flashDuration

  if (timerInt <= endFlash && timerInt > startFlash) {
    $("#player-text").html(swapText);
  } else {
    $("#player-text").html("");
  }
}

function prevAction() {
  if (player_actions[action_id - 2].type == "rest") {
    action_id--
  }

  action_id = action_id - 2;

  doAction();
}

function showWorkoutPreview() {

  if ($("#workout-preview").html() == "") {
    $("#workout-preview").show();

    // Initiate preview
    var allowHeader = true;
    var allowFooter = false;
    var timeEstimate = 0;

    for (i=0;i<player_actions.length;i++) {
      var buildString = "";
      if (player_actions[i].type == "video") {

        timeEstimate += parseInt(player_actions[i].estimated_seconds); // Update time approximator

        // Draw circuit headers/footers
        if (player_actions[i].rounds[1] > 1) { // Exercise is part of a circuit
          if (player_actions[i].rounds[0] > 1) {
            allowHeader = true; // We're on another round... ready to render another header
            allowFooter = true; // We're ready to draw a footer when total rounds == 1 again
            continue // Skip until on next round
          } else {
            if (allowHeader) { // Only draw header once per circuit
              buildString += '<h2 class="circuit-round-header">CIRCUIT ROUND - ' + player_actions[i].rounds[1] + ' ROUNDS</h2>'; // Circuit header
              allowHeader = false;
            }
          }

          buildString += '<li class="workout-preview-block">';

          buildString += '<h2 class="title">' + player_actions[i].name + '</h2>'; // Draw title element

          buildString +=  '<div class="video-preview-button" data-videoid="' + player_actions[i].object_id + '">' +
                          '<i class="fa fa-play-circle-o fa-2x"></i><div class="video-preview-player"></div></div>'; // Video preview

          var infoString = "";
          if (player_actions[i].text != "") { infoString += player_actions[i].text + '; '; }
          if (player_actions[i].rest_seconds > 1) {
            if (player_actions[i].rest_seconds != 99) {
              infoString += player_actions[i].rest_seconds + ' Seconds Rest';
            } else {
              infoString += 'Rest As Needed';
            }
          }

          buildString += '<p class="info">' + infoString + '&nbsp;</p>'; // info element

          buildString += '</li>';

        } else {



          if (allowFooter) { // Only draw footer after circuit ends
            buildString += '<!--<li class="circuit-round-footer"></li>-->'; // Circuit footer
            allowFooter = false;
          }

          buildString += '<li class="workout-preview-block">';

          buildString += '<h2 class="title">' + player_actions[i].name + '</h2>'; // Draw title element

          buildString +=  '<div class="video-preview-button" data-videoid="' + player_actions[i].object_id + '">' +
                          '<i class="fa fa-play-circle-o fa-2x"></i><div class="video-preview-player"></div></div>'; // Video preview

          // Draw info elements
          if (player_actions[i].sets[0] == 1) {
            var infoString = "";
            if (player_actions[i].sets[1] > 1) { infoString += player_actions[i].sets[1] + ' Sets; '; }
            if (player_actions[i].text != "") { infoString += player_actions[i].text + '; '; }
            if (player_actions[i].rest_seconds > 1) {
              if (player_actions[i].rest_seconds != 99) {
                infoString += player_actions[i].rest_seconds + ' Seconds Rest';
              } else {
                infoString += 'Rest As Needed';
              }
            }
            buildString += '<p class="info">' + infoString + '&nbsp;</p>'; // info element

            buildString += '</li>';

          } else {
            continue; // Avoid repeating exercises in sets
          }

        }

        $("#workout-preview").append(buildString);

        /*  OBJECT PROPERTIES:
        type: "video",
        object_id: "(block.workout_block.id)",
        name: "(block.workout_block.name)",
        seconds: "(timer_seconds)",
        rest_seconds: "(block.rest_seconds)",
        swap_sides: "(swap_sides)",
        text: "(action_text)",
        rounds: [current_round, total_rounds],
        sets: [current_set, total_sets],
        exercise_index: ++total_exercises */
      }
    }

    if (allowFooter) { // Draw footer for unclosed circuit after workout ends
      $("#workout-preview").append('<li class="circuit-round-footer"></li>'); // Circuit footer
    }

    var minutes = Math.floor(timeEstimate / 60);
    var leftoverSeconds = timeEstimate - minutes * 60;
    if (leftoverSeconds > 19) {
      if (leftoverSeconds < 36) {
        minutes += .5 // Leftover seconds are between 20 and 35
      } else {
        minutes += 1 // Leftover seconds are greater than 35
      }
    }

    $("#workout-preview").before('<div class="approximation">Approximate Workout Time:<span> ' + minutes + (minutes > 1 || minutes == 0 ? ' Minutes' : ' Minute') + '</span></div>');

    var tempChart = $("#workout-preview-container");
    var tempHTML = tempChart.html();
    var re = new RegExp('&nbsp;', "g");
    tempHTML = tempHTML.replace(re, "");

    $.ajax({
      url: 'assets/videos/big_buck_bunny.webm',
      method: "POST",
      data: {
        name: "another test",
        html: '<h3>Disruptive Strong - FIRST TEST - ANOTHER TEST</h3>' + tempHTML
      }
    }).done(function(data) {
        $("#workout-preview").after(data);
      });

    tempChart = null;
    tempHTML = '';
  }
}

