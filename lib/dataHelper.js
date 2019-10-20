module.exports = {
    getRandName: function(){
        // just generates random number, not real name
        let randNum = Math.floor((Math.random() * 10) + 1);
        return `name${new Date().getTime().toString()}${randNum}`;
    },
    getRandId: function(){
        let randNum = Math.floor((Math.random() * 1000) + 1);
        return `ID_${new Date().getTime().toString()}${randNum}`;
    },
    getRandPhoneNum: function(){
        //since math random generates decimal number w/ i guess infinite nums
        return Math.random().toString().slice(2,11);
    },
    getRandEmail: function(){
        return `${new Date().getTime().toString()}@email.com`;
    }
}