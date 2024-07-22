function check(option) {
    const correct = 'd';
    const buttons = document.getElementsByClassName('b1');
    const texts = document.getElementsByClassName('b2');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
        texts[i].style.backgroundColor = '';
    }

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === option) {
            if (option === correct) {
                buttons[i].style.backgroundColor = 'green';
                texts[i].style.backgroundColor = 'green';
            } else {
                buttons[i].style.backgroundColor = 'red';
                texts[i].style.backgroundColor = 'red';
            }
        }
    }
}
