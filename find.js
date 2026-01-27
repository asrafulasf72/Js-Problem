// Find the lowest number in the array below.

function findHeight(numbers){
    let lowest=numbers[0];
    for(let height of numbers){
        if(height < lowest){
            lowest = height
        }
    }
    return lowest
}

const heights2 = [167, 190, 120, 165, 137];
console.log(findHeight(heights2))



