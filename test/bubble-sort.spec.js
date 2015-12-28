var chai = require('chai');
var expect = chai.expect;
chai.should();
var bubbleSort = require('./../index.js');

describe('bubblesort',function(){
  it('should be function', function(){
    expect(bubbleSort).to.be.a('function');
  });

});