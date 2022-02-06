var removeDuplicates = function(s){
    let pos = 0;
    const arr = s.split('');

    for(let i = 0; i < arr.length; ++i){
        arr[pos] = arr[i];
        if(i > 0 && arr[pos - 1] === arr[pos]) pos -= 2;
        pos++;
    }

    return arr.splice(0, pos).join('');

}

console.log(removeDuplicates("azxxzy"));