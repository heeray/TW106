'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let arr=[]
	objectB.value.forEach((a)=>{
		collectionA.forEach((b)=>{
			if(a==b.key)
			{
				b.count--;
			}
		});
	});

	return collectionA;
}
