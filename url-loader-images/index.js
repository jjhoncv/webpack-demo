import './estilos.css';
import { firstMessage, delayedMessage } from './message.js';

import image from './flujo.png';

const img = document.createElement('img');
img.setAttribute('src', image);
img.setAttribute('width', '450px');

document.body.append(img);

document.write(firstMessage);
delayedMessage();

console.log('hola mundo');
