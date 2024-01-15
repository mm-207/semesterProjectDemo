import express from "express";
const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
    // Return user object
})

userRouter.post('/', (req, res) => {
    // create user
})

userRouter.put('/:id', (req, res) => {
    // edit user
})

userRouter.delete('/:id', (req, res) => {
    // create user
})

export default userRouter
