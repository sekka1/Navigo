declare var key;
declare var $;
declare var TweenLite;
declare var forward2;
console.log('loaded v03')
//document.body.style.cursor = 'wait'
require(['assets/jquery-2.1.b1.js'
		,'assets/TweenLite.min.js'
		,'assets/blueGrass.js'
		,'assets/CSSPlugin.min.js'   // Tween animation plugin
		,'http://ws.algorithms.io/socket.io/socket.io.js'
		,'assets/more/keymaster.min.js'// key listener

	] , function() { // we loaded:
			CSSPlugin.defaultTransformPerspective = 500;
			viewDir = 'view/'
			openCats()

			// sock *****************************
			//var socket = io.connect('http://ws.algorithms.io')
			setTimeout(function(){
					//socket.on('query_get_last_motion_data', onSocket)
				},500)

			//nav *****************************
			key('d',onRight)
			key('a',onLeft)
			key('w',onUp)
			key('s',onDown)
			key('q',onLeft)//TODO: reset
})//loaded

function onSocket(data) {
	console.log(data.rotation_x)
	console.log(data.rotation_y)
	console.log(data.rotation_x)
}

//http://www.greensock.com/css3
var setDur = .3
var categories  = [];
var threads = [];
var posts = [];

function onCat(nID) {
	categories.push(nID)
	var card = document.getElementById(nID)
	TweenLite.from(card,setDur, { rotationX:-40 })
	TweenLite.to(card,setDur, { scaleX:.8, scaleY:.8 })
}
function openCats() {
	var list = ["Sports","Politics", "Kardashians"];
	for (var i = 0; i < list.length; i++) {
		forward2('cat','kontainer1','cat',onCat)
	}
	setTimeout(function() {
		select(categories[0])
	},400)
}

function onThread(nID) {
	threads.push(nID)
	var card = document.getElementById(nID)
	TweenLite.from(card,setDur, { rotationX:-40 })
	TweenLite.to(card,setDur, { scaleX:.8, scaleY:.8 })
}
function openThreads(catId){
	level=2
	onThreadData(null)
}
function onThreadData(data) {
	threads = [];
	var list = ["Sports","Politics", "Kardashians"];
	for (var i = 0; i < list.length; i++) {
		forward2('thread','kontainer2','thread',onThread)
	}
	setTimeout(function() {
		select(threads[0])
	},100)
}
function removeThreads() {
	level=1
	threadNav=0

	var views = $('#kontainer2').children()
	console.log(views.length)
	while (views.length > 0) {
		var old = views.get(0)
		old.parentNode.removeChild(old)
		views = $('#kontainer2').children()
	}
}

function onPost(nID) {
	posts.push(nID)
	var card = document.getElementById(nID)
	TweenLite.from(card,setDur, { rotationX:-40 })
	TweenLite.to(card,setDur, { scaleX:.8, scaleY:.8 })
}
function openPosts(threadId){
	level=3
	postNav=0
	onPostData(null)
}
function onPostData(data) {
	posts = [];
	var list = ["Sports","Politics", "Kardashians"];
	for (var i = 0; i < list.length; i++) {
		forward2('post','kontainer3','post',onPost)
	}
	setTimeout(function() {
		select(posts[0])
	},100)
}
function removePosts() {
	level=2

	var views = $('#kontainer3').children()
	console.log(views.length)
	while (views.length > 0) {
		var old = views.get(0)
		old.parentNode.removeChild(old)
		views = $('#kontainer3').children()
	}
}

// NAV: ********************************
var level:number=1; // cat, thread, post
var catNav=0
var threadNav=0
var postNav=0
function onDown() {
	console.log('down')
	deSelect()
	if(1==level)
		select(categories[++catNav])
	if(2==level)
		select(threads[++threadNav])
	if(3==level)
		select(posts[++postNav])
}
function onUp() {
	console.log('up')
	deSelect()
	if(1==level) {
		--catNav
		select(categories[catNav])
	}
	if(2==level) {
		--threadNav
		select(threads[threadNav])
	}
	if(3==level) {
		--postNav
		select(posts[postNav])
	}
}

function onRight() {
	console.log('right'+level)
	if(1==level) {
		openThreads(categories[catNav])
		return
	}
	if(2==level)
		openPosts(threads[threadNav])
}
function onLeft() {
	console.log('left')
	if(2==level)
		removeThreads()
	if(3==level)
		removePosts()
}

function select(id) {
	console.log(id)
	$('html, body').animate({
		scrollTop: $('#'+id).offset().top -50
		},400);
	$('#'+id).css('border', '10px solid white');
}
function deSelect() {
	if(1==level)
		$('.cats').css('border-width', '0');
	if(2==level)
		$('.threads').css('border-width', '0');
	if(3==level)
		$('.posts').css('border-width', '0');
}

