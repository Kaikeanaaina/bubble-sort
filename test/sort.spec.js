var chai = require('chai');
var expect = chai.expect;
chai.should();
var bubbleModule = require('./../js/bubbleSort.js');

var quickSortModule = require('./../js/quickSorting.js');

var selectionModule = require('./../js/selectionSort.js');

var mergeModule = require('./../js/mergesorting.js');

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

describe('merge module',function(){
  it('should be a function',function(){
    expect(mergeModule).to.be.a('function');
  });
});