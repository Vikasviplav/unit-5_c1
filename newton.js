function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var arr = input[0].trim().split(" ").map(Number)
    var k = +input[1]
    var n = arr.length
    arr.sort( (a,b)=>(a-b))
    var i=0,j=n-1;
    var res = []
    while(i<j){
        if(arr[i]+arr[j]==k &&i!=j){
            console.log(arr[i],arr[j])
        }
        if(arr[i]+arr[j]<k){
            i++
        }else
        j--
    }

  
}
  
  
  if (process.env.USERNAME === "user") {
    runProgram(`12 9 8 11  4 7 16
    20`);
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
 