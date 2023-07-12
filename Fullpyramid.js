function printPyramid(num) {
    
    for (let i = 1; i <= num; i++) {
      
      let pattern = "";
  
      for (let j = 1; j <= num - i; j++) {
        pattern += " ";
      }
  
  
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
      }
  
      console.log(pattern);
    }
  }
  
  printPyramid(5);