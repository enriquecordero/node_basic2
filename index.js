const express = require('express');
const morgan = require('morgan')
const app = express ();



//settings
app.set('port',3000)
app.set('view engine', 'ejs')


//middleware
app.use(express.json());
app.use(morgan('common'))


//rutas

app.get('/' , (req, res) =>{
    //res.send("Peticion GET"); // devolver cosas

    const data = [{name: 'john'},{name: 'Enrique'},{name: 'Angel'},{name: 'Cameron'}, ]
    res.render('index.ejs' ,{data} )

});


app.get('/user' , (req, res) =>{
    //res.send("Peticion GET"); // devolver cosas
    res.json({
        username: "Enrique",
        lastname: "Cordero"
    })

});

app.post('/user/:id' , (req, res) =>{

    console.log(req.body)
    console.log(req.params)
    res.send("Peticion Post"); //validado por postman , devolver guardar

});

app.put('/user/:id' , (req, res) =>{

res.send(`User ${req.params.id} Updated `)
    //res.send("Peticion PUT"); // actualizar
    

});


app.delete('/user/:id' , (req, res) =>{

    //console.log(req.params)
    res.send(`User ${req.params.id} Deleted`); // borrar
   

});

app.use(express.static('public'))


app.listen(app.get('port'), () => {

    console.log('Server on' , app.get('port'));
})