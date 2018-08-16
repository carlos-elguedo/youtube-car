import React, {Component} from 'react';

import './SearchBar.css';

class SearchBar extends Component{

    

    render(){
        return(
            <div className="row">
                
                <div className="col-lg-12 search-bar">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search videos" onKeyDown={this.props.typing}/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.props.search}>Go</button>
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchBar;