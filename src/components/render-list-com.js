import React , {Component} from 'react';
class RenderlistCom extends Component {
  render() {
    let {item,stt , onClick} = this.props;
    const items=(
    <li onClick={onClick}>{stt + 1}.{item.title}</li>
    );
    return items;
  }
}
export default RenderlistCom;