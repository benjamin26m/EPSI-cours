class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isTriangle() {
        const sides = [this.a, this.b, this.c];
        if (sides.some(s => typeof s !== 'number' || s <= 0)) return false;
        const [x, y, z] = sides;
        return x + y > z && x + z > y && y + z > x;
    }

    getType() {
        if (!this.isTriangle()) return 'not a triangle';
        const [a, b, c] = [this.a, this.b, this.c];
        if (a === b && b === c) return 'equilateral';
        if (a === b || a === c || b === c) return 'isosceles';
        return 'scalene';
    }

    getPerimeter() {
        if (!this.isTriangle()) return null;
        return this.a + this.b + this.c;
    }

    getArea() {
        if (!this.isTriangle()) return null;
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

module.exports = {
    Cube: Cube,
    Triangle: Triangle
}