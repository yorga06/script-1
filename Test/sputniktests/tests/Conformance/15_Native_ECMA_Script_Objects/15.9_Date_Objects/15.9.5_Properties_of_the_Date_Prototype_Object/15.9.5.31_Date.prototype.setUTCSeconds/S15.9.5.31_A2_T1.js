// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.31_A2_T1;
 * @section: 15.9.5.31;
 * @assertion: The "length" property of the "setUTCSeconds" is 2;
 * @description: The "length" property of the "setUTCSeconds" is 2;
 */

if(Date.prototype.setUTCSeconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCSeconds has a "length" property');
}

if(Date.prototype.setUTCSeconds.length !== 2){
  $ERROR('#2: The "length" property of the setUTCSeconds is 2');
}

