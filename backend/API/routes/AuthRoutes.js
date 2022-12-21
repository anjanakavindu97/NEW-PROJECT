
const {Router} = require('express')
const User = require('../models/userModel')
const Patry=require('../models/partyModel')
// const AuthController = require('../controllers/AuthController');
const router = Router()

router.post("/register", async(req,res)=>{
    try {
        
        const result = await User.create(req.body)
        await result.save()
        
        res.status(201).json({result:result})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message,er:'error happens'})
    }
});

router.get('/register', async (req, res) => {
    
    try {
        const users = await User.find({})
        res.status(200).json(users)
        res.send("hello world")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/login',async (req, res) => {

    const user = await User.findOne({
        ssn:req.body.NIC
    })

    if (user) {
        if (user.usertype === 'admin') {
            res.send({
                msg: true,
                admin:true
            })
        } else {
            res.send({msg:true})
        }
        
    } else {
        res.send({msg:false})
    }
    
})

router.get('/parties', async (req, res) => {

    const parties = await Patry.find({})
    

    res.send({
        parties:parties
    })
})

router.post('/parties', async (req, res) => {

    const id = req.body.id;
    const patry = await Patry.findOne({ id: id })
    patry.votes = patry.votes + 1
    try{
        patry.save()
        res.send({
            status:true
        })
    } catch (e) {
        res.send({
            status:false
        })
    }
    
    
})

router.get('/getresults',async (req, res) => {

    const votes =await Patry.find({})
    
    res.send({
        votes:votes
    })
})

module.exports = router;