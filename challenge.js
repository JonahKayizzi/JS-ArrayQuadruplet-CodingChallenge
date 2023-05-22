const findArrayQuadruplet = (arr, s) => {
  //your code goes here
  const sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      for (let k = j + 1; k < sortedArray.length; k++) {
        for (let l = k + 1; l < sortedArray.length; l++) {
          if (
            sortedArray[i] +
              sortedArray[j] +
              sortedArray[k] +
              sortedArray[l] ===
            s
          ) {
            return [
              sortedArray[i],
              sortedArray[j],
              sortedArray[k],
              sortedArray[l],
            ].sort((a, b) => a - b);
          }
        }
      }
    }
  }
  return [];
};

module.exports = findArrayQuadruplet;

/*
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20`

`output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)`
                    `# whose sum is 20. Notice that there`
                     `# are two other quadruplets whose sum is 20:`
                     `# (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re`
                     `# asked to return the just one quadruplet (in an`
                     `# ascending order)`
          */
