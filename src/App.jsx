import css from "./App.css";
import { Motion, spring } from "react-motion";

export default class App extends React.Component {
  static propTypes = {
    element: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    element: {}
  }

  state = {
    rememberMe: false
  }

  constructor(props) {
    super(props);
    this._handleRememberToggle = this._handleRememberToggle.bind(this);
  }

  _handleRememberToggle() {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.box}>
          <div className={css.item}>
            <label>Username</label>
            <input className={css.input} type="text" />
          </div>
          <div className={css.item}>
            <label>Password</label>
            <input className={css.input} type="password" />
          </div>

          <div className={css.item}>
            <button className={css.button}>Login</button>
          </div>
          <div className={css.item}>
            <i
              className="material-icons"
              data-text="remember me"
              onClick={this._handleRememberToggle}>
                { this.state.rememberMe ?
                "radio_button_checked" : "radio_button_unchecked"
                }
            </i>
            <p className={css["text-right"]}>Switch to NZ or AU Depot</p>
          </div>
        </div>
      </div>
    );
  }
}
