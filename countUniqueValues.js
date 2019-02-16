/* 
Implement a funcion called contUnuqueValues, which accepts a sorted array, and countds the unique values in the array. 
There canbe negative numbers in the array, but it will always be sorted
Date: Feb 15, 2019
*/

function uniqueCounter(str){
    if (str.length == 0) return 0;

    let counter = 0;
    for (let j=1 ; j<str.length; j++) {
        if ( str[counter] != str[j] ) {
            str[++counter] = str[j];
        }      
    }    
    return counter+1;
}

uniqueCounter ([1,1,2,2,3,4,5,5,6,6,6,7,7,8,9,10]);
