var Portfolio;


Portfolio = (function () {
		
	var 

	/** PRIVATE -> Represents the full JSON object used for the system navigation */
	portfolioJson = {
		"a": { id: "a", name: jQuery.i18n.prop("LBL_ACCESS"), pages: {
				"1": { id: "1", name: jQuery.i18n.prop("LBL_ROLES"), mvc: "roles" },
				"2": { id: "2", name: jQuery.i18n.prop("LBL_USERS"), mvc: "usuarios" }
			}	
		},
		"b": { id: "b", name: "Extra 1", pages: {
				"3": { id: "3", name: "Extra extra 1" },
				"4": { id: "4", name: "Extra extra 2" },
				"5": { id: "5", name: "Extra extra 3" },
				"6": { id: "6", name: "Extra extra 4" },
				"7": { id: "7", name: "Extra extra 5" }
			}
		}
		/*
		"1": { id: "1", text: $.i18n.prop('invitations'), states: "0", roles: "0" },
		"2": { id: "2", text: $.i18n.prop('checkins')   , states: "0", roles: "0", template: "checkins.html", style: "checkins.css", controller: "checkins.js" },
        "3": { id: "3", text: $.i18n.prop('settings')   , states: "1,4", roles: "0", 
        	tabs: { 
        		"3a": { id: "3a", text: $.i18n.prop('absentees'), states: "1,4", roles: "0" } 
        	}
        },
        "4": { id: "4", text: $.i18n.prop('about'), states: "0", roles: "0", template: "about.html", controller: "about.js", defaultPage: true },
        "5": { id: "5", text: $.i18n.prop('extra') + "1", states: "2", roles: "2" },
        "6": { id: "6", text: $.i18n.prop('extra') + "2", states: "3,4,", roles: "1" },
        "7": { id: "7", text: $.i18n.prop('extra') + "2", states: "3,4,", roles: "1" },
        "8": { id: "8", text: $.i18n.prop('extra') + "3", states: "1,3,4", roles: "1" },
        "9": { id: "9", text: $.i18n.prop('extra') + "4", states: "2", roles: "2" } */
	}

	return {
		
		getPortfolio: function () {
			//	Summary:
			//		Returns the  portfolioJson

			return jQuery.extend(true, {}, portfolioJson);
		}/*,

		getPortfolioByStateAndRole : function (userState, userRole) {
			//	Summary:
			//		Returns the portfolio based on the given role and state

			var portfolioBySR = {}, key, currentPage;

			for (key in portfolioJson) {
				if (portfolioJson.hasOwnProperty(key)) {
					currentPage = jQuery.extend(true, {}, portfolioJson[key]);

					if (isRoleValid(currentPage, userRole) && isStateValid(currentPage, userState)) {
						portfolioBySR[key] = currentPage;
					}
				}
			}

			return portfolioBySR;
		},

		getDefaultPage: function () {
			//	Summary:
			//		Returns the default page of the portfolio Json object

			var defaultPage = null, key, page;

			for (key in portfolioJson) {
				if (portfolioJson.hasOwnProperty(key)) {
					page = jQuery.extend(true, {}, portfolioJson[key]);
					if (page.defaultPage === true) {
						defaultPage = page;
						break;
					} else if (page.states === "0" && page.roles === "0" && defaultPage === null) {
						defaultPage = page;
					}
				}
			}

			return defaultPage;
		},

		getPageByPageId: function (pageId) {
			//	Summary:
			//		Returns the page object based on the given pageId
			//		It returns null in case the logged user does not have permissions to that page

			var pageObject = jQuery.extend(true, {}, portfolioJson[pageId]);

			if (typeof pageObject !== "object") {
				pageObject = null;
			} else {
				// TODO: validate premissions!
			}

			return pageObject;
		} */

	}
})();