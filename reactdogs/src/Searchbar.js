import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    render() {
        return (
            <div id="search">
                <form>
                    <label>Search: 
                        <input type="text" placeholder="Search dogs" >

                        </input>
                    </label>
                </form>
            </div>
        )
    }
}

export default Searchbar