// Access webhose.io API to retreive News headlines from the onion

var Onion = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=theonion.com&size=12",
  "dataType": "json",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "9a49be98-19cb-ebc6-9f52-4be90c88222b"
  }
}

$.ajax(Onion).done(function (response) {
  console.log(response);
  console.log(response.posts[0].title);

  // Create onionArray with Titles from Onion search results

for (var i = 0; i < response.posts.length; i++) {
    var onionArray = [];
    onionArray.push(response.posts[i].title);
    console.log(onionArray);
}


});

// Run For Loop to extract Title of each article and put titles into new array



// Access webhose.io API to retrieve New headlines from CNN

var CNN = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=cnn.com&size=12",
  "dataType": "json",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "9a49be98-19cb-ebc6-9f52-4be90c88222b"
  }
}

$.ajax(CNN).done(function (response) {
  console.log(response);
  console.log(response.posts[0].title);

// Create cnnArray with Titles from CNN search results

  for (var i = 0; i < response.posts.length; i++) {
    var cnnArray = [];
    cnnArray.push(response.posts[i].title);
    console.log(cnnArray);
};

// Access webhose.io API to retrieve New headlines from TMZ

var TMZ = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=tmz.com&size=12",
  "dataType": "json",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "9a49be98-19cb-ebc6-9f52-4be90c88222b"
  }
}

$.ajax(TMZ).done(function (response) {
  console.log(response);
  console.log(response.posts[0].thread.title);

  // Create tmzArray with Titles from TMZ search results

  for (var i = 0; i < response.posts.length; i++) {
    var tmzArray = [];
    tmzArray.push(response.posts[i].thread.title);
    console.log(tmzArray);
};

});

});



