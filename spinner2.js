process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spin = { 0: "|", 1: "/", 2: "-", 3: "\\" };

for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spin[i % 4]}`);
  }, i * 200);
}

// understanding: name[i %4]
// so there is an object called name, has 4 key value pairs
// the key "0" maps to "|"
// "1" gives us "/"
// "2": "-" and 3: ""
// "\"

//old code below:
// setTimeout(() => {
//   process.stdout.write('\r|\n');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/\n');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-\n');
// }, 500);

// setTimeout(() => {

//   process.stdout.write('\r\\ \n'); 
// }, 700);



