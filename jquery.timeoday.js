!function($) {

  "use strict";

  var timeoday = function(spec) {

    var defaults = {
      start : 360,
      granularity : 30,
      astronomical : false,
    };

    var $input = $(spec.input),
    options = $.extend({}, defaults, spec.options);

    var init = function() {

      var times = timeoptions(options.start, options.granularity, options.astronomical);

      // console.log(times);

    };

    var timeoptions = function(start, granularity, astronomical) {

      var times = [], time, hour, minute, meridian, formattedTime;

      for (var i = 0; i < 1440; i++) {

        // Offset based on start time.
        time = i + start;
        if (time > 1440) {
          time = time - 1440;
        }

        if (time % granularity == 0) {

          hour = Math.floor(time / 60);
          minute = time - (hour * 60);
          meridian = (hour > 11 && hour < 24) ? 'pm' : 'am';

          if (minute < 10) {
            minute = '0' + minute;
          }

          if (astronomical) {

            hour = (hour === 24) ? '00' : hour;
            formattedTime = hour + ':' + minute;

          }
          else {

            hour = (hour === 0) ? 12 : hour;
            hour = (hour > 12) ? hour - 12 : hour;
            formattedTime = hour + ':' + minute + meridian;

          }

          times.push(formattedTime);

        }

      }

      return(times);

    }

    init();

  };

  $.fn.timeoday = function(options) {
    return this.each(function() {
      timeoday({ input: this, options: options });
    });
  }

}(jQuery);
