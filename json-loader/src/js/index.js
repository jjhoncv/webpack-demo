import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import renderToDom from './render-to-dom';
import image from '../images/flujo.png';

import data from './teachers.json';

data.teachers.forEach((teacher) => {
	const element = document.createElement('li');
	element.textContent = teacher.name;
	renderToDom(element);
});

console.log(data);

const img = document.createElement('img');
img.setAttribute('src', image);
img.setAttribute('width', '450px');

document.body.append(img);

document.write(firstMessage);
delayedMessage();

console.log('hola mundo');
