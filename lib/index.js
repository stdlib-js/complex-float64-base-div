/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Divide two double-precision complex floating-point numbers.
*
* @module @stdlib/complex-float64-base-div
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var cdiv = require( '@stdlib/complex-float64-base-div' );
*
* var z1 = new Complex128( -13.0, -1.0 );
* var z2 = new Complex128( -2.0, 1.0 );
*
* var out = cdiv( z1, z2 );
* // returns <Complex128>[ 5.0, 3.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
