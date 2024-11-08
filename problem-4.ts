{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }


    function calculateShapeArea(param: Circle | Rectangle): number | void {
        if (typeof param.shape === "string" && param.shape === "circle") {
            const circleArea = parseFloat((Math.PI * param.radius * param.radius).toFixed(2));
            return circleArea;
        }
        else if (typeof param.shape === "string" && param.shape === "rectangle") {
            return (param.height * param.width);
        }
    }

    console.log(calculateShapeArea({ shape: "circle", radius: 5 }))
    console.log(calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    }))
}