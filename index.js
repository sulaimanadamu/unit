/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = .2204 pound
*/

let lengthResult = document.getElementById("length")
let volumeResult = document.getElementById("volume")
let massResult = document.getElementById("mass")

function convert(){
    let value = Number(document.getElementById("inputfield").value)

   
    let meterToFeet = value * 3.281
    let feetToMeter = value / 3.281
    let literToGallon = value * 0.264
    let gallonToLiter = value / 0.264
    let kiloToPounds = value * 2.204
    let PoundsToKilo = value / 2.204
    console.log(value)
    console.log(typeof (Number(document.getElementById("inputfield").value)))
    if (value !== 0){
    lengthResult.textContent = `${value} meters = ${parseFloat(meterToFeet.toFixed(3))} feet | ${value} feet = ${parseFloat(feetToMeter.toFixed(3))}meters`
    volumeResult.textContent = `${value} liters= ${parseFloat(literToGallon.toFixed(3))} gallons | ${value} gallons = ${parseFloat(gallonToLiter.toFixed(3))} liters`
    massResult.textContent = `${value} kilos = ${parseFloat(kiloToPounds.toFixed(3))} pounds | ${value} pounds = ${parseFloat(PoundsToKilo.toFixed(3))} kilos`
}

else{
    value = 1
    meterToFeet = 3.281
    feetToMeter =  1 / 3.281
    literToGallon =  0.264
    gallonToLiter =  1 / 0.264
    kiloToPounds =  2.204
    PoundsToKilo =  1 / 2.204
    lengthResult.textContent = `${value} meters = ${parseFloat(meterToFeet.toFixed(3))} feet | ${value} feet = ${parseFloat(feetToMeter.toFixed(3))}meters`
    volumeResult.textContent = `${value} liters= ${parseFloat(literToGallon.toFixed(3))} gallons | ${value} gallons = ${parseFloat(gallonToLiter.toFixed(3))} liters`
    massResult.textContent = `${value} kilos = ${parseFloat(kiloToPounds.toFixed(3))} pounds | ${value} pounds = ${parseFloat(PoundsToKilo.toFixed(3))} kilos`
    }

}

// document.getElementById("btn").addEventListener("click", convert())