
// get input
function getInput() {
    let plainEnglish = document.getElementById("plain-english").value;
    let inputs = document.getElementById("inputs").value;
    let desired_output = document.getElementById("desired-output").value;
    let steps_to_output = document.getElementById("steps-to-output").value;

    return [plainEnglish, inputs, desired_output, steps_to_output];
}

// create notes
function createNotes(){
    all_input = getInput();
    console.log(all_input);
    
}



// clears all text areas
function clearText() {
    document.getElementById("plain-english").value = "";
    document.getElementById("inputs").value = "";
    document.getElementById("desired-output").value = "";
    document.getElementById("steps-to-output").vlvalueaue = "";
}