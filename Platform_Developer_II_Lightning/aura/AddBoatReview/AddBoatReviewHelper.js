({
	onInit : function(component, event, helper) {
		var boatRecord = component.find("service");
        boatRecord.getNewRecord(
            "BoatReview__c",	//-- This object's record will be created --//
            "null",				//-- This record type will be used --//
            false,				//-- Skip the cache --//
            $A.getCallback(function(){
            	var boatReviewRec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(error || boatReviewRec === null){
                    console.log("Error in initialising the record "+error);
                }
                else{
                    component.set("v.boatReview.Boat__c",component.get("v.boat").Id);
                //-- We could have got the boat's id for boat record in this way but sf doesnt take it.
                    //boatReviewRec.Boat__c = component.get("v.boat").Id;	 
                    var toastEvent = $A.get("e.force:showToast");
                    if(toastEvent){
                        toastEvent.setParams({
                            title 	: "Success!",
                            message	: "The record is loaded successfully."
                        });
                        toastEvent.fire();
                    }
                    else{
                        alert("The record is loaded successfully.");
                    }
                }
            })
        );
	}
})