function displayVehicles() {
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    const vehicleTableBody = document.getElementById("vehicleTable").getElementsByTagName('tbody')[0];

    vehicleTableBody.innerHTML = "";

    vehicles.forEach(vehicle => {
        const row = vehicleTableBody.insertRow();
        Object.keys(vehicle).forEach(key => {
            const cell = row.insertCell();
            cell.textContent = vehicle[key];
        });
    });
}

window.onload = function() {
    displayVehicles();
};
