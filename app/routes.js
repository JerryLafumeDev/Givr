



module.exports = function(app, db, passport, ObjectId, upload) {


  /********************
  =====Base routes=====
  *********************/
  
      // Load root index ===================================================
      app.get('/', function(req, res) {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
        res.render('index.ejs', {
          user: req.user,
          posts: result,
          message: req.flash('loginMessage')
        })
      })
    })  
  
      app.get('/user/:uID', function(req, res) {
        db.collection('users').findOne({_id: ObjectId(req.params.uID)}, (err,result) => {
          console.log("===========")
          console.log(req.params.uID)
          console.log(result)
  
          if(err) return console.log(err)
          db.collection('posts').find({authorID: ObjectId(req.params.uID)}).toArray((err2, result2) => {
            if(err) return console.log(err)
            console.log('posts++++++++')
            console.log(result2)
            res.render('user.ejs', {
              profile: result,
              user: result,
              posts: result2
            })
          })
        })
      })
    /**************************
    =====render feed page=====
    **************************/
      app.get('/feed', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('feed.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
    /**************************
    =====render profile page=====
    **************************/
      app.get('/profile', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('profile.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
    /**************************
    =====render settings page=====
    **************************/    
      app.get('/setting', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('setting.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
    /**************************
    =====render giv-post page=====
    **************************/   
      app.get('/ad-post', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('ad-post.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
    /**************************
    =====render giv-post page=====
    **************************/   
      app.get('/about', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('about.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
    /**************************
    =====render grid-details page=====
    **************************/   
      app.get('/grid-details/:itemId', isLoggedIn, (req, res) => {
        db.collection('posts').findOne({_id: ObjectId(req.params.itemId)}, (err, result) => {
          if(err) return console.log(err)
          db.collection('users').find({itemID: `${result._id}`}).toArray((err2, result2)=>{
            if(err2) return console.log(err2)
            console.log('getting item')
            console.log(result._id)
            console.log(result2)
          res.render('grid-details.ejs' , {
            user: req.user,
            item: result,
            people: result2
          })
        })
      })
    })
    /**************************
    =====render blog-list page=====
    **************************/   
      app.get('/blog-list', isLoggedIn, (req, res) => {
        db.collection('posts').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('blog-list.ejs' , {
            user: req.user,
            posts: result
          })
        })
      })
  
      app.get('/post/:postID', isLoggedIn, (req, res) => {
        db.collection('posts').findOne({ _id: ObjectId(req.params.postID) },(err, result) => {
          if(err) return console.log(err)
          db.collection('comments').find({postID: `${result._id}`}).toArray((err2, result2)=>{
            if(err2) return console.log(err2)
            console.log('getting comments')
            console.log(result._id)
            console.log(result2)
            res.render('post.ejs' , {
              post: result,
              comments: result2,
              user: req.user
            })
          })
  
        })
      })
  
      // SIGNUP =================================
      // show the signup form
      app.get('/signup', function(req, res) {
        res.render('signup.ejs', {
          message: req.flash('signupMessage')
        })
      })
  
    /**************************
      =====UPLOAD PROFILE PICTURE=====
      **************************/

      // app.post('/uploadAvi', profileUpload.single('file'),(req, res) => {
      //   if (req.files) {
      //     console.log(req.files);
      //     let file = req.files.file
      //     let fileName = file.name
      //     console.log(fileName);
      //     file.mv('uploads/' + fileName, function(err) {
      //       if (err) {
      //         res.send(err)
      //       } else {
      //         res.redirect('/feed')
      //         // res.send("File Uploaded")
      //       }
      //     })
      //     let profileImg ="../uploads/" + fileName
      //     db.collection('users').findOneAndUpdate({
      //       _id: ObjectId(req.user._id)
           
      //     }, {          
      //      $set:{
      //     local: {
      //       profileImg,
      //     },
      //     __v: 0
          
      //     } 
            
      //     }, {
      //       // if profile cant be found it would create a new profile which is why we set it to false
      //       upsert: true
      //     }, (err, result) => {
      //       if (err) return console.log(err)
      //       console.log('saved to database')
      //     })
      //   }
      // })
  
  
  
      /**************************
      =====CREATE POST=====
      **************************/
     const trail = require('path');
     const util = require('util');
  
      app.post('/newPost', async (req,res) => {
        try{
          console.log(req.files.myImage.name)
          const {myImage} = req.files;
          console.log(myImage)
          const fileName = myImage.name;
          const size = myImage.data.length;
          const extension = trail.extname(fileName);
          const allowedExt = /png|jpeg|jpg|gif|JPG/;

          if(!allowedExt.test(extension)) throw "Unsupported file type!";

          const md5 = myImage.md5;
          const URL = "/uploads/" + md5  + size + extension;

          await util.promisify(myImage.mv)('./public' + URL );

          res.redirect('/feed')
          } catch(err){
            console.log(err);
            res.status(500).json({
              message: err,
            })
          }
            db.collection('posts').insertOne({
            title: req.body.title,
            authorName: req.user.local.name,
            authorID: req.user._id,
            path: "/uploads/" + req.files.myImage.md5 + req.files.myImage.size + trail.extname(req.files.myImage.name),
            desc: req.body.desc,
            category: req.body.category,
            tag:  req.body.tag,
            condition: req.body.condition
          })
          console.log(req.files.myImage.md5)
      })
  
    // app.post('/newPost', upload.single('myImage'),(req, res) => {
    //   if(req.files){
    //     console.log(req.files)
    //     const {myImage} = req.files
    //     // var image = Object.keys(req.files)[0]
    //     console.log(myImage)
    //     var fileName = myImage.name
    //     console.log(fileName)
        

    //     myImage.mv('public/uploads/'+fileName, function (err){
    //       if (err) {
    //         res.send(err)
    //       }else{
    //         res.redirect('/feed')
    //       }
    //     })
    //        db.collection('posts').insertOne({
    //         title: req.body.title,
    //         authorName: req.user.local.name,
    //         authorID: req.user._id,
    //         path: 'uploads/'+fileName,
    //         desc: req.body.desc,
    //         category: req.body.category,
    //         tag:  req.body.tag,
    //         condition: req.body.condition
    //     }, (err, res) => {
    //       if (err) return console.log(err)
    //       console.log('saved to database')
    //     })
    //   }

    // })




     /**************************
      =====CREATE COMMENT=====
      **************************/

      app.post('/post/comment' , isLoggedIn,(req,res) => {
          console.log(req.body)
          db.collection('comments').insertOne({
            postID: req.body.postID,
            authorName: req.user.local.email,
            authorID: req.user._id,
            commentBody: req.body.commentBody
          }, (err, result) => {
            if (err){console.log(err)
              // res.redirect('/dashboard')
              return res.status(500).send({
                message: 'This is an error!'
              })
            } else {
              return res.status(201).send({
                message: "Onboarding Complete"
              })
            }
          })
        })
  
  
  
      app.put('/complete', isLoggedIn, (req, res) => {
        console.log(`Completing order ${req.body._id}`)
        let baristaNew = !req.body.complete? req.user.local.email : ''
        db.collection('orders').findOneAndUpdate({
          _id: ObjectId(req.body._id)
        }, {
          $set: {
            complete: !req.body.complete,
            barista: baristaNew
          }
        }, {
          sort: {_id: -1},
          upsert: true
        }, (err, result) => {
          if(err) return res.send(err)
          res.send(result)
        })
      })
  
      app.put('/clear', isLoggedIn, (req, res) => {
        console.log(`Clearing order ${req.body._id}`)
        db.collection('orders').findOneAndUpdate({
          _id:ObjectId(req.body._id)
        }, {
          $set: {
            clear: true
          }
        }, {
          sort: {_id: -1},
          upsert: true
        }, (err, result) => {
          if(err) return res.send(err)
          res.redirect('/barista')
        })
      })
  
      app.get('/dashboard', function(req, res) {
        db.collection('foodAid').find().toArray((err, result) => {
          if(err) return console.log(err)
          res.render('dashboard.ejs', {
            foodaid: result,
            title: 'Dashboard'
          })
        })
      })
  
  
  
      app.put('/request', function(req, res) {
        db.collection.findOneAndUpdate({
          _id:req.body._id
        }, {
          $set:
            {
              status: 'request',
              requestor: req.body.userID
            }
        }, {
          sort: {_id: -1},
          upsert:true
        }, (err, result) => {
          if(err) return res.send(err)
          res.send(result)
        })
      })
  
    
    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================
    
        // locally --------------------------------
            // LOGIN ===============================
            // show the login form
    
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/feed', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  app.post('/login-manager', passport.authenticate('local-login', {
      successRedirect : '/manager', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/feed', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

}
    
    // route middleware to ensure user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
    
        res.redirect('/');
    }
    