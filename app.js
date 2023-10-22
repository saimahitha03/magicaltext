const input = document.getElementById("input");
const output = document.getElementById("output");

function capital() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('capital')
        output.appendChild(paragraph);
    }
}

function smaller() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('smaller')
        output.appendChild(paragraph);
    }
}

function first() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('first')
        output.appendChild(paragraph);
    }
}

function bold() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('bold')
        output.appendChild(paragraph);
    }
}

function italic() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('italic')
        output.appendChild(paragraph);
    }
}

function underline() {
    if (input.value == "") {
        output.innerHTML = "";
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Please enter valid prompt inside the input field ❓"
        paragraph.classList.add('error')
        output.appendChild(paragraph);
    }
    else {
        output.innerHTML = ''
        let paragraph = document.createElement("p");
        paragraph.innerHTML = input.value
        paragraph.classList.add('underline')
        output.appendChild(paragraph);
    }

}