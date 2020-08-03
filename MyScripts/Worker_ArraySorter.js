//raise the onmessage event and start processing the received data ==> e
self.addEventListener('message', function (e) {
 debugger;
    var data = [];
    data = e.data.sort();
    self.postMessage(data); // post the message back to caller
}, false);
