'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let arr=[];
	collectionA.forEach((a)=>{
		if(collectionB.indexOf(a)!=-1)
			arr.push(a);
	});
  return arr;
}
