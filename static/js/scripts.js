
    function whichButton(buttonElement) {
        var element = document.getElementById("wrapper");
        var main_strona = document.getElementById("page-content");

        if (!element.classList.contains("active")) {

            element.classList.add("active");
            main_strona.classList.remove("col-xs-11");
            main_strona.classList.add("col-xs-10");

        }
        else if (element.classList.contains("active")) {


            element.classList.remove("active");
            main_strona.classList.remove("col-xs-10");
            main_strona.classList.add("col-xs-11");
        }

    }

    $(window).innerWidth(function () {
        if ($(window).width() >= 767) {
            $("#wrapper").removeClass("active");
        }
        else {
            $("#wrapper").addClass("active");
        }
    });
    // For example, get window size on window resize
    $(window).resize(function () {
        if ($(window).width() <= 767) {
            $("#wrapper").removeClass("active");
        }
        else {
            $("#wrapper").addClass("active");
        }
    });


  // $(document).ready(function () {
  //   $('#contact-form').bootstrapValidator({
  //     // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
  //     feedbackIcons: {
  //       valid: 'glyphicon glyphicon-ok',
  //       invalid: 'glyphicon glyphicon-remove',
  //       validating: 'glyphicon glyphicon-refresh'
  //     },
  //     fields: {
  //       first_name: {
  //         validators: {
  //           stringLength: {
  //             min: 2,
  //           },
  //           notEmpty: {
  //             message: 'Please supply your first name'
  //           }
  //         }
  //       },
  //       last_name: {
  //         validators: {
  //           stringLength: {
  //             min: 2,
  //           },
  //           notEmpty: {
  //             message: 'Please supply your last name'
  //           }
  //         }
  //       },
  //       email: {
  //         validators: {
  //           notEmpty: {
  //             message: 'Please supply your email address'
  //           },
  //           emailAddress: {
  //             message: 'Please supply a valid email address'
  //           }
  //         }
  //       },
  //       phone: {
  //         validators: {
  //           notEmpty: {
  //             message: 'Please supply your phone number'
  //           },
  //           regexp: {
  //             regexp: /^(?:[0+]48 )?\d{3}-\d{3}-\d{3}$/i,
  //             message: 'Please supply a vaild phone number with area code'
  //           }
  //         }
  //       },


  //       website: {
  //         validators: {
  //           stringLength: {
  //             min: 7,
  //             max: 200,
  //             message: 'Please enter correct website url'
  //           },
  //           notEmpty: {
  //             message: 'Please supply correct website url'
  //           }
  //         }
  //       }
  //     }
  //   })
  //     .on('success.form.bv', function (e) {
  //       $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
  //       $('#contact-form').data('bootstrapValidator').resetForm();

  //       // Prevent form submission
  //       e.preventDefault();

  //       // Get the form instance
  //       var $form = $(e.target);

  //       // Get the BootstrapValidator instance
  //       var bv = $form.data('bootstrapValidator');

  //       // Use Ajax to submit form data
  //       $.post($form.attr('action'), $form.serialize(), function (result) {
  //         console.log(result);
  //       }, 'json');
  //     });
  // });

