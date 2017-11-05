'use strict';

module.exports = function countSameElements(collection) {
  let arr = [];
	collection.forEach((a)=>{
    let p ;
	p = arr.findIndex((b)=> {
		return b.key == a;
		});
		if(p == -1){
			if(a.match('-')){
				let s;
				s=a.split('-');
				arr.push({key: s[0], count: Number(s[1])})
			}
			else{
				arr.push({key:a,count:1});
			}
	}
	else{
		arr[p].count++;
		}
	});
	return arr;
}
