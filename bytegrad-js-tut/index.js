// initialized a variable to the <ul><ul> HTML element
const transactionsEl = document.querySelector('.transactions');
// creating a function to listen for the click event of the element
transactionsEl.addEventListener('click', function(event) {

    //action to remove the transaction item visually
    const clickedEl = event.target.parentNode;
    clickedEl.remove();

    //update income or expense
} );


