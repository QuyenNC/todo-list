import React , {Component} from 'react';
import classNames from 'classnames';
import './style/footer.css';
import './style/modal.css';
class Footer extends Component {
  render() {
    const { onclick ,value,  complete , onSubmit, onChange} = this.props; 
    return (
        <div className="Footer">
            <div onClick={onclick} className={ classNames("Add",{Active:complete === true})}>
                <span>+</span>
            </div>
            <div  id="myModal" className={classNames('modal',{active:complete === true})}>
                    <div className="modal-content">
                        <div className="header">
                            <h1>Schedule work</h1>
                            <span className="close" onClick={onclick}>&times;</span>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="inputAdd">
                                <input type="text" 
                                value={value}
                                onChange={onChange}
                                placeholder="Lên lịch làm việc ..."/>
                            </div>
                            <div className="fotter">
                                <div className="btn">
                                    <input type="submit" value="Add" onClick={onclick} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
  }
}
export default Footer;
