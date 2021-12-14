// 放在初始化的函数当中
window.onload = function(){
    let box = document.getElementsByClassName('box')[0]
    box.addEventListener('click',() => {
        alert('这是测试代码')
    })
}


