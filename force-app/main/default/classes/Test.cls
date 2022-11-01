@RestResource(urlMapping='/Test/*')
global class Test {

    @HttpGet
    global static String doGet(){
        return 'Test';
    }
}
