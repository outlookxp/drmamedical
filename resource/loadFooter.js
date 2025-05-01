function loadFooter() {
    // 获取当前页面的语言
    const currentLang = document.documentElement.lang;
    // 当lang属性为空或为中文时使用中文版，否则使用英文版
    const footerPath = (!currentLang || currentLang === 'zh') ? '/zh/public/footer.html' : '/en/public/footer.html';
    
    fetch(footerPath)
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadFooter); 