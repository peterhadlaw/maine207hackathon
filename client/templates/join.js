var ERRORS_KEY = 'joinErrors';

Template.join.created = function() {
  Session.set(ERRORS_KEY, {});

  this.autorun(function() {
    if(Session.get(ERRORS_KEY).hasOwnProperty('none'))
      swal("Oops...", Session.get(ERRORS_KEY).none, "error");
  });
};

Template.join.helpers({
  errorMessage: function(field) {
    return Session.get(ERRORS_KEY)[field];
  },
  errorClass: function(field) {
    return !!Session.get(ERRORS_KEY)[field] ? 'has-error' : '';
  }
});



Template.join.events({
  'submit form': function(e) {
    e.preventDefault();

    var passwordConfirm = $(e.target).find('[name=passwordConfirm]').val();

    var user = {
      email: $(e.target).find('[name=email]').val(),
      password: $(e.target).find('[name=password]').val(),
      profile: {
        firstName: $(e.target).find('[name=firstName]').val(),
        lastName: $(e.target).find('[name=lastName]').val(),
        schoolName: $(e.target).find('[name=schoolName]').val(),
        skillLevel: $(e.target).find('[name=skillLevel]').val(),
        teamCaptainEmail: $(e.target).find('[name=teamCaptainEmail]').val()
      }
    }

    var errors = validateUser(user);

    if (!passwordConfirm)
      errors.passwordConfirm = "Password confirmation required";

    if (user.password !== passwordConfirm)
      errors.passwordConfirm = "Password and password confirmation do not match";

    if(errors.email || errors.firstName || errors.lastName ||
       errors.schoolName || errors.skillLevel || errors.passwordConfirm)
      return Session.set(ERRORS_KEY, errors);

    if(_.keys(errors).lenth)
      return;

    Accounts.createUser(user, function(error) {
      if(error)
        return Session.set(ERRORS_KEY, {'none': error.reason});

      Session.set('joinSuccessFirstName', user.profile.firstName);
      Router.go('joinSuccess');
    });

  }
})
