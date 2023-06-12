const data =  require("../fakeData");

function validateAdmin(req, res, next) {
    const { name, password } = req.body;
    try {
        if (!name || !password) throw new Error('User not found');

        const result = data.filter((user) => user.name === name && user.password === password && user.role === 'admin');
        if (result.length < 1) throw new Error('User not authorized');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
}

module.exports = {
    validateAdmin,
}
