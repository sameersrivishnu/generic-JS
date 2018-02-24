
function valid()
{
validtext = textvalidation();
if(validtext)
{
    validcombo = combovalidation();   
        if(validcombo)
        {
         validmulti = multivalidation();
            if(validmulti)
                {
               validmulco =mulcovalidation();
            if(validmulco)
            {
                validtextarea = textareavalidation();
                    if(validtextarea)
                    {
                        validdate = datevalidation();
                        if(validdate)
                        {
                          checkbox = boxvalidation();
                            return checkbox;
                        }
                    }
                }
            }
        }
    } 
return false;   
}
   
function textvalidation()                            // validation of name,email and password
{
    var fname = document.getElementById('name').value;
        var pwdd = document.getElementById('pwd').value;
        var mail = document.getElementById('email').value;
        var namereg = new RegExp(/^[A-Za-z]+$/);
         var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
         var passwordreg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

        if(fname == "")
        {
            document.getElementById('nameerror').innerHTML = "*Please enter name";
            document.getElementById('name').focus();
            document.getElementById('name').style.backgroundColor = " #fff68f";
            document.getElementById('nameerror').style.color = "#cd0000";
            return false;
        }
        else if(!namereg.test(fname))
        {
            document.getElementById('nameerror').innerHTML = "*Name must be in characters only";
            document.getElementById('name').focus();
            document.getElementById('name').style.backgroundColor = "#fff68f";
            document.getElementById('nameerror').style.color = "#cd0000";
            return false;
        }
        else if(fname.length < 5)
        {
            document.getElementById('nameerror').innerHTML = "*Please enter at least 5 characters";
            document.getElementById('name').focus();
            document.getElementById('name').style.backgroundColor = "#fff68f";
            document.getElementById('nameerror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('name').style.backgroundColor = "white";
            document.getElementById('nameerror').style.display = "none";
        }
        if(mail =="")
        {
            document.getElementById('emailerror').innerHTML = "*Please enter email";
            document.getElementById('email').focus();
            document.getElementById('email').style.backgroundColor = " #fff68f";
            document.getElementById('emailerror').style.color = "#cd0000";
            return false;
        }
        else if(!emailreg.test(mail))
        {
            document.getElementById('emailerror').innerHTML = "*Please enter valid email";
            document.getElementById('email').focus();
            document.getElementById('email').style.backgroundColor = "#fff68f ";
            document.getElementById('emailerror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('email').style.backgroundColor = "white";
            document.getElementById('emailerror').style.display = "none";
        }
        if(pwdd =="")
        {
            document.getElementById('pwderror').innerHTML = "*Please enter password";
            document.getElementById('pwd').focus();
            document.getElementById('pwd').style.backgroundColor = "#fff68f";
            document.getElementById('pwderror').style.color = "#cd0000";
            return false;
        }
        else if(!passwordreg.test(pwdd))
        {
            document.getElementById('pwderror').innerHTML = "*Please enter valid password";
            document.getElementById('pwd').focus();
            document.getElementById('pwd').style.backgroundColor = "#fff68f";
            document.getElementById('pwderror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('pwd').style.backgroundColor = "white";
            document.getElementById('pwderror').style.display = "none"; 
            return true;
        }
        
    }


    function combovalidation()                    // validation of combo and radio

    {
        var quali = document.getElementById('qualification');
        var qua= quali.options[quali.selectedIndex].value;
      
        
        if(qua == 0)
        {
            document.getElementById('qualificationerror').innerHTML = "*Please select qualification";
            document.getElementById('qualification').focus();
            document.getElementById('qualificationerror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('qualificationerror').style.display = "none";
        }

        if(maleid.checked == false && femaleid.checked == false)
        {
            document.getElementById('gendererror').innerHTML = "*Please select gender";
            document.getElementById('maleid').focus();
            document.getElementById('gendererror').style.color = "#cd0000";
            return false;
        }
        else 
        
        
        {
            document.getElementById('gendererror').style.display = "none";
            return true;

        }
        

    }

function multivalidation()                                // validation of multicheckbox
    {
        var fe = document.getElementById('front');
        var be = document.getElementById('back');
        if(fe.checked == false && be.checked == false)
        {
            document.getElementById('courseerror').innerHTML = "*Please choose atleast one course";
            document.getElementById('front').focus();
            document.getElementById('courseerror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('courseerror').style.display = "none";
            return true;
        }
    }

function mulcovalidation()                        // validation of multicombocheckbox
    {
        var tec = document.getElementById('tech').value;
        if(tec == "")
        {
            document.getElementById('techerror').innerHTML = "*Please choose technology";
            document.getElementById('tech').focus();
            document.getElementById('techerror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('techerror').style.display = "none";
            return true;
        }
    }

function textareavalidation()                            // validation of textarea
                                    
    {
        var txt = document.getElementById('text').value;
        if(txt < 10)
        {
            document.getElementById('texterror').innerHTML = "*Enter atleast 10 characters";
            document.getElementById('text').focus();
            document.getElementById('text').style.backgroundColor = "#fff68f ";
            document.getElementById('texterror').style.color = "#cd0000";
            return false;
        }
        else
        {
            document.getElementById('texterror').style.display = "none";
            document.getElementById('text').style.backgroundColor = "white";     
            return true;

        }
        
    }



function datevalidation()                         // validation of date and time
    {
        var date = document.getElementById('dateid').value;
        var time = document.getElementById('timeid').value;

        if(date =="")
        {
          document.getElementById('dateerror').innerHTML = "*Enter valid date";
          document.getElementById('dateid').focus();
          document.getElementById('dateid').style.backgroundColor = "#fff68f";
          document.getElementById('dateerror').style.color = "#cd0000";
          return false;
        }

        else
        {
          document.getElementById('dateid').style.backgroundColor = "white";
          document.getElementById('dateerror').style.display = "none";
        }
        if(time =="")
        {
          document.getElementById('timeerror').innerHTML = "*Enter valid time";
          document.getElementById('timeid').focus();
          document.getElementById('timeid').style.backgroundColor = "#fff68f";
          document.getElementById('timeerror').style.color = "#cd0000";
          return false;
        }

        else
        {
          document.getElementById('timeid').style.backgroundColor = "white";
          document.getElementById('timeerror').style.display = "none";
          return true;
        }
    }


    function boxvalidation()               //validation of checkbox
    {
     
        if(terms.checked==false)
        {
            document.getElementById('termserror').innerHTML = "*Please agree to the Terms and Conditions";
            document.getElementById('terms').focus();
            document.getElementById('termserror').style.color = "#cd0000";
           
            return false;
        }
        else
        {
            document.getElementById('termserror').style.display = "none";
            alert("Successfully Submitted");
            return true;
        }
    
}
function ctrl(){
    document.getElementById("nameerror").innerHTML="";
    document.getElementById("emailerror").innerHTML="";
    document.getElementById("pwderror").innerHTML="";
    document.getElementById("qualificationerror").innerHTML="";
    document.getElementById("gendererror").innerHTML="";
    document.getElementById("courseerror").innerHTML="";
    document.getElementById("techerror").innerHTML="";
    document.getElementById("texterror").innerHTML="";
    document.getElementById("dateerror").innerHTML="";
    document.getElementById("timeerror").innerHTML="";
    
    }