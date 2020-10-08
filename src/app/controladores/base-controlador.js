const templates = require('../views/templates');

class BaseControlador {

    static rotas() {
        return {
            home: '/'           
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
}

module.exports = BaseControlador;