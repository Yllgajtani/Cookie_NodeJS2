var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    const name = req.cookies.username;

    // If the user exists, greet them by name
    if (name) {
        res.send(`
            <style>
h1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    margin-left: 300px;
    border-radius: 25px;
    box-shadow: 5px 5px 10px black;  /* Horizontal offset, Vertical offset, Blur radius, Color */
    text-align: center; /* Ensure text is centered */
    padding: 20px; /* Optional: Add some padding for spacing around text */
    width: 300px;
}
            </style>
            
            <h1>Mirsevini serisht, ${name}</h1>`);
    } else {
        // If the user doesn't exist, ask for their name
        res.send(`
            <h1>Pershendetje Visitor</h1>
            <script>
                const Username = prompt("Amundesh me shkru emrin:");
                if (Username) {
                    document.cookie = "username=" + Username;
                    alert("Pershendetje, " + Username + ". Na ti kemi ru te dhanat ne cookies!");
                    window.location.reload(); // Reload the page to reflect the change
                } else {
                    alert("Duhet te shkruani nje emer!");
                }
            </script>
        `);
    }
});

const server = app.listen(2641, () => {
    const host = 'localhost';
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
});
