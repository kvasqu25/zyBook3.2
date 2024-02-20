function divideArray(numbers) {
    
    let oddNums = [];
    let evenNums = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNums.push(num);
        } else {
            oddNums.push(num);
        }
    }

    oddNums.sort((a, b) => a - b);
    evenNums.sort((a, b) => a - b);

    console.log("Even numbers:");
    if (evenNums.length > 0) {
        for (let num of evenNums) {
            console.log(num);
        }
    } else {
        console.log("None");
    }

    console.log("Odd numbers:");
    if (oddNums.length > 0) {
        for (let num of oddNums) {
            console.log(num);
        }
    } else {
        console.log("None");
    }
}

let nums1 = [4, 2, 9, 1, 8];
divideArray(nums1);

let nums2 = [4, 2, 8];
divideArray(nums2);
