Merge remote-tracking branch 'origin/main'
<!DOCTYPE html>
<html>
<body>
    <center>
        <h1 style = "color: blue">AIUB </h1>
        <h2 style = "Color: blue">Registration Form</h2>
    </center>
    <h3 align="left"> Complete the Registration</h3>
    <table>
        <tr>
            <td>Fullname:</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <input type="radio" name="gender">Male
                <input type="radio" name="gender">Other
            </td>
        </tr>
        <tr>
            <td>Language Known:</td>
            <td>
                <input type="checkbox" name="lang">English
                <input type="checkbox" name="lang">Bangla
                <input type="checkbox" name="lang">Hindi
            </td>
        </tr>
        <tr>
            <td>Country:</td>
            <td>
                <select>
                    <option>--Select--</option>
                    <option>Bangladesh</option>
                    <option>Japan</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td><input type="date"></td>
        </tr>
        <tr>
            <td>Upload Photo</td>
            <td><input type="file"></td>
        </tr>
        <tr>
            <td>Comments:</td>
            <td><textarea></textarea></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="Submit" value="Register"></td>
        </tr>

    </table>


</body>

</html>