const express = require('express');
const router = express.Router();

var database = require('./database.js');
router.get('/',function(req,res,next){

    var q = `SELECT * FROM teachers`
    console.log(q);
    database.query(q,function(err,rows){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send(rows)
        }
    })

})
router.get('/detail/:id',function(req,res,next){

    var q = `SELECT * FROM teachers WHERE TeacherId ='${req.params.id}'`
    console.log(q);
    database.query(q,function(err,rows){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send(rows)
        }
    })

})
router.post('/addTeachers',function(req,res,next){

    var q = `INSERT into teachers (TeacherName,Degree,TeachingExperiance) VALUES 
    ('${req.body.TeacherName}','${req.body.Degree}','${req.body.TeachingExperiance}');
    SELECT LAST_INSERT_ID();`
    console.log(q);
    database.query(q,function(err,rows,fields){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields})
        }
    })
})
router.put('/update/:id',function(req,res,next){

    console.log(req.body)
    var q = `UPDATE teachers SET TeacherName = '${req.body.TeacherName}',
                                Degree = '${req.body.Degree}',
                                TeachingExperiance='${req.body.TeachingExperiance}' 
             WHERE TeacherId ='${req.params.id}'`
    console.log(q);
    database.query(q,function(err,rows,fields){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields})
        }
    })
})
router.delete('/delete/:id',function(req, res, next){
	var q = `DELETE FROM teachers WHERE TeacherId = '${req.params.id}'`
	console.log(q)
	database.query(q,function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send({'rows':rows,'fields':fields});
		}
	})
})
router.get('/search/:query',function(req,res,next){
    var q = `SELECT * FROM teachers WHERE TeacherName LIKE '%${req.params.query}%' OR TeacherId LIKE '%${req.params.query}%' `
    console.log(q);
    database.query(q, function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () { 
				throw err;
			}).catch(next)
		}
		else{
			res.send(rows);
		}
		
	})
})
module.exports = router;