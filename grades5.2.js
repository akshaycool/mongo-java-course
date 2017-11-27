use test
db.zips.findOne()
db.zips.aggregate([{ $group:{_id:$manufacturer,num_products:{$sum:1}}}])

db.grades.find({'scores.type':{$in:["homework","exam"]}})
db.grades.find({'scores':{$elemMatch:{type:'exam','score':{$gt:99}}}}).count()
db.grades.find({'scores':{$elemMatch:{type:{$nin:['quiz']},'score':{$gt:99}}}}).count()
db.grades.find({'scores.score':{$gt:99}}).count()

db.grades.aggregate([{$unwind:'$scores'}])

db.grades.aggregate([
{
	$unwind:'$scores'
},
{
   //$match:{'scores':{$elemMatch:{type:'exam','score':{$gt:99}}}}
   //$match:{'scores.score':{$gt:99},'scores.type':{$nin:['quiz']}}
   $match:{'scores.type':{$nin:['quiz']}}
},
{
    $group:{_id:'$student_id',gpa:{$avg:'$scores.score'}}
    //$group:{_id:null,gpa:{$sum:1}}
},
{
    $group:{_id:'$class_id',class_avg:{$avg:'$gpa'}}
    //$group:{_id:null,gpa:{$sum:1}}
},
{$sort:{class_avg:1}},
{
    $project:{class_avg:1,_id:0,class_id:1}
    }
])



