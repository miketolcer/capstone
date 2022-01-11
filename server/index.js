const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
//Khabib random quote button
app.get("/api/pillButton", (req,res) => {
    const quotes = ["Khabib says: You have to punch hard for knockouts, and to beat me, you have to knock me out.",
    "Khabib says: I care about my legacy.",
    "Khabib says: When you have a hard life, a tough life, success becomes very easy.",
    "Khabib says: All my life I train hard, like since I beginning walking.",
    "You have to be ready for everybody. And that’s why I keep going. You have to learn everyday something, everyday you have to learn.     -Khabib Nurmagomedov",
    "If you have a goal. If you want to do something. You have to do hard work. If you work easy, somebody other guy is coming and will take this. You have to work hard.   -Khabib Nurmagomedov",
    "I always tell kids to put education first. Because if you have muscles but no brains, then you’ll have problems.    -Khabib Nurmagomedov ",
    "Win or lose, I believe in giving my best. And that is what I always do.   -Khabib Nurmagomedov",
    "When you truly fight for money, and you truly fight for legacy, its two different mentalities. I am here for legacy.   -Khabib Nurmagomedov"
    ];
     let randomIndex = Math.floor(Math.random() * quotes.length);
     let randomQuote = quotes[randomIndex];

     res.status(200).send(randomQuote);
})
// Email form 
let emailArry = []
app.post("/api/subscribe", (req,res) => {
    const {Email} = req.body
    emailArry.push(req.body)
    console.log(req.body.Email)
    res.status(200).send(emailArry)
})
//Red next fight button
app.get("/api/nextFight", (req,res) => {
    const fights = ["December 18, 2021 Lewis vs. Daukaus-- at the UFC APEX in Las Vegas on ESPN+ at 7:00pm "];
    res.status(200).send(fights)
})
//Play-by-play buttons
app.get("/api/roundOne", (req,res) => {
    const oneRound = ["Figueiredo sends out a front kick, eats a leg kick. Good leg kick from Benavidez, avoids a spinning back kick. Benavidez throws another naked low kick and gets floored by a right hook. Figueiredo follows him down into guard."];
    res.status(200).send(oneRound)
})

app.get("/api/rounds23", (req,res) => {
    const twoRound = ["Figueiredo stalking forward, eats a pair of hooks in combination. Another low kick dings him, but he comes back with a straight right."];
    res.status(200).send(twoRound)
})

app.get("/api/round4", (req,res) => {
    const fourRound = ["Another huge right hook and another knockdown. Benavidez pops right back up. Lead right by the Brazilian. Benavidez catches a kick, tries to combo."];
    res.status(200).send(fourRound)
})

app.get("/api/round5", (req,res) => {
    const fiveRound = ["Figueiredo, who floors him with another right hand. Savage elbows from mount. Benavidez gives up the back and this choke’s ultra deep.-- Deiveson Figueiredo is your new UFC Flyweight Champion."];
    res.status(200).send(fiveRound)
})








app.listen(4500, () => console.log("server running on 4500"))

