"use strict";
const assert    = require('assert');
const User      = require('../src/user');

function assertName(operation, done) {
    operation
    .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                console.log(users[0].name);
                assert(users[0].name === 'raja');
                done()
            });
}
describe("Updating model ->",() =>
{
    let aravinth;
    beforeEach( (done) =>{
        aravinth =  new User({name:'Aravinth'});
        aravinth.save()
            .then(() => {
                done()
            });
    });

    it('using the set and save',(done) =>{
        aravinth.set('name','raja');
        aravinth.save()
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                console.log(users[0].name);
                assert(users[0].name === 'raja');
                done()
            });
    });

    it('Model method updata for set and save single propery',(done) =>{ 
        assertName( aravinth.update({name : 'raja'}) , done );
    });

    it('Model class can update',(done) =>{
         assertName( User.update({name : 'Aravinth'}, {name : 'raja'}) , done );
    });
    it('Model class can find by one and update',(done) =>{
        assertName( User.findOneAndUpdate({name : 'Aravinth'}, {name : 'raja'}) , done );
    });
    it('Model class can find by id and update',(done) =>{
        assertName( User.findByIdAndUpdate(aravinth._id, {name : 'raja'}) , done );
    });
});