import React, {Component} from 'react' 

class MainSection extends Component {
    render(){       
        return (
            <ul className='todo-list'>
                {this.props.todos.map(function(item){
                    return (
                    <li>
                        <div className='view'>
                        <label>{item.text}</label>
                        </div>
                    </li>)
                })}
            </ul>
        )
    }
} 

export default MainSection;