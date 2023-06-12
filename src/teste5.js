function counter(req, res) {
    
    const name =  req.query.name;

    res.send("Usuário " +  name  + "  foi lido 0 vezes.");

};

module.exports = {
    counter,
}
