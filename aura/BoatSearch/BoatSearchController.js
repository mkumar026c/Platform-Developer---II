({
	onFormSubmit : function(component, event, helper) {
		var boatObj = event.getParam("formData");
        console.log(boatObj);
        var boatSrchRsltCmp = component.find("boatSearchResult");
        boatSrchRsltCmp.search(boatObj.boatTypeId);
	}
})