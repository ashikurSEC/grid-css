function tabOpen ( tabName ) {
    document.querySelectorAll('.containerTab').forEach(tab => {
        tab.style.display = 'none';
    });

    let tab = document.getElementById(tabName);
    tab.style.display = 'block';

    let closeBtn = document.querySelectorAll('.closeBtn');
    closeBtn.forEach(btn => {
        btn.onclick = function() {
            tab.style.display = 'none';
        }
    });
}