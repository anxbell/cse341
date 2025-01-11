const awesomeFunction = (req, res, next) => {
    res.json('David Erazo');
};

const anotherPerson = (req, res, next) => {
    res.json('Awesome person');
};

module.exports = {awesomeFunction, anotherPerson};