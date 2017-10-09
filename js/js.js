var arr = [1,2,5,3,4,2,3];
function remove1(arr){
	var brr = [];
	for(var i=0;i<arr.length;i++){
		if(brr.indexOf(arr[i]) === -1){
			brr.push(arr[i]);
		}
	}
	return brr;
}
function remove2(arr){
	var brr = [];
	brr[0] = arr[arr.length-1];
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<brr.length;j++){
			if(arr[i] !== brr[j]){
				brr.push(arr[i]);
			}
		}
	}
	return brr;
}
console.log(remove1(arr))