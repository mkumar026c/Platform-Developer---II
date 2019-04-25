({
    doInit : function(component, event, helper){
        helper.onInit(component, event, helper);
    },
    
    onSave : function(component, event, helper) {
		var recordData = component.find("service");
        recordData.saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === "SUCCESS"){
                var toastEvent = $A.get("e.force:showToast");
                if(toastEvent){
                    toastEvent.setParams({
                        title 	: "Success!",
                        message	: "The record is updated sucessfully"
                    })
                    toastEvent.fire();
                }else{
                    alert("The record is updated sucessfully");
                }
                helper.onInit(component, event, helper);
                //-- Once the reivew record is saved we need to fire an event to boatdetails.cmp --//
                var boatRevAddedEvnt = component.getEvent("BoatReviewAdded");
                boatRevAddedEvnt.fire();
            } else if(saveResult.state === "ERROR"){
                console.log("This is error.");
            }
        }));
    },
    
    onrecordUpdated : function(component, event, helper){
        console.log("this function ran");
    }
})