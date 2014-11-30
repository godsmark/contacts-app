
$(document).ready(function() {
	
	// drop down menu
	$('.sort-menu').bind('mouseover', openSubMenu);
	$('.sort-menu').bind('mouseout', closeSubMenu);
	
	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');	
	};
	
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');	
	};

	// accordion
	var icons = {
      header: "ui-icon-closed",
      activeHeader: "ui-icon-open"
    };
    $( ".accordion" ).accordion({
      collapsible: true, 
      active: false,
      icons: icons
    });
			   
});
