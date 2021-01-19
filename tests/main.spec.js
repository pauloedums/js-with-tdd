import { expect } from 'chai';
import {sum, sub, div, mult } from '../src/main';

describe('Calc', () => {
  let arr;
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  describe('Smoke test', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
    });
  });

  describe('Sum', () => {

    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });

  });


  describe('Sub', () => {

    it('should return 0 when `sum(2,2)`', () => {
      expect(sub(2,2)).to.be.equal(0);
    });

    it('should return -4 when `sum(2,2)`', () => {
      expect(sub(6,10)).to.be.equal(-4);
    });

  });


  describe('Div', () => {

    it('should return 1 when `sum(2,2)`', () => {
      expect(div(2,2)).to.be.equal(1);
    });

    it('should return `not possible divide by zero´', () => {
      expect(div(4,0)).to.be.equal('Not possible divide by zero!');
    });

  });

  describe('Mult', () => {

    it('should return 4 when `sum(2,2)`', () => {
      expect(mult(2,2)).to.be.equal(4);
    });

  });

});
