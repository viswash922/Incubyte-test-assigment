function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
    if (numbers.startsWith('//')) {
      const delimiterPart = numbers.match(/^\/\/(.+)\n/)[1];
      delimiter = new RegExp(`[${delimiterPart}]`);
      numbers = numbers.split('\n')[1];
    }
  
    const numberArray = numbers.split(delimiter).map(Number);
    
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numberArray.reduce((acc, num) => acc + num, 0);
  }
  
  module.exports = { add };
  