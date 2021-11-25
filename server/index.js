const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/pillButton", (req,res) => {
    const quotes = ["Khabib says: You have to punch hard for knockouts, and to beat me, you have to knock me out.",
    "Khabib says: I care about my legacy.",
    "Khabib says: When you have a hard life, a tough life, success becomes very easy.",
    "Khabib says: All my life I train hard, like since I beginning walking.",
    "You have to be ready for everybody. And that’s why I keep going. You have to learn everyday something, everyday you have to learn.",
    "If you have a goal. If you want to do something. You have to do hard work. If you work easy, somebody other guy is coming and will take this. You have to work hard.",
    "I always tell kids to put education first. Because if you have muscles but no brains, then you’ll have problems.",
    "Win or lose, I believe in giving my best. And that is what I always do.",
    "When you truly fight for money, and you truly fight for legacy, its two different mentalities. I am here for legacy."

    
    ];
     let randomIndex = Math.floor(Math.random() * quotes.length);
     let randomQuote = quotes[randomIndex];

     res.status(200).send(randomQuote);
})












app.listen(4500, () => console.log("server running on 4500"))

