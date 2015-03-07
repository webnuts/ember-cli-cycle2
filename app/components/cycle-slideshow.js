import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var self = this;
    var supportedCycleArguments = ['timeout', 'fx', 'prev', 'next', 'slides', 'carouselVisible', 'carouselFluid', 'pager', 'log', 'swipe', 'pauseOnHover', 'autoHeight', 'paused'];
    var overwrittenDefaults = {
      log: false
    };
    var cycleArguments = {};

    supportedCycleArguments.forEach(function(key) {
      var value = self.get(key);
      if (value !== undefined) {
        cycleArguments[key] = value;
      }
      else if (overwrittenDefaults[key] !== undefined) {
        cycleArguments[key] = overwrittenDefaults[key];
      }
    });
    var element = this.$();
    element.cycle(cycleArguments);
  },

  willClearRender: function() {
    var element = this.$();
    element.cycle('destroy');
  }
});