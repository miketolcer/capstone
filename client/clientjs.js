
console.log('test')
document.getElementById("pillButton").onclick = function () {
    axios.get("http://localhost:4500/api/pillButton/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        })
}

document.getElementById('subscribe').addEventListener("submit", (e) => {
    e.preventDefault()
    const emailInput = document.getElementById('emailInput')
    const formBody = {
    Email: emailInput.value
    }

    axios.post("http://localhost:4500/api/subscribe", formBody)
    .then((response) => {
        const emailArry = response.data
        console.log(emailArry)
        alert('Your subscribed')
    })
})
document.getElementById('nextFight').onclick = function () {
    axios.get("http://localhost:4500/api/nextFight")
        .then(function (response) {
            const data = response.data;
            alert(data)
        })
}
// document.getElementById("roundOne").onclick = function () {
//     axios.get("http://localhost:4500/api/roundOne")
//         .then(function (response) {
//             const data = response.data;
//             alert(data)
//         })
// }
// document.getElementById("rounds23").onclick = function () {
//     axios.get("http://localhost:4500/api/rounds23")
//         .then(function (response) {
//             const data = response.data;
//             alert(data)
//         })
// }
// document.getElementById("round4").onclick = function () {
//     axios.get("http://localhost:4500/api/round4")
//         .then(function (response) {
//             const data = response.data;
//             alert(data)
//         })
// }
// document.getElementById("round5").onclick = function () {
//     axios.get("http://localhost:4500/api/round5")
//         .then(function (response) {
//             const data = response.data;
//             alert(data)
//         })
// }