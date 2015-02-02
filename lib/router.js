Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'appLoading',
});

Router.route('/', {
  name: 'home'
});

Router.route('/join', {
  name: 'join'
});

Router.route('/join/success', {
  name: 'join/success'
});
