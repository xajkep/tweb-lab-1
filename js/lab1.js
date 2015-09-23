var counter = 1;

$(document).on('mousemove', function(e) {
  $('#pos').text(e.pageX + ', ' + e.pageY);

  $('#names').html('');
  for (i = 0; i < counter; i++) {
    var gender = chance.gender();
    var first = chance.first({'gender':gender});

    var res = "<li class='name' style='background-color: ";

    res += gender === "Female" ? "blue" : "red";

    res += "'>" + first + ' ' + chance.last() + '</li>'

    $('#names').html($('#names').html() + res);
  }
});

function refreshClock() {
  $('#clock').text(Date());
}

setInterval(refreshClock, 1000);

$(document).keydown(function(e) {
  if (e.which == 16) {
    counter++;
  }
});

$.getJSON('./rooms.json', function( data ) {
  var rooms = "";
  $.each( data, function( key, val ) {
    rooms += key + " - " + val + "<br/>";
  });

  $('#data').html(rooms);
});

$('#btnAlert').on('click', function(e) {
  alert("This is an ALERT");
});

$('#btnToggle').on('click', function(e) {
  $('#names').toggle();
});
