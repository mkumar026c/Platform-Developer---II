({
	onBoatSelected : function(component, event, helper) {
		var selectedBoat = event.getParam("boat");
        component.set("v.id", selectedBoat.Id);
        //component.set("v.boat", selectedBoat); //-- This can also be used to show record --//
        var newBoat = component.find("service").reloadRecord();
	},
    
    onrecordUpdated : function(component, event, helper){
		console.log("This was called");
    },
    
    onBoatReviewAdded : function(component, event, helper){
        var tabSet = component.find("tabset");
        tabSet.set("v.selectedTabId", "boatReviewTab");
        var boatReview = component.find("BoatReviews");
        boatReview.refresh();
    }
})