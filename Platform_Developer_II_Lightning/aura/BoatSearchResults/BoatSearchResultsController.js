({
    doSearch : function(component, event, helper) {
        var params = event.getParam("arguments");
        var boatTypeId = params.boatTypeId;
        helper.onSearch(component, boatTypeId);
    },
    
    onBoatSelect : function(component, event, helper){
        var selBoatId = event.getParam("boatId");
        component.set("v.selectedBoatId", selBoatId);
    }
})