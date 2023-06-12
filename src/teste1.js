const data =  require("./fakeData");

const getUser = ( req, res ) => {
    const { name } =  req.query;
    try {
        const result = data.find((user) => user.name === name);
        result.counter += 1;

        if (!result) throw new Error('Name not found');

        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const getUsers = ( _req, res ) => {
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
