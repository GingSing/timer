const args = process.argv.slice(2);

let timer = function(arr) {
  if(arr.length < 1){
    return;
  }
  for(let item of arr) {
    if(item > 0 || !isNaN(item)){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (item * 1000));
    }
  };
}

timer(args);