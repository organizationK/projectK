
var app = {
	
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
		this.updateTexts();
		
		this.createEvents();
    },
	
	// update login page texts
	updateTexts: function() {

		var LBL_WELCOME = jQuery.i18n.prop("LBL_WELCOME"),
			LBL_TYPE_USERNAME_PSW = jQuery.i18n.prop("LBL_TYPE_USERNAME_PSW"),
			LBL_USERNAME = jQuery.i18n.prop("LBL_USERNAME"),
			LBL_PASSWORD = jQuery.i18n.prop("LBL_PASSWORD"),
			LBL_LOGIN = jQuery.i18n.prop("LBL_LOGIN");
		
		$("#welcomeSection").html(LBL_WELCOME);
		$("#legendSection").html(LBL_TYPE_USERNAME_PSW);
		
		$("#usernameLabel").html(LBL_USERNAME);
		$("#pswLabel").html(LBL_PASSWORD);
		$("#loginBtn").html(LBL_LOGIN);
		
	},
	
	// login page events
	createEvents: function () {
	
		var username, psw;
		
		// on enter key in password text field
		$("#password").bind("keyup", function (event) {
			if (event.keyCode === 13) {
				$("#loginBtn").click();
			}
		});
	
		// clicking on "login button"
		$("#loginBtn").bind("click", function (event) {
			username = $("#username").val();
			psw = $("#password").val();
			
			console.debug("username: " + username);
			console.debug("password: " + psw);
			alert("validate username and psw");
		});
	},
	
	receivedEvent: function (id) {
		
	}
	
};

app.initialize();