window.onload=function(){
	var inputText = 0;

	function doStuff(data) {    

		// Parse and clean data
	    console.log(data); 
	    var orig_to_map = {};
	    var map_to_orig = {};

		for (var i = 0, emp; i < data.length; i++) {
		   d = data[i];
		   orig_to_map[d.original] = d.mapped; 
		   map_to_orig[d.mapped] = d.original;
		}

		console.log(orig_to_map); 
		console.log(map_to_orig);
		// now you have encoding dictionary

		//start encode function
		$("#encodeBtn").click(function(){
		    inputText = $.trim($("#input").val());

			
				   
			  	console.log(inputText);
			  	var outputText = "";
			  	var invalidChars = false;

			  	// lookup and map each char of input string
			  	for (var i = 0, len = inputText.length; i < len; i++) {
			    	mapped = orig_to_map[inputText[i]];
			    	if (mapped == null){
    					invalidChars=true;
    					break;
					}
			   		outputText = outputText.concat(mapped);
			    }
			    if (invalidChars== true){
			    	$("#warning").html("You've entered an invalid character. Try again!").fadeIn(300).delay(1000).fadeOut(400);
			    	$("#output").text("");

			    }
			    else{ 
			    	$("#output").text(outputText);
			    }
			});  // end encode function

		//start decode function
		$("#decodeBtn").click(function(){
		    inputText = $.trim($("#input").val());

			if(inputText != "" ) {
			  var regx = /^[\w\-\s]+$/;
			  if (!regx.test(inputText)) { 
			    $("#warning").html("You've entered an invalid character. Try again!").fadeIn(300).delay(1000).fadeOut(400);
			    $("#output").text("");
			  }
			  else{
				  
			  	console.log(inputText);
			  	var outputText = "";

			  	// lookup and map each char of input string
			  	for (var i = 0, len = inputText.length; i < len; i++) {
			    	orig = map_to_orig[inputText[i]];
			   		outputText = outputText.concat(orig);
			    }
			    $("#output").text(outputText);
			    }
			}
		}); // end decode function

	}


	function parseData(url, callBack) {
	    Papa.parse(url, {
	        download: true,
	        header: true,
	        dynamicTyping: true,
	        complete: function(results) {
	            callBack(results.data);
	        }
	    });
	}




	parseData("/combined/data/coding1.csv", doStuff);
}