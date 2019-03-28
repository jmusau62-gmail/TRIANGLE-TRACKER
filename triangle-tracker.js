function triangle() {
  var base = parseInt(document.getElementById("base").value);
  var height = parseInt(document.getElementById("height").value);
  var length = parseInt(document.getElementById("length").value);
  var triangle = function(base, height, length, ) {
    return base + height > length && height + length > base && length + base > height
  }
  var response = document.getElementById("show");




  if (triangle(base, height, length, ) && base === height && height === length) {
    alert("equilateral triangle")
  } else if (triangle(base, height, length, ) && base != length && length != height && height != base) {
    alert("scalene triangle")
  } else if (triangle(base, height, length, ) && base === height || length === base || height === length) {
    alert("isoscles triangle")
  } else {
    alert("not a triangle")
  }

}
