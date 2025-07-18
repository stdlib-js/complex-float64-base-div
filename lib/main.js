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

// MODULES //

var abs = require( '@stdlib/math-base-special-abs' );
var max = require( '@stdlib/math-base-special-max' );
var FLOAT64_BIGGEST = require( '@stdlib/constants-float64-max' );
var FLOAT64_SMALLEST = require( '@stdlib/constants-float64-smallest-normal' );
var EPS = require( '@stdlib/constants-float64-eps' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var robustInternal = require( './robust_internal.js' );


// VARIABLES //

var LARGE_THRESHOLD = FLOAT64_BIGGEST * 0.5;
var SMALL_THRESHOLD = FLOAT64_SMALLEST * ( 2.0 / EPS );
var RECIP_EPS_SQR = 2.0 / ( EPS * EPS );


// MAIN //

/**
* Divides two double-precision complex floating-point numbers.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
* @param {Complex128} z1 - complex number
* @param {Complex128} z2 - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var z1 = new Complex128( -13.0, -1.0 );
* var z2 = new Complex128( -2.0, 1.0 );
*
* var out = cdiv( z1, z2 );
* // returns <Complex128>[ 5.0, 3.0 ]
*/
function cdiv( z1, z2 ) {
	var re1;
	var re2;
	var im1;
	var im2;
	var out;
	var ab;
	var cd;
	var s;

	re1 = real( z1 );
	re2 = real( z2 );
	im1 = imag( z1 );
	im2 = imag( z2 );

	ab = max( abs(re1), abs(im1) );
	cd = max( abs(re2), abs(im2) );
	s = 1.0;

	if ( ab >= LARGE_THRESHOLD ) {
		re1 *= 0.5;
		im1 *= 0.5;
		s *= 2.0;
	} else if ( ab <= SMALL_THRESHOLD ) {
		re1 *= RECIP_EPS_SQR;
		im1 *= RECIP_EPS_SQR;
		s /= RECIP_EPS_SQR;
	}
	if ( cd >= LARGE_THRESHOLD ) {
		re2 *= 0.5;
		im2 *= 0.5;
		s *= 0.5;
	} else if ( cd <= SMALL_THRESHOLD ) {
		re2 *= RECIP_EPS_SQR;
		im2 *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( abs( im2 ) <= abs( re2 ) ) {
		out = robustInternal( re1, im1, re2, im2 );
	} else {
		out = robustInternal( im1, re1, im2, re2 );
		out[ 1 ] *= -1.0;
	}
	out[ 0 ] *= s;
	out[ 1 ] *= s;
	return new Complex128( out[ 0 ], out[ 1 ] );
}


// EXPORTS //

module.exports = cdiv;
