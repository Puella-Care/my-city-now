/*! qb_step made by 엘샤, originally drawn by f4samurai | ©Magica Quartet/Aniplex, Magia Record Partners */
;(d => { "use strict";
	const qb_step = (e, t = 0x3a0, c = 'qb_step', p = d.body) =>
		setTimeout(p.removeChild.bind(p), t, (qb => {
			qb.className = c;
			qb.style.left = e.clientX + 'px';
			qb.style.top = e.clientY + 'px';
			qb.appendChild(d.createElement('div'));
			qb.appendChild(d.createElement('div'));
			qb.appendChild(d.createElement('div'));
			qb.style.display = 'block';
			return p.appendChild(qb);
		})(d.createElement('div')));
	return d.addEventListener(...('ontouchstart' in d.documentElement
		? ['touchstart', e => qb_step(e.changedTouches[0])]
		: ['mousedown', qb_step]), {passive: true});
})(document);
