const methods = {
    home: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    services: (req, res) => {
        res.render('services');
    },
    contacts: (req, res) => {
        res.render('contacts');
    },
    hobbies: (req, res) => {
        res.render('hobbies')
    }
}

module.exports = methods;