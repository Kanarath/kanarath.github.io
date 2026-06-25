const canvas = document.getElementById('circuit-canvas');
const ctx = canvas.getContext('2d');

let width, height, nodes;
const nodeCount = 80; // Cantidad de puntos
const maxDistance = 150; // Distancia para dibujar línea
const mouse = { x: null, y: null, radius: 150 };

// Ajustar tamaño al cambiar ventana
window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    nodes = [];

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Color de las líneas (el verde teal de tu diseño)
    ctx.strokeStyle = 'rgba(0, 199, 177, 0.2)';
    ctx.fillStyle = 'rgba(0, 199, 177, 0.5)';
    ctx.lineWidth = 1;

    for (let i = 0; i < nodes.length; i++) {
        let n = nodes[i];
        
        // Mover nodos
        n.x += n.vx;
        n.y += n.vy;

        // Rebotar en bordes
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Dibujar nodo (cuadrados tipo microchip)
        ctx.fillRect(n.x - 2, n.y - 2, 4, 4);

        // Dibujar conexiones
        for (let j = i + 1; j < nodes.length; j++) {
            let n2 = nodes[j];
            let dist = Math.hypot(n.x - n2.x, n.y - n2.y);

            if (dist < maxDistance) {
                // Si el ratón está cerca, iluminar las conexiones
                let mDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
                if (mDist < mouse.radius) {
                    ctx.strokeStyle = `rgba(0, 199, 177, 0.6)`;
                    ctx.lineWidth = 2;
                } else {
                    ctx.strokeStyle = `rgba(0, 199, 177, 0.15)`;
                    ctx.lineWidth = 1;
                }

                ctx.beginPath();
                // Dibujo en ángulos rectos para parecer un circuito (PCB Style)
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(n2.x, n.y); // Línea horizontal
                ctx.lineTo(n2.x, n2.y); // Línea vertical
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(draw);
}

// Iniciar
init();
draw();

// Mensaje en consola para curiosos
console.log("%c DIGITAL RONIN SYSTEM STATUS: ACTIVE ", "color: #00c7b1; font-weight: bold; background: #000; padding: 5px;");