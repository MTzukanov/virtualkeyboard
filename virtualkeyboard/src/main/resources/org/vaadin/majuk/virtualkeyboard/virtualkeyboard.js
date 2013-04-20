var rpcProxy;

window.org_vaadin_majuk_virtualkeyboard_VirtualKeyboard = function () {
    var element = this.getElement();
    rpcProxy = this.getRpcProxy();
	
	this.onStateChange = function() {
		this.getElement().innerHTML = //'<button onclick="generate_keyboard(\'keyboard_container\', keyboard_sv)">Generate Keyboard</button>\
		//<input type="text" id="target">\
		'<div id="keyboard_container">\
		</div>';
		
		generate_keyboard('keyboard_container', keyboard_sv);
	}
}

/* qwerty by Mika Perreri Korhonen (https://github.com/jouk0) - */
var keyboard_sv = {
'default' : [
"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
"{tab} q w e r t y u i o p \u00e5 \u0308",
"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
"{shift} < z x c v b n m , . - {shift}",
"{accept} {alt} {space} {alt} {cancel}"
],
'shift' : [
'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
"{tab} Q W E R T Y U I O P \u00c5 \u0302",
"A S D F G H J K L \u00d6 \u00c4 * {enter}",
"{shift} > Z X C V B N M ; : _ {shift}",
"{accept} {alt} {space} {alt} {cancel}"
],
'alt' : [
'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
'{tab} q w € r t y u i o p \u00e5 \u0303',
"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
'{shift} | z x c v b n \u00b5 , . - {shift}',
'{accept} {alt} {space} {alt} {cancel}'
]
};

function add_button(container, title, value) {
  var parent = document.getElementById(container);

  var newdiv = document.createElement('button');

  newdiv.innerHTML = title;
  newdiv.setAttribute('onclick', 'key_pressed("'+value+'");');
  parent.appendChild(newdiv);
}

function key_pressed(value)
{
	rpcProxy.onKeyClick(value);
	if (value.length == 1)
	{	
		var target = get_keyboard_target_element_id();
		target.value += value;
		target.focus();
	}
	else
	{
		if ('{bksp}' == value) {
			alert('bksp');
		}
	}
}

var generate_keyboard = function(container, keyboard)
{
	for (row in keyboard['default'])
	{
		keys = keyboard['default'][row].split(" ");
		for (var i = 0; i < keys.length; i++)
		{
			add_button(container, keys[i], keys[i]);
		}
		document.getElementById(container).innerHTML += ("<br>");
	}
}

function get_keyboard_target_element_id() {
	return document.getElementById("target");
}

