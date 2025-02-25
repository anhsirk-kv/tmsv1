function deleteRegistrationDetails() {
    const appNo = document.getElementById("appNo").value;

    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    const registrationIndex = registrations.findIndex(reg => reg.appNo === appNo);

    if (registrationIndex === -1) {
        alert("Error: Application number not found.");
        return false;
    }

    registrations.splice(registrationIndex, 1);
    localStorage.setItem("registrations", JSON.stringify(registrations));
    alert("Registration details deleted successfully!");
    return false;
}
