import { Component } from "react";

class SearchBox extends Component {

    render(){

        return (
            <div>
                <input 
                    className={this.props.classname} 
                    type='search' 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler} />
            </div>
        )
    }
}

export default SearchBox;