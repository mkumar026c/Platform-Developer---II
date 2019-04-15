({
    doInit : function(component, event, helper) {
        var boatIdPassed = component.get("v.boat").Id;
        helper.onInit(component, boatIdPassed);
    },
    
    onUserInfoClick : function(component, event, helper){
        var redirectingUserId = event.currentTarget.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        console.log(navEvt);
        if(navEvt){
            navEvt.setParams({
                "recordId" : redirectingUserId
            });
            navEvt.fire();
        }
    }
})