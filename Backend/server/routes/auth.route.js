const express =require('express')
const router=express.Router();
router.post('/register',(req,res)=>{
    res.send('user registered successfully');
})
router.post('/login',(req,res)=>{
    res.send("user logged in successfully");
})
router.post('logout',(req,res)=>{
    res.send("user Logged out successfully");
})
export default router;