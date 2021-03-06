import EmberRouter from '@ember/routing/router';
import config from 'maribel-cosmo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('gallery');
  this.route('contact');
  this.route('policies');
});
