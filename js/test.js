var nameArray= [
        "YO",
        "YOO",
        "YOOO",
    ];

// Define variables first, at the top of the function.
var audio = document.createElement("audio");
var baseurl = "sounds/";
var i;
var btn;

// Define the button's click event here.    
var clickButton = function(e) {
    // 'this' relates to the clicked button.
    var index = this.getAttribute("data-i");
    // Set the audio's src attribute to the correct URL.
    audio.src = baseurl + index + ".wav";
    audio.play();
}
    
for (i=0; i < nameArray.length; i++) {
    // Create the button...
    btn = document.createElement("button");
    // Store the index on the button itself...
    btn.setAttribute("data-i", i);
    // Set the click callback to the clickButton function.
    btn.addEventListener("click", clickButton);
    // Set the text to that of the array.
    btn.textContent = nameArray[i];
    // Add the button to the body.
    document.body.appendChild(btn);
};