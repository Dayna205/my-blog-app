import './login.css'
export default function Login() {

return (
  <div className="auth-content">

    <form action="login.html" method="post">
      <h2 className="form-title">Login</h2>

      <div>
        <label>Username</label>
        <input type="text" name="username" className="text-input"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="text-input"/>
      </div>
      <div>
        <button type="submit" name="login-btn" className="btn btn-big">Login</button>
      </div>
    </form>

  </div>  
)

}