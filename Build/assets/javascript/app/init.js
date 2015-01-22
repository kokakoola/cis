(function($){

  loadDataTable = function(){
    $('table.registry').DataTable({
      searching: false,
      lengthChange: false,
      'iDisplayLength': 100,
       columnDefs: [
          { "orderable": false, "targets": 0 }
        ]
    });
  };

  $(function(){

    $(".callSlideout").sideNav({edge: 'right', menuWidth: 440, activationWidth: 70});

    $('select').material_select();

    $(".dropdown-button").dropdown({
      hover: false
    });

    $(".dropdown-button-simplified").dropdown({
      constrain_width: false,
      hover: false
    });

    $('.collapsible').collapsible();

    $('#initiate-form .collapse').collapse('show');

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


    loadDataTable();

    $(".js-addDataRow").addDataRow();

    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space