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