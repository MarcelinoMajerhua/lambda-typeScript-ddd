import  mongoose  from 'mongoose'
const URI =""

class  ConnectionDatabase {
  run(){
    mongoose.connect(URI,{
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(db => console.log('DB is connected'))
      .catch(err => console.error(err));
  }
}