({
    doInit : function(component, event, helper){
        var navEvent = $A.get("e.force:navigateToSObject");
        if(navEvent){
            component.set("v.isAppEnv", true);
        }
    },
    
    onFullDetails : function(component, event, helper) {
        var navEvnt = $A.get("e.force:navigateToSObject");
        navEvnt.setParams({
            "recordId" : component.get("v.boat").Id
        });
        navEvnt.fire();
    }
})