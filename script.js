// Copyright 2023 Mitchell Kember. Subject to the MIT License.

addEventListener("load", () => {
    const canvas = document.getElementById("Canvas");
    const input = document.getElementById("Input");
    const ctx = canvas.getContext("2d", { alpha: false });

    let fg, bg;
    function updateColors() {
        const style = getComputedStyle(document.body);
        fg = style.getPropertyValue("--fg");
        bg = style.getPropertyValue("--btn");
    }
    updateColors();
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateColors);

    let w, h;
    function init(rect) {
        w = Math.floor(rect.width);
        h = Math.floor(rect.height);
        const r = devicePixelRatio;
        const pw = w * r;
        const ph = h * r;
        if (canvas.width === pw && canvas.height === ph) return;
        canvas.width = pw;
        canvas.height = ph;
        ctx.scale(r, r);
        ctx.font = "20px serif";
        draw();
    }
    let N = 0;
    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = fg;
        ctx.fillText(`k1p1 [${N++}] ${w}x${h}`, 10, 20);
    }

    new ResizeObserver((entries) => init(entries[0].contentRect)).observe(canvas);
    input.addEventListener("input", () => {
        draw();
    });
});
