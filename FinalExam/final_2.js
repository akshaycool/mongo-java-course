
db.messages.aggregate(
{$unwind:'$headers.To'},
 {
    //$group:{ _id:{FROM:'$headers.From'},recipients:{$addToSet:'$headers.To'}} 
    //$group:{ _id:{FROM:'$headers.From'},recipients:{$addToSet:'$headers.To'}} 
    $group:{ _id:'$_id',From:{$first:'$headers.From'},recipients:{$addToSet:'$headers.To'}} 
},  
{$unwind:'$recipients'},

{
    $group:{ _id:{Sender:'$From',Reciever:'$recipients'},total_email:{$sum:1}} 
},
{$sort:{total_email:-1}
}
)       










