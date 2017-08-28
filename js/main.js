function sayHello(name) {
    return "Hello " + (name || "annoymous person.")
}

function setH1(string) {
    var h1 = document.querySelector('h1');
    h1.innerText = string
}

var btn = document.querySelector('button')
btn.addEventListener('mouseenter', function() {
    setH1(sayHello('Charles'))
})