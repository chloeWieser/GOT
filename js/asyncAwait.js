

let listGroupContainer = document.querySelector('.list-group');
let liTagsHTMLFragment = "";

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

let modalTitle = document.querySelector('#exampleModalLabel')
let modalBody = document.querySelector('.modal-body')

let closeModalButtons = document.querySelector('.modal-content')

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
    charArr.forEach(charObj=>{
        console.log({charObj})
        liTagsHTMLFragment += `<a href="${charObj.url}" class="list-group-item list-group-item-action">${charObj.name} <b>Houses: </b> ${charObj.allegiances.length}</a>`
    })

    listGroupContainer.innerHTML = liTagsHTMLFragment;



    
}

listGroupContainer.addEventListener('click', async e=>{
    e.preventDefault();
    // console.log(e.target.href);
    let detailedAPIEndpoint = e.target.href;
    let apiCall = await fetch(detailedAPIEndpoint);
    let detailedInfo = await apiCall.json();
    modalTitle.innerHTML = detailedInfo.name; //NAME OF CHARACTER
    modalBody.innerHTML = ""

    // console.log(detailedInfo);

    if(detailedInfo.allegiances.length > 0){
        detailedInfo.allegiances.forEach(houseUrl =>{
            displayHouseInformation(houseUrl)
        })

    }

    myModal.show()

})

const displayHouseInformation = async houseUrl =>{

    let houseAPICall = await fetch(houseUrl)
    let houseInfo = await houseAPICall.json()

    console.log(houseInfo.name);
    //takeinformation and display in modal
    modalBody.innerHTML += `<br>${houseInfo.name}`
}

closeModalButtons.addEventListener('click',()=>{
    myModal.hide()
})

getChars()   //async- meaning if there is any synchronous code afterwoard, that will get executed first- so we must do our DOM manipulation within the getChars function

