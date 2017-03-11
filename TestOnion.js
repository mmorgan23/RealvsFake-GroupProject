var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://webhose.io/search?token=fc70c82d-7bd6-4bed-aafe-4d4e65c7e5db&format=json&q=&site=theonion.com&size=12",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "b27444d7-5b46-7589-9e02-f6923cd6dda4"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});