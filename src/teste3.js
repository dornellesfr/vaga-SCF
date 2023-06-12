const data =  require("./fakeData");

function deleteUser(req, res) {
    try {
        const { name } =  req.query;

        const isNameRegistered = data.find((item) => item.name === name);
        if (!isNameRegistered) throw new Error('Name not found')

        data.filter((item) => item.name !== name);

        return res.status(200).json({ message: "User deleted with sucess" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    deleteUser,
}
