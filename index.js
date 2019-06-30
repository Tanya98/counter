const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
let count = document.querySelector('.count');
increase.addEventListener('click', plus);
decrease.addEventListener('click', minus);

function plus() {
    count.innerHTML++;
}

function minus() {
    if (count.innerHTML <= 0) {
        return count.innerHTML === 0;
    }
    return count.innerHTML--;
}

