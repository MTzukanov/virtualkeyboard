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
import com.vaadin.ui.Notification;
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
    	final VirtualKeyboard virtualkeyboard1 = new VirtualKeyboard();
    	final VirtualKeyboard virtualkeyboard2 = new VirtualKeyboard();
    	final VirtualKeyboard virtualkeyboard3 = new VirtualKeyboard();
    	final Label passwordLabel = new Label(); 
    	final TextField textField0 = new TextField();
    	final TextField textField1 = new TextField();
    	final TextField textField2 = new TextField();
    	final PasswordField password = new PasswordField();
    	final com.vaadin.ui.TextArea textArea = new com.vaadin.ui.TextArea();
    	final com.vaadin.ui.TextArea textArea1 = new com.vaadin.ui.TextArea();
    	
    	final Button showPasswordbutton = new Button("Show Password",new ClickListener() {
			
			@Override
			public void buttonClick(ClickEvent event) {
				passwordLabel.setValue(password.getValue());
				
			}
		});


    	textArea.setId("textArea");
    	textField0.setId("textField0");
    	password.setId("password");
    	textArea1.setId("textArea1");
    	
    	
    	

    	virtualkeyboard1.attachComponent(textField0);
    	virtualkeyboard1.attachComponent(password);
    	virtualkeyboard1.attachComponent(textArea);
    	virtualkeyboard2.attachComponent(textArea1);
    	
    	
    	
    	
    	virtualkeyboard2.addKeyListener(new VirtualKeyboard.KeyListener() {
    			@Override	
    			public void keyPress(VirtualKeyboard.KeyEvent event) {
    				Notification.show("Key pressed: " + event.getKeyChar());
    			}
    	});
    	
    	
    	// Show it in the middle of the screen
    	final VerticalLayout layout = new VerticalLayout();
    	final VerticalLayout firstSectionLayout = new VerticalLayout();
    	final VerticalLayout secondSectionLayout = new VerticalLayout();
    	final VerticalLayout thirdSectionLayout = new VerticalLayout();
    	firstSectionLayout.setVisible(false);
    	secondSectionLayout.setVisible(true);
    	
    	final Button swtichKeyboardModel = new Button("Switch Keyboard",new ClickListener() {
			
			@Override
			public void buttonClick(ClickEvent event) {
				firstSectionLayout.setVisible(!firstSectionLayout.isVisible()); 
				secondSectionLayout.setVisible(!secondSectionLayout.isVisible());
				if(secondSectionLayout.isVisible()) {
					virtualkeyboard1.getWindow().close();
				}
			}
		});
    	
    	layout.addComponent(swtichKeyboardModel);
    	layout.addComponent(firstSectionLayout);
    	layout.addComponent(secondSectionLayout);
    	layout.addComponent(thirdSectionLayout);

    	layout.setMargin(true);
    	firstSectionLayout.setMargin(true);
    	secondSectionLayout.setMargin(true);
    	thirdSectionLayout.setMargin(true);
    	
    	layout.setSpacing(true);
    	firstSectionLayout.setSpacing(true);
    	secondSectionLayout.setSpacing(true);
    	thirdSectionLayout.setSpacing(true);
    	

    	
    	virtualkeyboard1.setFloatingWindow(true);
    	virtualkeyboard1.getWindow().setPositionX(200);
    	virtualkeyboard1.getWindow().setPositionY(200);
    	
    	//layout.setStyleName("demoContentLayout");
    	
        Button showHideLanguageDropbox = new Button("Show/hide language dropbox");
        /*
        showHideLanguageDropbox.addClickListener(new ClickListener() {
            @Override
            public void buttonClick(ClickEvent event) {
                virtualkeyboard1.setLanguageDropboxVisible(
                        !virtualkeyboard1.getLanguageDropboxVisible()
                        );
            }
        });
        */
        
    	textArea1.setWidth("556px");
    	textField0.setWidth("500px");
    	password.setWidth("500px");
    	passwordLabel.setWidth("500px");
    	textArea.setWidth("500px");

    	passwordLabel.addStyleName("bigLabel");
    	
    	Label lbl1 = new Label("This page demonstrates floating virtual keyboard.");
    	lbl1.addStyleName("bigLabel");

    	firstSectionLayout.addComponent(lbl1);	
    	firstSectionLayout.addComponent(showHideLanguageDropbox);
        firstSectionLayout.addComponent(textField0);
    	firstSectionLayout.addComponent(password);
    	firstSectionLayout.addComponent(passwordLabel);
    	firstSectionLayout.addComponent(showPasswordbutton);
    	firstSectionLayout.addComponent(textArea);
    	
    	Label lbl2 = new Label("This keyboard demonstrates keypress event listener.");
    	lbl2.addStyleName("bigLabel");
    	secondSectionLayout.addComponent(lbl2);
    	secondSectionLayout.addComponent(textArea1);
    	secondSectionLayout.addComponent(virtualkeyboard2);
    	
        setContent(layout);

    }

}