const Loginform = () => {
    return(
        <div>
            <label for="email">UserName/E-mail</label>
            <input type="email" placeholder="Enter user name" name="email" id="email" required></input>
            <label for="Password">Password</label>
            <input type="password" placeholder="Enter password" name="password" id="password" required></input>
            <a href="Register.js" class="newaccount">New Here!!! Create Account</a>
            <input type="submit" id="btn-users" class="submit-button" value="Login"></input>
        </div>
    );
}
export default Loginform;