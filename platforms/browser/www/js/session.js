var Session;

Session = (function () {
	
	return {
		createSession: function (username, permissions) {
			// Creates the session
			
			alert("creating the session");
		},
		
		isValidSession: function () {
			// Verifies whether the session exists or not.
			// Returns true or false
			
			var isValid = false;
			
			if (sessionStorage && sessionStorage.getItem("username") != null) {
				isValid = true;
			}
			
			return isValid;
		}
	};
	
})();