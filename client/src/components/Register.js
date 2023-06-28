const Registerform = () => {
    return(
        <div>
         <div class="Registrationform">   
<label for="username">User Name</label>
<input type="text" name="username" id="username" required></input>
<label for="email">Email</label>
<input type="email" name="email" id="email" required></input>
<label for="password">Password</label>
<input type="password" name="password" id="password"></input>
<nav>
<p>Already user LOGIN HERE? <a href="login.js">Login</a></p>
</nav>
<input type="submit" class="submit-button" value="Register"></input>
</div>
        </div>
    );
}
export default Registerform;