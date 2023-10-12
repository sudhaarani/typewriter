const sentence = "hello there from lighthouse labs";
let delay = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); //process.stdout.write --> this prints the characters out on a single line
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write("\n"); // the next prompt appears on the same line, to avoid that we are delaying \n as well, so used setTimeout
}, delay);