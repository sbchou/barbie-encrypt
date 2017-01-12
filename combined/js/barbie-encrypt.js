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
		}
		console.log(orig_to_map);

		for (var i = 0, emp; i < data.length; i++) {
		   d = data[i];
		   map_to_orig[d.mapped] = d.original;
		}
		console.log(map_to_orig);
		// now you have encoding dictionary


		//start encode function
		$("#encodeBtn").click(function(){
		  inputText = $("#input").val();
		  console.log(inputText);

		  var outputText = "";

		  // lookup and map each char of input string
		  for (var i = 0, len = inputText.length; i < len; i++) {
		    mapped = orig_to_map[inputText[i]];
		    outputText = outputText.concat(mapped);
		  }
		  $("#output").text(outputText);
		}); // end encode function

		//start encode function
		$("#decodeBtn").click(function(){
		  inputText = $("#input").val();
		  console.log(inputText);
		  var outputText = "";

		  // lookup and map each char of input string
		  for (var i = 0, len = inputText.length; i < len; i++) {
		    orig = map_to_orig[inputText[i]];
		    outputText = outputText.concat(orig);
		  }
		  $("#output").text(outputText);
		}); // end encode function
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