import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';

import image from '../images/flujo.png';

import videoCore from '../videos/que-es-core.mp4';

const img = document.createElement('img');
img.setAttribute('src', image);
img.setAttribute('width', '450px');

const video = document.createElement('video');
video.setAttribute('src', videoCore);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);

document.body.append(img);
document.body.append(video);

document.write(firstMessage);
delayedMessage();

console.log('hola mundo');
