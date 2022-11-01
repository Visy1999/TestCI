public class MainDetailsController {
    @AuraEnabled
    public static String createCase() { 
        try {
            Case newCase = new Case(
            Status = 'New',
            Origin = 'Web');
            insert newCase;

            List<Task> task = [SELECT Id, Priority FROM Task];
            System.debug('task ' + task);
            update task; 
            return 'true';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        } 
    }
}
