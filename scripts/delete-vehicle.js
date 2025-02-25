function deleteVehicle() {
    const vehicleId = document.getElementById("vehicleId").value.trim();

    if (!vehicleId) {
        alert("Please enter a vehicle ID!");
        return;
    }

    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    const index = vehicles.findIndex(vehicle => vehicle.vehicleId === vehicleId);

    if (index !== -1) {
        vehicles.splice(index, 1);

        localStorage.setItem("vehicles", JSON.stringify(vehicles));

        alert("Vehicle deleted successfully!");
    } else {
        alert("Vehicle not found!");
    }
}
