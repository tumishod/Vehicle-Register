const vehicles = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2018,
    type: "sedan",
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2020,
    type: "sedan",
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2019,
    type: "truck",
  },
  {
    make: "Chevrolet",
    model: "Tahoe",
    year: 2021,
    type: "suv",
  },
  {
    make: "BMW",
    model: "X5",
    year: 2017,
    type: "suv",
  },
  {
    make: "Harley-Davidson",
    model: "Iron 883",
    year: 2019,
    type: "motorcycle",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    type: "suv",
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2016,
    type: "sedan",
  },
  {
    make: "Ram",
    model: "1500",
    year: 2020,
    type: "truck",
  },
  {
    make: "Ducati",
    model: "Monster",
    year: 2021,
    type: "motorcycle",
  },
];

function addVehicle(make,model,year,type){
  const vehicle = {
    make: make,
    model: model,
    year: year,
    type: type
  };
  
  vehicles.push(vehicle);

  return vehicles;
}

function getTotalVehicles () {
  return vehicles.length;
}

function getAverageYear () {
  const totalYears = vehicles.reduce((sum, vehicle) => sum + vehicle.year, 0);

  return totalYears / vehicles.length;
}


document.getElementById('addVehicleBtn').addEventListener('click', function() {
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const type = document.getElementById('type').value;
  

  addVehicle(make, model, year, type);

  document.getElementById('vehicleForm').reset();

  document.getElementById('result').innerText = "Vehicle added successfully!";
});

document.getElementById('showTotalVehiclesBtn').addEventListener('click', function() {
  const totalVehicles = getTotalVehicles();
  document.getElementById('result').innerText = "Total Vehicles: " + totalVehicles;
});

document.getElementById('showAverageYearBtn').addEventListener('click', function() {
  const averageYear = getAverageYear();
  document.getElementById('result').innerText = "Average Year: " + averageYear.toFixed(2);
});

document.getElementById('showTotalByTypeBtn').addEventListener('click', function() {
  const totalByType = getTotalVehiclesByType();
  
  let resultText = "Total Vehicles by Type:";
  for (const type in totalByType) {
      resultText += `${type.charAt(0).toUpperCase() + type.slice(1)}: ${totalByType[type]}`;
  }

  document.getElementById('result').innerText = ;
});

function validate() {
  let isValid = true;

  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const type = document.getElementById('type');

  if (make.value === "") {
    make.style.borderColor = "red";
    isValid = false;
  } 
  else {
    make.style.borderColor = "green";
  }

  if (model.value === "") {
    model.style.borderColor = "red";
    isValid = false;
  }
  else {
    model.style.borderColor = "green";
  }

  if (year.value === "") {
    year.style.borderColor = "red";
    isValid = false;
  } 
  else {
    year.style.borderColor = "green";
  }

  if (type.value === "") {
      type.style.borderColor = "red";
      isValid = false;
  } else {
      type.style.borderColor = "green";
  }

  return isValid;
}

document.getElementById('addVehicleBtn').addEventListener('click', function() {
  if (validate()) {
     
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const type = document.getElementById('type').value;
    
    addVehicle(make, model, year, type);

    document.getElementById('vehicleForm').reset();
    document.getElementById('make').style.borderColor = ;
    document.getElementById('model').style.borderColor = ;
    document.getElementById('year').style.borderColor = ;
    document.getElementById('type').style.borderColor = ;
    document.getElementById('result').innerText = "Successfully!";
  } 
  else {
    document.getElementById('result').innerText = "Please fill in all required fields.";
  }
});

function getTotalVehiclesByType () {
  const typeCounts ={};

  vehicles.forEach(vehicle => {
    if (typeCounts[vehicle.type]) {
      typeCounts[vehicle.type]++;
    }
    else {
      typeCounts[vehicle.type] = 1;
    }
  });
  return typeCounts;
}