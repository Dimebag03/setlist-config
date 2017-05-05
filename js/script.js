(function () {

	function SetList() {
		this.form = document.getElementById('newMusicForm');
		this.musicName = document.getElementById('musicName');
		this.musicList = document.getElementById('musicList');

		this.addMusicToList = function (music) {
			if (!music) return;

			let li = document.createElement("li");
			li.appendChild(document.createTextNode(music));
			musicList.appendChild(li);
			musicName.value = '';
		}
	}

	var setList = new SetList();

	setList.form.addEventListener('submit', function (e) {
        e.preventDefault();

		setList.addMusicToList(setList.musicName.value);
		setList.musicName.focus();
	});

}());