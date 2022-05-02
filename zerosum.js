function runProgram(input) {
    // Write code here
    var arr = input.trim().split(" ").map(Number)
    //console.log(arr)
    var n = arr.length
    for(var i=0;i<n;i++){
        let res = [],sum=0
        for(var j=i;j<n;j++){
            sum += arr[j]
           res.push(arr[j])
           if(sum==0){
               console.log(res)
           }
        }
    }

  
}
  
  
  if (process.env.USERNAME === "user") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6 -12 -7`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
 