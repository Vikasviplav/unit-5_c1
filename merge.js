function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var arr1 = input[0].trim().split(" ").map(Number)
    var arr2 = input[1].trim().split(" ").map(Number)
    var res = []
    var n = arr1.length
    var m = arr2.length
    var i=0,j=0
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
           res.push(arr1[i])
           i++
        }else{
            res.push(arr2[j])
            j++
        }
    }
    while(i<n ){
           res.push(arr1[i])
           i++
    }
    while( j<m){
            res.push(arr2[j])
            j++
    }

console.log(res)
  
}
  
  
  if (process.env.USERNAME === "user") {
    runProgram(`10 13 18 20
    12 17 19 21 22 24`);
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
 