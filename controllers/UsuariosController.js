const bcrypt = require('bcrypt');

const UsuariosController = {
    showEntrar: (req, res) => {
        let erroNoCadastro = (req.query.erroNoCadastro == 1);

        res.render('entrar.ejs', {erroNoCadastro});
    },
    add: (req, res) => {
        // Extract info from req.body
        let {email, senha, confirmacao, endereco} = req.body;

        // Check if password and confirmation match
        if(senha != confirmacao){
            res.redirect('/usuarios/entrar?erroNoCadastro=1');
        }

        // Create an object with user info
        let usuario = {
            email,
            senha: bcrypt.hashSync(senha, 10),
            enderecos: [endereco]
        }

        // Save user in usuarios.json
        const fs = require('fs');
        const path = require('path');
        const usuarios = require('../database/usuarios.json');
        usuarios.push(usuario);
        fs.writeFileSync(
            path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios, null, 4)
        )

        // Create a session with NOT SENSIBLE user info
        delete usuario.senha; // Removing user password before saving in session
        req.session.usuario = usuario;

        // Redirect user...
        if(req.session.pizza != undefined){
            return res.redirect('/pizzas/cart')
        } else {
            return res.redirect('/pizzas')
        }

    }
}

module.exports = UsuariosController;