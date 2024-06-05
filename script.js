//  Capitalizer

let c = [],
	d;

const a = prompt('Enter Text You Want To Be Capitalized'),
	b = a.split(' ');

b.forEach(item => {
	myString1 = `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`;
	c.push(myString1);
});

console.log(c);

d = c.join(' ');
console.log(d);
alert(d);
