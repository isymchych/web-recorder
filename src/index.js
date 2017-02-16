import Recorder from './recorder';

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

const recorder = new Recorder();

// initial state
stopBtn.classList.add('hidden');

// start
startBtn.addEventListener('click', async () => {
  startBtn.classList.add('hidden');

  await recorder.start();

  stopBtn.classList.remove('hidden');
});

// stop
stopBtn.addEventListener('click', async () => {
  recorder.stop();
  stopBtn.classList.add('hidden');

  const links = recorder.blobs.map((blob, index) => {
    const url = URL.createObjectURL(blob);

    const fileName = `part-${index}.wav`;
    return `
    <li>
        <audio controls src=${url}></audio>
        <a href=${url} download=${fileName}>${fileName}</a>
    </li>
    `;
  }).join('\n');

  document.getElementById('files').innerHTML = links;
});
