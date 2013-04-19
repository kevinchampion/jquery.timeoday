!function($) {

  "use strict";

  var timeoday = function(spec) {

    var defaults = {
      resultsClass: 'timeoday-results',
      activeClass: 'timeoday-active'
    };

    var $input = $(spec.input),
      options = $.extend({}, defaults, spec.options),
      $results = $('<ol><li>1</li><li>2</li><li>3</li></ol>').addClass(options.resultsClass),
      activeClassSelector = '.' + options.activeClass.split(' ').join('.'),
      visible, mouseover;

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
      show();
    };

    var blur = function() {
      if (!mouseover) { hide() }
    }

    var keypress = function() {
      console.log('Key press');
    };

    var keyup = function(e) {
      if (~$.inArray(e.keyCode, [16, 17, 18, 38, 40])) {
        return;
      }

      if (~$.inArray(e.keyCode, [9, 13])) {
        if (visible) {
          select();
        }
        return;
      }

      if (e.keyCode == 27) {
        if (visible) {
          hide();
        }
        return;
      }

      render();

      return false;
    };

    var keydown = function(e) {
      move(e);
    };

    var move = function(e) {
      if (!visible) { return }
      
      // Ignore tab, enter or escape
      if (~$.inArray(e.keyCode, [9, 13, 27])) {
        e.preventDefault();
        return;
      }

      // Up arrow
      if (e.keyCode == 38) {
        e.preventDefault();
        previous();
        return;
      }

      // Down arrow
      if (e.keyCode == 40) {
        e.preventDefault();
        next();
        return;
      }
      
      e.stopPropagation();
    };

    var previous = function() {
      var $current = $results.children(activeClassSelector),
        $previous = $current.prev();
      
      if ($previous.length) {
        $current.removeClass(options.activeClass);
        $previous.addClass(options.activeClass);
      }
    };

    var next = function() {
      var $current = $results.children(activeClassSelector),
        $next = $current.next();

      if ($next.length) {
        $current.removeClass(options.activeClass);
        $next.addClass(options.activeClass);
      }
    };

    var click = function() {
      console.log('Click');
    };

    var mouseenter = function(e) {
      console.log('Mouse Enter');
    };

    var mouseleave = function() {
      console.log('Mouse Leave');
    };

    var hide = function() {
    };

    var show = function() {
      $results.children(':first').addClass(options.activeClass);
      $results.insertAfter($input).show();
      visible = true;
    };

    init();
  };

  $.fn.timeoday = function(options) {
    return this.each(function() {
      timeoday({ input: this, options: options });
    });
  }
}(jQuery);
