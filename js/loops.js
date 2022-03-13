
//Loop method is only great when you know how many pages you have!
(()=>{
    let fullCharList = [];  //accumulation of all characters
    let isFinishedFlag = false; //added to account for when it's trying to print beyond 2130
    for(let index = 1; index <= 50; index++){  //50 bc we can get a page size of 50- so every time we increase the page index, we'll get a new set of 50 pages(totals 2500 be are estimating the # of characters based on knowledge of GOT! )- page starts at 1! 
        fetch(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`) //grabbing up to 50 characters bc that's the max
        .then(result => result.json())   //convert them to json data
        .then(charList =>{
            // console.log(charList)  //we ended up with some empty lists so we know there's a few less than 50 but will make up for that later
            // fullCharacterList.push(charList)   //when we printed this, we end up with 50 arrays of 50 kind of inside each other, but what we want is the whole thing spread out into one long list- se we comment this out and use the spread operator instead
            fullCharList = [...fullCharList,...charList]
            //the last one printed is your full list
            // console.log(fullCharList)  ///will move this to below

            //cant to dom manipulation right here now without any modifications bc otherwise that process of manipulating the dom will happen 50 times
            if(fullCharList.length<2130 && isFinishedFlag == false){  //we saw that number in the console--after this is when we want our dom manipulation to happen- the isFinishedFlag IS false, as we set it at the top  
            isFinishedFlag = true;
            console.log(fullCharList)  
            console.log('finally finished') 
            }
        })
    }
})()
