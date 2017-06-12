"use strict";
const assert    = require('assert');
const User      = require('../src/user');

describe("Remove model ->",() =>{
    let aravinth;
    beforeEach( (done) =>{
        aravinth =  new User({name:'Aravinth'});
        aravinth.save()
            .then(() => {
                done()
            });
    });

    it('Model instance remove',(done) => {
       aravinth.remove()
        .then(() => User.findOne({ name : 'Aravinth' })
        )
        .then((user) => {
            console.log(user);
            assert(user === null);
            done();
        })
    });

    it('class method remove',(done)=>{
        User.remove({name:'Aravinth'})
        .then(() => User.findOne({ name : 'Aravinth' }))
        .then((user) => {
            assert(user === null);
            done();
        })
    });

    it('Find and remove',(done)=>{
         User.findOneAndRemove({name:'Aravinth'})
        .then(() => User.findOne({ name : 'Aravinth' }))
        .then((user) => {
            assert(user === null);
            done();
        })
    });

    it('Find id and remove',(done)=>{
        User.findByIdAndRemove(aravinth._id)
        .then(() => User.findOne({ name : 'Aravinth' })
        )
        .then((user) => {
            assert(user === null);
            done();
        })
    });
});