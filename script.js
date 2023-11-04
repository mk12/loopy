// Copyright 2023 Mitchell Kember. Subject to the MIT License.

window.addEventListener("load", () => {
    const canvas = document.getElementById("Output");
    const ctx = canvas.getContext("2d");

    let i = 5;
    const resizeObserver = new ResizeObserver(() => {
        resizeObserver.disconnect();
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.font = "20px serif";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(`${canvas.width}x${canvas.height}`, 10, 25);
        // ctx.fillRect(i, i, i + 10, i + 10);
        // i = (i + 1) % (canvas.width - 20);
        // resizeObserver.observe(canvas);
    });
    // resizeObserver.observe(canvas)
});
