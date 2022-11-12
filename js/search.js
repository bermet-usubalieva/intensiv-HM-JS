const search = function () {
    const input = document.querySelector('.search-block > input');
    const searcgBtn = document.querySelector('.search-block > button');

    searcgBtn.addEventListener('click', pressInput);

    function pressInput() {
        console.log(input.value);
    }
}


search();