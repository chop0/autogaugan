// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const {ipcRenderer} = require('electron');

var isFirefox = typeof InstallTrigger !== 'undefined';
var colors = ['#00ac0d', '#012f47', '#0275b8', '#03c098', '#04434f', '#05fb29', '#06c312', '#076728', '#0809b6', '#09d3cf', '#0a150b', '#0bf2a6', '#0c246f', '#0d575d', '#0e46f9', '#0fd881', '#1058df', '#118c76', '#123a2c', '#13c1d8', '#14e67d', '#152718', '#165743', '#17aed2', '#1858ef', '#195103', '#1aa5ea', '#1b19cc', '#1c4de6', '#1d4823', '#1e09d6', '#1f94fe', '#2073bd', '#21d0c5', '#22f3d7', '#23c52b', '#24fe20', '#254f0b', '#26af68', '#27c0d4', '#28528a', '#2963b6', '#2ad8eb', '#2bb1a5', '#2cf37d', '#2d1d9c', '#2e936f', '#2f93e8', '#308e02', '#31a71b', '#3220d3', '#33c1d9', '#340997', '#35b935', '#367f33', '#3720ae', '#381f94', '#39cab5', '#3af41d', '#3b9743', '#3ca323', '#3dfe27', '#3ecb89', '#3f7249', '#40b729', '#411c97', '#422283', '#43802e', '#4480da', '#45a4b2', '#46356c', '#478503', '#48261f', '#49e809', '#4af48a', '#4b111b', '#4c4fad', '#4d84c7', '#4e69a7', '#4f2a3d', '#50ba55', '#511f61', '#52782c', '#530122', '#5441a2', '#55e758', '#56a921', '#573985', '#5823e8', '#5966ff', '#5a7724', '#5b0b00', '#5caecb', '#5d5222', '#5e5bc5', '#5f807e', '#606e32', '#6163fe', '#623550', '#638cbe', '#647988', '#65aabd', '#665481', '#67cbd1', '#684470', '#696969', '#6ac478', '#6b2f5b', '#6c7fa8', '#6df474', '#6e6e28', '#6fccb0', '#706419', '#71b443', '#72e867', '#734efc', '#748f23', '#759472', '#760000', '#77ba1d', '#7817f1', '#79cf21', '#7a8d92', '#7bc800', '#7c32c8', '#7d3054', '#7ec864', '#7f4502', '#80a945', '#81a365', '#82c08c', '#835f2c', '#84c575', '#855efd', '#869664', '#87716f', '#88b25b', '#892455', '#8aa2a7', '#8b3027', '#8c5dcb', '#8de61e', '#8e629e', '#8f2a91', '#90cdc6', '#9170c7', '#92e712', '#9364c8', '#946e28', '#956432', '#9600b1', '#978a29', '#98725d', '#999900', '#9ac6da', '#9b7fc9', '#9ceedd', '#9dbbf2', '#9e9eaa', '#9f79db', '#a06249', '#a1a164', '#a2a3eb', '#a3ded1', '#a47b69', '#a5c3ba', '#a65280', '#a7aed6', '#a8c832', '#a99410', '#aad16a', '#ab32a4', '#ac9b5e', '#ad0e18', '#ae2974', '#af3abf', '#b0c1c3', '#b1c8ff', '#b20a88', '#b356b8', '#b42b5b', '#b57b00'];
var labels = ['lbl-person', 'lbl-bicycle', 'lbl-car', 'lbl-motorcycle', 'lbl-airplane', 'lbl-bus', 'lbl-train', 'lbl-truck', 'lbl-boat', 'lbl-traffic-light', 'lbl-fire-hydrant', 'lbl-street-sign', 'lbl-stop-sign', 'lbl-parking-meter', 'lbl-bench', 'lbl-bird', 'lbl-cat', 'lbl-dog', 'lbl-horse', 'lbl-sheep', 'lbl-cow', 'lbl-elephant', 'lbl-bear', 'lbl-zebra', 'lbl-giraffe', 'lbl-hat', 'lbl-backpack', 'lbl-umbrella', 'lbl-shoe', 'lbl-eye-glasses', 'lbl-handbag', 'lbl-tie', 'lbl-suitcase', 'lbl-frisbee', 'lbl-skis', 'lbl-snowboard', 'lbl-sports-ball', 'lbl-kite', 'lbl-baseball-bat', 'lbl-baseball-glove', 'lbl-skateboard', 'lbl-surfboard', 'lbl-tennis-racket', 'lbl-bottle', 'lbl-plate', 'lbl-wine-glass', 'lbl-cup', 'lbl-fork', 'lbl-knife', 'lbl-spoon', 'lbl-bowl', 'lbl-banana', 'lbl-apple', 'lbl-sandwich', 'lbl-orange', 'lbl-broccoli', 'lbl-carrot', 'lbl-hot-dog', 'lbl-pizza', 'lbl-donut', 'lbl-cake', 'lbl-chair', 'lbl-couch', 'lbl-potted-plant', 'lbl-bed', 'lbl-mirror', 'lbl-dining-table', 'lbl-window', 'lbl-desk', 'lbl-toilet', 'lbl-door', 'lbl-tv', 'lbl-laptop', 'lbl-mouse', 'lbl-remote', 'lbl-keyboard', 'lbl-cell-phone', 'lbl-microwave', 'lbl-oven', 'lbl-toaster', 'lbl-sink', 'lbl-refrigerator', 'lbl-blender', 'lbl-book', 'lbl-clock', 'lbl-vase', 'lbl-scissors', 'lbl-teddy-bear', 'lbl-hair-drier', 'lbl-toothbrush', 'lbl-hair-brush', 'lbl-banner', 'lbl-blanket', 'lbl-branch', 'lbl-bridge', 'lbl-building-other', 'lbl-bush', 'lbl-cabinet', 'lbl-cage', 'lbl-cardboard', 'lbl-carpet', 'lbl-ceiling-other', 'lbl-ceiling-tile', 'lbl-cloth', 'lbl-clothes', 'lbl-clouds', 'lbl-counter', 'lbl-cupboard', 'lbl-curtain', 'lbl-desk-stuff', 'lbl-dirt', 'lbl-door-stuff', 'lbl-fence', 'lbl-floor-marble', 'lbl-floor-other', 'lbl-floor-stone', 'lbl-floor-tile', 'lbl-floor-wood', 'lbl-flower', 'lbl-fog', 'lbl-food-other', 'lbl-fruit', 'lbl-furniture-other', 'lbl-grass', 'lbl-gravel', 'lbl-ground-other', 'lbl-hill', 'lbl-house', 'lbl-leaves', 'lbl-light', 'lbl-mat', 'lbl-metal', 'lbl-mirror-stuff', 'lbl-moss', 'lbl-mountain', 'lbl-mud', 'lbl-napkin', 'lbl-net', 'lbl-paper', 'lbl-pavement', 'lbl-pillow', 'lbl-plant', 'lbl-plastic', 'lbl-platform', 'lbl-playingfield', 'lbl-railing', 'lbl-railroad', 'lbl-river', 'lbl-road', 'lbl-rock', 'lbl-roof', 'lbl-rug', 'lbl-salad', 'lbl-sand', 'lbl-sea', 'lbl-shelf', 'lbl-sky', 'lbl-skyscraper', 'lbl-snow', 'lbl-solid-other', 'lbl-stairs', 'lbl-stone', 'lbl-straw', 'lbl-structural', 'lbl-table', 'lbl-tent', 'lbl-textile-other', 'lbl-towel', 'lbl-tree', 'lbl-vegetable', 'lbl-wall-brick', 'lbl-wall-concrete', 'lbl-wall-other', 'lbl-wall-panel', 'lbl-wall-stone', 'lbl-wall-tile', 'lbl-wall-wood', 'lbl-water', 'lbl-waterdrops', 'lbl-window-blind', 'lbl-window-other', 'lbl-wood'];
var cat_labels = ['cat-bldg', 'cat-ground', 'cat-landscape', 'cat-plant'];
var cat_sublabels = [
    [95, 113, 128, 144, 151, 171, 175, 177],
    [111, 125, 126, 136, 140, 149, 154],
    [106, 120, 127, 135, 148, 150, 155, 157, 159, 162, 178],
    [97, 119, 124, 163, 169, 182]
];
var table_str = ['<table>     <tr><th><button class="btnclr lbl-bridge">Bridge</button></th></tr>    <tr><th><button class="btnclr lbl-fence">Fence</button></th></tr>    <tr><th><button class="btnclr lbl-house">House</button></th></tr>    <tr><th><button class="btnclr lbl-platform">Platform</button></th></tr>    <tr><th><button class="btnclr lbl-roof">Roof</button></th></tr>    <tr><th><button class="btnclr lbl-wall-brick">Wall&#8209brick</button></th></tr>    <tr><th><button class="btnclr lbl-wall-stone">Wall&#8209stone</button></th></tr>    <tr><th><button class="btnclr lbl-wall-wood">Wall&#8209wood</button></th></tr>    </tr>    </table>', '<table>     <tr><th><button class="btnclr lbl-dirt">Dirt</button></th></tr>    <tr><th><button class="btnclr lbl-gravel">Gravel</button></th></tr>    <tr><th><button class="btnclr lbl-ground-other">Ground&#8209other</button></th></tr>    <tr><th><button class="btnclr lbl-mud">Mud</button></th></tr>    <tr><th><button class="btnclr lbl-pavement">Pavement</button></th></tr>    <tr><th><button class="btnclr lbl-road">Road</button></th></tr>    <tr><th><button class="btnclr lbl-sand">Sand</button></th></tr>    </tr>    </table>', '<table>     <tr><th><button class="btnclr lbl-clouds">Clouds</button></th></tr>    <tr><th><button class="btnclr lbl-fog">Fog</button></th></tr>    <tr><th><button class="btnclr lbl-hill">Hill</button></th></tr>    <tr><th><button class="btnclr lbl-mountain">Mountain</button></th></tr>    <tr><th><button class="btnclr lbl-river">River</button></th></tr>    <tr><th><button class="btnclr lbl-rock">Rock</button></th></tr>    <tr><th><button class="btnclr lbl-sea">Sea</button></th></tr>    <tr><th><button class="btnclr lbl-sky active">Sky</button></th></tr>    <tr><th><button class="btnclr lbl-snow">Snow</button></th></tr>    <tr><th><button class="btnclr lbl-stone">Stone</button></th></tr>    <tr><th><button class="btnclr lbl-water">Water</button></th></tr>    </tr>    </table>', '<table>     <tr><th><button class="btnclr lbl-bush">Bush</button></th></tr>    <tr><th><button class="btnclr lbl-flower">Flower</button></th></tr>    <tr><th><button class="btnclr lbl-grass">Grass</button></th></tr>    <tr><th><button class="btnclr lbl-straw">Straw</button></th></tr>    <tr><th><button class="btnclr lbl-tree">Tree</button></th></tr>    <tr><th><button class="btnclr lbl-wood">Wood</button></th></tr>    </tr>    </table>'];
var current_cat_active = 'cat-landscape';
var current_cat_active_id = 2;
var current_active = 'lbl-sky';
var current_subcat_active_id = 7;
var current_active_id = cat_sublabels[current_cat_active_id][current_subcat_active_id] - 1;
var sky_label_id = 157 - 1;
var sea_label_id = 155 - 1;
var current_color = colors[current_active_id];


var currCnt = 0;
document.getElementById('segmapfile').setAttribute("multiple", "")

function label_selection() {
    var header = document.getElementById('palette');
    var args = header.getElementsByClassName('btnclr');
    var i = 0;
    for (; i < args.length; i++) {
        console.log(args.length);
        args[i]['addEventListener']('click', function() {
            //console.log(this.className);
            var header = document.getElementById('palette');
            console.log(cat_sublabels[current_cat_active_id]['length']);
            var previousState = 0;
            i = 0;
            for (; i < cat_sublabels[current_cat_active_id]['length']; i++) {
                tmp_id = cat_sublabels[current_cat_active_id][i] - 1;
                str = labels[tmp_id];
                console.log(str);
                console.log(current_active);
                  if (str == current_active) previousState = 1
            }
            console.log(previousState);
            if (previousState) {
                var _0xe799x14 = header.getElementsByClassName(current_active);
                _0xe799x14[0]['className'] = _0xe799x14[0]['className']['replace'](' lbl-active', '');
                _0xe799x14[0]['style']['background'] = 'inherit';
                _0xe799x14[0]['style']['color'] = '#202020'
            }
            this.className += ' lbl-active';
            var j = 0;
            for (; j < labels.length; j++)
                if (this.className.includes(labels[j])) {
                    this.style.background = colors[j];
                    this.style.color = 'white';
                    current_active = labels[j];
                    current_active_id = j;
                    current_color = colors[current_active_id];
                    brush_color_context.fillStyle = current_color;
                    brush_color_context.fillRect(0, 0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE)
                }
        })
    }
}
label_selection();
var header = document.getElementById('category');
var btncat = header.getElementsByClassName('btncat');
var i = 0;
for (; i < btncat.length; i++) btncat[i]['addEventListener']('click', function() {
    var header = document.getElementById('category');
    var _0xe799x14 = header.getElementsByClassName(current_cat_active);
    _0xe799x14[0]['className'] = _0xe799x14[0]['className']['replace'](' cat-active', '');
    _0xe799x14[0]['style']['background'] = 'inherit';
    _0xe799x14[0]['style']['color'] = '#202020';
    this.className += ' catactive';
    var indexLookupKey = 0;
    for (; indexLookupKey < cat_labels.length; indexLookupKey++)
        if (this.className.includes(cat_labels[indexLookupKey])) {
            this.style.background = '#606060';
            this.style.color = 'white';
            current_cat_active = cat_labels[indexLookupKey];
            current_cat_active_id = indexLookupKey; {
                $('#palette')['html']('');
                $('#palette')['append'](table_str[indexLookupKey]);
                label_selection()
            }
        }
});
BRUSH_COLOR_SIZE = 25;
var brush_color_canvas = document.getElementById('brush_color');
var brush_color_context = brush_color_canvas.getContext('2d');
var rect = {};
var drag = false;
brush_color_context.canvas.width = BRUSH_COLOR_SIZE;
brush_color_context.canvas.height = BRUSH_COLOR_SIZE;
brush_color_context.fillStyle = colors[sky_label_id];
brush_color_context.fillRect(0, 0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE);

function getRandomInt(n) {
    return Math.floor(Math.random() * Math.floor(n))
}
var urls = ['http://54.191.227.231:443/', 'http://34.216.59.35:443/'];
var nurl = urls.length;
var Url;
var this_moment = (new Date)['toLocaleDateString']();
var this_moment2 = (new Date)['getTime']();

var style_name = 'random';
onchange = 'toggleCheckbox(this)';

function toggleCheckbox() {
    if (document.getElementById('myCheck')['value'] == 0) document.getElementById('myCheck')['value'] = 1;
    else document.getElementById('myCheck')['value'] = 0;
    console.log(document.getElementById('myCheck')['value'])
}
var slider = document.getElementById('myRange');
var rangevalue = document.getElementById('rangevalue');
rangevalue.innerHTML = slider.value;
slider.oninput = function() {
    rangevalue.innerHTML = this.value
};
var hdDown = false;
var fourkDown = false;
var lastEvent;
var mouseDown = false;
var mouseFirstMove = false;
var renderDown = false;
var newDown = false;
var brushDown = true;
var eyedropperhDown = false;
set_btn_active('brush');
var brush_circle = true;
var brush_square = false;
var brush_diamond = false;
set_btn_active('brush_circle');
$('#brush_circle')['click'](function() {
    if (brush_circle == false) {
        if (brush_square) {
            reset_btn_active('brush_square');
            brush_square = false
        }
        if (brush_diamond) {
            reset_btn_active('brush_diamond');
            brush_diamond = false
        }
        brush_circle = true;
        set_btn_active('brush_circle')
    }
});
$('#brush_square')['click'](function() {
    if (brush_square == false) {
        if (brush_circle) {
            reset_btn_active('brush_circle');
            brush_circle = false
        }
        if (brush_diamond) {
            reset_btn_active('brush_diamond');
            brush_diamond = false
        }
        brush_square = true;
        set_btn_active('brush_square')
    }
});
$('#brush_diamond')['click'](function() {
    if (brush_diamond == false) {
        if (brush_circle) {
            reset_btn_active('brush_circle');
            brush_circle = false
        }
        if (brush_square) {
            reset_btn_active('brush_square');
            brush_square = false
        }
        brush_diamond = true;
        set_btn_active('brush_diamond')
    }
});
var fillDown = false;
var CANVAS_WIDTH = 512;
var CANVAS_HEIGHT = 512;
var INIT_GAP = 200;
var canvas = document.getElementById('viewport');
var context = canvas.getContext('2d');
rect = {};
drag = false;
context.canvas.width = CANVAS_WIDTH;
context.canvas.height = CANVAS_HEIGHT;
context.fillStyle = colors[sky_label_id];
context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT - INIT_GAP);
context.fillStyle = colors[sea_label_id];
context.fillRect(0, CANVAS_HEIGHT - INIT_GAP, CANVAS_WIDTH, CANVAS_HEIGHT);
var previous_canvas_image = '';
var canvas_output = document.getElementById('output');
var context_output = canvas_output.getContext('2d');
rect = {};
drag = false;
context_output.canvas.width = CANVAS_WIDTH;
context_output.canvas.height = CANVAS_HEIGHT;
var custom_image_upload = false;
var custom_canvas = document.getElementById('custom');
var custom_context = custom_canvas.getContext('2d');
rect = {};
drag = false;
CANVAS_WIDTH_2K = 512;
CANVAS_HEIGHT_2K = 512;
var canvas_output2k = document.getElementById('output2k');
var context_output2k = canvas_output2k.getContext('2d');
rect = {};
drag = false;
context_output2k.canvas.width = CANVAS_WIDTH_2K;
context_output2k.canvas.height = CANVAS_HEIGHT_2K;
function saveBlob(blob, fileName) {
    let reader = new FileReader()
    reader.onload = function() {
console.log(reader.readyState);
        if (reader.readyState == 2) {
            var buffer = new Buffer(reader.result)
            ipcRenderer.send("SAVE_FILE", fileName, buffer)
            console.log(`Saving ${JSON.stringify({ fileName, size: blob.size })}`)
        }
    }
    reader.readAsArrayBuffer(blob)
}



function render(c, n) {
//    console.log(n)
    var random_number = getRandomInt(1E9);
    Url = urls[random_number % nurl];
var global_fn = this_moment + ',' + this_moment2 + '-' + random_number;
    
    
    var _0xe799x43 = 1;
    if (_0xe799x43 != 1) alert('Please check the button in terms and conditions section before starting using the app.');
    else $['ajax']({
        type: 'POST',
        url: Url + 'nvidia_gaugan_submit_map',
	async:false,
 data: {
            imageBase64: c || canvas.toDataURL(),
            name: global_fn
        },
        success: function(retu_data) {
        //    console.log('success');
            var form = new FormData;
            form.append('name', global_fn);
            form.append('style_name', style_name);
            var self = new XMLHttpRequest;
            self.withCredentials = true;
            self.responseType = 'arraybuffer';
            self.open('POST', Url + 'nvidia_gaugan_receive_image', true);
            self.send(form);
            var args = new Image;
            var artistTrack = CANVAS_WIDTH_2K;
            var GET_AUTH_URL_TIMEOUT = CANVAS_HEIGHT_2K;
            self.onload = function(canCreateDiscussions) {
                var afterarray = new Uint8Array(this.response);
                var value = new Blob([afterarray], {
                    type: 'image/jpeg'
                });
                var settingHandler = window.URL || window.webkitURL;
                var _type = settingHandler.createObjectURL(value);
                args.src = _type;
                console.log(args.src, n)
		saveBlob(value, `output/${n}.jpg`)
            };
            args.onload = function() {
                context_output2k.drawImage(args, 0, 0, GET_AUTH_URL_TIMEOUT, artistTrack);
                context_output.drawImage(canvas_output2k, 0, 0, GET_AUTH_URL_TIMEOUT, artistTrack, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
            }
        },
        error: function(deleted_model, error) {
            console.log("error", deleted_model, error)
        }
    })['done'](function(canCreateDiscussions) {
//        console.log('sent')
    })
}

function draw_fill(cls, v, val, type, node, layer, data) {
    function offsetToPos(offset) {
        return element.data[offset + 0] === FunctionDeclaration && element.data[offset + 1] === name && element.data[offset + 2] === parentOffsetParent && element.data[offset + 3] === action_name
    }

    function offsetMousePosition(pos) {
        element.data[pos + 0] = type;
        element.data[pos + 1] = node;
        element.data[pos + 2] = layer;
        element.data[pos + 3] = data
    }
    var future = [
        [v, val]
    ];
    var value = canvas.width;
    var c = canvas.height;
    var element = cls.getImageData(0, 0, value, c);
    pos = (val * value + v) * 4;
    var FunctionDeclaration = element.data[pos + 0];
    var name = element.data[pos + 1];
    var parentOffsetParent = element.data[pos + 2];
    var action_name = element.data[pos + 3];
    if (type === FunctionDeclaration && node === name && layer === parentOffsetParent && data === action_name) return;
    for (; future.length;) {
        var obj;
        var pos;
        var _0xe799x61;
        var _0xe799x62;
        obj = future.pop();
        v = obj[0];
        val = obj[1];
        pos = (val * value + v) * 4;
        for (; offsetToPos(pos);) {
            val--;
            pos = (val * value + v) * 4
        }
        _0xe799x61 = false;
        _0xe799x62 = false;
        for (; true;) {
            val++;
            pos = (val * value + v) * 4;
            if (!(val < c && offsetToPos(pos))) break;
            offsetMousePosition(pos);
            if (v > 0)
                if (offsetToPos(pos - 4)) {
                    if (!_0xe799x61) {
                        future.push([v - 1, val]);
                        _0xe799x61 = true
                    }
                } else if (_0xe799x61) _0xe799x61 = false;
            if (v < value - 1)
                if (offsetToPos(pos + 4)) {
                    if (!_0xe799x62) {
                        future.push([v + 1, val]);
                        _0xe799x62 = true
                    }
                } else if (_0xe799x62) _0xe799x62 = false;
            pos = pos + value * 4
        }
    }
    cls.putImageData(element, 0, 0)
}

function aliasedCircle(range, offset, idx, number) {
    var i = number;
    var start = 0;
    var col = 0;
    range.fillRect(offset - i, idx, number << 1, 1);
    for (; i > start;) {
        col = col - (--i - ++start);
        if (col < 0) col = col + i++;
        range.fillRect(offset - start, idx - i, start << 1, 1);
        range.fillRect(offset - i, idx - start, i << 1, 1);
        range.fillRect(offset - i, idx + start, i << 1, 1);
        range.fillRect(offset - start, idx + i, start << 1, 1)
    }
}

function aliasedSquare(range, date, now, start) {
    range.fillRect(date - start, now - start, 2 * start, 2 * start)
}

function aliasedDiamond(axis, val, data, bufferSize) {
    var halfSize = 0;
    for (; halfSize < bufferSize;) {
        axis.fillRect(val - halfSize, data - (bufferSize - halfSize), 1, 2 * (bufferSize - halfSize) + 1);
        axis.fillRect(val + halfSize, data - (bufferSize - halfSize), 1, 2 * (bufferSize - halfSize) + 1);
        halfSize = halfSize + 1
    }
}
$('#info_segmap')['click'](function() {
    alert('You can upload your previously saved segmentation map using this upload button. Image format PNG.')
});
$('#info_real')['click'](function() {
    alert('You can upload a landscape image and use its segmentation mask as the starting point of your painting. Accepting format JPG/JPEG/PNG')
});
$('#info_style')['click'](function() {
    alert('You can upload a landscape image and use its style as the style of your output image. Image format JPG/JPEG/PNG')
});
$('#render')['click'](function() {
    render()
});
$('#brush')['click'](function() {
    console.log('brush');
    if (brushDown == false) {
        set_btn_active('brush');
        reset_btn_active('fill');
        reset_btn_active('eyedropper')
    }
    eyedropperhDown = false;
    renderDown = false;
    newDown = false;
    brushDown = true;
    fillDown = false;
    canvas.style.cursor = 'crosshair'
});
$('#fill')['click'](function() {
    console.log('fill');
    if (fillDown == false) {
        set_btn_active('fill');
        reset_btn_active('brush');
        reset_btn_active('eyedropper')
    }
    eyedropperhDown = false;
    renderDown = false;
    newDown = false;
    brushDown = false;
    fillDown = true;
    canvas.style.cursor = 'sw-resize'
});
$('#eyedropper')['click'](function() {
    console.log('eyedropper');
    if (eyedropperhDown == false) {
        set_btn_active('eyedropper');
        reset_btn_active('brush');
        reset_btn_active('fill')
    }
    eyedropperhDown = true;
    renderDown = false;
    newDown = false;
    brushDown = false;
    fillDown = false;
    canvas.style.cursor = 's-resize'
});
$('#new')['click'](function() {
    console.log('new');
    context.fillStyle = colors[sky_label_id];
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT - INIT_GAP);
    context.fillStyle = colors[sea_label_id];
    context.fillRect(0, CANVAS_HEIGHT - INIT_GAP, CANVAS_WIDTH, CANVAS_HEIGHT)
});
$('#undo')['click'](function() {
    console.log('undo');
    if (previous_canvas_image != '') {
        context.putImageData(previous_canvas_image, 0, 0);
        previous_canvas_image = '';
        set_btn_active('undo')
    }
});
set_btn_active('undo');

function set_btn_active(name) {
    var versionByName = document.getElementById(name);
    versionByName.className = versionByName.className + '_active'
}

function reset_btn_active(name) {
    var versionByName = document.getElementById(name);
    versionByName.className = versionByName.className.replace('_active', '')
}

function backup_canvas() {
    console.log('Backup');
    previous_canvas_image = context.createImageData(CANVAS_WIDTH, CANVAS_HEIGHT);
    var _0xe799x72 = context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    previous_canvas_image.data.set(_0xe799x72.data);
    reset_btn_active('undo')
}
$(canvas)['on']('mouseup', function(canCreateDiscussions) {
    mouseDown = false;
    mouseFirstMove = false;
    console.log('mouseup inside')
});
$(canvas)['on']('mousedown', function(e) {
    lastEvent = e;
    mouseDown = true;
    if (fillDown) {
        backup_canvas();
        var THREAD_STARTED = hexToRgb(current_color)['r'];
        var currentAbsoluteChild = hexToRgb(current_color)['g'];
        var mapBoxLayer = hexToRgb(current_color)['b'];
        draw_fill(context, e.offsetX, e.offsetY, THREAD_STARTED, currentAbsoluteChild, mapBoxLayer, 255)
    } else if (eyedropperhDown) pick_color(e);
    else if (brushDown) single_point_drawing(e)
});

function hexToRgb(array) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i ['exec'](array);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';
    return (r << 16 | g << 8 | b).toString(16)
}

function pick_color(event) {
    var _0xe799x7a = context.getImageData(event.offsetX, event.offsetY, 1, 1);
    var _0xe799x74 = '#' + ('000000' + rgbToHex(_0xe799x7a.data[0], _0xe799x7a.data[1], _0xe799x7a.data[2]))['slice'](-6);
    current_color = _0xe799x74;
    brush_color_context.fillStyle = current_color;
    brush_color_context.fillRect(0, 0, BRUSH_COLOR_SIZE, BRUSH_COLOR_SIZE)
}

function single_point_drawing(msg) {
    var ch1 = slider.value / 2;
    context.fillStyle = current_color;
    if (brush_circle) aliasedCircle(context, msg.offsetX, msg.offsetY, ch1);
    else if (brush_square) aliasedSquare(context, msg.offsetX, msg.offsetY, ch1);
    else if (brush_diamond) aliasedDiamond(context, msg.offsetX, msg.offsetY, ch1);
    context.fill()
}

function return_offset(x, t) {
    return {
        offsetX: Math.round(x),
        offsetY: Math.round(t)
    }
}

function two_point_drawing(msg, props) {
    dx = msg.offsetX - props.offsetX;
    dy = msg.offsetY - props.offsetY;
    if (Math.abs(dx) > Math.abs(dy))
        if (dx > 0) {
            sh = dy / dx;
            i = Math.round(props.offsetX);
            for (; i <= Math.round(msg.offsetX); i++) {
                nx = i;
                ny = Math.floor(sh * (i - Math.round(props.offsetX)) + Math.round(props.offsetY));
                single_point_drawing(return_offset(nx, ny))
            }
        } else {
            sh = dy / dx;
            i = Math.round(msg.offsetX);
            for (; i <= Math.round(props.offsetX); i++) {
                nx = i;
                ny = Math.floor(sh * (i - Math.round(msg.offsetX)) + Math.round(msg.offsetY));
                single_point_drawing(return_offset(nx, ny))
            }
        } else if (dy > 0) {
        sh = dx / dy;
        i = Math.round(props.offsetY);
        for (; i <= Math.round(msg.offsetY); i++) {
            ny = i;
            nx = Math.floor(sh * (i - Math.round(props.offsetY)) + Math.round(props.offsetX));
            single_point_drawing(return_offset(nx, ny))
        }
    } else {
        sh = dx / dy;
        i = Math.round(msg.offsetY);
        for (; i <= Math.round(props.offsetY); i++) {
            ny = i;
            nx = Math.floor(sh * (i - Math.round(msg.offsetY)) + Math.round(msg.offsetX));
            single_point_drawing(return_offset(nx, ny))
        }
    }
}
$(canvas)['on']('mousemove', function(e) {
    if (e.buttons == 1 & mouseDown & brushDown) {
        if (mouseFirstMove == false) {
            mouseFirstMove = true;
            backup_canvas()
        }
        if (isFirefox) single_point_drawing(e);
        else two_point_drawing(e, lastEvent);
        lastEvent = e
    }
});
canvas.addEventListener('touchend', function(canCreateDiscussions) {
    mouseDown = false;
    mouseFirstMove = false
}, false);
canvas.addEventListener('touchstart', function(startPos) {
    mousePos = getTouchPos(canvas, startPos);
    lastEvent = mousePos;
    mouseDown = true;
    console.log(lastEvent);
    if (fillDown) {
        backup_canvas();
        var THREAD_STARTED = hexToRgb(current_color)['r'];
        var currentAbsoluteChild = hexToRgb(current_color)['g'];
        var mapBoxLayer = hexToRgb(current_color)['b'];
        draw_fill(context, mousePos.offsetX, mousePos.offsetY, THREAD_STARTED, currentAbsoluteChild, mapBoxLayer, 255)
    } else if (eyedropperhDown) pick_color(mousePos);
    else if (brushDown) single_point_drawing(mousePos)
}, false);
canvas.addEventListener('touchmove', function(startPos) {
    mousePos = getTouchPos(canvas, startPos);
    if (mouseDown & brushDown) {
        if (mouseFirstMove == false) {
            mouseFirstMove = true;
            backup_canvas()
        }
        if (isFirefox) single_point_drawing(mousePos);
        else two_point_drawing(mousePos, lastEvent);
        lastEvent = mousePos
    }
}, false);
document.body.addEventListener('touchstart', function(canCreateDiscussions) {}, false);
document.body.addEventListener('touchend', function(canCreateDiscussions) {}, false);
document.body.addEventListener('touchmove', function(canCreateDiscussions) {}, false);

function getTouchPos(e, pos) {
    var rect = e.getBoundingClientRect();
    return {
        offsetX: Math.round(pos.touches[0]['clientX'] - rect.left),
        offsetY: Math.round(pos.touches[0]['clientY'] - rect.top)
    }
}
download_segmap = function(PL$39) {
    var undefined = canvas.toDataURL('image/png');
    PL$39.href = undefined
};
download_rendered = function(PL$39) {
    var undefined = canvas_output2k.toDataURL('image/jpeg');
    PL$39.href = undefined
};

function write(i) {
    var uniqueLinks = document.createElement('p');
    uniqueLinks.innerHTML = i;
    document.body.appendChild(uniqueLinks)
}

function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/png');
}


function loadSegmap() {



    var _0xe799x89;
    var artistTrack;
    if (typeof window.FileReader !== 'function') {
        write('The file API isn\'t supported on this browser yet.');
        return
    }
    _0xe799x89 = document.getElementById('segmapfile');
    if (!_0xe799x89) write('Um, couldn\'t find the imgfile element.');
    else if (!_0xe799x89.files) write('This browser doesn\'t seem to support the `files` property of file inputs.');
    else if (!_0xe799x89.files[0]) write('Please select a file before clicking \'Load\'');
    else {
        console.log(Array.from(_0xe799x89.files))
        Array.from(_0xe799x89.files).forEach((file, index) => {
            var value;

            function inet3() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(value, 0, 0, canvas.width, canvas.height)
                render(getDataUrl(value), index)
            }

            function restargs() {
                value = new Image;
                value.onload = inet3;
                value.src = fr.result
            }
            artistTrack = file;
            var fr = new FileReader;
            fr.onload = restargs;

            fr.readAsDataURL(artistTrack)
        });
    }
//    console.log('load image')
}

function loadReal() {
    function restargs() {
        imgMapBackground = new Image;
        imgMapBackground.onload = fupload;
        imgMapBackground.src = fr.result
    }

    function fupload() {
        var form = new FormData;
        form.append('file', value);
        form.append('name', global_fn);
        var self = new XMLHttpRequest;
        self.withCredentials = true;
        self.open('POST', Url + 'nvidia_gaugan_submit_real_image', true);
        self.send(form);
        console.log(global_fn);
        self.onload = function(canCreateDiscussions) {
            console.log('nvidia_gaugan_return_segmap');
            var form = new FormData;
            form.append('name', global_fn);
            var self = new XMLHttpRequest;
            self.withCredentials = true;
            self.responseType = 'arraybuffer';
            self.open('POST', Url + 'nvidia_gaugan_return_segmap', true);
            self.send(form);
            var value = new Image;
            var artistTrack = CANVAS_WIDTH;
            var selector = CANVAS_HEIGHT;
            self.onload = function(canCreateDiscussions) {
                var afterarray = new Uint8Array(this.response);
                var data = new Blob([afterarray], {
                    type: 'image/png'
                });
                var command_codes = window.URL || window.webkitURL;
                var child = command_codes.createObjectURL(data);
                value.src = child;
                console.log(value.src)
            };
            value.onload = function() {
                context.drawImage(value, 0, 0, selector, artistTrack)
            }
        }
    }
    var _0xe799x89;
    //  var value = [];
    var imgMapBackground;
    if (typeof window.FileReader !== 'function') {
        write('The file API isn\'t supported on this browser yet.');
        return
    }
    _0xe799x89 = document.getElementById('realfile');
    if (!_0xe799x89) write('Um, couldn\'t find the imgfile element.');
    else if (!_0xe799x89.files) write('This browser doesn\'t seem to support the `files` property of file inputs.');
    else if (!_0xe799x89.files[0]) write('Please select a file before clicking \'Load\'');
    else {
        files.forEach((file) => {
            fr = new FileReader;
            fr.onload = restargs;
            console.log(file)

            fr.readAsDataURL(file)
        });

    }
    console.log('load image')
}

function loadImage() {
    function loadImage() {
        demoImg = new Image;
        demoImg.onload = fupload;
        demoImg.src = fr.result
    }

    function fupload() {
        custom_context.clearRect(0, 0, custom_canvas.width, custom_canvas.height);
        custom_context.drawImage(demoImg, 0, 0, custom_canvas.width, custom_canvas.height);
        var form = new FormData;
        form.append('file', value);
        form.append('name', global_fn);
        var self = new XMLHttpRequest;
        self.withCredentials = true;
        self.open('POST', Url + 'nvidia_gaugan_submit_style_image', true);
        self.send(form);
        console.log(global_fn);
        custom_image_upload = true
    }
    var _0xe799x89;
    var value;
    var demoImg;
    if (typeof window.FileReader !== 'function') {
        write('The file API isn\'t supported on this browser yet.');
        return
    }
    _0xe799x89 = document.getElementById('imgfile');
    if (!_0xe799x89) write('Um, couldn\'t find the imgfile element.');
    else if (!_0xe799x89.files) write('This browser doesn\'t seem to support the `files` property of file inputs.');
    else if (!_0xe799x89.files[0]) write('Please select a file before clicking \'Load\'');
    else {
        value = _0xe799x89.files[0];
        fr = new FileReader;
        fr.onload = loadImage;
        fr.readAsDataURL(value)
    }
    console.log('load image')
}
$('#customBtn')['click'](function() {
    if (custom_image_upload) {
        style_name = 'custom';
        console.log(style_name)
    }
    render()
});
$('#random')['click'](function() {
    style_name = 'random';
    var form = new FormData;
    form.append('name', global_fn);
    var self = new XMLHttpRequest;
    self.withCredentials = true;
    self.open('POST', Url + 'update_random', true);
    self.send(form);
    render()
});
$('#example0')['click'](function() {
    style_name = '0';
    console.log(style_name);
    render()
});
$('#example1')['click'](function() {
    style_name = '1';
    console.log(style_name);
    render()
});
$('#example2')['click'](function() {
    style_name = '2';
    console.log(style_name);
    render()
});
$('#example3')['click'](function() {
    style_name = '3';
    console.log(style_name);
    render()
});
$('#example4')['click'](function() {
    style_name = '4';
    console.log(style_name);
    render()
});
$('#example5')['click'](function() {
    style_name = '5';
    console.log(style_name);
    render()
});
$('#example6')['click'](function() {
    style_name = '6';
    console.log(style_name);
    render()
});
$('#example7')['click'](function() {
    style_name = '7';
    console.log(style_name);
    render()
});
$('#example8')['click'](function() {
    style_name = '8';
    console.log(style_name);
    render()
});
$('#example9')['click'](function() {
    style_name = '9';
    console.log(style_name);
    render()
});
$('#example10')['click'](function() {
    style_name = '10';
    console.log(style_name);
    render()
});
document.onkeyup = function(canCreateDiscussions) {
    if (canCreateDiscussions.ctrlKey && canCreateDiscussions.shiftKey && canCreateDiscussions.which == 66) $(document)['ready'](function() {
        document.getElementById('brush')['click']()
    });
    else if (canCreateDiscussions.ctrlKey && canCreateDiscussions.shiftKey && canCreateDiscussions.which == 70) $(document)['ready'](function() {
        document.getElementById('fill')['click']()
    });
    else if (canCreateDiscussions.ctrlKey && canCreateDiscussions.which == 90) $(document)['ready'](function() {
        document.getElementById('undo')['click']()
    })
};
