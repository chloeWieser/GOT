//recursion is another way of doing a loop, when you don't now how many you need

// for (let i = 1; i <= 10; i++){
//     console.log(i)

// }



//below, recursion is better for asynchronous calls:

// const count = num => {   

//      //base case
//     if (num == 0) return;
//     console.log(num)

//     //recurse
//     return count(num-1)
// }

// count(10)


// IFFE (Self invoking function like in loop video)
(()=>{

    let pageNum = 1;
    let charArr = [];

    const getChars = (pageNum) => {
        fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`)
        .then(response => response.json())
        .then(dataArr =>{

            //base case
            if (dataArr.length > 0){
                charArr = [...charArr, ...dataArr]

                pageNum++;
                getChars(pageNum)
            }
            else{
                //dom manipulation
                console.log(charArr);
            }
        })
    }


    getChars(pageNum)
})()