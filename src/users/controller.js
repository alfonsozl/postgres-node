
const pool = require('../../db')
const queries = require('../users/queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results.rows);
        }
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results.rows);
        }
    })
}

const addUser = (req, res) => {
    const { name, email } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists!!!')
        }
        
        pool.query(queries.addUser, [name, email], (error, results) => {
            if (error) {
                throw error;
            } else {
                res.status(201).send('User created succesfully!!!');
            }
        });
    });
}


module.exports = {
    getUsers,
    getUserById,
    addUser,
}