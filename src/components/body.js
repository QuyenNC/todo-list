import React , {Component} from 'react';
import Undraw from './image/undraw_Freelancer_re_irh4 (1).svg'
import './style/body.css';
import RenderlistCom from './render-list-com';
import RenderlistFis from './render-list-fis';
import Footer from './footer';
import classNames from 'classnames';
class Body extends Component {
    constructor(){
        super();
        this.state={
            isComplete : false,
            newItem : '',
            todoList : [],
            
        };
        this.openModal = () =>
        this.setState({
          isComplete : this.setStateOnclick(this.state.isComplete)
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            newItem:event.target.value
        });
    }

    handleSubmit(event) {
        let item = this.state.newItem;
        this.setState({
            newItem:'',
            todoList: [...this.state.todoList,{title: item,isDone: false}]
        });
        event.preventDefault();
    }
    onClickItem(item){
        return (event) => {
            const isDone = item.isDone;
            const todoList = this.state.todoList;
            const index = this.state.todoList.indexOf(item);
            this.setState({
                todoList : [
                    ...todoList.slice(0, index),
                    {
                        ...item,isDone : !isDone
                    },
                    ...todoList.slice( index + 1) 
                ]
            })
        };
    }
    setStateOnclick(isComplete){
        switch(isComplete){
          case true:
            return false;
          case false: 
            return true;
          default :
            return true;
        }
      }
  render() {
        const todoList = this.state.todoList;
      let items = (
        <div className="Body">
            <div className={ classNames("defaut",{Active:todoList.length > 0})}>
                <img src={Undraw} alt="Defaut"/>
            </div>
            <div className={ classNames("upcoming",{Active:todoList.length === 0})}>
                <div className="upcoming-list">
                    <h6>upcoming</h6>
                    <ul>
                        {todoList.map((item, index) =>
                            ( item.isDone === false &&
                                <RenderlistCom 
                                onClick={this.onClickItem(item)}  
                                item = {item}
                                key = {index}
                                stt = {index}
                                />
                                
                            )
                        )}
                    </ul>
                </div>
                <div className="finished-list">
                    <h6>finished</h6>
                    <ul>
                        {todoList.map((item, index) =>
                            ( item.isDone === true &&
                                <RenderlistFis 
                                onClick={this.onClickItem(item)}  
                                item = {item}
                                key = {index}
                                stt = {index}
                                />
                                
                            )
                        )}
                    </ul>
                </div>
            </div>
            <Footer 
                onclick={this.openModal} 
                complete={this.state.isComplete} 
                value={this.state.newItem} 
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
            />
        </div>
    );
    return items;
  }
}
export default Body;