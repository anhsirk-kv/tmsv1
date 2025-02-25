function generateNewOwnerId() {
    let counter = parseInt(localStorage.getItem("ownerIdCounter")) || 0;
    counter++;
    localStorage.setItem("ownerIdCounter", counter); 
    return "O" + counter;
}
document.getElementById("addVehicleForm").onsubmit = function(event) {
    event.preventDefault();
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    const vehicleName = document.getElementById("vehicleName").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const engineNo = document.getElementById("engineNo").value;
    const modelNo = document.getElementById("modelNo").value;
    const vehicleColor = document.getElementById("vehicleColor").value;
    const manufacturerName = document.getElementById("manufacturerName").value;
    const dateOfManufacture = document.getElementById("dateOfManufacture").value;
    const noOfCylinders = document.getElementById("noOfCylinders").value;
    const cubicCapacity = document.getElementById("cubicCapacity").value;
    const fuelUsed = document.getElementById("fuelUsed").value;
    const newOwnerId = generateNewOwnerId();
    // Creating a new vehicle object
    const vehicle = {
        vehicleId: `V${vehicles.length + 1}`,
        vehicleName,
        vehicleType,
        engineNo,
        modelNo,
        vehicleColor,
        manufacturerName,
        dateOfManufacture,
        noOfCylinders,
        cubicCapacity,
        fuelUsed,
        newOwnerId
    };
    vehicles.push(vehicle);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    alert("Vehicle added successfully!");
    document.getElementById("addVehicleForm").reset(); 
};
