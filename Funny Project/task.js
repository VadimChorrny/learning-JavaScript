// напиши функцию в короруб передаешь масив ,
// она циклом переберает его и все что = false  
//(или трансформируется в фолс- убирает с масива)

function renArrays () {
    let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    let removed = myFish.splice(3, 1);  // мандарин должен пропасть
}


function arr () {
    var array = [3, 6, 9, 12, 23, 'vadim'];
    console.log(array)
    var index = array.indexOf('vadim');
    if (index > -1) {
        array.splice(index, 5);
    }
    console.log(array);
}