
// 1. هنعمل عنصر الـ Glow بالـ JS ونضيفه للصفحة
const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);

// 2. نسمع لحدث حركة الماوس في الصفحة كلها
document.addEventListener('mousemove', (e) => {
    // نجيب إحداثيات الماوس بالنسبة للشاشة (Viewport)
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // نحدث مكان الـ Glow ليكون في نفس مكان الماوس
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;
    
    // أول ما الماوس يتحرك، نظهر الـ Glow
    glow.classList.add('active');
});

// 3. (اختياري) نخفي الـ Glow لما الماوس يخرج بره الصفحة
document.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
});