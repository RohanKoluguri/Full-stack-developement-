document.getElementById("messageForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
