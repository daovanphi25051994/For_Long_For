let tableContent = "";
for (let i = 1; i <= 10; i++){
    tableContent += "<tr>";
    for (let j = 1; j <= 10; j++){
        tableContent += "<td>" + i * j + "</td>";
    }
    tableContent += "</tr>";
}
document.getElementById("table").innerHTML = tableContent;