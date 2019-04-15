({
	onBoatClick : function(component, event, helper) {
        var selectedBoatId = event.getSource().get("v.value.Id");
        var boatLat = event.getSource().get("v.value.Geolocation__Latitude__s");
        var boatLong = event.getSource().get("v.value.Geolocation__Longitude__s");
        var boatLabel = event.getSource().get("v.value.Name");
     	
        //-- Fire BoatSelect component event --//
		var BoatSelect = component.getEvent("BoatSelect");
        BoatSelect.setParams({
            boatId : selectedBoatId
        });
        BoatSelect.fire();
        
        //-- Fire BoatSelected application event --//
        var selBoat = event.getSource().get("v.value");
        var boatSelected = $A.get("e.c:BoatSelected");
        boatSelected.setParams({
            boat : selBoat
        });
        boatSelected.fire();
        
        //-- Fire PlotMapMarker application event --//
        var plotMap = $A.get("e.c:PlotMapMarker");
        plotMap.setParams({
            sObjectId 	: selectedBoatId, 
            lat			: boatLat, 
            long		: boatLong, 
            label		: boatLabel
        });
        plotMap.fire();
    }
})