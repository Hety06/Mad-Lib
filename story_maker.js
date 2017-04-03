function makeStory() {
    // get form values (2 points)
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    var n5 = document.getElementById('n5').value;
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    var v3 = document.getElementById('v3').value;
    var v4 = document.getElementById('v4').value;
    var a1 = document.getElementById('a1').value;
    var a2 = document.getElementById('a2').value;
    var a3 = document.getElementById('a3').value;
    var a4 = document.getElementById('a4').value;
    var u1 = document.getElementById('u1').value;
    var u2 = document.getElementById('u2').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    title = "The " + a1 + " Man";


    // Build story. you can add as many paragraphs as you like. (3 points)
    talltale = "This is the story of the " + a1 + " man and his " + n1 + ". One day a " + a1 + " man wanted to " + v1 + " some " + n2 + ". He really wanted to " + v1 + " enough " + n2 + " to feed his entire " + n1 + ". Unfortunately one day a huge " + n3 + " " + v2 + " his " + n2 + ". He had to do something about it, so he " + v3 + " a bunch of " + n4 + " in order to defeat the " + a2 + " " + n3 + ". After he " + v3 + " the " + n4 + " he had enough strength to " + v4 + " " + u1 + " feet of " + n5 + ". With this " + a3 + " new gift he was able to fight the " + u2 + " milimeter long " + n3 + " and save all of his " + n2 + ". What a " + a4 + " story.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)

    document.getElementById('title').innerHTML = title;
    document.getElementById('story').innerHTML = talltale;

    if (n1 == ""){
        document.getElementById('n1').style.backgroundColor = "#FF0000";
    }
    if (n2 == ""){
        document.getElementById('n2').style.backgroundColor = "#FF0000";
    }
    if (n3 == ""){
        document.getElementById('n3').style.backgroundColor = "#FF0000";
    }
    if (n4 == ""){
        document.getElementById('n4').style.backgroundColor = "#FF0000";
    }
    if (n5 == ""){
        document.getElementById('n5').style.backgroundColor = "#FF0000";
    }
    if (v1 == ""){
        document.getElementById('v1').style.backgroundColor = "#FF0000";
    }
    if (v2 == ""){
        document.getElementById('v2').style.backgroundColor = "#FF0000";
    }
    if (v3 == ""){
        document.getElementById('v3').style.backgroundColor = "#FF0000";
    }
    if (v4 == ""){
        document.getElementById('v4').style.backgroundColor = "#FF0000";
    }
    if (a1 == ""){
        document.getElementById('a1').style.backgroundColor = "#FF0000";
    }
    if (a2 == ""){
        document.getElementById('a2').style.backgroundColor = "#FF0000";
    }
    if (a3 == ""){
        document.getElementById('a3').style.backgroundColor = "#FF0000";
    }
    if (a4 == ""){
        document.getElementById('a4').style.backgroundColor = "#FF0000";
    }
    if (u1 == ""){
        document.getElementById('u1').style.backgroundColor = "#FF0000";
    }
    if (u2 == ""){
        document.getElementById('u2').style.backgroundColor = "#FF0000";
    }
}
