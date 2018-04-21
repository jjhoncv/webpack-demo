import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((todoOk, todoMal) => {
	setTimeout(() => {
		todoOk('Han pasado 3 segundos, omg');
	}, 3000);
});
module.exports = {
	firstMessage: 'hola mundo desde un modul2222o',
	delayedMessage: async () => {
		const message = await waitTime;
		renderToDOM(makeMessage(message));
	}
};
