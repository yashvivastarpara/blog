const isAuth=(req,res,next)=>{
    if(req.user){
        return next();
    }
    else{
        return res.redirect("/user/login");
    }
};

module.exports= isAuth;