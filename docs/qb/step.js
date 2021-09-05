/*! qb_step made by 엘샤, originally drawn by f4samurai | ©Magica Quartet/Aniplex, Magia Record Partners */
;(d => d.addEventListener('pointerdown',
	({x, y}, t = 0x3a0, c = 'qb_step', n = 3, p = d.body) =>
	setTimeout(p.removeChild.bind(p), t, (qb => {
		for (qb.className = c; n--; qb.appendChild(d.createElement('div')));
		Object.assign(qb.style, {left:x+'px', top:y+'px', display:'block'});
		return p.appendChild(qb);
	})(d.createElement('div'))), {passive:true})
)(document);
