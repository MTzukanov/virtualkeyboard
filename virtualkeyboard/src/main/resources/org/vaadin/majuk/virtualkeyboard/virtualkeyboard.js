
window.org_vaadin_majuk_virtualkeyboard_VirtualKeyboard = function () {
	
	this.onStateChange = function() {
		this.getElement().innerHTML = this.getState().anything;
	}
}
