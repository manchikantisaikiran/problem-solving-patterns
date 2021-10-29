function same(arr1,arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

    const counter1 = {};
    const counter2 = {};

    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }

    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    
    for(let key in counter1){
        if(!(key ** 2 in counter2)){
            return false;
        }
        if(counter1[key] !== counter2[key ** 2]){
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3] , [4,1,9]));
console.log(same([1,2,3] , [1,9]));
console.log(same([1,2,1] , [4,4,1]));