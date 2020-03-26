const express=require('express');
const formidable = require('formidable');
const router=express.Router();
const fs=require('fs');

fs.readdir('uploads',(error)=>{
    if(error){
        console.log('uploads 폴더 생성');
        fs.mkdirSync('uploads');
    }
});

router.post('/img',(req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      const oldpath = files.filetoupload.path;
      console.log(oldpath);
      const newpath = 'uploads/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});

module.exports=router;
