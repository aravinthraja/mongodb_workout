const assert    = require('assert');
const User      = require('../src/user');

describe("Subdocument test",() =>{
    it('save a with subdocument', (done) =>{
        const aravinth =  new User({
            name:'Aravinth'
         ,post:[{title:"Post Title"}]
        });
    
        aravinth.save()
            .then( () =>  User.findOne({name:'Aravinth'}) )
            .then((user) =>
            {
                console.log(user);
                console.log(user.post[0]);
                assert(user.post[0].title =="Post Title" );
                done();
            });
    });

     it('can add subdocument to a record exisitng', (done) =>{
        const aravinth =  new User({
            name:'Aravinth'
            ,post:[]
        });
    
            aravinth.save()
            .then( () =>  User.findOne({name:'Aravinth'}) )
            .then((user) =>
            {
                user.post.push({title:"Post Title"});
                return user.save();
            })
            .then( () =>  User.findOne({name:'Aravinth'}) )
            .then((user) =>
            {
                assert(user.post[0].title =="Post Title" );
                done();
            });
    });
});