let letters = ['A', 'B', 'C', 'D', 'E', 'F'];

let function1 = () => {
    let lastletter = letters.pop();
    letters.unshift(lastletter);

    document.getElementsByTagName('div')[0].innerText = letters[0];
    document.getElementsByTagName('div')[1].innerText = letters[1];
    document.getElementsByTagName('div')[2].innerText = letters[2];
    document.getElementsByTagName('div')[3].innerText = letters[3];
    document.getElementsByTagName('div')[4].innerText = letters[4];
    document.getElementsByTagName('div')[5].innerText = letters[5];
}

setInterval(function1, 1000);