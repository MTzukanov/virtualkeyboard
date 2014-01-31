package org.vaadin.majuk.virtualkeyboard.demo;

import org.vaadin.majuk.virtualkeyboard.VirtualKeyboard;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.server.VaadinRequest;
import com.vaadin.ui.Alignment;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.Notification;
import com.vaadin.ui.PasswordField;
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
        final Label passwordLabel = new Label(); 
        final TextField usernameTextField = new TextField();
        final PasswordField password = new PasswordField();
        final com.vaadin.ui.TextArea textArea = new com.vaadin.ui.TextArea();
        final com.vaadin.ui.TextArea textArea1 = new com.vaadin.ui.TextArea();
        final VirtualKeyboard virtualkeyboard1 = new VirtualKeyboard();
        final VirtualKeyboard virtualkeyboard2 = new VirtualKeyboard();
        final VerticalLayout layout = new VerticalLayout();
        final VerticalLayout firstSectionLayout = new VerticalLayout();
        final VerticalLayout secondSectionLayout = new VerticalLayout();
        final VerticalLayout thirdSectionLayout = new VerticalLayout();
        final HorizontalLayout usernameLayout = new HorizontalLayout();
        final HorizontalLayout passwordLayout = new HorizontalLayout();
        final Label lbl1 = new Label("This page demonstrates floating virtual keyboard.");
        final Label lbl2 = new Label("This keyboard demonstrates keypress event listener.");
        final Label lbl3 = new Label("Virtual keyboard properties controlled on the server side:");
        final Label passwordFieldLabel = new Label("Password: ");
        final Label usernameFieldLabel = new Label("Username:");
        


        
        final Button showPasswordbutton = new Button("Show Password",new ClickListener() {
            
            @Override
            public void buttonClick(ClickEvent event) {
                passwordLabel.setValue(password.getValue());
                
            }
        });

        final Button swtichKeyboardModel = new Button("Switch virtual keyboard mode: floating/inline",new ClickListener() {
            
            @Override
            public void buttonClick(ClickEvent event) {
                firstSectionLayout.setVisible(!firstSectionLayout.isVisible()); 
                secondSectionLayout.setVisible(!secondSectionLayout.isVisible());
                if(secondSectionLayout.isVisible()) {
                    virtualkeyboard1.getWindow().close();
                }
            }
        });

        virtualkeyboard2.addKeyListener(new VirtualKeyboard.KeyListener() {
            @Override   
            public void keyPress(VirtualKeyboard.KeyEvent event) {
                Notification.show("Key pressed: " + event.getKeyChar());
            }
        });

        Button showHideLanguageDropbox = new Button("Show/Hide language dropbox");

        showHideLanguageDropbox.addClickListener(new ClickListener() {
            @Override
            public void buttonClick(ClickEvent event) {
                virtualkeyboard1.setLanguageDropboxVisible(
                        !virtualkeyboard1.getLanguageDropboxVisible());
            }
        });

        Button changeLayout = new Button("Switch Finnish/Japanese layout");

        changeLayout.addClickListener(new ClickListener() {
            @Override
            public void buttonClick(ClickEvent event) {
                if(virtualkeyboard1.getLayout().equals("fi")) {
                    virtualkeyboard1.setLayout("japanese-qwerty");
                } else {
                    virtualkeyboard1.setLayout("fi");
                }
            }
        });

        //Attaching text fields to the virtual keyboard
        virtualkeyboard1.attachComponent(usernameTextField);
        virtualkeyboard1.attachComponent(password);
        virtualkeyboard1.attachComponent(textArea);
        virtualkeyboard2.attachComponent(textArea1);
        
        
        //Adding sections to main layout
        layout.addComponent(swtichKeyboardModel);
        layout.addComponent(firstSectionLayout);
        layout.addComponent(secondSectionLayout);
        layout.addComponent(thirdSectionLayout);

        
        //Set components attributes
        layout.setMargin(true);
        layout.setSpacing(true);
        layout.setWidth("100%");
        layout.setComponentAlignment(firstSectionLayout, Alignment.MIDDLE_CENTER);
        layout.setComponentAlignment(secondSectionLayout, Alignment.MIDDLE_CENTER);
        layout.setComponentAlignment(swtichKeyboardModel, Alignment.MIDDLE_CENTER);
        textArea.setId("textArea");
        usernameTextField.setId("usernameTextField");
        password.setId("password");
        textArea1.setId("textArea1");
        lbl3.addStyleName("bigLabel");
        lbl2.addStyleName("bigLabel");
        lbl1.addStyleName("bigLabel");
        lbl3.setHeight("25px");
        lbl2.setHeight("25px");
        lbl1.setHeight("25px");
        
        passwordFieldLabel.addStyleName("midLabel");
        usernameFieldLabel.addStyleName("midLabel");
        firstSectionLayout.setVisible(false);
        secondSectionLayout.setVisible(true);
        firstSectionLayout.setMargin(true);
        secondSectionLayout.setMargin(true);
        thirdSectionLayout.setMargin(true);
        
        firstSectionLayout.setSizeUndefined();
        secondSectionLayout.setSizeUndefined();
        
        firstSectionLayout.setSpacing(true);
        secondSectionLayout.setSpacing(true);
        thirdSectionLayout.setSpacing(true);
        
        passwordLayout.setSpacing(true);
        usernameLayout.setSpacing(true);
        
        virtualkeyboard1.setFloatingWindow(true);
   
        
        virtualkeyboard1.getWindow().setPositionX(500);
        virtualkeyboard1.getWindow().setPositionY(400);
        
        textArea1.setWidth("556px");
        usernameTextField.setWidth("500px");
        textArea.setWidth("500px");
        password.setWidth("500px");
        passwordLabel.setWidth("500px");
        passwordLabel.setHeight("25px");
        passwordLabel.addStyleName("bigLabel");
        

        usernameLayout.addComponent(usernameFieldLabel);
        usernameLayout.addComponent(usernameTextField);
        
        passwordLayout.addComponent(passwordFieldLabel);
        passwordLayout.addComponent(password);
        
        //Adding components to firstSection
        firstSectionLayout.addComponent(lbl1);  
        firstSectionLayout.addComponent(usernameLayout);
        firstSectionLayout.addComponent(passwordLayout);
        firstSectionLayout.addComponent(passwordLabel);
        firstSectionLayout.addComponent(showPasswordbutton);
        firstSectionLayout.addComponent(textArea);
        firstSectionLayout.addComponent(lbl3);
        firstSectionLayout.addComponent(showHideLanguageDropbox);
        firstSectionLayout.addComponent(changeLayout);
        
        secondSectionLayout.addComponent(lbl2);
        secondSectionLayout.addComponent(textArea1);
        secondSectionLayout.addComponent(virtualkeyboard2);
        
        setContent(layout);

    }

}