var widgets = function (params) {
    document.write('我是组件')
}
widgets();
var div = document.getElementById('test')
div.addEventListener('click', function (event) {
    alert('我是组件 sina-top')
}, false)
