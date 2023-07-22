console.log('All State City name');
fetchBtn = document.getElementById('fetchBtn');
backupBtn = document.getElementById('backupBtn');

fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('clicked the fetchBtn');
    
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // open the object
    xhr.open('GET', 'State.txt', true);
    

    // on progress (optional)

    xhr.onprogress = function() {
        console.log('On progres');   
    }

    // respone is redy

    xhr.onload = function() {
        console.log(this.responseText);
    }

    // send the request

    xhr.send();
}
