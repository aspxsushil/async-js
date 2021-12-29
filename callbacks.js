

const posts = [{id:1,name:'ram'},{id:2,name:'anil'}];

const createPosts = () => {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            posts.push({id:3,name:'shyam'});
            const error = false;
            if(!error){
                resolve(posts);
            }
            else{
                reject('sorry something went wrong');
            }
        
           
        },5000);

       
    });

 
    

};


// const getPosts = ()=>{
//     posts.forEach((x)=>{
//            console.log(x.name);

//     });
// }

// createPosts().then(data=>{
//     data.forEach((x)=>{
//         console.log('name:',x.name);

//  });
// }).catch(error=>{
//     console.log(error);
// });

async function init(){
  const data =  await createPosts();
    console.log('data=>',data);

}

init();