var translated;
document.getElementById('input').onkeyup = function (e) {
    translated = " " + document.getElementById('input').value;
    translated(e);
    document.getElementById('output').innerHTML = translated;
}