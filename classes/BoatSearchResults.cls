public class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(String.isNotBlank(boatTypeId)){
            return [SELECT Id, Name, Contact__c, Contact__r.Name, Contact__r.HomePhone, Contact__r.Email, BoatType__c, 
                    Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Length__c, BoatType__r.Name, 
                    Picture__c, Price__c, Year_Built__c FROM Boat__c WHERE BoatType__c =: boatTypeId];
        }else{
        	return [SELECT Id, Name, Contact__c, Contact__r.Name, Contact__r.HomePhone, Contact__r.Email, BoatType__c, 
                    Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Length__c, BoatType__r.Name, 
                    Picture__c, Price__c, Year_Built__c FROM Boat__c];
        }
    }
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Id, Name FROM BoatType__c Order BY Name ASC];
    }
}