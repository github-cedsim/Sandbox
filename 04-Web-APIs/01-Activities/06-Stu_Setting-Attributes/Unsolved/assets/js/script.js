var site1El = document.querySelector('.site1');
var site2El = document.querySelector('.site2');
var site3El = document.querySelector('.site3');

site1El.children[0].textContent = 'Site 1';
site1El.children[1].setAttribute('href', 'https://google.com');
site1El.children[1].children[0].setAttribute('src', 'assets/images/image_1.jpg');
site1El.children[1].children[0].setAttribute('alt', 'man working');
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

site2El.children[0].textContent = 'Site 2';
site2El.children[1].setAttribute('href', 'https://twitter.com');
site2El.children[1].children[0].setAttribute('src', 'assets/images/image_2.jpg');
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

site3El.children[0].textContent = 'Site 3';
site3El.children[1].setAttribute('href', 'https://instagram.com');
site3El.children[1].children[0].setAttribute('src', 'assets/images/image_3.jpg');
site3El.children[1].children[0].setAttribute('alt', 'women working');
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

// Write Your Code Below
// I did not read the instructions correctly
// Should have used setAttribute() and a loop
// 1
var allH4Els = document.querySelectorAll('h4');
// 2
allH4Els[0].style.color = 'blue';
allH4Els[0].style.fontSize = '30px';
allH4Els[0].style.fontWeight = 'bold';
// 3
allH4Els[0].style.paddingLeft = '10px';
allH4Els[0].style.margin = '0';
// need to repeat for all h4 elements



// super tedious BOOOOOOOOOOO
// we need a loop
// loop 1
for (var i = 0; i < siteTitles.length; i++) {
	siteTitles[i].setAttribute(
		'style',
		'color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0',
	);
}
// loop 2
allH4Els.forEach(function (elements) {
	elements.setAttribute('style', 'color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0');
});
