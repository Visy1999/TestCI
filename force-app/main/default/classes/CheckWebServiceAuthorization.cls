@RestResource(urlMapping='/api/v1/auth/*')
global class CheckWebServiceAuthorization {
    
    global class RequestDataWrapper {
        public String login;
        public String passowrd;
    }

    global class ResponseDataWrapper {
        public String message;
        public String status;
    }
    
    @HttpPost
    global static ResponseDataWrapper auth(){
        RestResponse res = RestContext.response;
        ResponseDataWrapper responseDataWrapper = new ResponseDataWrapper();
        RestContext.response.addHeader('Content-Type', 'application/json');
        try {
            RequestDataWrapper requestData = (RequestDataWrapper)JSON.deserialize(RestContext.Request.requestBody.toString(), RequestDataWrapper.class);
            List<Cleaner__c> cleaner = [SELECT Id, Login_Cleaner__c, Provide_Connection__c 
                                        FROM Cleaner__c 
                                        WHERE Active__c = true AND Login_Cleaner__c =: requestData.login AND Provide_Connection__c=: requestData.passowrd 
                                        LIMIT 1];
            
            
            if(cleaner.isEmpty()) {
                RestContext.response.statusCode = 401;
                responseDataWrapper.message = 'Login or password is incorrect or Account is inactive';
                responseDataWrapper.status = '401';
                return responseDataWrapper;
            }

            RestContext.response.statusCode = 200;
            responseDataWrapper.message = 'Success';
            responseDataWrapper.status = '200';
            return responseDataWrapper;
        } catch (Exception e) {
            res.responseBody = Blob.valueOf(JSON.serialize('{"Message":"'+ e.getMessage() +'"}'));
            RestContext.response.statusCode = 500;
            responseDataWrapper.message = e.getMessage();
            responseDataWrapper.status = '500';
            return responseDataWrapper;
        }   
    }
}
