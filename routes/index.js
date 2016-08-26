var express = require('express');
var router = express.Router('strict');
var mongo=require('mongodb');
var ObjectId=require('mongodb');
var assert=require('assert');
var nodemailer=require('nodemailer');

var dburl='mongodb://localhost:27017/empdb';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express with handlebars and  CHETAN ',condition:true});
});
router.get('/index',function(req,res,next){
	
     res.render('test',{title:'Rendering Chetan'});

	//res.send("I am Detail");
});
router.get('/index/:id',function(req,res,next){
     res.render('test',{identity: req.params.id,disphead:'Posting.....'});
     });
/*router.post('/index/submit',function(req,res,next){
	 var id= req.body.id;

	     res.redirect('/index/'+ id);

});*/
/*******************************************************************************data base****************************************/
router.get('/get-data',function(req,res,next){
	                  mongo.connect(dburl,function(err,db){
                      assert.equal(null,err);
                      var result=[];
         
                      console.log("inside get data");
                      var temp= db.collection('developersCollection').find();
          
                      temp.forEach(function(doc,err){
                                   assert.equal(null,err);
                                   result.push(doc);
                                   
                                   },function()
                                    { 
                          	          db.close();
                          	          res.render('test',{res:result,head:'Getting....'});
                          	          console.log("Displayed");
                          	         

/******************************************************FROM DB IN JSON*************************************************************************/

                                     /* var text=JSON.stringify(result);
                                      console.log(text);
                                      var transporter=nodemailer.createTransport({ service:'Gmail', auth:{user:'chetan.guru1008@gmail.com',pass:'trilocmandalvidhan'}});
                                      var mailoptions={from:'chetan.guru1008@gmail.com',
                                                         to: 'rapatil09@gmail.com',
                                                    subject:'STUDENT INFO',
                                                       text:text
                                                      };

                                    transporter.sendMail(mailoptions,function(err,info){
                                                                        if(err)
                                                                         {console.log(err);
                                                                          }else{
                                   	                                 console.log('Message sent: ' + info.response);
                                                                     res.json({yo: info.response});
                                                                    	console.log("mail sent");
                                                                         }

                              });*/
});
                     console.log("heyyyyy iam before");
                     
	});
	         


	         });
 /*******************************************************************************Asyncronous******************************************/
/*router.get('/get-data',function(req,res,next){
	                   var result=[];
	                   mongo.connect(dburl, function(err,db){
                                          assert.equal(null,err);
                                          
                                       
                                          console.log("inside get data");
                                          console.log("doing db operation");
                                        var docs= db.collection('developersCollection').find()



                                         	
                                	               
                                                     docs.forEach(function(i,err)
                                                        	    {
                                                        	     assert.equal(null,err);
                                                        	     result.push(i)
                                                        	     
                                                        	     },function(){
                                                        	     	db.close();

                                                                   res.render('test',{res:result,head:'Getting....'});
                          	                                       console.log("Displayed");
                          	                                   });         
                                          
                                                    });
          
                                                   
           console.log("heyyyyy");
                    
      });*/
	         




/******************************************************************************POSTING*****************************************************/
router.post('/index/submit',function(req,res,next){
	var temp={
          id:req.body.id,
          name:req.body.username,
          email:req.body.email,
          pass:req.body.password
          };
          



        mongo.connect(dburl,function(err,db){
                           assert.equal(null,err);
                           db.collection('developersCollection').insertOne(temp,function(err,result){
                                                                                assert.equal(null,err);
              	                                                                console.log("Inserted");
              	                                                                res.redirect('/index/' + temp.id );
              	                                                                db.close();
                                                                           });

                     });
	
          });
router.post('/update',function(req,res,next){
	
});
router.post('/delete',function(req,res,next){
	
});

module.exports = router;
