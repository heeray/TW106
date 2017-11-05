'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let arr = [];
	collectionA.forEach((a)=>{
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
	
	objectB.value.forEach((a)=>{
		arr.forEach((b)=>{
			if(a==b.key)
			{
				let i=parseInt(b.count/3);
				b.count-=i;
			}
		});
	});

	return arr;
}
