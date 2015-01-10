(function($){
  $(function(){

    $(".button-foo").sideNav({edge: 'right', menuWidth: 240, activationWidth: 70});
    $('select').material_select();
    $(".dropdown-button").dropdown({
      hover: false
    });
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();

    // pickadate init with preset Today
    $('.datepicker').pickadate({
       onStart: function ()
        {
          var date = new Date();
          this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()]);
        }
    });
    // wow.js init
    new WOW().init();

    // init  dataTables
    // $('table').dataTable({
    //   "scrollX": true
    // });

    $('.home').pagepiling({
        touchSensitivity: 5,
        sectionSelector: '.pagepiling',
        verticalCentered: true,
        menu: '#menu',
        anchors: ['Start', 'page2', 'page3'],
        navigation: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space