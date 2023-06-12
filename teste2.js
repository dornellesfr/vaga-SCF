const data = require("./fakeData");
const fs = require("fs/promises")

function insertNewUser(req, res) {
    const { name, job } = req.body;
    const lastId = data[data.length - 1].id;
    
    const newUser = {
        id: lastId + 1,
        name,
        job,
    }

    data.push(newUser);
    return res.status(201).json(newUser);
};

module.exports = {
    insertNewUser,
}