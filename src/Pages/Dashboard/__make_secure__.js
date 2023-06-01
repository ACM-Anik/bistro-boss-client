/**
 *  ----------------
 *  BASIC
 * -------------
 * 1. Do not show the link to them who should not see it. Only show to the person/types of users who should see it;
 * 2. Do not allow to visit the link by typing on the url.
 * 3. Use AdminRoute that will check whether the user is admin or not , if not admin then redirect to any other page. You could logout user and send them to the login page as well.
 
 * ----------------------
 *     To Send Data
 * ----------------------
 * 1. Verify JWT Token(Send authorization token to the server), if possible use axios to send jwt token by intercepting the request.
 * 2. If it is an admin activity, make sure only admin user is posting data by using verifyAdmin;
 * 3. 
 **/ 