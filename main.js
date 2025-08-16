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

//----------

//Basic Functions Needed Throughout applications 

//1 
function delta(a, b) {
    return a - b; 
}

//2 
function slope (x1, y1, x2, y2) {
    return delta(y2, y1) /  delta(x2, x1);
}

//3
function average (n1, n2) {
    return (n1 + n2) / 2;
}

//4 
function length (x1, y1, x2, y2) {
    let dx = delta (x2, x1)
    let dy = delta(y2,y1)
    return Math.sqrt(dx ** 2 + dy ** 2)
}

//-------------

//Rectangular Prism 

//volume
function rect_prism_volume(){
    let height = Number(document.getElementById("height").value);
    let width = Number(document.getElementById("width").value);
    let length = Number(document.getElementById("length").value);

    let volume = length * width * height;

    let rounded_volume = round_user(volume);
    
    document.getElementById("volume_output").textContent = `${rounded_volume} cubic units`;
}

//surface area 
function rect_prism_Sarea() {

    let height = Number(document.getElementById("height").value);
    let width = Number(document.getElementById("width").value);
    let length = Number(document.getElementById("length").value);

    let Sarea = 2 * (length*width + length*height + width*height);

    let rounded_Sarea = round_user(Sarea);
    
    document.getElementById("Sarea_output").textContent = ` ${rounded_Sarea} square units`;
}


//---------------

// Triangular Prism 
//volume of 
function tri_prism_volume() {
    let base = Number(document.getElementById("triBase").value);
    let height = Number(document.getElementById("triHeight").value);
    let length = Number(document.getElementById("triLength").value);

    let volume = 0.5 * base * height * length;

    let rounded_volume = round_user(volume);

    document.getElementById("tri_volume_output").textContent = `${rounded_volume} cubic units`;

}


// Surface Area of a right angled triangular prism 

function tri_prism_Sarea() {
    let base = Number(document.getElementById("triBase").value);
    let height = Number(document.getElementById("triHeight").value);
    let length = Number(document.getElementById("triLength").value);

    // Hypotenuse of the right triangle
    let hypotenuse = Math.sqrt(base**2 + height**2);

    // Area of 2 triangular bases
    let triangleArea = base * height;

    // Area of 3 rectangles: base×length, height×length, hypotenuse×length
    let side1 = base * length;
    let side2 = height * length;
    let side3 = hypotenuse * length;

    let surfaceArea = triangleArea + side1 + side2 + side3;

    let rounded_surfaceArea = round_user(surfaceArea);

    document.getElementById("tri_SA_output").textContent = `${rounded_surfaceArea} square units`;
}

