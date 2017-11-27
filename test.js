var assert = require('assert');
var Toggle = require('./toggle');
/*
 describe('Array', function() {
   describe('#indexOf()', function() {
     it('should return -1 when the value is not present', function(){
       assert.equal(-1, [1,2,3].indexOf(4));
     });
   });
 }); 
*/

 describe('Array', function() {
   describe('#toggle(flag)', function() {
     it('should return 1 when the flag is set to 1', function(){
       assert.equal(1, Toggle.toggle(1));
     });
   });
 }); 