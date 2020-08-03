//Method for selecting and displaying the file
function readfile(fileselected) {
    //S1: Check wheather the 'file' interface is selected by the browser
    if (fileselected.files) {
        //S2: Read the selected file 
        var file = fileselected.files[0];
        //S3:Set the MIME type, this is set using the regular expression
        var imgMimeType = /image.*/;//This is using regular expression
        //S4:Read the HTML Image tag
        var img = document.getElementById('img');
        //S5:Check weather the selected file is image file 
        if (file.type.match(imgMimeType)) {
            //S6:Create Reader to Read the file
            var reader = new FileReader();
            //S7:Set the onload event, this is an Asynchrnous operation
            reader.onload = (function (Img) { return function (e) { Img.src = e.target.result; }; })(img);
            // S8:read the file as a the data url for the image
            reader.readAsDataURL(file);
        } else {
            alert("The selected file is not image file");
        }
    } else {
        alert("File Interface is not selected");
    }
}