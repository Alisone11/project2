$('document').ready(function() {
   $('.btn').click(function (e) { 
      $(this).parent().toggleClass('active');
   });
 });