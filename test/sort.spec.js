var chai = require('chai');
var expect = chai.expect;
chai.should();
var bubbleModule = require('./../bubbleSort.js');

var quickSortModule = require('./../quickSorting.js');

var selectionModule = require('./../selectionSort.js');

describe('bubbleModule',function(){
  it('should be a function', function(){
    expect(bubbleModule).to.be.a('function');
  });

});

describe('selectionModule', function(){
  it('should be a function',function(){
    expect(selectionModule).to.be.a('function');
  });
});

describe('quickSortModule',function(){
  it('should be a function',function(){
    expect(quickSortModule).to.be.a('function');
  });
});