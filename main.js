function getNos() {
    var n = document.getElementById('no')
    if (!n.value) {
        return alert("invalid number")
    }
    document.getElementById('nos').remove()
    addFields(n.value)
}
var values = []

function addFields(n) {
    // Number of inputs to create
    var number = n
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Player  " + (i + 1)));
        container.appendChild(document.createElement("br"));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("select");
        input.setAttribute("id", "mySelect" + i);
        input.setAttribute("class", "mySelect");

        document.body.appendChild(input);
        var z = document.createElement("option");
        z.setAttribute("value", "Mafias");
        var t = document.createTextNode("Mafias");
        z.appendChild(t);

        var a = document.createElement("option");
        a.setAttribute("value", "town");
        var b = document.createTextNode("town");
        a.appendChild(b);

        var c = document.createElement("option");
        c.setAttribute("value", "god father");
        var d = document.createTextNode("god father");
        c.appendChild(d);

        var e = document.createElement("option");
        e.setAttribute("value", "Nurse");
        var f = document.createTextNode("Nurse");
        e.appendChild(f);

        var g = document.createElement("option");
        g.setAttribute("value", "cope");
        var h = document.createTextNode("cope");
        g.appendChild(h);

        var j = document.createElement("option");
        j.setAttribute("value", "Rambo");
        var k = document.createTextNode("Rambo");
        j.appendChild(k);

        var l = document.createElement("option");
        l.setAttribute("value", "love birds");
        var m = document.createTextNode("love birds");
        l.appendChild(m);


        document.getElementById("mySelect" + i).appendChild(z);
        document.getElementById("mySelect" + i).appendChild(a);
        document.getElementById("mySelect" + i).appendChild(c);
        document.getElementById("mySelect" + i).appendChild(e);
        document.getElementById("mySelect" + i).appendChild(j);
        document.getElementById("mySelect" + i).appendChild(l);

        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));

    }

    var btn = document.createElement("button")
    btn.setAttribute("type", "submit")
    btn.setAttribute("class", "btn btn-danger")
    btn.innerHTML = "PLAY"
    container.appendChild(btn);
    btn.onclick = function getValues() {


        for (o = 0; 0 < n; o++) {

            var p = document.getElementById("mySelect" + o).value
            p = String(p)
            console.log(p)

            values.push(p)
            if (o == n - 1) {
                window.localStorage.setItem("v", JSON.stringify(values));
                console.log(values)

                container.remove()

            }
        }
        alert("fhrwfrwi")
        reload()

    }
}
function reload() {
   
    window.location.reload()
}
function spinner() {
    var n=0
    if(n==0){
        reload()
        n++
    }
    const f = window.localStorage.getItem("v")
    if (f) {
        return
    }
    else {
        alert('add palyers first')
    }
}

function spinnerExist() {
    var roles = window.localStorage.getItem("v")
    if (roles) {
        var an = document.getElementById("yes")
        an.setAttribute("href", "./spinner.html")
    }

}
var y;
var items;
function turn() {
    var role = JSON.parse(localStorage.getItem("v"));

    console.log(role)
    items = role
}
var arro = []
var u
var count = 0
function pop() {
    count++
    console.log(count)

    if (count >= items.length + 1) {
        // alert("start new game")

        document.getElementById("ans").innerHTML = "The End"
        document.getElementById("ans").setAttribute('class', 'red')
        arro = []
        return
    }
    else {
        var html = mf()
        document.getElementById("ans").innerHTML = html
        PlaySound()
        setTimeout(function () { document.getElementById("ans").innerHTML = "" }, 2000)
    }




}
function gr() {
    return Math.floor(Math.random() * items.length)
}

function check(u) {
    if (arro.includes(u)) {
        return false
    }
    else {
        return true
    }
}

function mf() {
    while (true) {
        console.log("ifvef")
        u = gr()
        var answer = check(u)
        console.log(answer)

        if (answer) {
            var item = items[u];
            console.log(item)
            arro.push(u)
            console.log(arro)
            return item
        }
    }


}

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}