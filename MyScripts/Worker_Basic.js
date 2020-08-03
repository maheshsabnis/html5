//Worker Script
//Sunscribe to the onmessage to received data from sender
self.addEventListener('message', function (e) {
    //data posted to sender after processing
    self.postMessage(e.data + " send back from Worked");
}, false);

