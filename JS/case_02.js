let styles = ["background: red", "background: green", "background: blue", "background: yellow", "background: pink", "background: hotpink"];

const function1 = () => {
    let lastStyle = styles.pop();
    styles.unshift(lastStyle);

    document.getElementsByClassName('box')[0].style.cssText = styles[0];
    document.getElementsByClassName('box')[1].style.cssText = styles[1];
    document.getElementsByClassName('box')[2].style.cssText = styles[2];
    document.getElementsByClassName('box')[3].style.cssText = styles[3];
    document.getElementsByClassName('box')[4].style.cssText = styles[4];
    document.getElementsByClassName('box')[5].style.cssText = styles[5];
}

setInterval(function1, 500)