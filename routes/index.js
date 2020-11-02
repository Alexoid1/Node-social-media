const express = require('express');

const router = express.Router();
const database= require('../core/database')
router.get('/', (req, res, next) => {   
    res.render('users_sign_up', {title:"My application"});
});

router.get('/home', async   (req, res) => {  
    const posts= await database.query('SELECT * FROM posts');
    
    
    
    res.render('index_page', {title:"My application", posts:posts});
});

router.post('/add', async(req, res, next) => {  
    
    
    let new_post = {
        post: req.body.post,
        post_image: req.body.post_image,
        user_id:'1'
        
       
    };
    await database.query('INSERT INTO posts set?',[new_post]);
    res.redirect('/home');
});

router.get('/delete/:id',async(req,res,next)=> {
    let par=req.params;
    let sql= `DELETE FROM posts WHERE id=${par.id}`;
    await database.query(sql);
    res.redirect('/home');
});


module.exports = router;