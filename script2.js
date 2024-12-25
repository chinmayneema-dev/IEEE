function check(){    
    let username= document.getElementById("textbox").value;
    let password= document.getElementById("textbox1").value;
    if (document.getElementById("checkboxes").checked){
        document.getElementById("para").innerHTML="Checked";
        console.log("Username is:",username," & Password is:", password);
    }
}

function Register(){    
    let username= document.getElementById("textbox").value;
    let password= document.getElementById("textbox1").value;
    if (confirm("Are You Sure")){
        if(username=="Chinmay_Neema" && password=="Chinmay@1234"){
            alert("Your Are Successfully Login");
            document.getElementById("textbox").value="";
            document.getElementById("textbox1").value="";
        }
        else{
            alert("Invalid Username and Password");
            document.getElementById("textbox").value="";
            document.getElementById("textbox1").value="";
        }
    }
    else{
        alert("Invalid Choose.");
        document.getElementById("textbox").value="";
        document.getElementById("textbox1").value="";
    }
    
}
