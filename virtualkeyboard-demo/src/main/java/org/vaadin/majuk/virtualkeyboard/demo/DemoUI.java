package org.vaadin.majuk.virtualkeyboard.demo;

import org.vaadin.majuk.virtualkeyboard.VirtualKeyboard;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.server.VaadinRequest;
import com.vaadin.ui.Alignment;
import com.vaadin.ui.TextField;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@Theme("demo")
@Title("VirtualKeyboard Add-on Demo")
@SuppressWarnings("serial")
public class DemoUI extends UI
{

    @Override
    protected void init(VaadinRequest request) {
    	
    	// Initialize our new UI component
    	final VirtualKeyboard virtualkeyboard = new VirtualKeyboard();
    	final TextField textField = new TextField();
    	
    	virtualkeyboard.addKeyListener(new VirtualKeyboard.KeyListener() {
    			@Override	
    			public void keyPress(VirtualKeyboard.KeyEvent event) {
    				textField.setValue(textField.getValue() + event.getKeyChar());
    			}
    	});
    	
    	// Show it in the middle of the screen
    	final VerticalLayout layout = new VerticalLayout();
        layout.setStyleName("demoContentLayout");
        layout.setSizeFull();
        layout.addComponent(virtualkeyboard);
        layout.addComponent(textField);
        layout.setComponentAlignment(virtualkeyboard, Alignment.MIDDLE_CENTER);
        setContent(layout);

    }

}
