

for (let r = 1; r <= 5; r++) {
    let line = ''; // Initialize an empty string for the current line
    for (let c = 1; c <= 5; c++) {
      
        if (c === 1 ||  
            r === 1 ||  
            (r === 3 && c > 2) ||  // Middle horizontal line
            (r === 5 && c <= 4) ||  // Bottom horizontal line
            (r === 4 && c === 5) // Right vertical line of the "G"
        ) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.log(line); 
}
