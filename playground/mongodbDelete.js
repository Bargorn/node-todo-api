const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //challenge
  // db.collection('Users').deleteMany({name: 'Fabiano'}).then((result)=>{
  //   console.log(result);
  // });


  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });
  //challenge
  db.collection('Users').findOneAndDelete({_id: new ObjectID('596f552143337b325c25751b')}).then((result)=>{
    console.log(result);
  });

  // db.close();
});
