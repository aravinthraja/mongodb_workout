const mongoose = require("mongoose");
mongoose.Promise  = global.Promise;

before( (done) =>{
    mongoose.connect("mongodb://localhost/user_tests");
    mongoose.connection
    .once('open',  () => { 
        done();console.log("Good to go connected harahh!");
    })
    .on('error',(error)=> {
        console.warn("error",error);
    })
});


beforeEach((done) => {
    mongoose.connection.collections.users.drop(() =>{
        done();
    });
})