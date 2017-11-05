'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let arr=[]
	objectB.value.forEach((a)=>{
		collectionA.forEach((b)=>{
			if(a==b.key)
			{
				let i=parseInt(b.count/3);
				b.count-=i;
			}
		});
	});

	return collectionA;
}
