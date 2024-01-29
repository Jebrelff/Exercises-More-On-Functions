// Provided Function to check fuel level
function checkFuel(level) {
    if (level > 100000){
        return 'green';
    } else if (level > 50000){
        return 'yellow';
    } else {
        return 'red';
    }
}

// Provided Function to check stock status
function holdStatus(arr){
    if (arr.length < 7) {
        return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
        return `Over capacity by ${arr.length - 7} items.`
    } else {
        return "Full";
    }
}

// Provided initial fuel level and cargo hold
let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

// Check current Fuel level and Hold status
console.log("Before raid:");
console.log("Fuel level: " + checkFuel(fuelLevel) + ", Amount: " + fuelLevel);
console.log("Hold status: " + holdStatus(cargoHold));
console.log("Cargo hold: [ " + cargoHold.join(', ') + " ]\n")


// Non suspicious function to find the safe raid amount
let nonSuspiciousFunction = function(a) {
    let raidAmount = 0;

    if (checkFuel(a) === 'green') {
        raidAmount = a - 100001;
    }
    else if (checkFuel(a) === 'yellow') {
        raidAmount = a - 50001;
    }

    return raidAmount;
}

// Non suspicious function 2 to raid cargo
let nonSuspiciousFunction2 = function(arr) {
    let item1, item2;

    // Choose 2 precious items from the array and replace them with water. Also, water itself can't be chosen.
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'water') continue;

        if(item1 === undefined) {
            item1 = arr[i];
            arr[i] = 'water';
        } else if (item2 === undefined) {
            item2 = arr[i];
            arr[i] = 'water';
        } else break;
    }

    return [item1, item2];
}

// IRS function to initiate the raid
let irs = function(levelOfFuel, itemsInCargo) {
    let [ item1, item2 ] = nonSuspiciousFunction2(itemsInCargo);
    let fuelRaided = nonSuspiciousFunction(levelOfFuel);

    // updating original fuel level for the raid
    fuelLevel -= fuelRaided;

    return `Raided ${fuelRaided} kg of fuel from the tanks, and stole '${item1}' and '${item2}' from the cargo hold.`
}

// Check raid status
console.log(irs(fuelLevel, cargoHold) + "\n");

// Check current Fuel level and Hold status
console.log("After raid:");
console.log("Fuel level: "+ checkFuel(fuelLevel) + ", Amount: "+ fuelLevel);
console.log("Hold status: "+ holdStatus(cargoHold));
console.log("Cargo hold: [ " + cargoHold.join(', ') + " ]\n")