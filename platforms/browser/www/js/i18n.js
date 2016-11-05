/**
 *
 **/

(function () {
	
	/** Get language */
	var defaultLanguage = "es";
	
	function loadTexts(lang) {
		// Summary:
		//		Loading texts based on the received language
		
		var msgPath;
		
		if (window.top === window.self) {
			msgPath = "js/messages/";
		} else {
			msgPath = "../../js/messages/";
		}
		
		jQuery.i18n.properties({
		    name: "Messages", 
		    path: msgPath, 
		    mode: "both",
		    language: lang
		});
	};
	
	loadTexts(defaultLanguage);
	
})();