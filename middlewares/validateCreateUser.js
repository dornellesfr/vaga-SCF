function validateCreateUser(req, res, next) {
    try {
        const { name, job } = req.body;
        if (!name || !job) throw new Error('Fields are not completed correctly');
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    next();
}

module.exports = {
    validateCreateUser,
}
