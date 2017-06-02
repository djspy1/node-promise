/*read call back functions*/

//var Promise=require('promise')
  //ex-1

/*function getData(val,err){
	return new Promise(function(resolve,reject){
	
    if(err){
    	reject(err)
    }
    	resolve(val)
  })
}

getData(1).then(function(data){
     console.log(data)
})
*/

//ex-2

function getData(val,err){
	return new Promise(function(resolve,reject){
	
    if(err){
    	reject(err)
    }
    	resolve(val)
  })
}

getData(1,"i am the error")
.then(function(data){
     console.log(data)
})
.catch(function(err){
	console.log("i am error block");
	console.log(err);
})