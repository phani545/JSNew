function alertValues()
{
   var Uname = document.getElementById("txtName").value;
   var Upassword = document.getElementById("txtPassword").value;
   var Upassword1 = document.getElementById("txtPassword1").value;
   var gender = document.getElementsByName("gender");
   var Email= document.getElementById("txtEmail").value;
   var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   var hoby = document.getElementsByName("hoby");
   var Age= document.getElementById("txtAge").value;
   

   if (Uname == "")
   {
     document.getElementById('txtName').focus();
     alert("User Name cann't be empty!!");
     document.getElementById('txtNameError').innerHTML="UserName Can't Empty!!";
     return false;
   }

   if(Upassword != Upassword1 )
   {
    alert("Passwords not matching!!");
    document.getElementById('txtPasswordError').focus();
    document.getElementById('txtPasswordError').innerHTML="Passwords Not Matching!!";
    return false;

   }

   if(Upassword == ""  )
   {
    alert("Passwords not matching!!");
    document.getElementById('txtPasswordError').focus();
    document.getElementById('txtPasswordError').innerHTML="Passwords Can't be empty!!";
    return false;

   }

   if(!gender[0].checked && !gender[1].checked)
   {
    alert("Checked the Gender!!");
    document.getElementsByName('gender')[0].focus();
    document.getElementById('ilbPasswordError').innerHTML="Select the appropiate gender!!";
    return false;
   }

   if(!Email.match(mailformat))
   {
    alert("Enter correct mail address");
    document.getElementById('txtEmail').focus();
    document.getElementById('ilbEmailError').innerHTML='Enter the emailID correctly!!'
    return false;
   }

   if(!hoby[0].checked && !hoby[1].checked && !hoby[2].checked)
   {
    alert("Checked the hobbies!!");
    document.getElementsByName('hoby')[0].focus();
    document.getElementById('ilbcheckError').innerHTML="Select the appropiate hoby!!";
    return false;
   }
   
   if(Age > 100 )
   {
    alert("Enter age below 100 !!");
    document.getElementById("txtAge").focus();
    document.getElementById('ilbageError').innerHTML="Enter proper age!!";
    return false;
   }
  
  
   //  else if(Upassword=="")
  //  {
  //   alert("User Password cann't be empty!!");
  //   return false;
  //  }
  //  else
  //  {
  //         alert(Uname);
  //         alert(Upassword);
   
  //  }
   

}

function Clear()
{
    document.getElementById("txtName").value="";
    document.getElementById("txtPassword").value="";
     
}

function Addition()
{
    var a = parseInt(document.getElementById("valueA").value);
    var b = parseInt(document.getElementById("valueB").value);
    alert("Value of is a:  "+ a);
    alert("Value of is b:  "+ b);
    var res = add(a,b);
    alert(res);
     
}

function add(x,y)
{
  return x+y;
}

function isNumber(evt)
{
    //alert("Key Pressed " + evt.key)
    //evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) 
        return false;
    return true;

}
