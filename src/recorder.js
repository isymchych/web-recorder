import MediaStreamRecorder from 'msr';
import 'gumadapter';

const AUDIO_MIME = 'audio/wav';

export default class Recorder {
  constructor() {
    this.blobs = [];
  }

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    this.recorder = new MediaStreamRecorder(this.stream);
    this.recorder.mimeType = AUDIO_MIME;

    this.recorder.ondataavailable = blob => this.blobs.push(blob);

    this.recorder.start(60000);
  }

  stop() {
    this.recorder.stop();
    this.stream.stop();
  }
}
