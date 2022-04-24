function loadall() {
    fetchAll("/getusers").then(function(data) {
        var users = document.getElementById('users')
        users.innerHTNL = "";
        for (var i = 0; i < data.length; i++) {
            newUser = "<tr><td>" + data[x].User_ID + "</td><td>" + data[x].Username + "</td><td>" + data[x].Password + "</td></tr>"
            users.innerHTML += newUser;
        }
    }).catch(
        function(err) {
            alert("Error, can not reach server");
        }
    )
}
async function fetchAll(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

async function nameButtonClicked(name) {
    console.log('Hello');
    console.log(name)
    app.get('/$(name)', (req, res) => {
        console.log("hey")
        res.render(name);
    });
}