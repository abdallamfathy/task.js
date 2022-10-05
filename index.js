const app = require("express")();
const PORT = 5050;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
app.get("/" , (req, res) => {
    
    res.status(200).send({

     hello:"please add numbers in url"      
        
    });
})

app.get("/:num1/:num2" , (req, res) => {
    
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);


    res.status(200).send({

        sum:num1 + num2 ,
        sub:num1 - num2 ,
        multi:num1 * num2 ,
        divide:num1 / num2 ,
        power: num1 ** num2 ,        
        
    })
})

// Export the Express API
module.exports = app;
