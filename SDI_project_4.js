//alert("JavaScript works!");
//SDI project 4 1305
//Aurthor  Matthew Darke  
  
var myLibrary = function() {
  
 //Titlecase String

var stringtitlecase = function() {
 var words = phrase.split("matthewdarke");
 var stop =  phrase.indexof("d");
 for (var i = 0; i < words.length; i++){
	 word.substring(0, 7).toUpperCase();
	 word.substring(1)word.length;              
	   return words;
	 
    }
 };  
 
 // CHECK STRING PATTERN
 var checkString = function(val) {
 
 var stringLen = val.length;
 for (var i = 0; i < = stringLen; i ++){
	 if ( val.substring(i, i+1) === "-") 
       		console.log(true); 
   } else if { (! isNaN (val.length) ) 
		   
	console.log("number does follow a phone# pattern"); 
	 
	 return i;
  } 
 
 
 
 
 };
 
///// Find the total value of just the numbers in an array
 var totalVal = function(array);
 var multipleValue = [ 1, "pickles", 7, "onions" "10" 5, 6, "SDI"] {
 for(var i=0; i< 8; i++) {
	console.log(array [0] );  
	} 
 };
 
 
 	
	
}//end function
  return {
      "stringtitlecase": stringtitlecase,	   
	   "checkString":  checkString,	    
	    "totalVal": totalVal
    };//end return

    // check email pattern




}; //end my library	  
    
 // Main Code 
 var newLib = new myLibrary(); //new library
 
 console.log(newLib.stringtitlecase("matthewdarke"));
 console.log("the number does follow the pattern"(+ newLib.checkString("123-098-3475"));
 
 

 
 
 
 