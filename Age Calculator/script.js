function ageCalculator() {

     //collect input from HTML form and convert into date format  
    var usrinp = document.getElementById("DOB").value;
    var dob = new Date(usrinp);

      //check user provide input or not 
    if (usrinp == NaN || usrinp == "") {
        document.getElementById("message").innerHTML = "**Choose a Date  Please";
        return false;
    }
    else {
            //extract the year, month, and date from user date input 
        var month_diff = Date.now() - dob.getTime();
    

        //convert the calculated difference in date format 
        var age_diff = new Date(month_diff);
        

        //extract year from date
        var year = age_diff.getUTCFullYear();
        

        //now calculate the age of the user 
        var age = Math.abs(year - 1970);
       

        //display the calculated age  
        document.getElementById("result").innerHTML = "Age is " + age + "Years";
    }
}