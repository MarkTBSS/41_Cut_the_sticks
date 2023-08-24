function cutTheSticks(arr) {
    arr.sort((a, b) => a - b)

    function deduct(eachStick) {
        const firstStick = arr[0];
        return eachStick = eachStick - firstStick
    }

    function zeroOut(eachStick) {
        return eachStick != 0
    }

    var cutAmountEachRound = []
    while (arr.length > 0) {
        cutAmountEachRound.push(arr.map(deduct).length);
        arr = arr.map(deduct);
        arr = arr.filter(zeroOut);
    }

    return cutAmountEachRound
}

var arr = [1, 3, 2]
console.log(cutTheSticks(arr))