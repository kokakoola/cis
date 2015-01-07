(function($){
  $(function(){

    $(".button-foo").sideNav({edge: 'right', menuWidth: 240, activationWidth: 70});
    $('select').material_select();
    $(".dropdown-button").dropdown({
      hover: false
    });
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
    $('.datepicker').pickadate({
       onStart: function ()
            {
                var date = new Date();
                this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()]);
            }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space