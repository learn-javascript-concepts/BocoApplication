define([], function() {

    var serverUrl = "http://ec2-13-58-74-246.us-east-2.compute.amazonaws.com:5000/"

    var appConstants = {
        authenticateUserUrl: serverUrl + "api-token-auth",
        getWorkOrder: serverUrl + "getworkorder/",
        createWorkOrder: serverUrl + "createworkorder",
        getRandomWorkOrder: serverUrl + "getrandomworkorder",
        getDetailedWorkorder: serverUrl + "getdetailedworkorder/",
        saveDescription: serverUrl + "saveDescription",
        updateCustomerDetails: serverUrl + "updateCustomerDetails",
        addNewCustomer: serverUrl + "addNewCustomer"
    }

    return appConstants;

});
