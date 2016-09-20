var lgo = ['console.lo = console.lol = console.og = console.lgo = console.loo = console.lego = console.log'].join('\n');

var script = document.createElement('script');
script.textContent = lgo;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
