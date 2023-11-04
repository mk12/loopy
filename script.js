// Copyright 2023 Mitchell Kember. Subject to the MIT License.

addEventListener("load", () => {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d", { alpha: false });
    let N = 0;
    new ResizeObserver((entries) => {
        const newRect = entries[0].contentRect;
        const w = Math.floor(newRect.width);
        const h = Math.floor(newRect.height);
        if (canvas.width === w && canvas.height === h) return;
        canvas.width = w;
        canvas.height = h;
        ctx.font = "20px serif";
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#aaa";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#000"
        ctx.fillText(`[${N++}] ${w}x${h}`, 10, 25);
    }).observe(canvas);
});
