// var cities = ["karachi","islamabad","peshawar"]
// var usercity =prompt("Enter your city");
// var found = false;
// for(var i =0; i <cities.length; i++){
//     if(cities[i] ==usercity){
//         found = true;
//       break;
//       }
//     }


// if(found){
//     alert("your city is found")
// }
// else{
//     alert("your city is not found")
// }

// nesting of loops
// var matrix=[[0,1,2,3],[4,5,6,7],[8,9,10,11]]
// for (var i=0;i<matrix.length;i++){
//     document.write(matrix[i].join( " ")+"<br>")
// }
// for (var i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//         document.write(matrix[i][j]+" ")
//     }
//     document.write("<br>")
// }
// nesting of loops
// var matrix=[[0,1,2,3],[4,5,6,7],[8,9,10,11]]
// for (var i=0;i<matrix.length;i++){
//     document.write(matrix[i].join( " ")+"<br>")
// }
// for (var i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//         document.write(matrix[i][j]+" ")
//     }
//     document.write("<br>")
// }

// nesting loops practice  
// var stars =[["*****"],["*****"],["*****"],["*****"],["*****"]]
// for(var i =0; i<stars.length; i++){
//     for(var j =0; j<stars[i].length; j++){
//     document.write (stars [i][j] +"");    
//     }
//     document.write ("<br/>")
// }
// its a star pattern
for(var i =0; i<5; i++){
    for(var j =0; j<5; j++){
        if (i === 0 || i === 5 - 1) {
            document.write("*");
          } 
          else if (j === 0 || j === 5 - 1) {
            document.write("*");
          }
          else {
            document.write("&nbsp;&nbsp;");
          }
        }
        document.write("<br/>");
      }
      // Right Triangle Pattern in Javascript
for (var i = 0; i < 1; i++) {
    document.write("*");
    document.write("<br>");
    for (var j = 0; j < 2; j++) {
      document.write("*");
    }
    document.write("<br>");
    for (var k = 0; k < 3; k++) {
      document.write("*");
    }
    document.write("<br>");
    for(var l = 0; l < 4; l++){
        document.write("*")
    }
  }
  
  for (var i = 1; i <= 5; i++) {
    document.write("</br>")
    for (var j = 1; j <= i; j++) {
      document.write("?/");
    }
    document.write("<br>");
  }
  // 1. Checking if a Number is in an Array;
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20,];






























  for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (var i = 10; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("%");
  }
  document.write("<br>");
}
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("%");
  }
  document.write("<br>");
}
var n = 5;
for (var i = 1; i < 6; i++) {
  document.write(n + "X" + i + "=" + `${n * i}`);
  document.write("<br>");
}
// document.write("time<br>");
// for (var i = 1; i <= 12; i++) {
//   for (var j = 1; j < 61; j++) {
//     document.write(i + ":" + j);
//     document.write(" ");
//     document.write("<br>");
//   }
//   document.write("<br>");
// }

//  pyramid

for (var i = 1; i <= 11; i++) {
  for (var j = 11; j > i; j--) {
    document.write(" &nbsp ");
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}
for (var i = 11; i >= 1; i--) {
  for (var j = 1; j < i; j++) {
    document.write(" &nbsp ");
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}

// dots patterns

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if (i === 1 || i === 10 || j === 1 || j === 10) {
            document.write("*");
        }
         else {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}
   
    