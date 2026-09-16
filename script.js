//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let emailId = document.getElementById("emailId").value;

    alert(
        "First Name: " + firstName + " " +
        "Last Name: " + lastName + " " +
        "Phone Number: " + phoneNumber + " " +
        "Email ID: " + emailId
    );
});