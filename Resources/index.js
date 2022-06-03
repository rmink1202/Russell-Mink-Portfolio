let html = document.getElementById('html');
let css = document.getElementById('css');
let java = document.getElementById('java');
let git = document.getElementById('git');
let github = document.getElementById('github');
let wordpress = document.getElementById('word');

var current_rotation = 0;
html.addEventListener('click', function() {
	current_rotation += 90;
	html.style.transform = 'rotate(' + current_rotation + 'deg)';
});

css.addEventListener('click', function() {
	current_rotation += 90;
	css.style.transform = 'rotate(' + current_rotation + 'deg)';
});

java.addEventListener('click', function() {
	current_rotation += 90;
	java.style.transform = 'rotate(' + current_rotation + 'deg)';
});

git.addEventListener('click', function() {
	current_rotation += 90;
	git.style.transform = 'rotate(' + current_rotation + 'deg)';
});

github.addEventListener('click', function() {
	current_rotation += 90;
	github.style.transform = 'rotate(' + current_rotation + 'deg)';
});

wordpress.addEventListener('click', function() {
	current_rotation += 90;
	wordpress.style.transform = 'rotate(' + current_rotation + 'deg)';
});






