const UserController = require('../controllers/user.controller');
 
module.exports = app => {
    app.get('/api/jokes', UserController.findAllUsers);
    app.get('/api/jokes/:id', UserController.findOneSingleUser);
    app.put('/api/jokes/:id', UserController.updateExistingUser);
    app.post('/api/jokes', UserController.createNewUser);
    app.delete('/api/jokes/:id', UserController.deleteAnExistingUser);
}
 