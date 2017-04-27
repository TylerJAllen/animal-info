$(function() {
  $("button").on('click', function(event) {
    event.preventDefault();
    var animal = $(this).text();
     //alert (animal);
    if (animal === "Polar Bear") {
      $(".info").hide();
      $("#polarBearInfo").show();
    }
    else if (animal === "Dik Dik") {
      $(".info").hide();
      $("#dikDikInfo").show();
    }
    else if (animal === "Hippo") {
      $(".info").hide();
      $("#hippoInfo").show();
    }
    else {
      //do nothing
    }
  });
});


//var flavor = $("input:radio[name=flavor]:checked").val();
