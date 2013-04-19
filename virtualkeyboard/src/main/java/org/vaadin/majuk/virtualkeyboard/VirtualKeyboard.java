package org.vaadin.majuk.virtualkeyboard;

import com.vaadin.annotations.JavaScript;
import com.vaadin.shared.MouseEventDetails;
import com.vaadin.shared.ui.JavaScriptComponentState;

// This is the server-side UI component that provides public API 
// for VirtualKeyboard
@JavaScript("virtualkeyboard.js")
public class VirtualKeyboard extends com.vaadin.ui.AbstractJavaScriptComponent {
	
	public VirtualKeyboard(){
		this.getState().anything = "Hello!"; 
	}

	public static class State extends JavaScriptComponentState {
		public String anything;
	}
	
	public State getState() {
		return (State) super.getState();
	}
	
}
