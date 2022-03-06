const arguments = process.argv.slice(2);

function circleArea(r){
    let area = (Math.PI * (r ** 2)).toFixed(2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
}

circleArea(arguments[0]*1);