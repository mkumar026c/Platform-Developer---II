({
    onSearch : function(component, boatTypeId) {
        var action = component.get("c.getBoats");
        action.setParams({
            boatTypeId : boatTypeId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.boatsArray", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})