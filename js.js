

*/ choose your body classes */$('.navbar-nav a').on('click', function() {
 */ bootstrap classes navbar-collapse or navbar-toggle or navbar-toggl it is mechanism */
    if ($('.navbar-toggl').css('display') != 'none') {
  */ move */      $(".navbar-toggl").trigger("click");
    }
});