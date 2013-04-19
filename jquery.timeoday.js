!function($) {

  "use strict";

  var timeoday = function(spec) {

    var defaults = {
      resultsClass: 'timeoday-results',
      activeClass: 'timeoday-active'
    };

    var $input = $(spec.input),
      options = $.extend({}, defaults, spec.options),
      $results = $('<ol></ol>').addClass(options.resultsClass),
      activeClassSelector = '.' + options.activeClass.split(' ').join('.'),
      focused, visible, mouseover;

    var init = function() {
      $input.on('focus', focus);
      $input.on('blur', blur);
      $input.on('keypress', keypress);
      $input.on('keyup', keyup);
      $input.on('keydown', keydown);
    
      $results.on('click', click);
      $results.on('mouseenter', 'li', mouseenter);
      $results.on('mouseleave', 'li', mouseleave);
    };

    var focus = function() {
      console.log('Focus');
    };

    var blur = function() {
      console.log('Blur');
    }

    var keypress = function() {
      console.log('Key press');
    };

    var keyup = function() {
      console.log('Key up');
    };

    var keydown = function() {
      console.log('Key down');
    };

    var click = function() {
      console.log('Click');
    };

    var mouseenter = function() {
      console.log('Mouse Enter');
    };

    var mouseleave = function() {
      console.log('Mouse Leave');
    };

    init();
  };

  $.fn.timeoday = function(options) {
    return this.each(function() {
      timeoday({ input: this, options: options });
    });
  }
}(jQuery);
