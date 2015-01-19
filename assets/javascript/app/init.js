(function($){
  $(function(){

    $(".callSlideout").sideNav({edge: 'right', menuWidth: 440, activationWidth: 70});
    $('select').material_select();
    $(".dropdown-button").dropdown({
      hover: false
    });
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();

    // pickadate init with preset Today
    $('.datepicker.today').pickadate({
       onStart: function ()
        {
          var date = new Date();
          this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()]);
        }
    });

    $('.datepicker').pickadate();

    // wow.js init
    new WOW().init();

    // skillset.js init
    // $("#skillset").skillset({
    //   object:object,
    //   duration:40
    // });

    // init  dataTables
    $('table.registry').DataTable({
    });

    $(".js-addDataRow").addDataRow();

    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space