package org.vaadin.majuk.virtualkeyboard;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.vaadin.majuk.virtualkeyboard.VirtualKeyboard.KeyListener;

import com.vaadin.annotations.JavaScript;
import com.vaadin.shared.MouseEventDetails;
import com.vaadin.shared.communication.ServerRpc;
import com.vaadin.shared.ui.JavaScriptComponentState;
import com.vaadin.ui.Component;
import com.vaadin.ui.Notification;

// This is the server-side UI component that provides public API 
// for VirtualKeyboard
@JavaScript({"virtualkeyboard.js", "keyboards.js"})
public class VirtualKeyboard extends com.vaadin.ui.AbstractJavaScriptComponent {
	
	List<KeyListener> listenerList;

	public interface KeyListener {
		void keyPress(VirtualKeyboard.KeyEvent event);
	}
	
	public static class KeyEvent extends Component.Event {
		private String key;
		
		public KeyEvent(Component source, String key) {
			super(source);
			this.key = key;
		}
		
		public String getKeyChar()
		{
			return key;
		}
	}

	public interface KeyClickRpc extends ServerRpc {
	    public void onKeyClick(String s);
	}	

	public VirtualKeyboard(){
		listenerList = new ArrayList<KeyListener>();
				
        registerRpc(new KeyClickRpc() {
            public void onKeyClick(String s) {
                for (KeyListener keyListener : listenerList) {
					keyListener.keyPress(new KeyEvent(VirtualKeyboard.this, s));
				}
            }
        });

        this.getState().container = "keyboard_container"; 
	}

	public static class State extends JavaScriptComponentState {
		public String container;
	}
	
	public State getState() {
		return (State) super.getState();
	}

	public void addKeyListener(KeyListener keyListener) {
		listenerList.add(keyListener);
	}

	public void removeKeyListener(KeyListener keyListener) {
		listenerList.remove(keyListener);
	}
}