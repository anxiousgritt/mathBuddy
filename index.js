function digitize(n) {
    //code here
    re = n.split("").reverse().join("")
    return re
  }
  console.log(digitize(123))

  function digitize(n) {
    //code here
    re = n.toString().split("").reverse()
    for(let i=0;i<re.length;i++){
      re.map(function(x){
                       return parseFloat(x,10)
                       })
      return re 
    }
    return re 
    
  
   
    
  }