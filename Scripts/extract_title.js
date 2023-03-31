function extract_title(t) { 
	let arr = t.split(' -')
	let et = ''
	for(let i =arr.length;i>0;i--) { et += arr[i]
					if(arr[i]=='-') break;	
					}
	return et.split(' ').splice(1)
}

module.exports = extract_title;