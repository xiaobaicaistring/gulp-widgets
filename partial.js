function insertStyleElement(opts, styleElement) {
    var head = document.head || document.getElementsByTagName('head')[0];
    if (opts.insertAt === 'top') {
        head.insertBefore(styleElement, head.firstChild);
    } else {
        head.appendChild(styleElement);
    }
}

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.type = "text/css";
    styleElement.innerHTML = css;
    insertStyleElement({ insertAt: 'bottom' }, styleElement);
}

function buildFragment() {
    if (!widgetsName) throw new Error("Invalid widgets name");

    var ndiv = document.createElement('div');
    var widgets = document.getElementsByTagName(widgetsName);

    ndiv.innerHTML = html;
    ndiv.setAttribute('data-widgets', widgetsName);
    ndiv.className = widgetsName;
    
    for (var l = widgets.length - 1; l >= 0; l--) {
        var widget = widgets[l];
        var parent = widget.parentNode;
        parent.insertBefore(ndiv.cloneNode(true), widget);
        parent.removeChild(widget);
    }
}

createStyleElement();
buildFragment();