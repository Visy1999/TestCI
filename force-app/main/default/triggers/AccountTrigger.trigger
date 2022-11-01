trigger AccountTrigger on Account (before insert, after update) {
    System.debug('AccountTrigger');
}