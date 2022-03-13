


// fetch(`https://anapioficeandfire.com/api/characters?page=43&pageSize=50`)
//   .then(response => response.json())
// //   .then(data => console.log(data))
// // gather all the data first, with multiple fetch calls- for loop or while loop? while for (i=1 i<44 i++)??for loop is cleaner! tell it when to stop!



//   .then(data=>{

//     //dom manipulation
//     console.log(data)
//     let ul = document.querySelector('ul')
//     let htmlFragment = ""

//     data.forEach(obj =>{
//         htmlFragment += `<li>${obj.name}</li>`
//     })

//     ul.innerHTML = htmlFragment

// })

// console.log('synchronous code')






let ul = document.querySelector("#character-list");

function createCharacterList(characterName) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  //a.addEventListener('click', openModal)
  a.innerText = characterName
  li.appendChild(a)
  ul.appendChild(li)
}


let promisesArr = [];

for (let i = 1; i < 44; i++){
  let characterArr = fetch(`https://anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)

  promisesArr.push(characterArr)
}

Promise.all(promisesArr)  //see p9 of the reading- waits on all of the promises to resolve and puts into ONE promise
.then(response => {
  console.log({response})
  const mapArr = response.map(item => {
    console.log({item})
    return item.json()
  })
  console.log({mapArr})
  return mapArr;
})  //takes each element of the promises array and calls json()
.then(allCharacters => {
  console.log({allCharacters})

  for (let j = 0; j < allCharacters.length; j++){
    for (let k = 0; k < allCharacters[j].length; k++){
      console.log({character: allCharacters[j][k]})
      
      createCharacterList(allCharacters[j][k].name)
    }
  }
})

