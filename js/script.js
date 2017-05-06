(function () {

	function SetList() {
		this.form = document.getElementById('newMusicForm');
		this.musicName = document.getElementById('musicName');
		this.musicList = document.getElementById('musicList');

		this.addMusicToList = function (music) {
			if (!music) return;

			let li = document.createElement('li');
			li.appendChild(document.createTextNode(music));
			musicList.appendChild(li);

			let a = document.createElement('button');
			a.appendChild(document.createTextNode('x'));
			a.className = 'rm';
			a.id = 'rmFromList';

			li.appendChild(a);

			musicName.value = '';
		}

		this.rmMusicFromList = function (element) {
			element.parentElement.remove();
		}
	}

	let setList = new SetList();
	let body = document.getElementsByTagName('body')[0];

	setList.form.addEventListener('submit', 
		function (e) {
			e.preventDefault();

			setList.addMusicToList(setList.musicName.value);
			setList.musicName.focus();
		});

	body.addEventListener('click', 
		function(event) {
			if (event.target.id === 'rmFromList')
				setList.rmMusicFromList(event.target);
		});



}());