var soundlist = new Map();
soundlist.set("Asgowned","Asgowned");
soundlist.set("NASTY","NASTY");
soundlist.set("NO","NO NO no no");
soundlist.set("WALUIGI","WALUIGI");
soundlist.set("sans-ation","Sans-ation");
soundlist.set("PAIN","*PAIN*");
soundlist.set("TOO BAD","TOO BAD");
soundlist.set("Leave","Leave my friends alone");
soundlist.set("slap","*slap*");
soundlist.set("child1","WHO'S TOUCHIN DA CHILD");
soundlist.set("child2","DON TUCH DA CHILD");
soundlist.set("arguing","*arguing that you should not touch the child*");
soundlist.set("NUU","NUU");
soundlist.set("arguing2","*more arguing*");


// Define variables first, at the top of the function.
var audio = document.createElement("audio");
var baseurl = "sounds/";
var i;
var btn;

// Define the button's click event here.    
var clickButton = function(e) {
    // 'this' relates to the clicked button.
    var index = this.getAttribute("sound");
    // Set the audio's src attribute to the correct URL.
    audio.src = baseurl + index + ".ogg";
    audio.play();
}

window.addEventListener("keyup", dealWithKeyboard, false);

function dealWithKeyboard(e) {
    if (e.keyCode == "83") {
        stopSounds();
    }
}

function stopSounds() {
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}

//WIP

for (var name in soundlist) {
    // Create the button...
    btn = document.createElement("button");
    // Store the index on the button itself...
    btn.setAttribute("sound", name);
    // Set the click callback to the clickButton function.
    btn.addEventListener("click", clickButton);
    // Set the text to that of the array.
    btn.textContent = soundlist.get(name);
    // Add the button to the body.
    document.body.appendChild(btn);
};
