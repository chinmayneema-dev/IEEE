function learnMore() {
    alert("Welcome to IEEE Computer Society! Explore our website for more details.");
}

function Show_History(){
    let description = document.getElementById('history');
    if (description.style.display === "none") {
        description.style.display = "block"; // Used For Showing the Description
    } else {
        description.style.display = "none"; // Used For hiding the Description
    }
}