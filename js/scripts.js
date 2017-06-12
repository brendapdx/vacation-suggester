// User Input Logic

$(document).ready(function(){
  $("form").submit(function(event){
    var q1 = $("#season").val();
    var q2 = $("#budget").val();
    var q3 = $("#who").val();
    var q4 = $("#style").val();
    var q5 = $("#time").val();
    var input = $("input#name").val();
    $(".name").text(input);

    if (q1 === "spring" && q2 === "luxury" && q3 === "kids" && q4 === "outdoor" && q5 === "more"){
      $("#wa-dc").hide();
      $("#disney").hide();
      $("#paris").hide();
      $("#wyoming").hide();
      $("#newzealand").show();
    }
      else if (q1 === "summer" && q2 === "cheap" && q3 === "kids" && q4 === "outdoor" && q5 === "week"){
      $("#wa-dc").hide();
      $("#disney").hide();
      $("#paris").hide();
      $("#newzealand").hide();
      $("#wyoming").show();
      }

      else if (q1 === "autumn" && q2 === "luxury" && q3 === "adults" && q4 === "city" && q5 === "more"){
      $("#wa-dc").hide();
      $("#disney").hide();
      $("#wyoming").hide();
      $("#newzealand").hide();
      $("#paris").show();
      }

      else if (q1 === "winter" && q2 === "cheap" && q3 === "kids" && q4 === "city" && q5 === "week"){
      $("#wa-dc").hide();
      $("#newzealand").hide();
      $("#paris").hide();
      $("#wyoming").hide();
      $("#disney").show();
      }

      else if (q1 === "spring" && q2 === "cheap" && q3 === "kids" && q4 === "city" && q5 === "week"){
      $("#wyoming").hide();
      $("#disney").hide();
      $("#paris").hide();
      $("#newzealand").hide();
      $("#wa-dc").show();
      }

      else {
      $("#wa-dc").hide();
      $("#disney").hide();
      $("#paris").hide();
      $("#newzealand").hide();
      $("#wyoming").show();
      }
    event.preventDefault();
  });
});
console.log("Vacation time!");
