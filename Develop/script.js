// Wraps all code that communicates with the DOM to ensure
// the code isn't run until the browser has finished loading the HTML
$(document).ready(function () {

  //once new data has been saved, write function to save data locally
  $(".saveBtn").on("click", function () {
    // returns the value attribute(description)
    let description = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // sets/saves item in local storage
    localStorage.setItem(time, description);
  });

  function timeCheck() {
    // locating user's current time (in 24-hour format)
    var currentHour = dayjs().hour();

    // using a loop to extract the listed local time from each element's id
    $(".time-block").each(function () {
      var localTime = parseInt($(this).attr("id").split("-")[1]);

      // using local hour time to compare vs current time and color code
      // past, present, and future times
      if (localTime === currentHour) {
        $(this).addClass("present");
      } else if (localTime < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (localTime > currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  timeCheck();

  // loads all user input from localStorage and SET
  // the values of each input's textarea element or description

  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23"));
  $("#hour-0 .description").val(localStorage.getItem("hour-0"));

  // displays the current date in the header of the page
  $("#currentDate").text(dayjs().format("ddd, MMM D, YYYY (hA)"));
});
