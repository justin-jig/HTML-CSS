/**
 * for 문
*/

const forLoop = () => {
    for ( let i; i < 10; i++ ) {
        console.log('안녕');
    }
    
    let fruits = ["apple", "banana", "orange", "grape"];
    for ( let i; i < fruits.length; i++ ) {
        console.log(fruits[i]);
    }
    
    let number = 5;
    let rtn = 0;
    
    for ( let i = 1; i <= number; i++ ) {
        rtn +=i;
    }
    console.log(rtn);
}

/** 이중 for문 */
const nestedForLoop = () => {

    for (let i=1; i<5; i++) {
        for(let j=0; j<5; j++) {
            console.log(i,j)
        }
    }
}

// forLoop();
// nestedForLoop();

















