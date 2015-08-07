(function() {

    /* onclick conversion */
    document.getElementById('js-convert').addEventListener('click', function(){
        var svg = document.querySelector('svg'),
            canvas = document.createElement('canvas'),
            body = document.getElementsByTagName('body')[0],
            canvasTmp,
            svg_xml,
            ctx,
            img;

        // if our "svg" doesn't have 'xmlns' attribute we must add it
        //svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        canvas.id = 'canvas';
        canvas.width = svg.getBoundingClientRect().width;
        canvas.height = svg.getBoundingClientRect().height;

        body.appendChild(canvas);
        canvasTmp = document.getElementById('canvas');

        /* Time to play ;) */

        // https://developer.mozilla.org/en/XMLSerializer
        svg_xml = (new XMLSerializer()).serializeToString(svg);
        ctx = canvasTmp.getContext('2d');

        // JavaScript (HTML) image
        img = new Image();

        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };

        // https://developer.mozilla.org/en/DOM/window.btoa
        img.src = 'data:image/svg+xml;base64,' + btoa(svg_xml);

        // img.src - contains base64 URI from svg
        console.log(img.src);

        //remove temporary canvas
        canvasTmp.remove();

        //Check in browsers
        //body.appendChild(img);

    });

})();
