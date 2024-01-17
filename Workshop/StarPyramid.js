function generateStarPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
      let row = '';
      
      // Add spaces before the stars
      for (let j = 1; j <= rows - i; j++) {
          row += ' ';
      }
      
      // Add stars
      for (let k = 1; k <= 2 * i - 1; k++) {
          row += '*';
      }
      
      console.log(row);
  }
}

// Specify the number of rows in the pyramid
const numberOfRows = 5;

// Call the function to generate the pyramid
generateStarPyramid(numberOfRows);
