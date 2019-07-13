 var map, places, infoWindow;
  var markers = [];
  var autocomplete;
  var countryRestrict = { 'country': [] };
  var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
  var hostnameRegexp = new RegExp('^https?://.+?/');
