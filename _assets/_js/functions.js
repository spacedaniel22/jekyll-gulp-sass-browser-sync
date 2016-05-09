function displayDate(element) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd
  }
  if(mm<10) {
    mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;
  element.html(today);
}

$(document).ready(function(e) {
  // displayDate($('.header'));
});
