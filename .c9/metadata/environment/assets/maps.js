{"filter":false,"title":"maps.js","tooltip":"/assets/maps.js","undoManager":{"mark":34,"position":34,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":[" var map, places, infoWindow;","  var markers = [];","  var autocomplete;","  var countryRestrict = { 'country': [] };","  var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';","  var hostnameRegexp = new RegExp('^https?://.+?/');",""],"id":1}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":7,"column":0},"end":{"row":73,"column":4},"action":"insert","lines":[" var countries = {","    'au': {","      center: { lat: -25.3, lng: 133.8 },","      zoom: 4","    },","","    'br': {","      center: { lat: -14.2, lng: -51.9 },","      zoom: 3","    },","","    'ca': {","      center: { lat: 62, lng: -110.0 },","      zoom: 3","    },","","    'fr': {","      center: { lat: 46.2, lng: 2.2 },","      zoom: 5","    },","","    'de': {","      center: { lat: 51.2, lng: 10.4 },","      zoom: 5","    },","","    'mx': {","      center: { lat: 23.6, lng: -102.5 },","      zoom: 4","    },","","    'nz': {","      center: { lat: -40.9, lng: 174.9 },","      zoom: 5","    },","","    'it': {","      center: { lat: 41.9, lng: 12.6 },","      zoom: 5","    },","","    'za': {","      center: { lat: -30.6, lng: 22.9 },","      zoom: 5","    },","","    'es': {","      center: { lat: 40.5, lng: -3.7 },","      zoom: 5","    },","","    'pt': {","      center: { lat: 39.4, lng: -8.2 },","      zoom: 6","    },","","    'us': {","      center: { lat: 37.1, lng: -95.7 },","      zoom: 3","","    },","","    'uk': {","      center: { lat: 54.8, lng: -4.6 },","      zoom: 5","    }","  };"],"id":3}],[{"start":{"row":73,"column":4},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":74,"column":0},"end":{"row":74,"column":2},"action":"insert","lines":["  "]},{"start":{"row":74,"column":2},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":75,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":75,"column":2},"end":{"row":78,"column":0},"action":"insert","lines":["  function reset() {","    location.reload();","  }",""],"id":5}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":8},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":8},"action":"remove","lines":["    "],"id":8}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":77,"column":3},"end":{"row":78,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":78,"column":0},"end":{"row":78,"column":2},"action":"insert","lines":["  "]},{"start":{"row":78,"column":2},"end":{"row":79,"column":0},"action":"insert","lines":["",""]},{"start":{"row":79,"column":0},"end":{"row":79,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":79,"column":2},"end":{"row":100,"column":3},"action":"insert","lines":[" function initMap() {","    map = new google.maps.Map(document.getElementById('map'), {","      zoom: countries.uk.zoom,","      center: countries.uk.center,","      mapTypeControl: true,","      panControl: true,","      zoomControl: true,","      streetViewControl: true,","    });","","    infoWindow = new google.maps.InfoWindow({","      content: document.getElementById('info-content')","    });","","    autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')), {","      types: ['(cities)'],","      componentRestrictions: countryRestrict","    });","","    places = new google.maps.places.PlacesService(map);","    autocomplete.addListener('place_changed', onPlaceChanged);","  }"],"id":11}],[{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "],"id":12}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"remove","lines":[" "],"id":13}],[{"start":{"row":100,"column":3},"end":{"row":101,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":101,"column":0},"end":{"row":101,"column":2},"action":"insert","lines":["  "]},{"start":{"row":101,"column":2},"end":{"row":102,"column":0},"action":"insert","lines":["",""]},{"start":{"row":102,"column":0},"end":{"row":102,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":102,"column":1},"end":{"row":102,"column":2},"action":"remove","lines":[" "],"id":15},{"start":{"row":102,"column":0},"end":{"row":102,"column":1},"action":"remove","lines":[" "]},{"start":{"row":101,"column":2},"end":{"row":102,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":101,"column":2},"end":{"row":102,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":102,"column":0},"end":{"row":102,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":102,"column":1},"end":{"row":102,"column":2},"action":"remove","lines":[" "],"id":17},{"start":{"row":102,"column":0},"end":{"row":102,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":102,"column":0},"end":{"row":112,"column":3},"action":"insert","lines":["  function onPlaceChanged(placeType) {","    var place = autocomplete.getPlace();","    if (place) {","      map.panTo(place.geometry.location);","      map.setZoom(15);","      search(placeType);","    }","    else {","      document.getElementById('autocomplete').placeholder = 'Enter a city';","    }","  }"],"id":18}],[{"start":{"row":112,"column":3},"end":{"row":113,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"insert","lines":["  "]},{"start":{"row":113,"column":2},"end":{"row":114,"column":0},"action":"insert","lines":["",""]},{"start":{"row":114,"column":0},"end":{"row":114,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":114,"column":1},"end":{"row":114,"column":2},"action":"remove","lines":[" "],"id":20},{"start":{"row":114,"column":0},"end":{"row":114,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":114,"column":0},"end":{"row":129,"column":23},"action":"insert","lines":[" // Searching for accomodations, bars/restaurants and tourist attractions","  function search(pt) {","    clearResults();","    clearMarkers();","    $(\"#accomodationButton\").val(\"Accomodation\");","    $(\"#barsRestaurantsButton\").val(\"Bars/Restaurants\");","    $(\"#touristButton\").val(\"Tourist Attractions\");","    var search = {","      bounds: map.getBounds(),","      types: pt","    };","","    places.nearbySearch(search, function(results, status) {","      if (status === google.maps.places.PlacesServiceStatus.OK) {","        clearResults();","        clearMarkers();"],"id":21}],[{"start":{"row":129,"column":23},"end":{"row":130,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":130,"column":0},"end":{"row":130,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":130,"column":4},"end":{"row":130,"column":8},"action":"remove","lines":["    "],"id":23},{"start":{"row":130,"column":0},"end":{"row":130,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":130,"column":0},"end":{"row":131,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":131,"column":0},"end":{"row":135,"column":4},"action":"insert","lines":["       // Creating a marker for the accomodation got","        for (var i = 0; i < results.length; i++) {","          var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));","          var markerIcon = MARKER_PATH + markerLetter + '.png';","\t\t  "],"id":25}],[{"start":{"row":134,"column":63},"end":{"row":135,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":135,"column":0},"end":{"row":135,"column":10},"action":"insert","lines":["          "]}],[{"start":{"row":135,"column":8},"end":{"row":135,"column":10},"action":"remove","lines":["  "],"id":27},{"start":{"row":135,"column":6},"end":{"row":135,"column":8},"action":"remove","lines":["  "]},{"start":{"row":135,"column":4},"end":{"row":135,"column":6},"action":"remove","lines":["  "]},{"start":{"row":135,"column":2},"end":{"row":135,"column":4},"action":"remove","lines":["  "]},{"start":{"row":135,"column":0},"end":{"row":135,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":135,"column":0},"end":{"row":136,"column":0},"action":"insert","lines":["",""],"id":28}],[{"start":{"row":136,"column":0},"end":{"row":141,"column":13},"action":"insert","lines":["         // Marker animations - dropping the icons incrementally on the map.","          markers[i] = new google.maps.Marker({","            position: results[i].geometry.location,","            animation: google.maps.Animation.DROP,","            icon: markerIcon","          });"],"id":29}],[{"start":{"row":141,"column":13},"end":{"row":142,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":142,"column":0},"end":{"row":142,"column":10},"action":"insert","lines":["          "]},{"start":{"row":142,"column":10},"end":{"row":143,"column":0},"action":"insert","lines":["",""]},{"start":{"row":143,"column":0},"end":{"row":143,"column":10},"action":"insert","lines":["          "]}],[{"start":{"row":143,"column":10},"end":{"row":151,"column":3},"action":"insert","lines":["          // When the user clicks on the accomodation marker it shows the details of that place","          markers[i].placeResult = results[i];","          google.maps.event.addListener(markers[i], 'click', showInfoWindow);","          setTimeout(dropMarker(i), i * 100);","          addResult(results[i], i);","        }","      }","    });","  }"],"id":31}],[{"start":{"row":143,"column":18},"end":{"row":143,"column":20},"action":"remove","lines":["  "],"id":32},{"start":{"row":143,"column":16},"end":{"row":143,"column":18},"action":"remove","lines":["  "]},{"start":{"row":143,"column":14},"end":{"row":143,"column":16},"action":"remove","lines":["  "]},{"start":{"row":143,"column":12},"end":{"row":143,"column":14},"action":"remove","lines":["  "]},{"start":{"row":143,"column":10},"end":{"row":143,"column":12},"action":"remove","lines":["  "]}],[{"start":{"row":151,"column":3},"end":{"row":152,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":152,"column":0},"end":{"row":152,"column":2},"action":"insert","lines":["  "]},{"start":{"row":152,"column":2},"end":{"row":153,"column":0},"action":"insert","lines":["",""]},{"start":{"row":153,"column":0},"end":{"row":153,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":153,"column":2},"end":{"row":160,"column":3},"action":"insert","lines":["  function clearMarkers() {","    for (var i = 0; i < markers.length; i++) {","      if (markers[i]) {","        markers[i].setMap(null);","      }","    }","    markers = [];","  }"],"id":34}],[{"start":{"row":160,"column":3},"end":{"row":161,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":161,"column":0},"end":{"row":161,"column":2},"action":"insert","lines":["  "]},{"start":{"row":161,"column":2},"end":{"row":162,"column":0},"action":"insert","lines":["",""]},{"start":{"row":162,"column":0},"end":{"row":162,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":162,"column":2},"end":{"row":167,"column":3},"action":"insert","lines":["  function dropMarker(i) {","    return function() {","      if (markers[i])","        markers[i].setMap(map);","    };","  }"],"id":36}]]},"ace":{"folds":[],"scrolltop":2306.25,"scrollleft":0,"selection":{"start":{"row":167,"column":3},"end":{"row":167,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":156,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1563026313631,"hash":"1224e1f3d2b237e1584c2d9b7ec6be7d18d86de3"}