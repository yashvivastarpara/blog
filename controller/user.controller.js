const user =require("../model/userschema")

const getSignup = (req,res)=>{
    res.render("signup");
}

const postSignup=async(req, res)=>{
    await user.create(req.body);
    res.status(201).json({added:true});
}

const getLogin =(req,res)=>{
    res.render("login");
}

const postLogin =async(req,res)=>{
    res.send("welcome in login");
}

const getBlog=(req,res)=>{
    res.render("blog",{user:req.user});
}
const postBlog =async(req,res)=>{
    req.user.blogs.push(req.body);
    await user.findByIdAndUpdate(req.user.id,req.user);
    console.log(req.user);
    res.send("Updated blog");
}
const getBlogPost = async(req,res)=>{
    try{
        let blogs=await user.find();
        return res.status(200).send(blogs);
    }
    catch(error){
        return res.status(302).json({error: error.message});
    }
};
module.exports={
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    getBlog,
    postBlog,
    getBlogPost
}