
function testjson() {
    const url = "https://script.google.com/macros/s/AKfycbzXWVggwG7_FfE7XACuGH1BcGyJ9pZ143Zprw9BZQk9ay6ot8OhnmwtRQ/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
           document.getElementById("app").textContent = d[0].name;
        })
}

document.getElementById("btn").addEventListener("click",testjson);