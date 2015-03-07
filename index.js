/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-cycle2',
  included: function(app) {
    this._super.included(app);
    
    app.import(app.bowerDirectory + '/jquery-cycle2/build/jquery.cycle2.js');
    app.import(app.bowerDirectory + '/jquery-cycle2/build/plugin/jquery.cycle2.carousel.min.js');
    app.import(app.bowerDirectory + '/jquery-cycle2/build/plugin/jquery.cycle2.swipe.min.js');
  }
};