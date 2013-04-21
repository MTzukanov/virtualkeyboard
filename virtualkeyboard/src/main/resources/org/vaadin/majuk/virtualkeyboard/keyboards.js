var key_value_dict = { 'default': {
	'{shift}': "Shift",
	'{alt}': "AltGr",
	'{enter}': "Enter",
	'{space}': "&nbsp",
	'{bksp}': "Backspace",
	'{tab}': "Tab",
	'{cplk}': "Caps Lock",
},
};

var keyboard_human_names = 
{
		'en': 'English',
		'sv': 'Swedish',
		'fi': 'Finnish',
}

/* Keyboards from https://github.com/Mottie/Keyboard */
var keyboard_names = [
	"Albanian (qwerty):albanian-qwerty",
	"Albanian (qwertz):albanian-qwertz",
	"Arabic (azerty):arabic-azerty",
	"Arabic (qwerty-1):arabic-qwerty-1",
	"Arabic (qwerty-2):arabic-qwerty-2",
	"Arabic (qwerty-3):arabic-qwerty-3",
	"Arabic (qwerty-4):arabic-qwerty-4",
	"Belarusian (Belarus):belarusian-qwerty",
	"Bengali (qwerty-1):bengali-qwerty-1",
	"Bengali (qwerty-2):bengali-qwerty-2",
	"Bulgarian (qwerty):bulgarian-qwerty",
	"Catalan (qwerty):catalan-qwerty",
	"Danish (qwerty):danish-qwerty",
	"French (azerty-1):french-azerty-1",
	"French (azerty-2):french-azerty-2",
	"French (bepo v1.0rc2):french-bepo-V1.0rc2",
	"German (qwertz-1):german-qwertz-1",
	"German (qwertz-2):german-qwertz-2",
	"Hebrew (qwerty):hebrew-qwerty",
	/*"Magyar (qwertz-1) utf8:hungarian-qwertz-1",*/
	"Magyar (qwertz-2) utf8:hungarian-qwertz-2",
	"Magyar (qwertz-1) ansi:hungarianansi-qwertz-1",
	"Magyar (qwertz-2) ansi:hungarianansi-qwertz-2",
	"Japanese (kana):japanese-kana",
	"Japanese (qwerty):japanese-qwerty",
	"Latvian (qwerty):latvian-qwerty",
	"Polish (qwerty):polish-qwerty",
	"Portuguese (qwerty):portuguese-qwerty",
	"Russian (qwerty):russian-qwerty",
	"Spanish (qwerty):spanish-qwerty",
	"Spanish (qwerty) special:spanish-qwerty-sp",
	"Swedish (qwerty):swedish-qwerty",
	"Swedish (dvorak):swedish-dvorak",
	"Thai (qwerty):thai-qwerty",
	"Turkish (q):turkish-q",
	"Turkish (f):turkish-f",
	"Vietnamese (qwerty):vietnamese-qwerty"
];

for (i in keyboard_names)
{
	arr = keyboard_names[i].split(":");
	keyboard_human_names[arr[1]] = arr[0];
}

/* qwerty by Mika Perreri Korhonen (https://github.com/jouk0) - */
var keyboards = {
'en': {
    'default' : [
                 "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                 "{tab} q w e r t y u i o p [ ] \\",
                 "a s d f g h j k l ; ' {enter}",
                 "{shift} z x c v b n m , . / {shift}",
                 "{accept} {alt} {space} {alt} {cancel}"
             ],
             'shift' : [
                 '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                 "{tab} Q W E R T Y U I O P { } |",
                 'A S D F G H J K L : " {enter}',
                 "{shift} Z X C V B N M < > ? {shift}",
                 "{accept} {alt} {space} {alt} {cancel}"
             ],	
},
'sv': {
	'default' : [
	"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
	"{tab} q w e r t y u i o p \u00e5 \u0308",
	"{cplk} a s d f g h j k l \u00f6 \u00e4 ' {enter}",
	"{shift} < z x c v b n m , . - {shift}",
	"{alt} {space} {alt}"
	],
	'shift' : [
	'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
	"{tab} Q W E R T Y U I O P \u00c5 \u0302",
	"{cplk} A S D F G H J K L \u00d6 \u00c4 * {enter}",
	"{shift} > Z X C V B N M ; : _ {shift}",
	"{alt} {space} {alt}"
	],
	'alt' : [
	'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
	'{tab} q w € r t y u i o p \u00e5 \u0303',
	"{cplk} a s d f g h j k l \u00f6 \u00e4 ' {enter}",
	'{shift} | z x c v b n \u00b5 , . - {shift}',
	'{alt} {space} {alt}'
	]
	},

'fi': {
	'default' : [
	"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
	"{tab} q w e r t y u i o p \u00e5 \u0308",
	"{cplk} a s d f g h j k l \u00f6 \u00e4 ' {enter}",
	"{shift} < z x c v b n m , . - {shift}",
	"{alt} {space} {alt}"
	],
	'shift' : [
	'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
	"{tab} Q W E R T Y U I O P \u00c5 \u0302",
	"{cplk} A S D F G H J K L \u00d6 \u00c4 * {enter}",
	"{shift} > Z X C V B N M ; : _ {shift}",
	"{alt} {space} {alt}"
	],
	'alt' : [
	'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
	'{tab} q w € r t y u i o p \u00e5 \u0303',
	"{cplk} a s d f g h j k l \u00f6 \u00e4 ' {enter}",
	'{shift} | z x c v b n \u00b5 , . - {shift}',
	'{alt} {space} {alt}'
	]
	},
};

keyboards['albanian-qwerty'] = {
        'default' : [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p \u00eb '",
            "a s d f g h j k l ; \u00e7 # {enter}",
            "{shift} \\ z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"],
        'shift' : [
            '\u00ac ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W E R T Y U I O P \u00cb @",
            "A S D F G H J K L : \u00c7 ~ {enter}",
            "{shift} \u00a6 Z X C V B N M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "| 1 2 3 4 5 6 { } [ ] - = {bksp}",
            "{tab} q w \u20ac r t y u i o p \u00f7 \u00d7",
            "a s d f g h j k l ; \u00e7 # {enter}",
            "{shift} \\ z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            '| ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W \u20AC R T Y U I O P \u00cb @",
            "A S D F G H J K L : \u00c7 ~ {enter}",
            "{shift} \u00a6 Z X C V B N M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
	};
    keyboards['albanian-qwertz'] = {
        'default' : [
            "\\ 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t z u i o p \u00e7 '",
            "a s d f g h j k l \u00eb [ ] {enter}",
            "{shift} < y x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '| ! " # $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W E R T Z U I O P \u00c7 @",
            "A S D F G H J K L \u00cb { } {enter}",
            "{shift} > Y X C V B N M ; : ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\\ ~ \u02c7 ^ \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}",
            "{tab} q w \u20ac r t z u i o p \u00f7 \u00d7",
            "\u00e4 \u0111:Shortcut_(\/d) \u0110:Shortcut_(\/D) f g h j \u0142:Shortcut_(\/l) \u0141:Shortcut_(\/L) $ \u00df \u00a4 {enter}",
            "{shift} < y x c @ { } \u00a7 < > / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['arabic-azerty'] = {
        'default' : [
            '> & \u00e9 # { [ | \u0300 \\ ^ @ ] } {bksp}',
            '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
            '\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
            '{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ],
        'shift' : [
            '< 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}',
            '{tab} \u064e \u064b \u064f \u064c \ufef9 \u0625 \u0060 \u00f7 \u00d7 \u061b \u062c \u00a4',
            '\\ \u0633 [ ] \ufef7 \u0623 \u0640 \u060c / : \u00a8 \u0651 {enter}',
            '{shift} | ~ \u0652 \u0650 \u064d \ufef5 \u0622 \' , . \u061f {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ]
    };
        keyboards['arabic-qwerty-1'] = {
            'default' : [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                "{tab} q w e r t y u i o p [ ] \\",
                "a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { } |",
                'A S D F G H J K L : " {enter}',
                "{shift} Z X C V B N M < > ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '\u0630 \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f \\',
                '\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 {enter}',
                '{shift} \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '\u0651 ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b > < |',
                '\u0634 \u0633 \u064a \u0628 \u0644 \u0623 \u0640 \u060c / : " {enter}',
                '{shift} \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['arabic-qwerty-2'] = {
            'default' : [
                '< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                "{tab} q w e r t y u i o p [ ]",
                "a s d f g h j k l ; ' ` {enter}",
                "{shift} \\ z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "> ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { }",
                'A S D F G H J K L : " ~ {enter}',
                "{shift} | Z X C V B N M , . ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
                '\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
                '{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '> ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b { }',
                '\\ \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c \u0645 : " \u0651 {enter}',
                '{shift} | \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['arabic-qwerty-3'] = {
            'default' : [
                '< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                "{tab} q w e r t y u i o p \u00a2 |",
                "a s d f g h j k l ; ' ` {enter}",
                "{shift} \u0640 z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "> ! @ # $ % \u00ac & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P \u00a3 |",
                'A S D F G H J K L : " ~ {enter}',
                "{shift} \u00a6 Z X C V B N M , . ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
                '\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
                '{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '> ! @ # $ % \u00ac & * ( ) _ + {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b \u00a3 |',
                '\u0634 \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c / : " \u0651 {enter}',
                '{shift} \u00a6 \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['arabic-qwerty-4'] = {
            'default' : [
                '< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                "{tab} q w e r t y u i o p [ ]",
                "a s d f g h j k l ; ' ` {enter}",
                "{shift} \\ z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "> ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { }",
                'A S D F G H J K L : " ~ {enter}',
                "{shift} | Z X C V B N M , . ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
                '{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
                '\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
                '{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '> ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} \u064e \u064b \u064f \u064c \ufef9 \u0625 \u0639 \u00f7 \u00d7 \u061b { }',
                '\\ \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c \u002f : " \u0651 {enter}',
                '{shift} | \u0626 \u0652 \u0650 \u064d \ufef5 \u0622 \u0629 , . \u061f {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['belarusian-qwerty'] = {
            'default' : [
                "\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u045e \u0437 \u0445 ' \\",
                "\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
                "{shift} \u044f \u0447 \u0441 \u043c \u0456 \u0442 \u044c \u0431 \u044e . {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                '\u0401 ! " \u2116 ; \u20ac : ? * ( ) _ + {bksp}',
                "{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u040e \u0417 \u0425 ' /",
                "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
                "{shift} \u042f \u0427 \u0421 \u041c \u0406 \u0422 \u042c \u0411 \u042e , {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ]
        };
        keyboards['bengali-qwerty-1'] = {
            'default' : [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} q w e r t y u i o p [ ] \\",
                "a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { } |",
                'A S D F G H J K L : " {enter}',
                "{shift} Z X C V B N M < > ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '` \u09e7 \u09e8 \u09e9 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u09e6 - \u09c3 {bksp}',
                '{tab} \u09cc \u09c8 \u09be \u09c0 \u09c2 \u09ac \u09b9 \u0997 \u09a6 \u099c \u09a1 \u09bc \\',
                '\u09cb \u09c7 \u09cd \u09bf \u09c1 \u09aa \u09b0 \u0995 \u09a4 \u099a \u099f {enter}',
                '{shift} \u09ce \u0982 \u09ae \u09a8 \u09ac \u09b2 \u09b8 , . \u09df {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '~ \u09e7 \u09e8 \u09b0 \u09cd \u099c \u09a4 \u0995 \u09b6 ( ) \u0983 \u09c3 {bksp}',
                '{tab} \u0994 \u0990 \u0986 \u0988 \u098a \u09ad \u0999 \u0998 \u09a7 \u099d \u09a2 \u099e |',
                '\u0993 \u098f \u0985 \u0987 \u0989 \u09ab \u09b0 \u0996 \u09a5 \u099b \u09a0 {enter}',
                '{shift} ? \u0981 \u09a3 \u09a8 \u09ac \u09b2 \u09b6 \u09b7 \u0964 \u09af {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['bengali-qwerty-2'] = {
            'default' : [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} q w e r t y u i o p [ ] \\",
                "a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                "{tab} Q W E R T Y U I O P { } |",
                'A S D F G H J K L : " {enter}',
                "{shift} Z X C V B N M < > ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '\u0982 \u0981 \u09bc \u0983 \u09fa \u09f8 \u09f9 \u09f2 \u09f3 \u09e6 \u09f4 \u09e7 \u09f5 {bksp}',
                '{tab} \u09e8 \u09f6 \u09e9 \u09f7 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u0985 \u0986 \u0987',
                '\u0988 \u0989 \u098a \u098b \u09e0 \u098c \u09e1 \u098f \u0990 \u0993 \u0994 {enter}',
                '{shift} \u0995 \u0996 \u0997 \u0998 \u0999 \u099a \u099b \u099c \u099d \u099e {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ],
            'alt-shift' : [
                '\u099f \u09a0 \u09a1 \u09dc \u09a2 \u09dd \u09a3 \u09a4 \u09ce \u09a5 \u09a6 \u09a7 \u09a8 {bksp}',
                '{tab} \u09aa \u09ab \u09ac \u09ad \u09ae \u09af \u09df \u09b0 \u09f0 \u09b2 \u09f1 \u09b6 \u09b7',
                '\u09b8 \u09b9 \u09bd \u09be \u09bf \u09c0 \u09c1 \u09c2 \u09c3 \u09c4 \u09e2 {enter}',
                '{shift} \u09e3 \u09c7 \u09c8 \u09cb \u09cc \u09cd \u09d7 {sp:3} {shift}',
                '{accept} {alt} {space} {alt} {cancel}'
            ]
        };
        keyboards['bulgarian-qwerty'] = {
            'default' : [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} q w e r t y u i o p [ ] \\",
                "a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                "{tab} Q W E R T Y U I O P { } |",
                'A S D F G H J K L : " {enter}',
                "{shift} Z X C V B N M < > ? {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '` 1 2 3 4 5 6 7 8 9 0 - . {bksp}',
                "{tab} , \u0443 \u0435 \u0438 \u0448 \u0449 \u043a \u0441 \u0434 \u0437 \u0446 ; (",
                "\u044c \u044f \u0430 \u043e \u0436 \u0433 \u0442 \u043d \u0432 \u043c \u0447 {enter}",
                "{shift} \u044e \u0439 \u044a \u044d \u0444 \u0445 \u043f \u0440 \u043b \u0431 {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt-shift' : [
                '~ ! ? + " % = : / _ \u2116 I V {bksp}',
                "{tab} \u044b \u0423 \u0415 \u0418 \u0428 \u0429 \u041a \u0421 \u0414 \u0417 \u0426 \u00a7 )",
                "\u042c \u042f \u0410 \u041e \u0416 \u0413 \u0422 \u041d \u0412 \u041c \u0427 {enter}",
                "{shift} \u042e \u0419 \u042a \u042d \u0424 \u0425 \u041f \u0420 \u041b \u0411 {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ]
        };
        keyboards['catalan-qwerty'] = {
            'default' : [
                "\u00ba 1 2 3 4 5 6 7 8 9 0 ' \u00a1 {bksp}",
                "{tab} q w e r t y u i o p \u0300 +",
                "a s d f g h j k l \u00f1 \u0301 \u00e7 {enter}",
                "{shift} < z x c v b n m , . - {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'shift' : [
                '\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
                "{tab} Q W E R T Y U I O P \u0302 *",
                "A S D F G H J K L \u00d1 \u0308 \u00c7 {enter}",
                "{shift} > Z X C V B N M ; : _ {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt' : [
                '\\ \u007c @ # \u0303 5 \u00ac 7 8 9 0 \u0027 \u00a1 {bksp}',
                "{tab} q w \u20ac r t y u i o p [ ]",
                "a s d f g h j k l \u00f1 { } {enter}",
                "{shift} \u007c z x c v b n m , . - {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ],
            'alt-shift' : [
                '\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
                "{tab} Q W E R T Y U I O P [ ]",
                "A S D F G H J K L \u00d1 { } {enter}",
                "{shift} > Z X C V B N M ; : _ {shift}",
                "{accept} {alt} {space} {alt} {cancel}"
            ]
        };
    keyboards['danish-qwerty'] = {
        'default' : [
            "\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
            "{tab} q w e r t y u i o p \u00e5 \u00a8",
            "a s d f g h j k l \u00e6 \u00f8 ' {enter}",
            "{shift} < z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
            "{tab} Q W E R T Y U I O P \u00c5 ^",
            "A S D F G H J K L \u00c6 \u00d8 * {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            '\u00a7 1 @ \u00a3 $ 5 6 { [ ] } + | {bksp}',
            '{tab} q w â‚¬ r t y u i o p \u00e5 ~',
            "a s d f g h j k l \u00e6 \u00f8 ' {enter}",
            '{shift} \\ z x c v b n \u00b5 , . - {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ]
    };
    keyboards['french-azerty-1'] = {
        'default' : [
            "\u00b2 & \u00e9 \" ' ( - \u00e8 _ \u00e7 \u00e0 ) = {bksp}",
            "{tab} a z e r t y u i o p ^ $",
            "q s d f g h j k l m  \u00f9 * {enter}",
            "{shift} < w x c v b n , ; : ! {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "{sp:1} 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}",
            "{tab} A Z E R T Y U I O P \u00a8 \u00a3",
            "Q S D F G H J K L M % \u00b5 {enter}",
            "{shift} > W X C V B N ? . / \u00a7 {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00b2 & ~ # { [ | ` \\ ^ @ ] } {bksp}",
            "{tab} a z \u20ac r t y u i o p ^ \u00a4",
            "q s d f g h j k l m  \u00f9 * {enter}",
            "{shift} < w x c v b n , ; : ! {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            "{sp:1} 1 ~ # { [ | ` \\ ^ @ ] } {bksp}",
            "{tab} A Z \u20ac R T Y U I O P \u00a8 \u00a4",
            "Q S D F G H J K L M % \u00b5 {enter}",
            "{shift} > W X C V B N ? . / \u00a7 {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
    };
    keyboards['german-qwertz-1'] = {
        'default' : [
            "\u0302 1 2 3 4 5 6 7 8 9 0 \u00df \u0301 {bksp}",
            "{tab} q w e r t z u i o p \u00fc +",
            "a s d f g h j k l \u00f6 \u00e4 # {enter}",
            "{shift} < y x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00b0 ! " \u00a7 $ % & / ( ) = ? \u0300 {bksp}',
            "{tab} Q W E R T Z U I O P \u00dc *",
            "A S D F G H J K L \u00d6 \u00c4 ' {enter}",
            "{shift} > Y X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            '\u0302 1 \u00b2 \u00b3 4 5 6 { [ ] } \\ \u0301 {bksp}',
            "{tab} @ w \u20ac r t z u i o p \u00fc \u0303",
            "a s d f g h j k l \u00f6 \u00e4 # {enter}",
            "{shift} \u007c y x c v b n \u00b5 , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['german-qwertz-2'] = {
        'default' : [
            "\u00a7 1 2 3 4 5 6 7 8 9 0 ' \u0302 {bksp}",
            "{tab} q w e r t z u i o p \u00fc \u0308",
            "a s d f g h j k l \u00f6 \u00e4 $ {enter}",
            "{shift} < y x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00b0 + " * \u00e7 % & / ( ) = ? \u0300 {bksp}',
            "{tab} Q W E R T Z U I O P \u00e8 !",
            "A S D F G H J K L \u00e9 \u00e0 \u00a3 {enter}",
            "{shift} > Y X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00a7 \u007c @ # 4 5 \u00ac \u00a6 \u00a2 9 0 \u0301 \u0303 {bksp}",
            "{tab} q w \u20ac r t z u i o p [ ]",
            "a s d f g h j k l \u00f6 { } {enter}",
            "{shift} \\ y x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['hebrew-qwerty'] = {
        'default' : [
            '; 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            "{tab} / ' \u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 [ ] \\",
            "\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3 , {enter}",
            "{shift} \u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 . {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P { } |",
            'A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            "{tab} q w e r t y u i o p [ ] \\",
            "a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
   /* keyboards['hungarian-qwertz-1'] = {
		'default' : [
		     		"0 1 2 3 4 5 6 7 8 9 ö ü ó ű {bksp}",
		     		"{tab} q w e r t z u i o p ő ú",
		     		"a s d f g h j k l é á {enter}",
		     		"{shift} í y x c v b n m , . - {shift}",
		     		"{accept} {alt} {space} {alt} {cancel}"
		     	],
		     	'shift' : [
		     		'§ \u0027 " + ! % / = ( ) Ö Ü Ó Ű {bksp}',
		     		"{tab} Q W E R T Z U I O P Ő Ú",
		     		"A S D F G H J K L É Á {enter}",
		     		"{shift} Í Y X C V B N M ; : _ {shift}",
		     		"{accept} {alt} {space} {alt} {cancel}"
		     	],
		     	'alt' : [
		         '{sp:1} ~ ˇ ^ ˘ ° ˛ ` ˙ ´ ˝ ¨ ¸ ¤ {bksp}',  // most of non used
		         '{tab} \\ | Ä {sp:1} {sp:1} {sp:1} € Í {sp:1} {sp:1} ÷ ×',
		         'ä đ Đ [ ] {sp:1} í ł Ł $ ß {enter}',
		         '{shift} < > # & @ { } < ; > * {shift}',
		     		'{accept} {alt} {space} {alt} {cancel}'
		     	]
    };*/
    keyboards['hungarian-qwertz-2'] = {
		'default' : [
		     		"0 1 2 3 4 5 6 7 8 9 ö ü ó {bksp}",
		     		"{tab} q w e r t z u i o p ő ú",
		     		"a s d f g h j k l é á ű {enter}",
		     		"{shift} í y x c v b n m , . - {shift}",
		     		"{accept} {alt} {space} {alt} {cancel}"
		     	],
		     	'shift' : [
		     		'§ \u0027 " + ! % / = ( ) Ö Ü Ó {bksp}',
		     		"{tab} Q W E R T Z U I O P Ő Ú",
		     		"A S D F G H J K L É Á Ű {enter}",
		     		"{shift} Í Y X C V B N M ; : _ {shift}",
		     		"{accept} {alt} {space} {alt} {cancel}"
		     	],
		     	'alt' : [
		         '{sp:1} ~ ˇ ^ ˘ ° ˛ ` ˙ ´ ˝ ¨ ¸ {bksp}',  // most of non used
		         '{tab} \\ | Ä {sp:1} {sp:1} {sp:1} € Í {sp:1} {sp:1} ÷ ×',
		         'ä đ Đ [ ] {sp:1} í ł Ł $ ß ¤ {enter}',
		         '{shift} < > # & @ { } < ; > * {shift}',
		     		'{accept} {alt} {space} {alt} {cancel}'
		     	]
    };
    keyboards['hungarianansi-qwertz-1'] = {
        'default' : [
            "0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 \u0171 {bksp}",
            "{tab} q w e r t z u i o p \u0151 \u00fa",
            "a s d f g h j k l \u00e9 \u00e1 {enter}",
            "{shift} \u00ed y x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00a7 \u0027 " + ! % / = ( ) \u00d6 \u00dc \u00d3 \u0170 {bksp}',
            "{tab} Q W E R T Z U I O P \u0150 \u00da",
            "A S D F G H J K L \u00c9 \u00c1 {enter}",
            "{shift} \u00cd Y X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
        '{sp:1} \u007e \u02c7 \u005e \u02d8 \u00b0 \u02db \u0060 \u02d9 \u00b4 \u02dd \u00a8 \u00b8 \u00a4 {bksp}', // most of non used
        '{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7',
        '\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df {enter}',
        '{shift} < > # & @ { } < ; > * {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ]
    };
    keyboards['hungarianansi-qwertz-2'] = {
        'default' : [
            "0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 {bksp}",
            "{tab} q w e r t z u i o p \u0151 \u00fa",
            "a s d f g h j k l \u00e9 \u00e1 \u0171 {enter}",
            "{shift} \u00ed y x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00a7 \u0027 " + ! % / = ( ) \u00d6 \u00dc \u00d3 {bksp}',
            "{tab} Q W E R T Z U I O P \u0150 \u00da",
            "A S D F G H J K L \u00c9 \u00c1 \u0170 {enter}",
            "{shift} \u00cd Y X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
        '{sp:1} \u007e \u02c7 \u005e \u02d8 \u00b0 \u02db \u0060 \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}', // most of non used
        '{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7',
        '\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df \u00a4 {enter}',
        '{shift} < > # & @ { } < ; > * {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ]
    };
    keyboards['japanese-qwerty'] = {
        'default' : [
            "\u306c \u3075 \u3042 \u3046 \u3048 \u304a \u3084 \u3086 \u3088 \u308f \u307b \u3078 \uff70 {bksp}",
            "{tab} \u305f \u3066 \u3044 \u3059 \u304b \u3093 \u306a \u306b \u3089 \u305b \uff9e \uff9f",
            "\u3061 \u3068 \u3057 \u306f \u304d \u304f \u307e \u306e \u308a \u308c \u3051 \u3080 {enter}",
            "{shift} \u3064 \u3055 \u305d \u3072 \u3053 \u307f \u3082 \u306d \u308b \u3081 \u308d {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "\u0301 \u0301 \u3041 \u3045 \u3047 \u3049 \u3083 \u3085 \u3087 \u3092 \u0301 \u0301 \u0301 {bksp}",
            "{tab} \u0301 \u0301 \u3043 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \uff62",
            "\u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u30f6 \uff63 {enter}",
            "{shift} \u3063 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \uff64 \uff61 \uff65 \u00a6 {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['latvian-qwerty'] = {
        'default' : [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \u00B0",
            "a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W E R T Y U I O P { } |",
            'A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00ac 1 \u00AB \u00BB \u20AC 5 \u2019 7 8 9 0 \u2013 = {bksp}",
            "{tab} q w \u0113 \u0157 t y \u016B \u012B \u014D p [ ] \u00B0",
            "\u0101 \u0161 d f \u0123 h j \u0137 \u013C ; \u00B4 {enter}",
            "{shift} \u017E x \u010D v b \u0146 m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            '~ 1 2 3 4 \u00A7 \u00AB 7 \u00B1 \u00D7 0 \u2014 = {bksp}',
            "{tab} Q W \u0112 \u0156 T Y \u016A \u012A \u014C P { } |",
            '\u0100 \u0160 D F \u0122 H J \u0136 \u013B : \u00A8 {enter}',
            "{shift} \u017D X \u010C V B \u0145 M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['polish-qwerty'] = {
        'default' : [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \u00B0",
            "a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W E R T Y U I O P { } |",
            'A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w \u0119 r t y \u20ac i \u00f3 p [ ] \u00B0",
            '\u0105 \u015b d f g h j k \u0142 : " {enter}',
            "{shift} \u017c \u017a \u0107 v b \u0144 m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['portuguese-qwerty'] = {
        'default' : [
            "\u005C 1 2 3 4 5 6 7 8 9 0 \u0027 \u00ab {bksp}",
            "{tab} q w e r t y u i o p \u002b \u00b4",
            "a s d f g h j k l \u00e7 \u00ba \u007e {enter}",
            "{shift} \u003c z x c v b n m \u002c \u002e \u002d {shift}",
            "{cancel} {space} {alt} {combo} {accept}"     
        ],
        'shift' : [
            "\u007c \u0021 \u0022 \u0023 \u0024 \u0025 \u0026 \u002f \u0028 \u0029 \u003d \u003F \u00bb {bksp}",
            "{tab} Q W E R T Y U I O P \u002a \u0060",
            "A S D F G H J K L \u00c7 \u00aa \u005e {enter}",
            "{shift} \u003e Z X C V B N M \u003b \u003a \u005f {shift}",
            "{cancel} {space} {alt} {combo} {accept}"
        ],
    // AltGr
        'alt' : [
            "\u005C 1 \u0040 \u00a3 \u00a7 \u20ac 6 \u007b \u005b \u005d \u007d \u0027 \u00ab {bksp}",
            "{tab} q w \u20ac r t y u i o p \u0308 \u00b4",
            "a s d f g h j k l \u00e7 \u00ba \u007e {enter}",
            "{shift} \u003c z x c v b n m \u002c \u002e \u002d {shift}",
            "{cancel} {space} {alt} {combo} {accept}"
        ],
        'alt-shift' : [
            "\u007c \u0021 \u0022 \u0023 \u0024 \u0025 \u0026 \u002f \u0028 \u0029 \u003d \u003F \u00bb {bksp}",
            "{tab} Q W \u20ac R T Y U I O P \u0308 \u0060",
            "A S D F G H J K L \u00c7 \u00aa \u005e {enter}",
            "{shift} \u003e Z X C V B N M \u003b \u003a \u005f {shift}",
            "{cancel} {space} {alt} {combo} {accept}"
        ]
    };
    keyboards['russian-qwerty'] = {
        'default' : [
            "\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
            "\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
            "{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u0401 ! " \u2116 ; \u20ac : ? * ( ) _ + {bksp}',
            "{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
            "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
            "{shift} \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['spanish-qwerty'] = {
        'default' : [
            "\u007c 1 2 3 4 5 6 7 8 9 0 \' \u00bf {bksp}",
            "{tab} q w e r t y u i o p \u0301 +",
            "a s d f g h j k l \u00f1 \u007b \u007d {enter}",
            "{shift} < z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "\u00b0 ! \" # $ % & / ( ) = ? \u00a1 {bksp}",
            "{tab} Q W E R T Y U I O P \u0308 *",
            "A S D F G H J K L \u00d1 \u005b \u005d {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00ac 1 2 3 4 5 6 7 8 9 0 \\ \u00bf {bksp}",
            "{tab} \@ w e r t y u i o p \u0301 \u0303",
            "a s d f g h j k l \u00f1 \u0302 \u0300 {enter}",
            "{shift} < z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            "\u00b0 ! \" # $ % & / ( ) = ? \u00a1 {bksp}",
            "{tab} Q W E R T Y U I O P \u0308 *",
            "A S D F G H J K L \u00d1 \u005b \u005d {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['spanish-qwerty-sp'] = {
        'default' : [
            "\u00ba 1 2 3 4 5 6 7 8 9 0 \' \u00a1 {bksp}",
            "{tab} q w e r t y u i o p \u0300 +",
            "a s d f g h j k l \u00f1 \u0301 \u00e7 {enter}",
            "{shift} < z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "\u00aa ! \" \u00b7 $ % & / ( ) = ? \u00bf {bksp}",
            "{tab} Q W E R T Y U I O P \u005e *",
            "A S D F G H J K L \u00d1 \u0308 \u00c7 {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\\ \u007c @ # 4 5 \u00ac 7 8 9 0 \u0027 \u00a1 {bksp}",
            "{tab} q w e r t y u i o p [ ]",
            "a s d f g h j k l \u00f1 { } {enter}",
            "{shift} \u007c z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            "\u00aa ! \" \u00b7 $ % & / ( ) = ? \u00bf {bksp}",
            "{tab} Q W E R T Y U I O P [ ]",
            "A S D F G H J K L \u00d1 { } {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['swedish-qwerty'] = {
        'default' : [
            "\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
            "{tab} q w e r t y u i o p \u00e5 \u0308",
            "a s d f g h j k l \u00f6 \u00e4 ' {enter}",
            "{shift} < z x c v b n m , . - {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
            "{tab} Q W E R T Y U I O P \u00c5 \u0302",
            "A S D F G H J K L \u00d6 \u00c4 * {enter}",
            "{shift} > Z X C V B N M ; : _ {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            '\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
            '{tab} q w â‚¬ r t y u i o p \u00e5 \u0303',
            "a s d f g h j k l \u00f6 \u00e4 ' {enter}",
            '{shift} | z x c v b n \u00b5 , . - {shift}',
            '{accept} {alt} {space} {alt} {cancel}'
        ]
    };
    keyboards['swedish-dvorak'] = {
        'default' : [
            "\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
            "{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q \u00a8",
            "a o e u i d h t n s - < {enter}",
            "{shift} ' , . j k x b m w v z {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00bd ! " # \u00a4 % & / ( ) = ? ` {bksp}',
            "{tab} \u00d6 \u00c5 \u00c4 P Y F G C R L Q ^",
            "A O E U I D H T N S _ > {enter}",
            "{shift} * ; : J K X B M W V Z {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u00b4 {bksp}",
            "{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q ~",
            "a o e u i d h t n s - | {enter}",
            "{shift} ' , . j k x b m w v z {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['thai-qwerty'] = {
        'default' : [
            "\u005F \u0E45 \u002F \u002D \u0E20 \u0E16 \u0E38 \u0E36 \u0E04 \u0E05 \u0E08 \u0E02 \u0E0A {bksp}",
            "{tab} \u0E46 \u0E44 \u0E33 \u0E1E \u0E30 \u0E31 \u0E35 \u0E23 \u0E19 \u0E22 \u0E1A \u0E25 \u0E03",
            "\u0E1F \u0E2B \u0E01 \u0E14 \u0E40 \u0E49 \u0E48 \u0E32 \u0E2A \u0E27 \u0E07 {enter}",
            "{shift} \u0E1C \u0E1B \u0E41 \u0E2D \u0E34 \u0E37 \u0E17 \u0E21 \u0E43 \u0E1D {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "% + \u0E51 \u0E52 \u0E53 \u0E54 \u0E39 \u0E3F \u0E55 \u0E56 \u0E57 \u0E58 \u0E59 {bksp}",
            "{tab} \u0E50 \u0022 \u0E0E \u0E11 \u0E18 \u0E4D \u0E4A \u0E13 \u0E2F \u0E0D \u0E10 \u002C \u0E05",
            "\u0E24 \u0E06 \u0E0F \u0E42 \u0E0C \u0E47 \u0E4B \u0E29 \u0E28 \u0E0B \u002E {enter}",
            "{shift} ( ) \u0E09 \u0E2E \u0E3A \u0E4C \u003F \u0E12 \u0E2C \u0E26 {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u0060 1 2 3 4 5 6 7 8 9 0 - \u003D {bksp}",
            "{tab} q w e r t y u i o p \u005B \u005D \u005C",
            "a s d f g h j k l ; \u0027 {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            "\u007E | @ # $ % \u00ac & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P ! \u00a6 \u00a2",
            "A S D F G H J K L : \"  {enter}",
            "{shift} Z X C V B N M { } ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['turkish-q'] = {
        'default' : [
            "\u0022 1 2 3 4 5 6 7 8 9 0 \u002a \u002d {bksp}",
            "{tab} q w e r t y u \u0131 o p \u011f \u00fc",
            "{cplk} a s d f g h j k l \u015f \u0069 , {enter}",
            "{shift} < z x c v b n m \u00f6 \u00e7 . {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '\u00e9 ! \u0027 \u0302 + % & / ( ) = ? \u005f {bksp}',
            "{tab} Q W E R T Y U \u0049 O P \u011e \u00DC",
            "{cplk} A S D F G H J K L \u015e \u0130 ; {enter}",
            "{shift} > Z X C V B N M \u00d6 \u00c7 : {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u0022 1 \u00a3 # $ \u00bd 6 { [ ] } \u005c \u002d {bksp}",
            "{tab} @ w \u20ac r t y u \u0131 o p \u0308 \u0303",
            "{cplk} a s d f g h j k l \u0301 \u0069 \u0300 {enter}",
            "{shift} | z x c v b n m \u00f6 \u00e7 . {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['turkish-f'] = {
        'default' : [
            "\u002B \u0031 \u0032 \u0033 \u0034 \u0035 \u0036 \u0037 \u0038 \u0039 \u0030 \u002F \u002D {bksp}",
            "{tab} \u0066 \u0067 \u011F \u0131 \u006F \u0064 \u0072 \u006E \u0068 \u0070 \u0071 \u0077",
            "{cplk} \u0075 \u0069 \u0065 \u0061 \u00FC \u0074 \u006B \u006D \u006C \u0079 \u015F \u0078 {enter}",
            "{shift} \u003C \u006A \u00F6 \u0076 \u0063 \u00E7 \u007A \u0073 \u0062 \u002E \u002C {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            "\u002A \u0021 \u0022 \u0302 \u0024 \u0025 \u0026 \u0027 \u0028 \u0029 \u003D \u003F \u005F {bksp}",
            "{tab} \u0046 \u0047 \u011E \u0049 \u004F \u0044 \u0052 \u004E \u0048 \u0050 \u0051 \u0057",
            "{cplk} \u0055 \u0130 \u0045 \u0041 \u00DC \u0054 \u004B \u004D \u004C \u0059 \u015E \u0058 {enter}",
            "{shift} \u003E \u004A \u00D6 \u0056 \u0043 \u00C7 \u005A \u0053 \u0042 \u003A \u003B {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt' : [
            "\u00AC \u00B9 \u00B2 \u0023 \u00BC \u00BD \u00BE \u007B \u005B \u005D \u007D \u005C \u002D {bksp}",
            "{tab} \u0040 \u0067 \u011F \u0131 \u006F \u00A5 \u0072 \u006E \u0068 \u00A3 \u0308 \u0303",
            "{cplk} \u0075 \u00DF \u20AC \u0061 \u00FC \u0074 \u006B \u006D \u006C \u0301 \u015F \u0300 {enter}",
            "{shift} \u007C \u00AB \u00BB \u0076 \u0063 \u00E7 \u007A \u0073 \u00D7 \u00F7 \u002C {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]
    };
    keyboards['vietnamese-qwerty'] = {
        'default' : [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \\",
            "a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m < > , . / {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'shift' : [
            '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
            "{tab} Q W E R T Y U I O P { } |",
            "A S D F G H J K L : ' {enter}",
            "{shift} Z X C V B N M < > ; : ? {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        /*'alt' : [
            '{empty} \u0103 \u00e2 \u00ea \u00f4 {empty} \u031b {empty} {empty} {empty} \u0111 \u002d \u20ab {bksp}',
            "{tab} {empty} {empty} {empty} {empty} {empty} \u00ff {empty} {empty} \u0153 {empty} \u01b0 \u01a1 {empty}",
            "{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0302 {enter}",
            "{shift} {empty} {empty} \u00e7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ],
        'alt-shift' : [
            '{empty} \u0102 \u00c2 \u00ca \u00d4 {empty} {empty} {empty} {empty} {empty} \u0110 \u005f + {bksp}',
            "{tab} {empty} {empty} {empty} {empty} {empty} \u0178 {empty} {empty} \u0152 {empty} \u01af \u01a0 {empty}",
            "{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0308 {enter}",
            "{shift} {empty} {empty} \u00c7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
            "{accept} {alt} {space} {alt} {cancel}"
        ]*/
    };
