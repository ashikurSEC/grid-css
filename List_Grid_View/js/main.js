const elements = document.querySelectorAll('.column');

function listView () {
    Array.from(elements).forEach(element => {
        element.style.width = '100%';
    });
}

function gridView () {
    Array.from(elements).forEach(element => {
        element.style.width = '50%';
    });
}

let button = document.querySelectorAll('button');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        button.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        if (btn.classList.contains('list-view')) {
            listView();
        } else if (btn.classList.contains('grid-view')) {
            gridView();
        }
    });
});