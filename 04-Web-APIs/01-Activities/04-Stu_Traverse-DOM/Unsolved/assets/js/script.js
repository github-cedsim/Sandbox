// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';


//check for errors in your browser dev tools console
// I found that if any "above javascript" has an error any "below javascript" will not show on the page due to the javascript error stops the code from continuing to the next line