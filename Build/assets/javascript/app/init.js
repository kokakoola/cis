(function($){
  $(function(){

    $(".button-foo").sideNav({edge: 'right'});
    $('select').material_select();
    $(".dropdown-button").dropdown({
      hover: false
    });
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space