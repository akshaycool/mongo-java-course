
List<Document>
----List<ScoreDocument> scoreDoucuments=Document.get().List() 

scoreDocuments ->
	{
      "type": "exam",
      "score": 1.463179736705023
    },
    {
      "type": "quiz",
      "score": 11.78273309957772
    },
    {
      "type": "homework",
      "score": 6.676176060654615
    },
    {
      "type": "homework",
      "score": 35.8740349954354
    }

List<Object> homeworkObjects->
[  	{
      "type": "homework",
      "score": 6.676176060654615
    },
	{
      "type": "homework",
      "score": 35.8740349954354
    },
    {
      "type": "homework",
      "score": 16.676176060654615
    },
	{
      "type": "homework",
      "score": 45.8740349954354
    }
]


/*
 We can make a temp collection and store the homeworkDocuments there. 
for(int i=0;i<homeworkObjects.length();i++)
{
	Document doc1=new Document("_id"."1") OR tempCollection.insert(new Document("_id"."1").append(new Document()))
}
 Iterator<Object> iterator=homeworkObjects.iterator();

 while(iterator.next())
 {
 	Object o1=iterator.next();


 }








Algorithm

1)Get the objects in the collection which satisfies the query('type'='homework')

2) 
