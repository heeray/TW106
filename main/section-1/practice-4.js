'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let arr=[];
	collectionA.forEach((a)=>{
		if(objectB.value.indexOf(a.key)!=-1)
			arr.push(a.key);
	});
  return arr;
}
