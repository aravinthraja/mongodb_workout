const assert    = require('assert');
const User      = require('../src/user');

describe("create model",() =>{
    it('save a user', () =>{
        const aravinth =  new User({name:'Aravinth'});
        aravinth.save()
            .then((done) => {
                assert(!aravinth.isNew);
                done();
            });
    });
});