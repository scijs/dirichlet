dirichlet
=========
The Dirichlet (or aliased sinc) function.  Defined to be,

```
                  { 1                                   if x % n === 0
dirichlet(n, x) = {           
                  { sin(pi * x) / (n * sin(pi * x / n)) otherwise
```

Alternatively, it is the inverse Fourier transform of the discrete rectangle function.

## Example

```javascript
var dirichlet = require("dirichlet")
var x = require("iota-array")(200)
var y = x.map(dirichlet.bind(null, 100))

console.log(x, y)
```

## Install

```
npm install dirichlet
```

## API

### `require("dirichlet")(n, x)`
Returns the value of the dirichlet function

* `n` is the number of samples
* `x` is the point at which the dirichlet function is evaluated

**Returns** The value of the dirichlet function at `x`

## Credits
(c) 2014 Mikola Lysenko. MIT License