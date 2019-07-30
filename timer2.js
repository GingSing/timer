const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (data) => {
  if (data === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  if(data === "b"){
    process.stdout.write('\x07');
  }else if(data > 0 && data < 10){
    console.log(`setting timer for ${data} seconds...`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, data * 1000);
  }
});