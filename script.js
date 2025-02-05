document.addEventListener('DOMContentLoaded', function() {
    const initialScreen = document.getElementById('initial-screen');
    const mainContent = document.getElementById('main-content');

    // 点击事件监听器
    document.addEventListener('click', function() {
        // 图片向上做非线性速度移动
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            // 非线性速度，例如使用 ease-out 效果
            const easeOut = progress => 1 - Math.pow(1 - progress, 2);
            const distance = easeOut(progress / 1000) * window.innerHeight;
            initialScreen.style.transform = `translateY(-${distance}px)`;
            initialScreen.style.opacity = 1 - easeOut(progress / 1000);

            if (progress < 1000) {
                window.requestAnimationFrame(step);
            } else {
                // 动画结束后隐藏初始屏幕，显示主页内容
                initialScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }
        }
        window.requestAnimationFrame(step);
    });
});