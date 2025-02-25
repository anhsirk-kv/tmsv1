function fetchVehicleDetails() {
    const vehicleId = document.getElementById('vehicleId').value;
    
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    const vehicle = vehicles.find(v => v.vehicleId === vehicleId);
    
    if (vehicle) {
        document.getElementById('vehicleName').value = vehicle.vehicleName;
        document.getElementById('vehicleType').value = vehicle.vehicleType;
        document.getElementById('engineNo').value = vehicle.engineNo;
        document.getElementById('modelNo').value = vehicle.modelNo;
        document.getElementById('vehicleColor').value = vehicle.vehicleColor;
        document.getElementById('manufacturerName').value = vehicle.manufacturerName;
        document.getElementById('dateOfManufacture').value = vehicle.dateOfManufacture;
        document.getElementById('noOfCylinders').value = vehicle.noOfCylinders;
        document.getElementById('cubicCapacity').value = vehicle.cubicCapacity;
        document.getElementById('fuelUsed').value = vehicle.fuelUsed;
    } else {
        alert('Vehicle not found!');
    }
}

document.getElementById("modifyVehicleForm").onsubmit = function(event) {
    event.preventDefault();

    const vehicleId = document.getElementById('vehicleId').value;

    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    const vehicleIndex = vehicles.findIndex(v => v.vehicleId === vehicleId);

    if (vehicleIndex !== -1) {
        vehicles[vehicleIndex] = {
            vehicleId,
            vehicleName: document.getElementById("vehicleName").value,
            vehicleType: document.getElementById("vehicleType").value,
            engineNo: document.getElementById("engineNo").value,
            modelNo: document.getElementById("modelNo").value,
            vehicleColor: document.getElementById("vehicleColor").value,
            manufacturerName: document.getElementById("manufacturerName").value,
            dateOfManufacture: document.getElementById("dateOfManufacture").value,
            noOfCylinders: document.getElementById("noOfCylinders").value,
            cubicCapacity: document.getElementById("cubicCapacity").value,
            fuelUsed: document.getElementById("fuelUsed").value
        };

        localStorage.setItem("vehicles", JSON.stringify(vehicles));

        alert("Vehicle modified successfully!");
        document.getElementById("modifyVehicleForm").reset(); 
        alert("Vehicle not found!");
    }
};
