const typewriter = function(string, timeIncrement) {
  let time = timeIncrement;
  for (let char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += timeIncrement;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, string.length * timeIncrement);
};



typewriter("hello there from lighthouse labs", 50);