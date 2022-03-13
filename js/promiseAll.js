

//Promise.all  ALSO NEDD TO GUESS HOW MANY YOU NEED WITH THIS

// let apiCall1 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
// let apiCall2 = fetch('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50')

// let promise = Promise.all([apiCall1, apiCall2])

// promise.then(resultsArr =>{  //we're goign to tke our promise and put a then on it
//     let results = [];
//     results[0] = resultsArr[0].json()
//     results[1] = resultsArr[1].json()      //taking results from api call, converts the separate arrays to Javaasacript

//     return Promise.all(results)
// })
// .then(dataArr =>{
//     let charArray=[];
//     console.log(dataArr);
// })


let fetchArr = []; //used to accumulate all the fetch calls- and the we will pass it to our promise.all

let url = "";

for(let page = 0; page < 45; page++){

    url = fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`)
    fetchArr.push(url)
}
let promise = Promise.all(fetchArr)   //wait for all fetches ot come back

promise.then(resultsArr =>{

    // let newArr = resultsArr.map(char =>{
    //     return char.json()
    // })

    // return Promise.all(newArr)

    return Promise.all(resultsArr.map(char =>{
        return char.json()
    }))


})
.then(dataArr =>{
    console.log(dataArr)
})