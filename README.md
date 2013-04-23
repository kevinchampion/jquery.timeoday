jquery.timeoday
===============

A lightweight and flexible plugin for selecting times for input in a text field. The intention of which is to mimic Google Calendar's implementation of time select fields.

Google Calendar features a select dropdown when you click upon the text field that allows you to select a time with the mouse pointer rather than having to enter numbers with keys. After surveying multiple options, this seems to be a the least worst interaction pattern.

## $(input).timeoday(options)

The timeoday function accepts an options object.

* `start` - Integer time of day in minutes where 0 is 12:00am and 360 is 6:00am. Determines the default start time of the dropdown so that the options are
anchored by the time passed in, which may help users more quickly select the
time they're looking for.
* `granularity` - Time in minutes between time options. This setting dictates how many options will be presented in the dropdown.
* `astronomical` - Boolean, if true a 24 hour astronomical/military clock is used. Otherwise a 12 hour clock is used.

## TODO
* Dropdown list every half hour
* Click on text field
* Default time with their format
* Parse time
* Duration
* Scroll to selected option
