# NodeJs Calc Text
https://github.com/dobronravov/nodejs-calc.git
https://www.npmjs.com/package/nodejs-calc-text

### Installing
```
npm install nodejs-calc-text
```
### Usage
```
const calcText = require('nodejs-calc-text');
const formula = '148/8+5';
try {
    const result = calcText.calculate(formula);
    console.log(result);
} catch (e) {
    console.log(e);
}
```

### Run example
```
node example
```

### Test
Mocha test cases.
```
npm test
```
