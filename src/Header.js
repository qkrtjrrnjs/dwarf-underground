import React, {Component} from 'react'

import HeaderTop from './HeaderTop'
import HeaderTitle from './HeaderTitle'

class Header extends Component{
    render(){
        return (
            <div className="expanded row header">
                <HeaderTop />
                <HeaderTitle />
            </div>
        )
    }
}

export default Header