const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://usergebot:cBXzF3Z8@cluster0.vljmk.mongodb.net/myLibraryDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(() => console.log("connected to Database"))
app.use(express.json())
app.post("/add-new-issuer", async(req, res) => {
    const mybook = req.body.bookName;
    const myissuer = req.body.issuerName;
    const myduedate = req.body.duedate;

    try {
        const newproject = new mySchema({
            bookName: mybook,
            issuerName: myissuer,
            duedate: myduedate
        })
        const savedproject = await newproject.save()
        res.json({ "message": "Issuer is saved", "data": savedproject })
    } catch (err) {
        res.json(err);
    }
})

app.use("/", (req, res) => {
    res.json({ "message": "Express server started" })
})

app.listen(3001, () => console.log("Express Server Strarted"))