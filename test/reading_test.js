 "use strict";
const assert    = require('assert');
const User      = require('../src/user');

describe("create model",() =>{
    let aravinth;
    beforeEach( (done) =>{
        aravinth =  new User({name:'Aravinth'});
        aravinth.save()
            .then(() => {
                done()
            });
    });
    it('Fine all the user with the name aravinth',(done)=>{
        User.find({name:'Aravinth'})
        .then((users) =>{
                assert(aravinth._id.toString() === users[0]._id.toString());
                done();
        });
    })

    it('fine the user with the id',(done) =>{

        User.findOne({ _id : aravinth._id })
            .then((user) =>{
                console.log(user.name);
                assert(user.name === 'Aravinth');
                done();
            })

    });
});