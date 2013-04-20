var key_value_to_char = { '{tab}': '\t', '{bksp}': '\b', '{enter}': '\n', '{space}': ' ' };

var rpcProxy;
var container;

var current_layout = 'sv';
var current_sub_layout = 'default';
var caps_lock = false;

window.org_vaadin_majuk_virtualkeyboard_VirtualKeyboard = function () {
    container = this.getElement();
    rpcProxy = this.getRpcProxy();
   
	this.onStateChange = function() {
		container.innerHTML = '<div id="keyboard_container"></div>';
		generate_keyboard(container, current_layout, current_sub_layout);
	}
}

function add_button(container, title, value) {
  var newbutton = document.createElement('button');
  newbutton.innerHTML = title;
  newbutton.setAttribute('onclick', 'key_pressed("'+value+'");');
  container.appendChild(newbutton);
}

function key_pressed(value)
{
	if (value.length == 1)
	{	
		rpcProxy.onKeyClick(value);
		if (!caps_lock)
			generate_keyboard(container, current_layout, 'default');
		else
			generate_keyboard(container, current_layout, 'shift');
	}
	else
	{
		if (value in key_value_to_char)
		{
			rpcProxy.onKeyClick(key_value_to_char[value]);
		}
		else if ('{shift}' == value) {
			if ('shift' == current_sub_layout || caps_lock)
				generate_keyboard(container, current_layout, 'default');
			else
				generate_keyboard(container, current_layout, 'shift');
		}
		else if ('{cplk}' == value) {
			caps_lock = !caps_lock;
			if ('shift' == current_sub_layout)
				generate_keyboard(container, current_layout, 'default');
			else
				generate_keyboard(container, current_layout, 'shift');
		}
		else if ('{alt}' == value) {
			if ('alt' == current_sub_layout)
				generate_keyboard(container, current_layout, 'default');
			else
				generate_keyboard(container, current_layout, 'alt');
		}
	}
}

var generate_keyboard = function(container, layout, sub_layout)
{
	current_layout = layout;
	current_sub_layout = sub_layout;

	container.innerHTML = '';
	
	for (row in keyboards[layout][sub_layout])
	{
		keys = keyboards[layout][sub_layout][row].split(" ");
		for (var i = 0; i < keys.length; i++)
		{
			add_button(container, key_value_to_title(keys[i]), keys[i]);
		}
		container.innerHTML += ("<br>");
	}
}

function key_value_to_title(value) {
	if (value.length == 1)
		return value;
	else
		return key_value_dict[current_layout][value];
}
