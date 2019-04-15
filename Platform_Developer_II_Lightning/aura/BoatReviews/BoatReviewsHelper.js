({
	onInit : function(component, boatId) {
		var action = component.get("c.getAll");
        action.setParams({
            boatId : boatId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
            } else if(state === "ERROR"){
                console.log("There is an error");
            }
        });
        $A.enqueueAction(action);
	}
})