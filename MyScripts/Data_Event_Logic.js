(function () {
    var contacts = {
        "addressbook": [
        {
            "name": "Mahesh S.",
            "email" :"ms@hotmail.com"
        },
        {
            "name": "Leena S.",
            "email": "ls@hotmail.com"
        },
        {
            "name": "Tejas S.",
            "email": "tms@hotmail.com"
        },
        {
            "name": "Vikram P.",
            "email": "pv@hotmail.com"
        },
        {
            "name": "Mayur T.",
            "email": "mt@hotmail.com"
        },
        {
            "name": "Mahesh M.",
            "email": "mm@hotmail.com"
        },
        {
            "name": "Vikas P.",
            "email": "vp@hotmail.com"
        },
        {
            "name": "Deepal P.",
            "email": "pd@hotmail.com"
        },
        {
            "name": "Prashant D.",
            "email": "pd@hotmail.com"
        },
        {
            "name": "Amtabh N.",
            "email": "an@hotmail.com"
        }
        ]
    };
    //The object containing Functions
    var addr = {
        getContacts: function () {
            //alert("Method Called");
            //Get the DOM Element
            var output = document.getElementById('output');
            //Save the JSON object into the variavle
            var addrbook = contacts.addressbook;
            //Get the lenght
            var count = addrbook.length;

            //Ready for Iteration
            var i;
            //Clear Contents of the 'output' <div>
            output.innerHTML = "";
            if (count > 0)
            {
                //loop through contacts
                for ( i = 0; i < count; i++) {
                    var obj = addrbook[i];
                        output.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                }
            }
        }
    };
    // save the button to a variable
    var btn = document.getElementById("get-all");
    // activate the click event on your button
    btn.addEventListener("click", addr.getContacts, false);
})();