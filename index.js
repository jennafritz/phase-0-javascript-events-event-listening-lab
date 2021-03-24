function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() {
        alert('I was cliked!');
    }
    input.addEventListener('click', clickAlert);
}

addingEventListener();