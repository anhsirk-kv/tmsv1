function updateRegistrationDetails() {
    const appNo = document.getElementById("appNo").value;
    const vehNo = document.getElementById("vehNo").value;
    const vehId = document.getElementById("vehId").value;
    const ownerId = document.getElementById("ownerId").value;
    const dateOfPurchase = document.getElementById("dateOfPurchase").value;
    const distributorName = document.getElementById("distributorName").value;

    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    const registrationIndex = registrations.findIndex(reg => reg.appNo === appNo);

    if (registrationIndex === -1) {
        alert("Error: Application number not found.");
        return false;
    }

    registrations[registrationIndex] = {
        appNo,
        vehNo,
        vehId,
        ownerId,
        dateOfPurchase,
        distributorName
    };

    localStorage.setItem("registrations", JSON.stringify(registrations));
    alert("Registration details updated successfully!");
    return false;
}
