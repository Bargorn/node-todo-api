const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('596f65fc490e0d5653b37d91')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Tiago'
  },{
    $set: {
      name: 'Fabiano'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  // db.close();
});
