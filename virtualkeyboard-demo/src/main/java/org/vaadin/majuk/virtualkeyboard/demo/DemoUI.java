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
    	final TextField textField = new TextField();
    	final Button switchbutton = new Button("Switch EN/FI");
    	
    	switchbutton.addClickListener(new ClickListener() {
			@Override
			public void buttonClick(ClickEvent event) {
				if (virtualkeyboard.getState().current_layout == "sv")
					virtualkeyboard.getState().current_layout = "fi";
				else
					virtualkeyboard.getState().current_layout = "sv";
			}});
    	final TextField textField1 = new TextField();
    	final TextField textField2 = new TextField();
    	virtualkeyboard.attachComponent(textField);
    	virtualkeyboard.attachComponent(textField1);
    	virtualkeyboard.attachComponent(textField2);
    	
    	virtualkeyboard.addKeyListener(new VirtualKeyboard.KeyListener() {
    			@Override	
    			public void keyPress(VirtualKeyboard.KeyEvent event) {
    				System.out.println("Key pressed: " + event.getKeyChar());

    				//textField.setValue(textField.getValue() + event.getKeyChar());

    			}
    	});
    	
    	
    	// Show it in the middle of the screen
    	final VerticalLayout layout = new VerticalLayout();
        layout.setStyleName("demoContentLayout");
        //layout.setSizeFull();
    	final Window keyboardWindow= new Window();
//        layout.setStyleName("demoContentLayout");
//        layout.setSizeFull();

//       keyboardWindow.setPositionX(200);
//       keyboardWindow.setPositionY(100);
//       keyboardWindow.setWidth("600");
//       keyboardWindow.setHeight("400");
//       addWindow(keyboardWindow);

        layout.addComponent(virtualkeyboard);
        layout.addComponent(textField);

        layout.addComponent(switchbutton);

        layout.addComponent(textField1);
        layout.addComponent(textField2);
        //layout.addComponent(new TextArea());

        setContent(layout);

    }

}
