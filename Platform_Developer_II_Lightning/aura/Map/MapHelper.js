({
    getLeafletMap : function(component, latitude, longitude) {
        var leafletMap = component.get("v.leafletMap");
        if (!leafletMap) {
            var mapDiv = component.find("map").getElement();
            leafletMap = L.map(mapDiv, {zoomControl: false, tap: false})
            .setView([latitude, longitude], 13);
            component.set('v.leafletMap', leafletMap);
        } else {
            leafletMap.setView([latitude, longitude], 13);
        }
        return leafletMap;
    }
})