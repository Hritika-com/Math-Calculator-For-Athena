//ROund to the nearesst 'decimals' number of decimals 
function round(value, decimals){
    return Math.round(value * 10**decimals) / 10**decimals;
}

// ROund answers to the nearest 
function round_user (value){
    let d = Number(document.getElementById("rounding").value)
    //returns number to the fixed amount of decimal places user wants, according to the value provided 

    // Math.round rounds a number to the nearest whole number only. that's why we are using .toFixed instead
    return Number(value.toFixed(d));
}
