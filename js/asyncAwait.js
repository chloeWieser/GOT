

const getChars = async () => {   //this arrow function is the same as writing async function getChar(){    new line}

    let charArr = [];
    let pageIndex = 1;
    let resultsArr = []


    //a 'do while' is guaranteed to execute atleast one time (the 'do' portion) BRFORE doing the while portion and checking a conditional
    //a while loop like while(resultArr.length > 0){console.log("hello")} wont work bc we don't have anything to put in as a value for resultsArr.length
    do{
        
        let chars = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=50`)
        resultsArr = await chars.json(); //resiltsArr is 50 characters

        charArr = [...charArr, ...resultsArr];

        pageIndex++;
    }
    while(resultsArr.length > 0)
    
    console.log(charArr);

    //dom manipulation

    
}

getChars()   //async- meaning if there is any synchronous code afterwoard, that will get executed first- so we must do our DOM manipulation within the getChars function

