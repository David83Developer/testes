const express = require('express')
const router = express.Router()
const  { User }  = require('../models')

router.get('/', async(_, res) => {

    const users = await User.findAll()

    res.status(200).json(users)

})

router.post('/', async(req, res)=> {
    const user = req.body

    const newUser = User.create(user)

    res.status(200).json(user)
})

module.exports = router