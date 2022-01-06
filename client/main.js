//2nd page buttons play-by-play
document.getElementById("roundOne").onclick = function () {
    axios.get("http://localhost:4500/api/roundOne")
        .then(function (response) {
            const data = response.data;
            alert(data)
        })
}
document.getElementById("rounds23").onclick = function () {
    axios.get("http://localhost:4500/api/rounds23")
        .then(function (response) {
            const data = response.data;
            alert(data)
        })
}
document.getElementById("round4").onclick = function () {
    axios.get("http://localhost:4500/api/round4")
        .then(function (response) {
            const data = response.data;
            alert(data)
        })
}
document.getElementById("round5").onclick = function () {
    axios.get("http://localhost:4500/api/round5")
        .then(function (response) {
            const data = response.data;
            alert(data)
        })
}