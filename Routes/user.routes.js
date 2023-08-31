const { Router } = require("express");
const {
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  getBlog,
  postBlog,
  getBlogPost,
} = require("../controller/user.controller");

const passport = require("passport");
const isAuth = require("../middleware/isAuth");
const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).send("done");
});
routes.get("/signup", getSignup);
routes.post("/signup", postSignup);
routes.get("/login", getLogin);
routes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/user/blog",
    failureRedirect: "/user/signup",
  })
);

routes.get("/blog", isAuth, getBlog);
routes.post("/blog", postBlog);

routes.get("/blogdata", getBlogPost);

module.exports = routes;
