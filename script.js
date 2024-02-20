function drawTriangle(triangleSize) {
   for (let i = 1; i <= triangleSize; i++) {
       let asterisk = '';
       for (let j = 1; j <= i; j++) {
         asterisk += '*';
       }
       console.log(asterisk);
   }
}

drawTriangle(4);