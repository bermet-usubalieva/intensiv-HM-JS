const search = function () {
    const input = document.querySelector('.search-block > input');
    const searcgBtn = document.querySelector('.search-block > button');

    input.addEventListener('click', pressInput)

    function pressInput() {
        input.addEventListener('input', () => {
            console.log(input.value);
        })
    }
}


search();