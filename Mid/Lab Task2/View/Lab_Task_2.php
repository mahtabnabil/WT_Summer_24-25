<!DOCTYPE html>
<html>
<body>
    <center> 
    <h1 style=color:navy;">Bank Management System</h1>
    <h2 style=color:darkblue;">Your Trusted Financial Partner</h2>
    </center>  
    <h3>Customer Registration Form</h3>
    <div style="width: 420px; padding: 40px; border: 1px solid #0f0e0e; background-color: white;">

        <form>
            <table>
                <tr>
                    <td>Full Name:</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td><input type="date"></td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td>
                        <input type="radio">Male
                        <input type="radio">Female
                        <input type="radio">Other
                    </td>
                </tr>
                <tr>
                    <td>Marital Status:</td>
                    <td>
                        <select>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Account Type:</td>
                    <td>
                        <select>
                            <option>Savings</option>
                            <option>Current</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Initial Deposit Amount:</td>
                    <td><input type="text"style="width: 150px"></td>
                </tr>
                <tr>
                    <td>Mobile Number:</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Email Address:</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td><textarea rows="2" cols="15"></textarea></td>
                </tr>
                <tr>
                    <td>Occupation:</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>National ID (NID):</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Set Password:</td>
                    <td><input type="password"></td>
                </tr>
                <tr>
                    <td>Upload ID Proof:</td>
                    <td><input type="file"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox"> I agree to the terms and conditions
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" value="Register" style="background-color: rgb(122, 122, 227);">
                        <input type="reset" value="Clear" style="background-color: rgb(122, 122, 227);">

                    </td>
                </tr>
            </table>
        </form>
        <div style="width: 200px; height: 50px; border: 1px solid red; overflow: auto;">
         This is a demo text to show how overflow works in a small container with a fixed height and width.
         </div>

    </div>

</body>
</html>
