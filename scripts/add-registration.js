// Function to save registration details
function saveRegistrationDetails() {
    const appNo = document.getElementById("appNo").value;
    const vehNo = document.getElementById("vehNo").value;
    const vehId = document.getElementById("vehId").value;
    const ownerId = document.getElementById("ownerId").value;
    const dateOfPurchase = document.getElementById("dateOfPurchase").value;
    const distributorName = document.getElementById("distributorName").value;

    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    // Check if the Application Number (APP_NO) already exists
    const existingRegistration = registrations.find(reg => reg.appNo === appNo);

    if (existingRegistration) {
        alert("Error: Application number already exists.");
        return false;  // Prevent form submission if appNo already exists
    }

    // Create a new registration object
    const newRegistration = {
        appNo,
        vehNo,
        vehId,
        ownerId,
        dateOfPurchase,
        distributorName
    };

    registrations.push(newRegistration);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    document.getElementById("registrationForm").reset();
    alert("Registration details added successfully!");
    return false;
}
