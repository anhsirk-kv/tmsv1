if (!localStorage.getItem("vehicles")) {
    const initialVehicles = [
        {
            vehicleId: "V1", 
            vehicleName: "Toyota Corolla",
            vehicleType: "Car",
            engineNo: "1234ABC567",
            modelNo: "2023X",
            vehicleColor: "White",
            manufacturerName: "Toyota",
            dateOfManufacture: "2023-06-10",
            noOfCylinders: 4,
            cubicCapacity: 1798,
            fuelUsed: "Petrol",
            ownerId: "O1"  // Reference to Owner ID
        },
        {
            vehicleId: "V2", 
            vehicleName: "Honda Civic",
            vehicleType: "Car",
            engineNo: "9876XYZ432",
            modelNo: "2022Z",
            vehicleColor: "Black",
            manufacturerName: "Honda",
            dateOfManufacture: "2022-03-15",
            noOfCylinders: 4,
            cubicCapacity: 1998,
            fuelUsed: "Diesel",
            ownerId: "O2"  // Reference to Owner ID
        },
        {
            vehicleId: "V3", 
            vehicleName: "Yamaha FZ",
            vehicleType: "Bike",
            engineNo: "FZ9876AB12",
            modelNo: "FZ2021",
            vehicleColor: "Blue",
            manufacturerName: "Yamaha",
            dateOfManufacture: "2021-05-10",
            noOfCylinders: 1,
            cubicCapacity: 149,
            fuelUsed: "Petrol",
            ownerId: "O3"  // Reference to Owner ID
        },
        {
            vehicleId: "V4", 
            vehicleName: "Suzuki Swift",
            vehicleType: "Car",
            engineNo: "SW12345A2",
            modelNo: "2020Y",
            vehicleColor: "Red",
            manufacturerName: "Suzuki",
            dateOfManufacture: "2020-08-05",
            noOfCylinders: 4,
            cubicCapacity: 1200,
            fuelUsed: "Petrol",
            ownerId: "O4"  // Reference to Owner ID
        },
        {
            vehicleId: "V5", 
            vehicleName: "KTM Duke 200",
            vehicleType: "Bike",
            engineNo: "KTM200ABCD1",
            modelNo: "2020K",
            vehicleColor: "Orange",
            manufacturerName: "KTM",
            dateOfManufacture: "2020-11-12",
            noOfCylinders: 1,
            cubicCapacity: 199,
            fuelUsed: "Petrol",
            ownerId: "O5"  // Reference to Owner ID
        }
    ];