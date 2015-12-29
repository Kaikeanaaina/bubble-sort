var chai = require('chai');
var expect = chai.expect;
chai.should();
var bubbleSort = require('./../index.js');

describe('bubbleSort',function(){
  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function');
  });

  it('should return an array', function(){
    expect(bubbleSort).equal.to('array');
  });


});
