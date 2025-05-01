function loadBanner() {
    fetch('public/banner.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => console.error('Error loading banner:', error));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadBanner); 