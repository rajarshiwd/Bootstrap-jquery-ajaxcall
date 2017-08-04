 function Validate()
    {
       var  name = document.signinform.uname;
      var   password = document.signinform.upass;
      
   var x =name.value;
   var y =password.value;
   
      var emp =[x,y];
       var user =["rajarshi","ragini","srinadh"];
       var pass =["raja123","ragi123","sri123"];
       
       var i;
   
    
        
        
            if((emp[0] === user[0] || emp[0] === user[1] || emp[0] === user[2]) && (emp[1] === pass[0] || emp[1] === pass[1] ||  emp[1] === pass[2])  ){
               
               return true; 
            }
            else{
                  alert("Enter Valid Login Credentials");
                return false;
            }

       
       
        
        
      
       
          return document.getElementById('user').innerHtml = name;
         
    }