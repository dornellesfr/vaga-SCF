const data =  require("./fakeData");

const getUser = ( req, res, _next ) => {
    const { name } =  req.query;

    try {
        const result = data.filter((user) => user.name === name);
        if (result.length < 1) throw new Error('Name not found');

        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const getUsers = ( _req, res, _next ) => {
    try {
        const result = data;
        if (!data) throw new Error('Users not found');

        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getUser,
    getUsers
};