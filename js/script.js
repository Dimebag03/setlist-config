~function () {

  function SetList() {
    this.form = document.getElementById('newMusicForm');
    this.musicName = document.getElementById('musicName');
    this.musicList = document.getElementById('musicList');

    this.addMusicToList = music => {
      if (!music || !music.trim()) return;

      const li = document.createElement('li');
      li.appendChild(document.createTextNode(music));
      musicList.appendChild(li);

      const a = document.createElement('button');
      a.appendChild(document.createTextNode('x'));
      a.className = 'rm';
      a.id = 'rmFromList';

      li.appendChild(a);

      musicName.value = '';
    }

    this.rmMusicFromList = element => {
      element.parentElement.remove();
    }
  }

  const setList = new SetList();
  setList.form.addEventListener('submit', event => {
    event.preventDefault();

    setList.addMusicToList(setList.musicName.value);
    setList.musicName.focus();
  });

  const body = document.getElementsByTagName('body')[0];
  body.addEventListener('click', event => {
    if (event.target.id === 'rmFromList') setList.rmMusicFromList(event.target);
  });

}();