const fs = require("fs");

console.log("start");
fs.readFile("./content/first.txt", "utf8", function (err, result) {
  if (err) {
    return null;
  }
  const first = result;

  fs.readFile("./content/second.txt", "utf8", function (err, result) {
    if (err) {
      return null;
    }
    const second = result;
    const third = fs.readFileSync("./content/result-sync.txt", "utf8");
    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
