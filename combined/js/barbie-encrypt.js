window.onload=function(){
	var inputText = 0;

	function doStuff(data) {    

		// Parse and clean data
	    console.log(data); 
	    var dictionary = {};

		for (var i = 0, emp; i < data.length; i++) {
		   d = data[i];
		   dictionary[d.original] = d.mapped;
		}
		console.log(dictionary);
		// now you have encoding dictionary


		//capture input and show it as output
		$("#encodeBtn").click(function(){
		  inputText = $("#input").val();
		  console.log(inputText);

		  var outputText = "";

		  // lookup and map each char of input string
		  for (var i = 0, len = inputText.length; i < len; i++) {
		    mapped = dictionary[inputText[i]];
		    outputText = outputText.concat(mapped);
		  }
 

// 		  outputText = inputText


// outputText = outputText.concat(dictionary[inputText.value[inputText.value.length-1]]); 
// 	    	document.getElementById('encodedoutput').innerHTML = outputText;


		  $("#output").text(outputText);
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




	parseData("/combined/data/coding1.csv", doStuff);
}