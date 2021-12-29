
// get input
function getInput() {
    let plainEnglish = document.getElementById("plain-english").value;
    let inputs = document.getElementById("inputs").value;
    let desired_output = document.getElementById("desired-output").value;
    let steps_to_output = document.getElementById("steps-to-output").value;

    return [plainEnglish, inputs, desired_output, steps_to_output];
}


// create new note section

function create_new_note(h1Text, paraText, checkbox, checkboxText) {

    let h1 = document.createElement("H1");
    let para = document.createElement("P");
    
    h1.innerText = h1Text;
    para.innerText = paraText;

    if (checkbox != undefined) {
        if (checkbox.checked === true)
            checkboxText += " Yes.";
        else
            checkboxText += " No.";
        para.innerText += checkboxText
    }

    document.getElementById("notes").appendChild(h1);
    document.getElementById("notes").appendChild(para);
}


// create notes
function createNotes(){
    let all_input = getInput();
    console.log(all_input);
    let allH1 = document.getElementsByTagName("h2");
    
    
    create_new_note(allH1[0].innerText, all_input[0], document.getElementById("interface"), "\n\nDo you need an interface?")
    create_new_note(allH1[1].innerText, all_input[1], document.getElementById("entered-by-user"), "\n\nIs the entered by the user?");
    create_new_note(allH1[2].innerText, all_input[2]);
    create_new_note(allH1[3].innerText, all_input[3]);
}



// clears all text areas
function clearText() {
    document.getElementById("plain-english").value = "";
    document.getElementById("inputs").value = "";
    document.getElementById("desired-output").value = "";
    document.getElementById("steps-to-output").value = "";
}