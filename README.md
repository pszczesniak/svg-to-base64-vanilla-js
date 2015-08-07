# SVG to base64 converter written in pure javascript

It's easy to use - just grab SVG you want to convert and... do it.

## Quick start


We need to get our target SVG:
```javascript
var svg = document.querySelector('svg');
```

than we must create canvas with width and height exactly like our svg which we want convert:
```javascript
var canvas = document.createElement('canvas');
canvas.width = svg.getBoundingClientRect().width;
canvas.height = svg.getBoundingClientRect().height;
body.appendChild(canvas);
```

...and here comes the magic:


XMLSerializer.serializeToString() - Returns the serialized subtree of a string
```javascript
var svg_xml = (new XMLSerializer()).serializeToString(svg);
```

Get handle of created earlier canvas
```javascript
canvasTmp = document.getElementById('canvas');
ctx = canvasTmp.getContext('2d');
```

Create Image object and draw on canvas. As we're generating the image dynamically, we must set the `onload` property before the src.
```javascript
img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0);
};
img.src = 'data:image/svg+xml;base64,' + btoa(svg_xml);
```

That's all - base64 image is in `img.src`

## Browser support

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 10+
* Opera *(latest 2)*
* Safari *(latest 2)*
