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

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number-ctor' );
var isNegativeNumber = require( './../lib' );

console.log( isNegativeNumber( -5.0 ) );
// => true

console.log( isNegativeNumber( new Number( -5.0 ) ) );
// => true

console.log( isNegativeNumber( -3.14 ) );
// => true

console.log( isNegativeNumber( 0.0 ) );
// => false

console.log( isNegativeNumber( 5.0 ) );
// => false

console.log( isNegativeNumber( '-5' ) );
// => false

console.log( isNegativeNumber( null ) );
// => false