use blog;
db.posts.aggregate([
{
	$unwind:'$comments'
},
{

	$group:
			{		
				"_id":'$comments.author',
				"comments_count":{$sum:1}
			}

},
{

	$sort: {'comments_count':-1}

},
{
	$project:
			{
				"_id":0,
				"author":'$_id',
				'comments_count':1
			}

},
	{$limit:1}
])
