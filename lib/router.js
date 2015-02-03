Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'appLoading',
});

Router.route('/', function() {
  this.render('home');
  this.render('homeLower', {to: 'lowerBody'});
}, {
  name: 'home'
});

Router.route('/join', {
  name: 'join'
});

Router.route('/join/success', {
  name: 'joinSuccess'
});

Router.route('/frequently-asked-questions', {
  name: 'faq'
});

Router.route('/schedule', function() {
  this.render('schedule');
  this.render('scheduleLower', {to: 'lowerBody'});
}, {
  name: 'schedule'
});
