
function setup() {
    initializeFields();
    createCanvas(450, 450);
}

var bx;

var by;

var n;

function draw() {
    background(color(0xF5, 0xC9, 0x19));
    for (var y = 50; y < 450; y += 50) {
        line(0, y, 450, y);
    }
    for (var x = 50; x < 450; x += 50) {
        line(x, 0, x, 450);
    }
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0)
            fill(0);
        else
            fill(255);
        ellipse(bx[i], by[i], 40, 40);
    }
    if (n % 2 == 0)
        fill(0);
    else
        fill(255);
    ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
    bx[n] = mouseX;
    by[n] = mouseY;
    n++;
}

function initializeFields() {
    bx = new Array(100);
    by = new Array(100);
    n = 0;
}
