({
    doInit : function(component, event, helper) {
        var inLtngPageApp = $A.get("e.force:createRecord");
        if(inLtngPageApp === undefined){
            component.set("v.createRecordSupported", false);
        } else{
            component.set("v.createRecordSupported", true);
        }
        
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.boatTypes", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
        /*var boatEvent = component.getEvent("FormSubmit");
        var boatTypeObj = {
            boatTypeId : component.get("v.selBoatTypeId")
        };
        boatEvent.setParams({
            "formData" : boatTypeObj
        });
        boatEvent.fire();*/
    },
    
    handleBoatChange : function(component, event, helper) {
        var selBoatType = component.find("selectBoat").get("v.value");
        if(selBoatType != ""){
            component.set("v.selBoatTypeId", selBoatType);
        }else{
            component.set("v.selBoatTypeId", "");
        }
    },
    
    createNew : function(component, event, helper) {
        var creatBoatRec = $A.get("e.force:createRecord");
        creatBoatRec.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "BoatType__c" : component.get("v.selBoatTypeId")
            }
        });
        creatBoatRec.fire();
    },
    
    onFormSubmit : function(component, event, helper){
        var boatEvent = component.getEvent("FormSubmit");
        var boatTypeObj = {
            boatTypeId : component.get("v.selBoatTypeId")
        };
        boatEvent.setParams({
            "formData" : boatTypeObj
        });
        boatEvent.fire();
    }
})