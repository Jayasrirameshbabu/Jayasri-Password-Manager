import './index.css'

const PasswordItem = props => {
  const {passwordDetails} = props
  const {id, website, userName, initialClassName} = passwordDetails
  const initial = userName ? userName[0] : ''

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <div className="password-item-container">
      <div className={initialClassName}>
        <p className="initial">{initial}</p>
      </div>
      <div className="list-content">
        <p className="website">{website}</p>
        <p className="website">{userName}</p>
        <p className="website">
          <img
            className="star-image"
            alt="Stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
          />
        </p>
      </div>
      <button
        className="del-btn"
        type="button"
        testid="delete"
        onClick={onDeletePassword}
      >
        <img
          className="del-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </div>
  )
}

export default PasswordItem
