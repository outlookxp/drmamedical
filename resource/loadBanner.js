function loadBanner() {
    // 获取当前页面的语言
    const currentLang = document.documentElement.lang;
    // 当lang属性为空或为中文时使用中文版，否则使用英文版
    const bannerPath = (!currentLang || currentLang === 'zh') ? '/zh/public/banner.html' : '/en/public/banner.html';
    
    fetch(bannerPath)
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => console.error('Error loading banner:', error));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadBanner); 