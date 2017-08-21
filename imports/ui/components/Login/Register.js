import React from 'react';

class Register extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      email:'',
      password:'',
      confirmPassword:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

onChange(e){this.setState({ [e.target.name]: e.target.value});}

onSubmit(e) {
  e.preventDefault();
  if (this.state.password === '' || this.state.confirmPassword === '' || this.state.email === ''){
    //there are some empty strings.
    Materialize.toast ('It appears, that you left some blank fields.', 4000);
  } else if( this.state.password === this.state.confirmPassword){
    //all good, register.
    var accountInfo = {
      email: this.state.email,
      password: this.state.password
    }

    Accounts.createUser(accountInfo, function(er){
      if(er){
       Materialize.toast('There was an error, while creating your account.', 4000);
       console.log (er);
     } else {
        //redirect to admin page, or whatever.
        FlowRouter.go('/');
        console.log('logged in succesfully');
          }
       });
  } else {
    //the passwords don't match.
    Materialize.toast ('Your passwords did not match.', 4000);
  }
} //end of onSubmit

render() {
  return (
    <div className="row">
    <h4 className="center">Register Account</h4>
      <form onSubmit={this.onSubmit} className="col offset-s4 s12" >

        <div className="row">
          <div className="input-field col s6">
            <input id="email"
            type="text"
            className="validate"
            name="email"
            value={this.state.email}
            onChange={this.onChange} />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChange} />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
        </div>

        <button className="btn waves-effect waves-light btn-block" style={{width: "49%"}}>Submit
        </button>
      </form>
    </div>
    );
  }
}

export default Register;
