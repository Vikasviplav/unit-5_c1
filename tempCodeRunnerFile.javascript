function runProgram(input) {
    // Write code here
    var n = +input
    //console.log(n)
    var str = ""
    while(n>0){
        r = n%10
        n /= 10
        str += r
    }
    let flag=0
    for(i=0;i<str.length/2;i++){
    if(str[i]!=str[str.length-i])
     flag = 1
    }
   
    //console.log(str)
    if(n<=9 &&n>0){
        flag = 0
    }
    if(flag==1){
        console.log("not a palindrom")
    }else{
        console.log("palindrom")
    }
    

  
}
  
  
  if (process.env.USERNAME === "user") {
    runProgram(`1`);
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
 