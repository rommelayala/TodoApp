//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
     getAllTodos,
     postOneTodo,
     deleteTodo,
     editTodo
} = require('./APIs/todos')

const {
     loginUser,
     signUpUser,
     uploadProfilePhoto,
     getUserDetail,
     updateUserDetails
} = require('./APIs/users')

//Todos
app.get('/todos', auth, getAllTodos);
//app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo',auth, postOneTodo);
app.delete('/todo/:todoId',auth, deleteTodo);
app.put('/todo/:todoId',auth, editTodo);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);
app.post('/user/image', auth, uploadProfilePhoto);



exports.api = functions.https.onRequest(app); 
