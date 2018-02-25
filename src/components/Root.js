import React, {PropTypes,Component} from 'react';
import logo from './../img/welcome.png';
import './../styles/main.scss';

class Root extends Component {

/**
 * RootComponent constructor
 * @param props
 */
constructor(props) {
    super(props);
    this._initRoot();
    this.submit = this.submit.bind(this);
    this.checkEmailInput = this.checkEmailInput.bind(this);
    this.checkPasswordInput = this.checkPasswordInput.bind(this);
    this.checkColourInput = this.checkColourInput.bind(this);
    this.checkAnimalInput = this.checkAnimalInput.bind(this);
    this.checkTigerInput = this.checkTigerInput.bind(this);
    this.state = {
      errors : {}
    };
}

/**
 * Custom Function - Method binding to 'this'
 * @private
 */
_initRoot() {
    //bind custom function here
}

/**
 * Trigger onSubmit on the main form
 */
submit(e) {
  e.preventDefault();
  this.setState((prevState) => {
    return {
      errors : {
        email : this.checkEmailInput(),
        password : this.checkPasswordInput(),
        colour : this.checkColourInput(),
        animal : this.checkAnimalInput(),
        tiger : this.checkTigerInput()
      }
    };
  });
}

/**
 * Check email input
 * Email must be a valid email address.
 */
checkEmailInput() {
  let email = this.refs.email.value;
  let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && mailReg.test(String(email).toLowerCase()) ? null : "Email must be a valid email address.";
}

/**
 * Check password input
 * Password must be longer than 8 characters.
 */
checkPasswordInput() {
  let password = this.refs.password.value;
  return password && password.length > 8 ? null : "Password must be longer than 8 characters.";
}

/**
 * Check colour input
 * Colour must be selected
 */
checkColourInput() {
  let colour = this.refs.colour.value;
  return colour && colour.length ? null : "Colour must be selected";
}

/**
 * Check animal checkboxes
 * At least two Animals must be chosen
 */
checkAnimalInput() {
  let refAnimalArr = ['bear', 'tiger', 'snake', 'donkey'], count = 0;
  for (let i = 0; i < refAnimalArr.length; i++) {
    let node = this.refs[refAnimalArr[i]];
    if(node && node.checked) count++;
    if(count >= 2) return null;
  }
  return 'At least two Animals must be chosen';
}

/**
 * Check tiger input
 * If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string.
 */
checkTigerInput() {
  let tiger = this.refs.tiger.checked;
  return !tiger || this.refs.tigertype.value ? null : "If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string.";
}

/**
 * Life Cycle function - render
 * @returns {XML}
 */
 render() {
    return (
        <div id="root-component">
            <img src={logo} alt=""/>
            <form method='post' action='' onSubmit={this.submit}>
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <p className={this.state.errors.email ? "error" : ""}>
                        <label class='label' for='email'>
                            Email
                        </label>
                        <input ref='email' type='text' id='email' name='email'/>
                    </p>
                    <p className="error-label">{this.state.errors.email}</p>
                    <p className={this.state.errors.password ? "error" : ""}>
                        <label class='label' for='password'>
                            Password
                        </label>
                        <input ref='password' type='password' id='password' name='username'/>
                    </p>
                    <p className="error-label">{this.state.errors.password}</p>
                </fieldset>

                <fieldset>
                    <h3>Your animal</h3>
                    <p className={this.state.errors.colour ? "error" : ""}>
                        <label class='label' for='colour'>
                            Colour
                        </label>
                        <select ref='colour' name='colour' id='colour'>
                            <option value=''>Choose colour</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                            <option value='red'>Red</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                        </select>
                    </p>
                    <p className="error-label">{this.state.errors.colour}</p>
                    <p className={this.state.errors.animal ? "error" : ""}>
                        <span class="label">
                            Animal
                        </span>

                        <input ref='bear' type='checkbox' name='animal' value='bear' id='bear'/>
                        <label for='bear'>
                             Bear
                        </label>

                        <input ref='tiger' type='checkbox' name='animal' value='tiger' id='tiger'/>
                        <label for='tiger'>
                            Tiger
                        </label>

                        <input ref='snake' type='checkbox' name='animal' value='snake' id='snake'/>
                        <label for='snake'>
                             Snake
                        </label>

                        <input ref='donkey' type='checkbox' name='animal' value='donkey' id='donkey'/>
                        <label for='donkey'>
                             Donkey
                        </label>

                    </p>
                    <p className="error-label">{this.state.errors.animal}</p>
                    <p className={this.state.errors.tiger ? "error" : ""}>
                        <label class='label' for='tiger_type'>
                            Type of tiger
                        </label>
                        <input ref='tigertype' type='text' name='tiger_type' id='tiger_type'/>
                    </p>
                    <p className="error-label">{this.state.errors.tiger}</p>
                </fieldset>
                <fieldset>
                    <p>
                        <input type='submit' value='Create account'/>
                    </p>
                </fieldset>
            </form>
        </div>

    );
}
}

/**
 *
 * @type {{}}
 */
Root.propTypes = {};

/**
 *
 * @type {{}}
 */
Root.defaultProps = {};

export default Root;
