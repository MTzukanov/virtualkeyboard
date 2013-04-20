package org.vaadin.majuk.virtualkeyboard.demo;

import java.awt.TextArea;

import org.vaadin.majuk.virtualkeyboard.VirtualKeyboard;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.server.VaadinRequest;
import com.vaadin.ui.Alignment;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.Label;
import com.vaadin.ui.PasswordField;
import com.vaadin.ui.TextField;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;
import com.vaadin.ui.Window;

@Theme("demo")
@Title("VirtualKeyboard Add-on Demo")
@SuppressWarnings("serial")
public class DemoUI extends UI
{

    @Override
    protected void init(VaadinRequest request) {
    	
    	// Initialize our new UI component
    	final VirtualKeyboard virtualkeyboard = new VirtualKeyboard();
    	final Label passwordLabel = new Label(); 
    	final TextField textField0 = new TextField();
    	final TextField textField1 = new TextField();
    	final TextField textField2 = new TextField();
    	final PasswordField password = new PasswordField();
    	final com.vaadin.ui.TextArea textArea = new com.vaadin.ui.TextArea();
    	
    	final Button showPasswordbutton = new Button("Show Password",new ClickListener() {
			
			@Override
			public void buttonClick(ClickEvent event) {
				passwordLabel.setValue(password.getValue());
				
			}
		});
    	
    	virtualkeyboard.attachComponent(textField0);
    	virtualkeyboard.attachComponent(textField1);
    	virtualkeyboard.attachComponent(textField2);
    	virtualkeyboard.attachComponent(textArea);
    	virtualkeyboard.attachComponent(password);
    	
    	virtualkeyboard.addKeyListener(new VirtualKeyboard.KeyListener() {
    			@Override	
    			public void keyPress(VirtualKeyboard.KeyEvent event) {
    				System.out.println("Key pressed: " + event.getKeyChar());
    			}
    	});
    	
    	
    	// Show it in the middle of the screen
    	final VerticalLayout layout = new VerticalLayout();
        layout.setStyleName("demoContentLayout");

        virtualkeyboard.setFloatingWindow(false);
        layout.addComponent(virtualkeyboard);
        //layout.setExpandRatio(virtualkeyboard, 0);
        
        layout.addComponent(textField0);
        layout.addComponent(textField1);
        layout.addComponent(textField2);
        layout.addComponent(password);
        layout.addComponent(showPasswordbutton);
        layout.addComponent(passwordLabel);
        layout.addComponent(textArea);
        //layout.addComponent(new TextArea());

        setContent(layout);

    }

}
