$(document).ready(function () {
  // Fix validator bug for email addresses.
  jQuery.validator.addMethod(
    "email",
    function (value, element) {
      return (
        this.optional(element) ||
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
          value
        )
      );
    },
    "Please enter valid email address!"
  );
  // Validate Login Form
  $("#loginForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: "required",
    },
    messages: {
      password: "Please Enter your password",
      email: {
        required: "Email address is required",
        email: "Enter a valid Email Address",
      },
    },
    errorPlacement: (error, element) => {
      element.parent().after(error);
      element.parent().addClass("has-error");
    },
    success: (error, element) => {
      $(element).parent().removeClass("has-error");
      error.remove();
    },
    onsubmit: () => {},
  });
  $("#forgetPassForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "Email address is required",
        email: "Enter a valid Email Address",
      },
    },
    errorPlacement: (error, element) => {
      element.parent().after(error);
      element.parent().addClass("has-error");
    },
    success: (error, element) => {
      $(element).parent().removeClass("has-error");
      error.remove();
    },
    onsubmit: () => {},
  });
  $("#registerForm").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        minlength: 5,
      },
      confirmPassword: {
        minlength: 5,
        equalTo: "#password",
      },
      country: {
        required: true,
      },
      phone: {
        required: true,
        minlength: 6,
      },
      type: {
        required: true,
      },
      profile: {
        required: true,
      },
      agreement: {
        required: true,
      },
    },
    messages: {
      name: "Your Name is Required.",
      password: {
        required: "Password is Required",
        minlength: "Password must contain at least 5 characters.",
      },
      confirmPassword: {
        equalTo: "Both Passwords must match.",
      },
      email: {
        required: "Email address is required",
        email: "Enter a valid Email Address",
      },
      country: "Your Country is Required.",
      phone: {
        required: "Phone Number is Required",
        minlength: "Phone must contain at least 6 digits.",
      },
      type: "Registration Type is Required.",
      profile: "Your Profile is Required.",
      agreement: "You must agree to our terms first.",
    },
    errorPlacement: (error, element) => {
      element.parent().after(error);
      element.parent().addClass("has-error");
    },
    success: (error, element) => {
      $(element).parent().removeClass("has-error");
      error.remove();
    },
    onsubmit: () => {},
  });
  $("#resetPassForm").validate({
    rules: {
      password: {
        minlength: 5,
      },
      confirmPassword: {
        minlength: 5,
        equalTo: "#password",
      },
    },
    messages: {
      password: {
        required: "كلمة السر مطلوبة",
        minlength: "كلمة السر لا تقل عن 4 أحرف",
      },
      confirmPassword: {
        equalTo: "يجب تطابق كلمة السر وتأكيد كلمة السر",
      },
    },
    errorPlacement: (error, element) => {
      element.parent().after(error);
      element.parent().addClass("has-error");
    },
    success: (error, element) => {
      $(element).parent().removeClass("has-error");
      error.remove();
    },
    onsubmit: () => {},
  });
});
