window.onload=function(){
    var inputText = document.getElementById('chatinput');
    var outputText = "";

	function doStuff(data) {
	    //Data is usable here
	    console.log(data);

	    var dictionary = {};

		for (var i = 0, emp; i < data.length; i++) {
		   d = data[i];
		   dictionary[d.original] = d.mapped;
		}

		console.log(dictionary);
 		
 		inputText.onkeyup = function(){
	    	outputText = outputText.concat(dictionary[inputText.value[inputText.value.length-1]]); 
	    	document.getElementById('printchatbox').innerHTML = outputText;
		}
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


// window.onload=function(){
// 	var inputText = document.getElementById('chatinput');

// 	var dictionary = new Object();
// 	dictionary["a"] = "b"; 
// 	dictionary["b"] = "c"; 
// 	dictionary["c"] = "d"; 
// 	dictionary["d"] = "e"; 
// 	dictionary["e"] = "f";  
// 	var outputText = "";

// 	Papa.parse("../data/coding1.csv", {
// 		download: true,
// 		complete: function(results) { 
// 			//var encoding = [].concat.apply([], results.data);   
// 			var dict = results.data;
// 			console.log(dict);
// 		}
// 	});
	 

// 	inputText.onkeyup = function(){
// 	    //document.getElementById('printchatbox').innerHTML = inputBox.value;
// 	    //console.log(inputText)
	     


// 	//     var str1 = "Hello ";
// 	// var str2 = "world!";
// 	// var res = str1.concat(str2); 
	   

// 	 //    for (var i = 0, len = inputText.value.length; i < len; i++) {
// 		//    outputText = outputText.concat(inputText.value[i]); 
// 		// }
// 		//outputText = dictionary[inputText.value[inputText.value.length-1]]; // last submitted char

// 	    // y = x[inputText.value];

// 		//for (var i = 0, len = inputText.value.length; i < len; i++) {
// 		    outputText = outputText.concat(dictionary[inputText.value[inputText.value.length-1]]); 
// 		//}

// 	    document.getElementById('printchatbox').innerHTML = outputText;
// 	}
// }