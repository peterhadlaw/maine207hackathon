Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'appNotFound',
  loadingTemplate: 'appLoading',
});

Router.route('/', {
  name: 'home'
});
