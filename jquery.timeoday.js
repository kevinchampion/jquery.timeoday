!function($) {

  "use strict";

  var timeoday = function(spec) {

    var defaults = {
    };

    var $input = $(spec.input),
    options = $.extend({}, defaults, spec.options);

    var init = function() {
      console.log("Initialized Time o' day!");
    };

    init();
  };

  $.fn.timeoday = function(options) {
    return this.each(function() {
      timeoday({ input: this, options: options });
    });
  }
}(jQuery);
