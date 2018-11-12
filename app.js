var express = require("express"),
app = express(),
bodyParser  = require("body-parser"),
methodOverride = require("method-override");
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/control/Servicio/services', function(req, res) {
    res.send('{"idusuario":"1","idperfil":"1","idempleado":"1","usuario":"45781054","nombres":"Juan Manuel","apellidos":"Cañedo Ranilla"}');
});

router.get('/control/Servicio/orden', function(req, res) {
    res.send('[{"idcourier":"1","annio":"2018","nro_orden":"000001","prioridad":"1","cliente":"CHOICE ADUANAS","contacto":"JUAN MANUEL","telefono_contacto":"938980552","idusuario_asignado":"1","direccion":"AV. FAUCETT 1550","fch_creacion":"0000-00-00","fch_entrega":null,"latitud":null,"longitud":null,"observaciones":null,"idusuario_crea":"1"}]');
});


app.use(router);

app.listen(9000, function() {
console.log("Node server running on http://localhost:9000");
});

























