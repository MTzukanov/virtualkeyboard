package org.vaadin.majuk.virtualkeyboard;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.vaadin.annotations.JavaScript;
import com.vaadin.event.FieldEvents.FocusEvent;
import com.vaadin.event.FieldEvents.FocusListener;
import com.vaadin.shared.communication.ServerRpc;
import com.vaadin.shared.ui.JavaScriptComponentState;
import com.vaadin.ui.AbstractTextField;
import com.vaadin.ui.Component;
import com.vaadin.ui.Window;
import com.vaadin.ui.TextField;
import com.vaadin.ui.PasswordField;

// This is the server-side UI component that provides public API 
// for VirtualKeyboard
@SuppressWarnings("serial")
@JavaScript({"virtualkeyboard.js", "keyboards.js"})
public class VirtualKeyboard extends com.vaadin.ui.AbstractJavaScriptComponent {
	//private static int instanceCount = 0;
	
	private List<KeyListener> listenerList = new ArrayList<KeyListener>();
	private Map<AbstractTextField, FocusListener> focusListeners = new HashMap<>();	

	private AbstractTextField focusedTextField;
	
	private Window keyboardWindow;
	private boolean isFloatingWindow = false;
	
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
	    public void onLayoutChange(String layoutName);
	}	

	public VirtualKeyboard(){
        registerRpc(new KeyClickRpc() {
            public void onKeyClick(String s) {
                //Notification.show("Clicked on [" + s + "]");
            	
            	if(focusedTextField != null)
                {
	                int curPos = focusedTextField.getCursorPosition();
	                String oldText = focusedTextField.getValue();
	               
	                if(s != null && s.equals("\b") && curPos > 0) {
		                focusedTextField.setValue(oldText.substring(0,curPos-1) + oldText.substring(curPos,oldText.length()));
		                focusedTextField.setCursorPosition(curPos-1);
	                }
	                else if(s != null && s.equals("\n") && (focusedTextField instanceof TextField || focusedTextField instanceof PasswordField)) {
	                	//focusedTextField.setCursorPosition(curPos);
	                } else {
		                focusedTextField.setValue(oldText.substring(0,curPos) + s + oldText.substring(curPos,oldText.length()));
		                focusedTextField.setCursorPosition(curPos+1);
	                }
	                focusedTextField.focus();
                }
            	
                for (KeyListener keyListener : listenerList) {
					keyListener.keyPress(new KeyEvent(VirtualKeyboard.this, s));
				}
            }

			@Override
			public void onLayoutChange(String layoutName) {
				VirtualKeyboard.this.getState().current_layout = layoutName;
			}
        });

        this.getState().current_layout = "en";
        //this.getState().instanceId = this.instanceCount++;
	}

	public static class State extends JavaScriptComponentState {
		public String current_layout;
		public boolean show_lang_dropbox = true;
		// public int instanceId;
	}
	
	public void setLanguageDropboxVisible(boolean show)
	{
		this.getState().show_lang_dropbox = show;
	}

	public boolean getLanguageDropboxVisible()
	{
		return this.getState().show_lang_dropbox;
	}

	public void setLayout(String layout)
	{
		this.getState().current_layout = layout;
	}

	public String getLayout()
	{
		return this.getState().current_layout;
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
	
	public void attachComponent(final AbstractTextField component) {
		focusListeners.put(component, new FocusListener() {
			@Override
			public void focus(FocusEvent event) {
				focusedTextField = (AbstractTextField) event.getComponent();
				if(isFloatingWindow) {
					if(keyboardWindow == null)
						keyboardWindow = getWindow();
	
					if (keyboardWindow.getParent() == null)
						component.getUI().addWindow(keyboardWindow);
					keyboardWindow.setVisible(true);
				}
			}
		});
		
		component.addFocusListener(focusListeners.get(component));
	}
	
	public void dettachComponent(final AbstractTextField component) {
		if (focusListeners.containsKey(component))
		{
			component.removeFocusListener(focusListeners.get(component));
			focusListeners.remove(component);
		}
	}

	public Window getWindow() {
		if(!isFloatingWindow) {
			return null;
		}
		 
		if(keyboardWindow == null) {
			keyboardWindow = new Window();
	    	keyboardWindow.setCaption("Virtual Keyboard");
			//keyboardWindow.setPositionX(200);
			//keyboardWindow.setPositionY(100);
			//keyboardWindow.setWidth("600");
			//keyboardWindow.setHeight("300");
			keyboardWindow.setVisible(false);
			keyboardWindow.setContent(this);
			keyboardWindow.setResizable(false);
		}
		return keyboardWindow;
	}

	public void setFloatingWindow(boolean floating) {
		isFloatingWindow = floating;
	}

}
