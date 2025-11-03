const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. Right triangle 3-4-5 (scalene)', function(done) {
        let t1 = new Triangle(3,4,5);
        expect(t1.isTriangle()).to.equal(true);
        expect(t1.getType()).to.equal('scalene');
        expect(t1.getPerimeter()).to.equal(12);
        expect(t1.getArea()).to.equal(6);
        done();
    });

    it('2. Equilateral triangle 2-2-2', function(done) {
        let t2 = new Triangle(2,2,2);
        expect(t2.isTriangle()).to.equal(true);
        expect(t2.getType()).to.equal('equilateral');
        expect(t2.getPerimeter()).to.equal(6);
        expect(t2.getArea()).to.be.closeTo(Math.sqrt(3), 1e-9);
        done();
    });

    it('3. Not a triangle 1-2-3', function(done) {
        let t3 = new Triangle(1,2,3);
        expect(t3.isTriangle()).to.equal(false);
        expect(t3.getType()).to.equal('not a triangle');
        expect(t3.getPerimeter()).to.equal(null);
        expect(t3.getArea()).to.equal(null);
        done();
    });

});