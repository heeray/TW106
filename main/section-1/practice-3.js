'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
 let arr=[];
	collectionA.forEach((a)=>{
		if(objectB.value.indexOf(a)!=-1)
			arr.push(a);
	});
  return arr;
}
