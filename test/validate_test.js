"use strict";
const assert    = require('assert');
const User      = require('../src/user');

describe("Validation  test ->",() =>{
    it('username required',() => {
            const user = new User({name : undefined});
            const validateResutl  = user.validateSync(); //differnce bettwen validate and validateSYnc
            const message     =    validateResutl.errors.name.message;
            assert(message === 'Name is required');

    })
    it('username required validation usng the vaid method',() => {
            const user = new User({name : "Ar"});
            user.save()
                .catch((validateResult) => {
                        const message     =    validateResult.errors.name.message;
                        assert(message === 'length required more than');
                })

    })
});