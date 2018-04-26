function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    let distance = Math.abs(parseInt(arg1) - parseInt(arg2)) - blockRange
    if (distance > 0) {
      return `${Math.abs(distance)} blocks out of range`
    } else {
      return `within range by ${Math.abs(distance)}`
    }
  }
}


function produceTipCalculator(tip_percent) {
  return function(tip) {
    return tip * tip_percent
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
