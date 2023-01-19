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
        var usryear = dob.getFullYear();
        var usrmonth = dob.getMonth();
        var usrdate = dob.getDate();


        //extract the year, month, and date from current date
        var now = new Date();
        var currentyear = now.getFullYear();
        var currentmonth = now.getMonth();
        var currentdate = now.getDate();

        //get years
        var year = currentyear - usryear;

        //get months when current month is greater 
        if (currentmonth >= usrmonth)
            var month = currentmonth - usrmonth;
        else {
            year--;
            month = 12 + currentmonth - usrmonth;
        }

        //get days when the current date is greater 
        if (currentdate >= usrdate)
            var date = currentdate - usrdate;
        else {
            month--;
            date = 31 + currentdate - usrdate;
            if (month < 0) {
                month = 11;
                year--;
            }
        }

        //group the age in a single variable 
        var age = {
            years: year,
            months: month,
            days: date
        };


        var agestring = "";
        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            agestring = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            agestring = "Only " + age.days + " days old.";
        //when current month and date is same as birth date and month
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            agestring = age.years + "years old.<br> Happy Birthday!!";
        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            agestring = age.years + "years and " + age.months + " months old.";
        else if ((age.years == 0) && (age.months > 0) && age.days > 0)
            agestring = age.months + " months and " + age.days + " days old.";
        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            agestring = age.years + " years and" + age.days + " days old.";
        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            agestring = age.months + " months old.";
        //when current date is same as dob(date of birth)  
        else agestring = "Welcome to Earth!!<br>Its your first day!";

        //display the calculated age  
        document.getElementById("result").innerHTML = agestring;
    }
}