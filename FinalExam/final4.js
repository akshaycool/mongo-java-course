 db.posts.find({'date':ISODate("2013-03-16T02:50:27.874Z")})
 
 db.posts.update({'date':ISODate("2013-03-16T02:50:27.874Z")},
 {
     $push:
        {   comments:  
           { 
            $inc:{'comments.no_likes':1},
            $position:0
           }      
       } 
 })      
            //'comments.$':
                comments:
            {
                    no_likes:0,
                    $position:0
            }    
         }
 })       
                  /*
                      $inc:{'comments.$.no_likes':1},
                    $position:0}
                 }})
                */
                 
                 
db.posts.update({},{$push:{'comments.no_likes':{$each:[0]}}},{multiple:true})
 
 
 
 
 
 
 
 
 
 
 