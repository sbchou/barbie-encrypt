window.onload=function(){
	var inputText = 0;

	function doStuff(data) {    

		// Parse and clean data
	    console.log(data); 
	    var dictionary = {};

		for (var i = 0, emp; i < data.length; i++) {
		   d = data[i];
		   dictionary[d.mapped] = d.original;
		}
		console.log(dictionary);
		// now you have encoding dictionary


		//capture input and show it as output
		$("#submitBtn").click(function(){
		  inputText = $("#decodedinput").val();
		  console.log(inputText);

		  var outputText = "";

		  // lookup and map each char of input string
		  for (var i = 0, len = inputText.length; i < len; i++) {
		    original = dictionary[inputText[i]];
		    outputText = outputText.concat(original);
		  }
 

// 		  outputText = inputText


// outputText = outputText.concat(dictionary[inputText.value[inputText.value.length-1]]); 
// 	    	document.getElementById('encodedoutput').innerHTML = outputText;


		  $("#encodedoutput").text(outputText);
		});
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




	parseData("../data/coding1.csv", doStuff);
}