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

# evalrational

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compile a module for evaluating a [rational function][@stdlib/math/base/tools/evalrational].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import compile from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalrational-compile@deno/mod.js';
```

#### compile( P, Q )

Compiles a module `string` containing an exported function which evaluates a [rational function][@stdlib/math/base/tools/evalrational] having coefficients `P` and `Q`.

```javascript
var P = [ 3.0, 2.0, 1.0 ];
var Q = [ -1.0, -2.0, -3.0 ];

var str = compile( P, Q );
// returns <string>
```

In the example above, the output `string` would correspond to the following module:

```javascript
'use strict';

// MAIN //

/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
    var ax;
    var s1;
    var s2;
    if ( x === 0.0 ) {
        return -3.0;
    }
    if ( x < 0.0 ) {
        ax = -x;
    } else {
        ax = x;
    }
    if ( ax <= 1.0 ) {
        s1 = 3.0 + (x * (2.0 + (x * 1.0))); // eslint-disable-line max-len
        s2 = -1.0 + (x * (-2.0 + (x * -3.0))); // eslint-disable-line max-len
    } else {
        x = 1.0 / x;
        s1 = 1.0 + (x * (2.0 + (x * 3.0))); // eslint-disable-line max-len
        s2 = -3.0 + (x * (-2.0 + (x * -1.0))); // eslint-disable-line max-len
    }
    return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is intended for **non-browser** environments for the purpose of generating module files.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import compile from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalrational-compile@deno/mod.js';

var sign;
var str;
var P;
var Q;
var i;

// Create two arrays of random coefficients...
P = new Float64Array( 10 );
Q = new Float64Array( 10 );
for ( i = 0; i < P.length; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    P[ i ] = sign * round( randu()*100.0 );
    Q[ i ] = sign * round( randu()*100.0 );
}

// Compile a module for evaluating a rational function:
str = compile( P, Q );
console.log( str );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-evalrational-compile.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-evalrational-compile

[test-image]: https://github.com/stdlib-js/math-base-tools-evalrational-compile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-tools-evalrational-compile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-evalrational-compile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-evalrational-compile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-evalrational-compile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-evalrational-compile/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-evalrational-compile/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-tools-evalrational-compile/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-tools-evalrational-compile/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-evalrational-compile/main/LICENSE

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math-base-tools-evalrational/tree/deno

</section>

<!-- /.links -->
