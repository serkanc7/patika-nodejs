const circleArea = (r) => {
    let area = (Math.PI * (r ** 2)).toFixed(2);
    console.log(area);
}

const circleCircumference = (r) => {
    let circumference = (Math.PI * 2 * r).toFixed(2);
    console.log(circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}