
const successhandle = require('../service/successhandle');

const handleErrorAsync = require('../service/handleErrorAsync');
const appError = require('../service/appError');
const Posts = require('../models/postsModel');


const posts ={

 getPosts:handleErrorAsync(async(req,res)=>{

    const timeSort = req.query.timeSort == "asc" ? "createdAt":"-createdAt"
    const filter = req.query.filter !== undefined ? {"content": new RegExp(req.query.filter)} : {};
    const AllPost = await Posts.find(filter).populate({
          path: 'user',
          select: 'name photo '
          }).sort(timeSort);
    successhandle(res,'資料讀取成功',AllPost)
 }),
 getOnePost:handleErrorAsync(async(req,res)=>{

  const timeSort = req.query.timeSort == "asc" ? "createdAt":"-createdAt"
  const filter = req.query.filter !== undefined ? {"content": new RegExp(req.query.filter)} : {};
  filter.user =req.params.id;
  const AllPost = await Posts.findById(filter.user).populate({
        path: 'user',
        select: 'name photo '
        }).sort(timeSort);
  successhandle(res,'資料讀取成功',AllPost)
}),
 creatPosts:handleErrorAsync(async(req,res,next)=>{
  const { body } = req;
  const {content,image } =body;
  
  console.log(req.body)
      if (!content) {
       
        return appError(400, '沒有填寫 content 資料', next);
      }
          const getAllPosts = await Posts.create({
          content,image,
          name:req.user.name,
          user:req.user.id
        });
   
      console.log(getAllPosts);
      successhandle(res,200,getAllPosts);

 }),



}

module.exports =posts;