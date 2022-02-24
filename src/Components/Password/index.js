import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const initialClassNamesList = ['yellow', 'green', 'orange', 'brown', 'blue']

class Password extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isShow: false,
    isTrue: false,
    passwordsList: [],
  }

  deletePassword = passwordId => {
    const {passwordsList} = this.state

    this.setState({
      passwordsList: passwordsList.filter(
        password => password.id !== passwordId,
      ),
    })
  }

  renderPasswordsList = () => {
    const {passwordsList} = this.state

    return passwordsList.map(eachPassword => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        deletePassword={this.deletePassword}
      />
    ))
  }

  onAddPassword = event => {
    event.PreventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const initialClassNameBackground = `initial-container ${
      initialClassNamesList[Math.floor(Math.random() * 5)]
    }`

    const newPassword = {
      id: v4(),
      website: websiteInput,
      userName: userNameInput,
      password: passwordInput,
      initialClassName: initialClassNameBackground,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  searchList = event => {
    this.setState({searchInput: event.target.value})
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUserNameInput = event => {
    this.setState({
      userNameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordsList,
      searchInput,
    } = this.state

    let {isTrue} = this.state
    const newList = passwordsList.filter(eachValue =>
      eachValue.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newList.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }

    return (
      <div className="main-container">
        <img
          className="app-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        />
        <div className="container-1">
          <img
            className="container-image1"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <form className="add-details" onSubmit={this.onAddPassword}>
            <h1 className="detail-heading">Add New Password</h1>
            <div className="input-holder">
              <img
                className="input-image"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
              />
              <input
                className="input-element"
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
            </div>
            <div className="input-holder">
              <img
                className="input-image"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                className="input-element"
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUserNameInput}
                value={userNameInput}
              />
            </div>
            <div className="input-holder">
              <img
                className="input-image"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                className="input-element"
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            className="container-image2"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="container-2">
          <div className="first-div">
            <div className="your-password">
              <h1 className="heading-name">Your Passwords</h1>
              <p className="colored-text">{passwordsList.length}</p>
            </div>
            <div className="search-holder">
              <img
                className="input-image"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search"
                onChange={this.searchList}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords">
            <input
              type="checkbox"
              className="check-box"
              id="check"
              onChange={this.showPassword}
            />
            <label htmlFor="check" className="label-password">
              Show Passwords
            </label>
          </div>
          {!isTrue && (
            <div className="empty-state">
              <img
                className="empty-image"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="no-passwords">No Passwords</p>
            </div>
          )}
          {isTrue && <ul>{this.renderPasswordsList}</ul>}
        </div>
      </div>
    )
  }
}

export default Password
