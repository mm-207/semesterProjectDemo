import express from "express";
import User from "../modules/user.mjs";

const USER_API = express.Router();

USER_API.get('/:id', (req, res) => {
    // Return user object
})

USER_API.post('/', (req, res) => {
    // create user
})

USER_API.put('/:id', (req, res) => {
    // edit user
})

USER_API.delete('/:id', (req, res) => {
    // create user
})

export default USER_API
