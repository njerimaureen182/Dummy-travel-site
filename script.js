// function expression to select elements
const selectElement = (s) => document.querySelector(s);

// to open the menu on click:
selectElement(s = '.open' ).addEventListener('click', () =>{
	selectElement(s = '.nav-list').classList.add('active');
});

// to close the menu on click:
selectElement(s = '.close' ).addEventListener('click', () =>{
	selectElement(s = '.nav-list').classList.remove(tokens = 'active');
});



