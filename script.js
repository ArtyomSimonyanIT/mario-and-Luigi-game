


const div = document.querySelector('div');
const heroImg = document.createElement('img');
heroImg.style.position = 'absolute';
heroImg.src = '1.png';

const heroImg2 = document.createElement('img');
heroImg2.style.position = 'absolute';
heroImg2.src = '2.png';

let pat1 = document.getElementById('pat1');
var pat1Position = pat1.getBoundingClientRect();

let pat2 = document.getElementById('pat2');
var pat2Position = pat2.getBoundingClientRect();

let pat3 = document.getElementById('pat3');
var pat3Position = pat3.getBoundingClientRect();

let pat4 = document.getElementById('pat4');
var pat4Position = pat4.getBoundingClientRect();

let pat5 = document.getElementById('pat5');
var pat5Position = pat5.getBoundingClientRect();

let pat6 = document.getElementById('pat6');
var pat6Position = pat6.getBoundingClientRect();

let pat7 = document.getElementById('pat7');
var pat7Position = pat7.getBoundingClientRect();

let pat8 = document.getElementById('pat8');
var pat8Position = pat8.getBoundingClientRect();

let pat9 = document.getElementById('pat9');
var pat9Position = pat9.getBoundingClientRect();

let pat10 = document.getElementById('pat10');
var pat10Position = pat10.getBoundingClientRect();

let pat11 = document.getElementById('pat11');
var pat11Position = pat11.getBoundingClientRect();

let pat12 = document.getElementById('pat12');
var pat12Position = pat12.getBoundingClientRect();

let pat13 = document.getElementById('pat13');
var pat13Position = pat13.getBoundingClientRect();


let finish = document.getElementById('finish');
var finishPosition = finish.getBoundingClientRect();


let data = {
    pat1: {
        y: pat1Position.top,
        x: pat1Position.left,
        height: pat1.clientHeight,
        width: pat1.clientWidth
    },
    pat2: {
        y: pat2Position.top,
        x: pat2Position.left,
        height: pat2.clientHeight,
        width: pat2.clientWidth
    },
    pat3: {
        y: pat3Position.top,
        x: pat3Position.left,
        height: pat3.clientHeight,
        width: pat3.clientWidth
    },
    pat4: {
        y: pat4Position.top,
        x: pat4Position.left,
        height: pat4.clientHeight,
        width: pat4.clientWidth
    },
    pat5: {
        y: pat5Position.top,
        x: pat5Position.left,
        height: pat5.clientHeight,
        width: pat5.clientWidth
    },
    pat6: {
        y: pat6Position.top,
        x: pat6Position.left,
        height: pat6.clientHeight,
        width: pat6.clientWidth
    },
    pat7: {
        y: pat7Position.top,
        x: pat7Position.left,
        height: pat7.clientHeight,
        width: pat7.clientWidth
    },
    pat8: {
        y: pat8Position.top,
        x: pat8Position.left,
        height: pat8.clientHeight,
        width: pat8.clientWidth
    },
    pat9: {
        y: pat9Position.top,
        x: pat9Position.left,
        height: pat9.clientHeight,
        width: pat9.clientWidth
    },
    pat10: {
        y: pat10Position.top,
        x: pat10Position.left,
        height: pat10.clientHeight,
        width: pat10.clientWidth
    },
    pat11: {
        y: pat11Position.top,
        x: pat11Position.left,
        height: pat11.clientHeight,
        width: pat11.clientWidth
    },
    pat12: {
        y: pat12Position.top,
        x: pat12Position.left,
        height: pat12.clientHeight,
        width: pat12.clientWidth
    },
    pat13: {
        y: pat13Position.top,
        x: pat13Position.left,
        height: pat13.clientHeight,
        width: pat13.clientWidth
    },
    finish: {
        y: finishPosition.top,
        x: finishPosition.left,
        height: finish.clientHeight,
        width: finish.clientWidth
    },
    hero: {
        xDelta: 0,
        yDelta: 0,
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        update() {


            if (this.y - data.pat1.y <= data.pat1.y - data.pat1.y / 2 && this.y + this.height >= data.pat1.y && this.x + this.width >= data.pat1.x && this.x <= data.pat1.x + data.pat1.width) {
                // alert('mario lost')
            } else if (this.y - data.pat2.y <= data.pat2.y - data.pat2.y && this.y + this.height >= data.pat2.y && this.x + this.width >= data.pat2.x && this.x <= data.pat2.x + data.pat2.width) {
                // alert('mario lost')
            } else if (this.y - data.pat5.y <= data.pat5.y - data.pat5.y && this.y + this.height >= data.pat5.y && this.x + this.width >= data.pat5.x && this.x <= data.pat5.x + data.pat5.width) {
                // alert('mario lost')
            } else if (this.y - data.pat6.y <= data.pat6.y - data.pat6.y && this.y + this.height >= data.pat6.y && this.x + this.width >= data.pat6.x && this.x <= data.pat6.x + data.pat6.width) {
                // alert('mario lost')
            } else if (this.y - data.pat9.y <= data.pat9.y - data.pat9.y && this.y + this.height >= data.pat9.y && this.x + this.width >= data.pat9.x && this.x <= data.pat9.x + data.pat9.width) {
                // alert('mario lost')
            } else if (this.y - data.pat12.y <= data.pat12.y - data.pat12.y && this.y + this.height >= data.pat12.y && this.x + this.width >= data.pat12.x && this.x <= data.pat12.x + data.pat12.width) {
                // alert('mario lost')
            } else if (this.x + this.width >= data.pat3.x && this.x <= data.pat3.x + data.pat3.width && this.y + this.height >= data.pat3.y && this.y <= data.pat3.y + data.pat3.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat4.x && this.x <= data.pat4.x + data.pat4.width && this.y + this.height >= data.pat4.y && this.y <= data.pat4.y + data.pat4.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat7.x && this.x <= data.pat7.x + data.pat7.width && this.y + this.height >= data.pat7.y && this.y <= data.pat7.y + data.pat7.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat8.x && this.x <= data.pat8.x + data.pat8.width && this.y + this.height >= data.pat8.y && this.y <= data.pat8.y + data.pat8.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat10.x && this.x <= data.pat10.x + data.pat10.width && this.y + this.height >= data.pat10.y && this.y <= data.pat10.y + data.pat10.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat11.x && this.x <= data.pat11.x + data.pat11.width && this.y + this.height >= data.pat11.y && this.y <= data.pat11.y + data.pat11.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat13.x && this.x <= data.pat13.x + data.pat13.width && this.y + this.height >= data.pat13.y && this.y <= data.pat13.y + data.pat13.height) {
                // alert('mario lost');
            }else if (this.x + this.width >= data.finish.x && this.x <= data.finish.x + data.finish.width && this.y + this.height >= data.finish.y && this.y <= data.finish.y + data.finish.height) {
                alert('Mario won')
            } else {
                this.x += this.xDelta;
                this.y += this.yDelta;
            }
        },
        render() {
            heroImg.style.width = this.width + 'px';
            heroImg.style.height = this.height + 'px';
            heroImg.style.left = this.x + 'px';
            heroImg.style.top = this.y + 'px';
            div.append(heroImg);
        }
    },
    hero2: {
        xDelta: 0,
        yDelta: 0,
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        update() {
            if (this.y - data.pat1.y <= data.pat1.y - data.pat1.y / 2 && this.y + this.height >= data.pat1.y && this.x + this.width >= data.pat1.x && this.x <= data.pat1.x + data.pat1.width) {
                // alert('mario lost')
            } else if (this.y - data.pat2.y <= data.pat2.y - data.pat2.y && this.y + this.height >= data.pat2.y && this.x + this.width >= data.pat2.x && this.x <= data.pat2.x + data.pat2.width) {
                // alert('mario lost')
            } else if (this.y - data.pat5.y <= data.pat5.y - data.pat5.y && this.y + this.height >= data.pat5.y && this.x + this.width >= data.pat5.x && this.x <= data.pat5.x + data.pat5.width) {
                // alert('mario lost')
            } else if (this.y - data.pat6.y <= data.pat6.y - data.pat6.y && this.y + this.height >= data.pat6.y && this.x + this.width >= data.pat6.x && this.x <= data.pat6.x + data.pat6.width) {
                // alert('mario lost')
            } else if (this.y - data.pat9.y <= data.pat9.y - data.pat9.y && this.y + this.height >= data.pat9.y && this.x + this.width >= data.pat9.x && this.x <= data.pat9.x + data.pat9.width) {
                // alert('mario lost')
            } else if (this.y - data.pat12.y <= data.pat12.y - data.pat12.y && this.y + this.height >= data.pat12.y && this.x + this.width >= data.pat12.x && this.x <= data.pat12.x + data.pat12.width) {
                // alert('mario lost')
            } else if (this.x + this.width >= data.pat3.x && this.x <= data.pat3.x + data.pat3.width && this.y + this.height >= data.pat3.y && this.y <= data.pat3.y + data.pat3.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat4.x && this.x <= data.pat4.x + data.pat4.width && this.y + this.height >= data.pat4.y && this.y <= data.pat4.y + data.pat4.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat7.x && this.x <= data.pat7.x + data.pat7.width && this.y + this.height >= data.pat7.y && this.y <= data.pat7.y + data.pat7.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat8.x && this.x <= data.pat8.x + data.pat8.width && this.y + this.height >= data.pat8.y && this.y <= data.pat8.y + data.pat8.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat10.x && this.x <= data.pat10.x + data.pat10.width && this.y + this.height >= data.pat10.y && this.y <= data.pat10.y + data.pat10.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat11.x && this.x <= data.pat11.x + data.pat11.width && this.y + this.height >= data.pat11.y && this.y <= data.pat11.y + data.pat11.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.pat13.x && this.x <= data.pat13.x + data.pat13.width && this.y + this.height >= data.pat13.y && this.y <= data.pat13.y + data.pat13.height) {
                // alert('mario lost');
            } else if (this.x + this.width >= data.finish.x && this.x <= data.finish.x + data.finish.width && this.y + this.height >= data.finish.y && this.y <= data.finish.y + data.finish.height) {
                alert('Luigi won')
            } else {
                this.x += this.xDelta;
                this.y += this.yDelta;
            }
        },
        render() {
            heroImg2.style.width = this.width + 'px';
            heroImg2.style.height = this.height + 'px';
            heroImg2.style.left = this.x + 'px';
            heroImg2.style.top = this.y + 'px';
            div.append(heroImg2);
        }
    }
}


function update() {
    data.hero.update();
    data.hero2.update();
}


function render() {
    data.hero.render();
    data.hero2.render();
}


function loop() {
    requestAnimationFrame(loop);
    update();
    render();
}
loop()



document.addEventListener('keydown', (e) => {
    // alert(e.code)
    if (e.code === 'ArrowRight') {
        data.hero.xDelta = 1;
    } else if (e.code === 'ArrowLeft') {
        data.hero.xDelta = -1;
    } else if (e.code === 'ArrowUp') {
        data.hero.yDelta = -1;
    } else if (e.code === 'ArrowDown') {
        data.hero.yDelta = 1;
    } else if (e.keyCode === 65) {
        data.hero2.xDelta = -1;
    } else if (e.keyCode === 68) {
        data.hero2.xDelta = 1;
    } else if (e.keyCode === 87) {
        data.hero2.yDelta = -1;
    } else if (e.keyCode === 83) {
        data.hero2.yDelta = 1;
    }
})


document.addEventListener('keyup', (e) => {
    data.hero.xDelta = 0;
    data.hero2.xDelta = 0;
    data.hero.yDelta = 0;
    data.hero2.yDelta = 0;
})

