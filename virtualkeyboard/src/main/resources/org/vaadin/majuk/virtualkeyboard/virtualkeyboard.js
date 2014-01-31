var key_value_to_char = { '{tab}': '\t', '{bksp}': '\b', '{enter}': '\n', '{space}': ' ' };

var rpcProxy;
var container = null;

var current_layout = 'sv';
var current_sub_layout = 'default';
var caps_lock = false;
var show_lang_dropbox = true;

//var instanceData = {};

window.org_vaadin_majuk_virtualkeyboard_VirtualKeyboard = function () {
	this.onStateChange = function() {
		//var container;
		if (this.getElement().childNodes.length == 0) {
		  var newdiv = document.createElement('div');
		  newdiv.setAttribute('class', 'keyboard_container');
		  this.getElement().appendChild(newdiv);
		  container = newdiv;
		}

	    rpcProxy = this.getRpcProxy();
		current_layout = this.getState().current_layout;
		show_lang_dropbox = this.getState().show_lang_dropbox;
		generate_keyboard(container, current_layout, current_sub_layout, show_lang_dropbox);

//		state = this.getState();
//		if (!(state.instanceId in instanceData))
//		{
//			instanceData[state.instanceId] = {
//					rpc_proxy: this.getRpcProxy(),
//					container: = this.getElement().firstChild;
//				};
//		}
//
//		instanceData[state.instanceId].current_layout = this.getState().current_layout;
//		instanceData[state.instanceId].show_lang_dropbox = this.getState().show_lang_dropbox;		
	}
}

function add_button(container, title, value) {
  var newbutton = document.createElement('button');
  newbutton.innerHTML = title;
  newbutton.setAttribute('onclick', 'key_pressed("'+value+'");');
  var additional_classes = ' ' + value.slice(1, -1);
  if (   (current_sub_layout == 'shift' && value == '{shift}')
	  || (caps_lock && value == '{cplk}')
	  || (current_sub_layout == 'alt' && value == '{alt}')
	 )
	  additional_classes += ' pressed';	
	  
  newbutton.setAttribute('class', 'virtual_key' + additional_classes);
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
		else if ('{alt}' == value && 'alt' in keyboards[current_layout]) {
			if ('alt' == current_sub_layout)
				generate_keyboard(container, current_layout, 'default');
			else
				generate_keyboard(container, current_layout, 'alt');
		}
	}
}

function select_layout_change(selectBox)
{
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    generate_keyboard(container, selectedValue, 'default');
    rpcProxy.onLayoutChange(selectedValue);
}

var generate_keyboard = function(container, layout, sub_layout, show_dropbox)
{
	current_layout = layout;
	current_sub_layout = sub_layout;

	container.innerHTML = '';
	
	for (row in keyboards[layout][sub_layout])
	{
		keys = keyboards[layout][sub_layout][row].split(" ");
		for (var i = 0; i < keys.length; i++)
		{
			if (keys[i] == '{alt}' && !('alt' in keyboards[current_layout]))
				continue;
			else if (!(keys[i] in {'{cancel}':1, '{accept}':1}))
				add_button(container, key_value_to_title(keys[i]), keys[i]);
		}
		if (row != keyboards[layout][sub_layout].length-1)
			container.innerHTML += ("<br>");
	}
	
	if (typeof show_dropbox == 'undefined' || show_dropbox == true)
	{
		  var newselect = document.createElement('select');
		  newselect.setAttribute('onchange', 'select_layout_change(this)');
		  newselect.setAttribute('class', 'virtual_keyboard_selector');
		  container.appendChild(newselect);

		  for (layout in keyboards)
		  {
			  var newoption = document.createElement('option');
			  newoption.innerHTML = keyboard_human_names[layout];
			  newoption.value = layout;
			  if (current_layout == layout)
				  newoption.setAttribute('selected', 'selected');
			  newselect.appendChild(newoption);			  
		  }
	}
}

function key_value_to_title(value) {
	if (value.length == 1)
		return value;

	if (current_layout in key_value_dict)
		return key_value_dict[current_layout][value];
	else
		return key_value_dict['default'][value];
}
