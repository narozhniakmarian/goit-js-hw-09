

export default function hoverA() {
    document.querySelectorAll('.lobbi-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.closest('li').classList.add('animate');
        });
        btn.addEventListener('mouseleave', () => {
            btn.closest('li').classList.remove('animate');
        });
    });
}

hoverA();