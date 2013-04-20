package org.vaadin.majuk.virtualkeyboard;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.vaadin.majuk.virtualkeyboard.VirtualKeyboard.KeyListener;

import com.vaadin.annotations.JavaScript;
import com.vaadin.event.FieldEvents.FocusEvent;
import com.vaadin.event.FieldEvents.FocusListener;
import com.vaadin.shared.MouseEventDetails;
import com.vaadin.shared.communication.ServerRpc;
import com.vaadin.shared.ui.JavaScriptComponentState;
import com.vaadin.ui.AbstractComponent;
import com.vaadin.ui.AbstractTextField;
import com.vaadin.ui.Component;
import com.vaadin.ui.Notification;
import com.vaadin.ui.TextField;
import com.vaadin.ui.Component.Event;

// This is the server-side UI component that provides public API 
// for VirtualKeyboard
@JavaScript({"virtualkeyboard.js", "keyboards.js"})
public class VirtualKeyboard extends com.vaadin.ui.AbstractJavaScriptComponent {
	
	List<KeyListener> listenerList;
	List<AbstractTextField> components;
	private AbstractTextField focusedTextField;
	
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
		components = new ArrayList<AbstractTextField>();
				
        registerRpc(new KeyClickRpc() {
            public void onKeyClick(String s) {
                //Notification.show("Clicked on [" + s + "]");
            	if(focusedTextField != null)
            	{
            		int curPos = focusedTextField.getCursorPosition();
            		String oldText = focusedTextField.getValue();
            		if(s != null && s == "{bksp}") {
            			focusedTextField.setValue(oldText.substring(0,curPos-1) + oldText.substring(curPos,oldText.length()));
            		}
            		else {
            			focusedTextField.setValue(oldText.substring(0,curPos) + s + oldText.substring(curPos,oldText.length()));
            			focusedTextField.setCursorPosition(curPos+1);
            		}

            		
            		focusedTextField.focus();
            	}
            	
                for (KeyListener keyListener : listenerList) {
					keyListener.keyPress(new KeyEvent(VirtualKeyboard.this, s));
				}
            }
        });

        this.getState().current_layout = "sv"; 
	}

	public static class State extends JavaScriptComponentState {
		public String current_layout;
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
	
	public void attachComponent(AbstractTextField component) {
		components.add(component);
		
		component.addFocusListener(new FocusListener() {
			
			@Override
			public void focus(FocusEvent event) {
				focusedTextField = (AbstractTextField) event.getComponent();
				
			}
		});
	}
	
	public void dettachComponent(AbstractTextField component) {
		components.remove(component);
	}
}
