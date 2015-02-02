validateUser = function(user) {
  var errors = {};

  if (!user.email)
    errors.email = "Email required";

  if (!user.password)
    errors.password = "Password required";

  if (!user.profile.firstName)
    errors.firstName = "Please tell us your first name";

  if (!user.profile.lastName)
    errors.lastName = "Please tell us your last name";

  if (!user.profile.schoolName || user.profile.schoolName === "noSchoolSelected")
    errors.schoolName = "Please select what school you attend";

  if (!user.profile.skillLevel || user.profile.skillLevel === "noSkillLevelSelected")
    errors.skillLevel = "Please select a skill level";

  return errors;
}

Meteor.users.allow({
  insert: function(userId, user) {
    var errors = validateUser(user);
    check(user, {
      profile: {
        firstName: String,
        lastName: String,
        schoolName: String,
        skillLevel: String,
        teamCaptainEmail: String
      }
    });
    return !(!!errors);
  }
});
