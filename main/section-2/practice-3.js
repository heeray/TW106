'use strict';

module.exports = function countSameElements(collection) {
 let arr = [];
	collection.forEach((a)=>{
	//将collection中的每一个元素都以[‘元素’，数量]表示
		let str=['item',0];
		if(a.match('-')){
			str[0]=a.split('-')[0];
			str[1]=a.split('-')[1];
		}
		else if(a.match(':')){
			str[0]=a.split(':')[0];
			str[1]=a.split(':')[1];
		}
		else if(a.match(/\[/)){
			str[0]=a.split(/\[/)[0];
			str[1]=a.split(/\[/)[1];
			if(str[1].match(/\]/)){
				str[1]=str[1].split(/\]/)[0];
			}
		}
		else{
			str[0]=a;
			str[1]=1;
		}
		str[1]=Number(str[1]);
		
    let p ;
	p = arr.findIndex((b)=> {
		return b.name == a[0];
		});
		if(p == -1){
			
				arr.push({name: str[0], summary: str[1]})
		}
		else{
		arr[p].summary+=str[1];
		}
	});
	return arr;
}
