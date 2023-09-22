<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isNegativeNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a number having a negative value.



<section class="usage">

## Usage

```javascript
import isNegativeNumber from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-negative-number@v0.1.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { isObject, isPrimitive } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-negative-number@v0.1.0-deno/mod.js';
```

#### isNegativeNumber( value )

Tests if a `value` is a `number` having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isNegativeNumber( -5.0 );
// returns true

bool = isNegativeNumber( new Number( -5.0 ) );
// returns true

bool = isNegativeNumber( -3.14 );
// returns true

bool = isNegativeNumber( 5.0 );
// returns false

bool = isNegativeNumber( null );
// returns false
```

#### isNegativeNumber.isPrimitive( value )

Tests if a `value` is a primitive `number` having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isNegativeNumber.isPrimitive( -3.0 );
// returns true

bool = isNegativeNumber.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isNegativeNumber.isObject( value )

Tests if a `value` is a `Number` object having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isNegativeNumber.isObject( -3.0 );
// returns false

bool = isNegativeNumber.isObject( new Number( -3.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

import isNegativeNumber from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-negative-number@v0.1.0-deno/mod.js';

var bool = isNegativeNumber( -5.0 );
// returns true

bool = isNegativeNumber( new Number( -5.0 ) );
// returns true

bool = isNegativeNumber( -3.14 );
// returns true

bool = isNegativeNumber( 0.0 );
// returns false

bool = isNegativeNumber( 5.0 );
// returns false

bool = isNegativeNumber( '-5' );
// returns false

bool = isNegativeNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-negative-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-negative-number

[test-image]: https://github.com/stdlib-js/assert-is-negative-number/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/assert-is-negative-number/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-negative-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-negative-number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-negative-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-negative-number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-negative-number/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-negative-number/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-negative-number/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-negative-number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-negative-number/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
