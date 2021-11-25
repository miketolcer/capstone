document.getElementById("pillButton").onclick = function () {
    axios.get("http://localhost:4500/api/pillButton/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        })
}
