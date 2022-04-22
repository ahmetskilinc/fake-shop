import "./Login.css";

export const Login = () => {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-one-third">
        <form className="box">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" />
            </div>
          </div>

          <button className="button is-primary">Sign in</button>
        </form>
      </div>
      <div className="column"></div>
    </div>
  );
};
