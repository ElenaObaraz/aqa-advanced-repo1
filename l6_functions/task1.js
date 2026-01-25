//Function Declaration
function areaRectangle(width, height) {
    const area = width * height;
    return area;
}

console.log(areaRectangle(5, 10));


//Function Expression
const areaRectangle2 = function(width, height) {
    return width * height;
};

console.log(areaRectangle2(6, 11));

//Arrow Function
const areaRectangle3 = (width, height) => width * height;

console.log(areaRectangle3(7, 12));
