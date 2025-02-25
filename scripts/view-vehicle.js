function fetchVehicleDetails() {
    const vehicleId = document.getElementById('vehicleId').value;
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    console.log(vehicles);
    const vehicle = vehicles.find(v => v.vehicleId === vehicleId);

    if (vehicle) {
        let vehicleDetailsHTML = `
            <p><strong>Vehicle ID:</strong> ${vehicle.vehicleId}</p>
            <p><strong>Vehicle Name:</strong> ${vehicle.vehicleName}</p>
            <p><strong>Vehicle Type:</strong> ${vehicle.vehicleType}</p>
            <p><strong>Engine No:</strong> ${vehicle.engineNo}</p>
            <p><strong>Model No:</strong> ${vehicle.modelNo}</p>
            <p><strong>Vehicle Color:</strong> ${vehicle.vehicleColor}</p>
            <p><strong>Manufacturer Name:</strong> ${vehicle.manufacturerName}</p>
            <p><strong>Date of Manufacture:</strong> ${vehicle.dateOfManufacture}</p>
            <p><strong>Number of Cylinders:</strong> ${vehicle.noOfCylinders}</p>
            <p><strong>Cubic Capacity:</strong> ${vehicle.cubicCapacity}</p>
            <p><strong>Fuel Type:</strong> ${vehicle.fuelUsed}</p>
        `;
        document.getElementById('vehicleDetails').innerHTML = vehicleDetailsHTML;
    } else {
        alert('Vehicle not found!');
    }
}
