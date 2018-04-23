// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //input is string, output: array of elements
  //create storage for the elements
    //check if element contains className
    //add to storage array
    //check if haschildren check if they have className
  //return array
  var result = [];
  function recur (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.hasChildNodes()) {
      element.childNodes.forEach (function(child) {
        //console.log("entered");
        recur(child);
      });
      // for (var i = 0; i < element.childNodes.length; i++) {
      //   result.concat(recur(element.childNodes[i]);
      // }
    }
  }
  recur(document.body);
  console.log(result);
  return result;
};
