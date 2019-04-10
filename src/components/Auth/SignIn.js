import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/AuthAction'
import {Redirect} from 'react-router-dom'

export class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  handleChange = (e) => {
   
    
    this.setState({
      [e.target.id]:e.target.value
    })

  }
  
  render() {
    const {auth} = this.props;
    const {authError} = this.props
    if(auth.uid) return <Redirect to='/'/>
    return (
     <div className="container">
       <form onSubmit={this.handleSubmit} className="white form">
        
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
           <label htmlFor='email'>Email:</label>
           <input type='email' id='email' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <label htmlFor='password'>Password:</label>
           <input type='password' id='password' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <button className="btn pink lighten-1 z-depth-0">Login</button>
           <div className="center red-text">
             {authError ? <p>{authError}</p> : null}
           </div>
         </div>
       </form>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError:state.auth.AuthError,
    auth:state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn:(creds) => (dispatch(signIn(creds)))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
