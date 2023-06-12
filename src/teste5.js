const data =  require("./fakeData");

function counter(req, res) {
    try {
        const { name } =  req.query;
        const result = data.find((user) => user.name === name);
        return res.status(200).json(
            { message: `Usuário ${result.name} foi lido ${result.counter} vezes.`}
        );    
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    counter,
}
