document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Admission Form Submitted Successfully!");

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("admissionForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get student details
        const firstName = document.querySelector('[name="firstName"]').value;
        const lastName = document.querySelector('[name="lastName"]').value;
        const dob = document.querySelector('[name="dob"]').value;
        const email = document.querySelector('[name="email"]').value;
        const address = document.querySelector('[name="address"]').value;
        const religion = document.querySelector('[name="religion"]').value;
        const gender = document.querySelector('[name="gender"]').value;
        const course = document.querySelector('[name="course"]').value;
        const session = document.querySelector('[name="session"]:checked').value;
        const shs = document.querySelector('[name="shs"]').value;
        const examType = document.querySelector('[name="examType"]:checked').value;
        const fatherName = document.querySelector('[name="fatherName"]').value;
        const fatherPhone = document.querySelector('[name="fatherPhone"]').value;
        const motherName = document.querySelector('[name="motherName"]').value;
        const motherPhone = document.querySelector('[name="motherPhone"]').value;
        const parentAddress = document.querySelector('[name="parentAddress"]').value;

        // Display submitted details
        alert(
            "ADMISSION SUBMITTED SUCCESSFULLY!\n\n" +
            "Student: " + firstName + " " + lastName + "\n" +
            "Date of Birth: " + dob + "\n" +
            "Email: " + email + "\n" +
            "Address: " + address + "\n" +
            "Religion: " + religion + "\n" +
            "Gender: " + gender + "\n" +
            "Course: " + course + "\n" +
            "Session: " + session + "\n" +
            "SHS: " + shs + "\n" +
            "Examination: " + examType + "\n\n" +
            "Father: " + fatherName + "\n" +
            "Father's Telephone: " + fatherPhone + "\n" +
            "Mother: " + motherName + "\n" +
            "Mother's Telephone: " + motherPhone + "\n" +
            "Parents' Address: " + parentAddress
        );

    });

});