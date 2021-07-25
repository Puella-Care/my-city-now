/* qb_step made by 엘샤, originally drawn by f4samurai | ©Magica Quartet/Aniplex, Magia Record Partners */
"use strict";
window.onload = () => {
	const qb_step = (x, y, to = 0x2bb, dx = 128, dy = 128, cl = 'qb_step') => {
		const qb = document.createElement('div');
		qb.className = cl;
		qb.style.left = (x - dx) + 'px';
		qb.style.top = (y - dy) + 'px';
		qb.appendChild(document.createElement('div'));
		qb.appendChild(document.createElement('div'));
		qb.appendChild(document.createElement('div'));
		document.body.appendChild(qb);
		qb.style.display = 'block';
		setTimeout(k => k.parentNode.removeChild(k), to, qb);
		return qb;
	}
	return 'ontouchstart' in document.documentElement
		? document.body.addEventListener('touchstart', e => qb_step(e.changedTouches[0].pageX, e.changedTouches[0].pageY))
		: document.body.addEventListener('mousedown', e => qb_step(e.clientX, e.clientY));
}
