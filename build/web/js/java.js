/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Test() {
   
         var x = document.getElementsByName("myRadio");
         
        var i;
         for (i = 0; i < x.length-1 ; i++) {
     if(x[i].value === "male" && x[i].checked === true  ){
         
          alert("You Selected the " + x[i].value);
          
            
     }
    if (x[i+1].value === "female" && x[i+1].checked === true ){
         
          alert("You Selected the " + x[i+1].value);
            
     }
     
      
 }
         
      
               
            }
            
function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex;
    var y = document.getElementById("mySelect").options;
     var k = document.getElementsByName("myRadio");
        var i;
        
     if( k[0].checked === true && y[x].index ===0 && y[x].text ==="INDIA" ){
         
        alert("you are a " +k[0].value + " form a rich heritage country, "+y[x].text);
           
     }
    if (k[1].checked === true && y[x].index ===0 && y[x].text ==="INDIA"){
         
          
        alert("you are a "+k[1].value+" form a rich heritage country, "+y[x].text);
    
            
     }
         
    
    if( k[0].checked === true && y[x].index ===1 || y[x].text ==="SRILANKA" ){
         
        alert("you are a " +k[0].value + " form a historic Island, "+y[x].text);
           
     }
    if (k[1].checked === true && y[x].index ===1 || y[x].text ==="SRILANKA"){
         
          
        alert("You Are A "+k[1].value+" Form  "+y[x].text);
    
            
     }
   if( k[0].checked === true && y[x].index ===2 && y[x].text ==="ITALY" ){
         
        alert("You Are A " +k[0].value + " Form  "+y[x].text);
           
     }
    if (k[1].checked === true && y[x].index ===2 && y[x].text ==="ITALY"){
         
          
        alert("You Are A "+k[1].value+" Form , "+y[x].text);
    
            
     }
   if( k[0].checked === true && y[x].index ===3 && y[x].text ==="DUBAI" ){
         
        alert("You Are A " +k[0].value + " From, "+y[x].text);
           
     }
    if (k[1].checked === true && y[x].index ===3 && y[x].text ==="DUBAI"){
         
          
        alert("You Are A "+k[1].value+" From "+y[x].text);
    
            
     }
   
}
  


   function ValidateForm()
    {
        
      var  name = document.registerform.name;
      var   password = document.registerform.Password;
        var repassword = document.registerform.RePassword;
        var email = document.registerform.email;
      
      var uphone = document.registerform.uphone;
      var fname = document.registerform.fname;
      var x = document.getElementsByName("myRadio");
        var i;
  var y = document.getElementsByName("free");
    var j ;
     
      
    
      if(fname.value ==="" || fname.value === null){
         alert("Please Enter Your Name");
         fname.focus();
         return false;
      }
    
          for (i = 0; i < x.length-1 ; i++) {
     if(x[i].checked === false && x[i+1].checked === false){
         
          alert("Please Enter Your Gender");
        
         return false;
         
     }
 }
        
         if (email.value === "" || email.value === null)
        {
            alert("Please Enter Your E-mail");
            email.focus();
            return false;
        }
		
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email.value))
		{
        alert("please enter valid E-mail");
        email.focus();
        return false;
        }
        if(uphone.value ==="" || uphone.value === null){
         alert("Please Enter Your Phone Number");
         uphone.focus();
         return false;
      }
      if ((uphone.value.length < 9) || (uphone.value.length > 11))
        {
            window.alert("Please Enter Valid Phone Number");
            name.focus();
            return false;
        }
        
        

        if (name.value === "" || name.value === null)
        {
            alert("Please Enter User Name");
            name.focus();
            return false;
        }
		
		if (!/^\w*[A-Z]+[@!#$%^&*\w]+$/g.test(name.value))
		{
        alert("Please Use Atleast One Capital Letter And Character");
        name.focus();
        return false;
        }
		
        if ((name.value.length < 5) || (name.value.length > 9))
        {
            window.alert("Please enter User Name between 5 to 9 characters");
            name.focus();
            return false;
        }
		
		        
        if (password.value === "" || password.value === null)
        {
            alert("Please Enter Password");
            password.focus();
            return false;
        }

        if (password.value !== repassword.value)
        {
            window.alert("Password and Retype passwords should match");
            password.focus();
            return false;
        }
         for (j = 0; j < 1 ; j++) {
     if(y[j].checked === false && y[j+1].checked === false && y[j+2].checked ===false  ){
         
          alert("Please Select The Type Of Usage ");
        
         return false;
         
     }
 }
    

      
       
    } 
    
function  table(dis ){
        
          $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
            
          
                var str = '';
               
           for(var i=dis;i< dis+10 ;i++){
               
                str+=
                       '<tbody>'  +
                     '<tr>'+
                     '<td>'+data[i].userId + '</td>'+
                     '<td>' +data[i].id+'</td>'+
                     '<td>'+data[i].title+'</td>'+
                     '</tr>'+
                     '</tbody>'+'</table>' ;
         }
         
          
             $(".display-data").empty();
             $(".table ").empty();
             $(".table ").append( '<table class="table table-striped" ">'+' <thead >'+
      '<tr>'+
       '<th>USER ID</th>'+
       ' <th>ID</th>'+
       ' <th>TITLE</th>'
      +'</tr>'
    +'</thead>'+str);
             
        });
        
        
        
        
    }
    
    

    
    



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

      $(document).ready(function(){
          $("#eruser").hide();
           $("#erpass").hide();
          
          
          
          $("#please").focusout(function(){
        var me = $("#please").val();
        if(me !=="rajarshi" && me !=="ragini" && me !=="srinadh"){
            $("#eruser").html("Please Enter The Correct User Name");
            $("#eruser").show();
               var userer = true;
        }
        else{
            $("#eruser").hide();
            
        }
          });
        $("#pleasepass").focusout(function(){
        var me = $("#pleasepass").val();
        if(me !=="raja123" && me !=="ragini123" && me !=="srinadh123"){
            $("#erpass").html("Please Enter The Correct Password");
            $("#erpass").show();
               var userer = true;
        }
        else{
            $("#erpass").hide();
            
        }
    });
          
      
           $(".tabchange").click(function(){
       
        $("#tabelement").fadeToggle(3000);
        
    });
    $("#element1").click(function(){
       
        $(".table ").addClass(".table table-striped");
        
    });
    
   
    
   var count =0;
    $(".aja").click(function(){
        $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
            
           var str='';
           var start = count > 0? 10 * count :count ;
               var end= start +10;
                var str = '';
               
           for(var i=start;i< end ;i++){
               
                str+=
                       '<tbody>'  +
                     '<tr>'+
                     '<td>'+data[i].userId + '</td>'+
                     '<td>' +data[i].id+'</td>'+
                     '<td>'+data[i].title+'</td>'+
                     '</tr>'+
                     '</tbody>' ;
         }
            if(end>=data.length){
                count=0;
                $(".table").empty();
                $(".display-data").append("List Got Ended.Click The Button To Start Over");
                return;
                
            }
            count++;
             $(".display-data").empty();
             $(".table").empty();
             $(".table").append( ' <thead>'+
      '<tr>'+
       '<th>USER ID</th>'+
       ' <th>ID</th>'+
       ' <th>TITLE</th>'
      +'</tr>'
    +'</thead>'+str);
             
        });
    });
   $("#div2").click(function(){

  $("#section2").attr("id", "opac1");
  $("#section2").attr("id", "opac");
  $("#section2").attr("id", "opac2");
  $("#w3s").attr("href", "#opac1");
   
});
$("#div2").click(function(){

  $("#opac").attr("id", "opac1");
  $("#opac").attr("id", "opac");
  $("#opac").attr("id", "opac2");
  $("#w3s").attr("href", "#opac1");
   
});
   $("#div3").click(function(){
 
$("#section2").attr("id", "opac2");
  $("#section2").attr("id", "opac");
  $("#section2").attr("id", "opac1");
  $("#w3s").attr("href", "#opac2");
  
  
   });
   
   
  $("#div3").click(function(){
 
$("#opac1").attr("id", "opac2");
  $("#opac1").attr("id", "opac");
  $("#opac1").attr("id", "opac1");
  $("#opac1").attr("href", "#opac2");
   
   
});
$("#div1").click(function(){
 
  $("#opac2").attr("id", "opac");
  $("#opac2").attr("id", "opac1");
  $("#opac2").attr("id", "opac2");
  $("#opac2").attr("href", "#opac");
  
   
});
});
    