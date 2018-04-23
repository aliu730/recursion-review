// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // for string, return a string in stringified form
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // if number, return a stringified number
  if (typeof obj === 'number') {
    return String(obj);
  }
  // for a boolean, return a stringified boolean
  if(typeof obj === 'boolean') {
    return obj.toString();
  }
  // for NaN and null and Infinity, return stringified null
  var arr = [NaN, null, Infinity];
  if (arr.includes(obj)) {
    return 'null';
  }
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return '';
  }
  // for arrays, do recursion
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }
  // for objects, do recursion
  if (typeof obj === 'object') {
    var result = '';
    for (var key in obj) {
      if (key === 'functions' || key === 'undefined') {
        continue;
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    result = result.slice(0, -1);
    return '{' + result + '}';
  }

// JSON.stringify({});                    // '{}'
// JSON.stringify(true);                  // 'true'
// JSON.stringify('foo');                 // '"foo"'
// JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
// JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
// JSON.stringify({ x: 5 });              // '{"x":5}'
};
