// Organization validation start
jQuery("#organization_form").validate({
  ignore: [],
  errorClass: "invalid-feedback animated fadeInDown",
  errorElement: "div",
  errorPlacement: function(e, a) {
    jQuery(a).parents(".form-group > div").append(e)
  },
  highlight: function(e) {
    jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
  },
  success: function(e) {
    jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
  },
  rules: {
    "name": {
      required: !0,
      minlength: 3
    },
    "denomination": {
      required: !0,
      minlength: 3
    },
    "address": {
      required: !0,
      minlength: 3
    },
    "country": {
      required: !0,
    },
    "state": {
      required: !0,
      minlength: 3,
    },
    "city": {
      required: !0,
      minlength: 3,
    },
    "zipcode": {
      required: !0,
      minlength: 3,
    },
  },
  messages: {
    "name": {
      required: "Please enter organization name",
      minlength: "Your Organization Name must consist of at least 3 characters"
    },
    "denomination": {
      required: "Please enter denomination",
      minlength: "Your Organization Name must consist of at least 3 characters"
    },
    "address": {
      required: "Please enter address",
      minlength: "Your address Name must consist of at least 3 characters"
    },
    "country": {
      required: "Please select country",
    },
    "state": {
      required: "Please enter state",
      minlength: "Your state must consist of at least 3 characters"
    },
    "city": {
      required: "Please enter city",
      minlength: "Your city must consist of at least 3 characters"
    },
    "zipcode": {
      required: "Please enter zipcode",
      minlength: "Your State must consist of at least 3 characters"
    }
  }
});
// Organization validation end

// Church validation start
jQuery("#church_form").validate({
  ignore: [],
  errorClass: "invalid-feedback animated fadeInDown",
  errorElement: "div",
  errorPlacement: function(e, a) {
    jQuery(a).parents(".form-group > div").append(e)
  },
  highlight: function(e) {
    jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
  },
  success: function(e) {
    jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
  },
  rules: {
    "name": {
      required: !0,
      minlength: 3
    },
    "parent_organization": {
      required: !0,
    },
    "address": {
      required: !0,
      minlength: 3
    },
    "country": {
      required: !0,
    },
    "state": {
      required: !0,
      minlength: 3,
    },
    "city": {
      required: !0,
      minlength: 3,
    },
    "zipcode": {
      required: !0,
      minlength: 3,
    },
    "email": {
      required: !0,
      email: !0,
    },
    "mobile": {
      required: !0,
      minlength: 10,
    },
    // "timezone": {
    //   required: !0,
    // },
  },
  messages: {
    "name": {
      required: "Please enter organization name",
      minlength: "Your Organization Name must consist of at least 3 characters"
    },
    "parent_organization": {
      required: "Please select parent organization",
      minlength: "Your Organization Name must consist of at least 3 characters"
    },
    "address": {
      required: "Please enter address",
      minlength: "Your address Name must consist of at least 3 characters"
    },
    "email": {
      required: "Please enter email",
      minlength: "Your address Name must consist of at least 3 characters"
    },
    "mobile": {
      required: "Please enter mobile",
      minlength: "Enter valid mobile number"
    },
    "country": {
      required: "Please select country",
    },
    "state": {
      required: "Please enter state",
      minlength: "Your state must consist of at least 3 characters"
    },
    "city": {
      required: "Please enter city",
      minlength: "Your city must consist of at least 3 characters"
    },
    "zipcode": {
      required: "Please enter zipcode",
      minlength: "Your State must consist of at least 3 characters"
    },
    // "timezone": {
    //   required: "Please select timezone",
    // }
  }
});
// Church validation end