const data =  require("./fakeData");

function updateUser(req, res) {
    try {
        const { id, job, name } =  req.query;
        const user = data.find((u) => u.id === id);

        user.job = job;
        user.name = name;

        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    updateUser,
}
