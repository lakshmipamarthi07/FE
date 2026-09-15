let output = "";

for (let i = 1; i <= 10; i++) {
    output += "<h2>Table of " + i + "</h2>";

    for (let j = 1; j <= 10; j++) {
        output += i + " × " + j + " = " + (i * j) + "<br>";
    }

    output += "<br>";
}

document.getElementById("tables").innerHTML = output;