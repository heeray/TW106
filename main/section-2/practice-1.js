'use strict';

module.exports = function countSameElements(collection) {
  let arr = [];
	collection.forEach((a)=>{
    let p ;
	p = arr.findIndex((b)=> {
		return b.key == a;
		});
		if(p == -1){
			arr.push({key:a,count:1});
		}
		else{
			arr[p].count++;
		}
	});
	return arr;
}
