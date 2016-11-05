var Navigation;

Navigation = (function () {
	
	var createCollapsibleItem, sidebarParentId, loadPage, selectedPage;
	
	sidebarId = "#navAccordion";
	
	selectedPage = null;
	
	loadPage = function (liId, page, parentItemId) {
		//	Summary:
		//		Loads the appropriate page into the main section div and closes the sidebar navigation
		
		var iframeId = "mainFrame";
		
		$("#" + liId).click(function () {
			if (selectedPage !== page.id) {
				selectedPage = page.id;
				
				iframeId= $("#mainFrame");
				templateSrc = "pages/template/" + page.mvc + ".html";
				
				iframeId.attr("src", templateSrc);
			}
			$("#sidebarMenu").panel("close");
			$("#" + parentItemId).collapsible("collapse");
		});
	};
	
	createCollapsibleItem = function (item) {
		//	Summary:
		//		Creates a collapsible parent item with its children
		//		    <div data-role="collapsible" id="access" data-collapsed="true" data-collapsed-icon="carat-r" data-expanded-icon="carat-d">
		//		        <h3>Access</h3>
		//				<ul data-role="listview" data-inset="false">
		//		        	<li>Roles</li>
		//					<li>Usuarios</li>
		//				</ul>
		//		    </div>
		
		var parentItemId, key, pages, ulId, currentPage, liId;
		
		if (typeof item === "object") {
			parentItemId = "parentItem_" + item.id;
			
			$(sidebarId).append("<div data-role=\"collapsible\" id=\"" + parentItemId
				+ "\" data-collapsed=\"true\" data-collapsed-icon=\"carat-r\" data-expanded-icon=\"carat-d\"></div>");
				
			$(("#" + parentItemId)).append("<h3>" + item.name + "</h3>");
			
			pages = item.pages;
			
			if (typeof pages === "object") {
				ulId = "ul_" + item.id;
				$(("#" + parentItemId)).append("<ul data-role=\"listview\" data-inset=\"false\" id=\"" + ulId + "\"></ul>");
				
				for (key in pages) {
					if (pages.hasOwnProperty(key)) {
						currentPage = jQuery.extend(true, {}, pages[key]);
						liId = "li_" + currentPage.id;
						$(("#" + ulId)).append("<li id=\"" + liId + "\">" + currentPage.name + "</li>");
						
						if (typeof currentPage.mvc === "string") {
							loadPage(liId, currentPage, parentItemId);
						}
					}
				}
				
				$("#" + ulId).listview();
			}
			
			// Initializing collapsible item
			$("#" + parentItemId).collapsible();
		} else {
			console.error("An incompatible item has been received while trying to create the collapsible navigation.");
		}
	};
	
	return {
		createNavigation: function () {
			//	Summary:
			//		Creates the sidebar navigation based on the items defined in protfolio
			
			var portfolio = Portfolio.getPortfolio(), key;
			
			// Cleaning navigation
			$(sidebarId).get(0).innerHTML = "";
			
			for (key in portfolio) {
				if (portfolio.hasOwnProperty(key)) {
					createCollapsibleItem(jQuery.extend(true, {}, portfolio[key]));
				}
			}
		}
	};	
})();