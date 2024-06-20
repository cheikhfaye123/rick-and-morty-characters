let currentPage = 1;
 document.addEventListener('DOMContentLoaded', () => {
 const prevButton = document.getElementById('prev-page');
 const nextButton = document.getElementById('next-page'); 
 prevButton.addEventListener('click', () => changePage(-1));
 nextButton.addEventListener('click', () => changePage(1)); 
 loadCharacters(currentPage);
 }); 
 async function fetchCharacters(page) 
 { const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
 const data = await response.json(); return data.results; 
 } 
 function displayCharacters(characters)
 { const characterList = document.getElementById('character-list');
 characterList.innerHTML = ''; characters.forEach(character => { 
 const listItem = document.createElement('li'); 
 listItem.className = 'character-item'; 
 listItem.innerHTML = ` <img src="${character.image}" alt="${character.name}"> <h3>${character.name}</h3>
 <p>Species: ${character.species}</p> `; 
 characterList.appendChild(listItem); }); 
 }
 async function loadCharacters(page) 
 { const characters = await fetchCharacters(page); 
 displayCharacters(characters); } 
 function changePage(direction) { 
 currentPage += direction; if (currentPage < 1) currentPage = 1; // Prevent going to negative pages 
 loadCharacters(currentPage); 
 }
