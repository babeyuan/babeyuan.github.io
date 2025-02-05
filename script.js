// script.js
document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initial-screen');
    const mainContent = document.getElementById('main-content');
    const mainTitles = document.getElementById('main-titles');
    let isAnimating = false;

    // 触发事件
    const handleActivation = () => {
        if (isAnimating) return;
        isAnimating = true;
        
        const startTime = Date.now();
        const duration = 1000; // 1秒
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 缓动函数
            const ease = t => t * (2 - t);
            
            // 初始屏幕动画
            initialScreen.style.transform = `translateY(-${ease(progress) * 100}vh)`;
            initialScreen.style.opacity = 1 - ease(progress);
            
            // 主内容淡入
            mainContent.style.opacity = ease(progress);
            
            // 颜色过渡
            const orange = [239, 124, 0]; // HSL(38,80%,40%) 的 RGB 值
            const white = [255, 255, 255];
            const currentColor = orange.map((ch, i) => 
                Math.round(ch + (white[i] - ch) * ease(progress))
            );
            mainTitles.style.color = `rgb(${currentColor.join()})`;
            
            if (progress < 1) requestAnimationFrame(animate);
            else initialScreen.style.display = 'none';
        };
        
        requestAnimationFrame(animate);
    };

    document.addEventListener('click', handleActivation);
    document.addEventListener('wheel', e => e.deltaY < 0 && handleActivation());
});