const product = require('../models/product.model');




/* this is new */
module.exports.getAllProduct = (request, response) => {
    product.find()
    .then(product => response.json(product))
    .catch(err => response.status(400).json(err))
    // response.json({
    //     message: "Hello World"
    // });
}
          /* The method below is new */
module.exports.createproduct = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json({msg: "success",product}))
        .catch(err => response.json(err));
}

