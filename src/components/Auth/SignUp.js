import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/AuthAction'

export class SignUp extends Component {
  state={
    email:'',
    password:'',
    firstname:'',
    lastname:''

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  handleChange = (e) => {
   
    console.log(e.target.value)
    this.setState({
      [e.target.id]:e.target.value
    })

  }
  render() {
    const {auth,error} = this.props;
    console.log(auth)
    if(auth.uid) return <Redirect to='/'/>
    return (
     <div className="container">
       <form onSubmit={this.handleSubmit} className="white">
        
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
           <label htmlFor='email'>Email</label>
           <input type='email' id='email' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <label htmlFor='password'>Password</label>
           <input type='password' id='password' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <label htmlFor='firstname'>FirstName</label>
           <input type='text' id='firstname' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <label htmlFor='lastname'>LastName</label>
           <input type='text' id='lastname' onChange={this.handleChange}></input>
         </div>
         <div className="input-field">
           <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
           <div className="center red-text">
             {error ? <p>{error}</p>:null}
           </div>
         </div>
       </form>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
 console.log(state)
  return{
    auth:state.firebase.auth,
    error:state.auth.AuthError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp:(newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
