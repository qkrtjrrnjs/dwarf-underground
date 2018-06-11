import React, {Component} from 'react'

import ArticleHead from './ArticleHead'
import ArticleBody from './ArticleBody'
import ArticleTail from './ArticleTail'

class Article extends Component{
    render(){
        return(
            <div className="large-8 medium-12 columns article">
                <ArticleHead />
                <ArticleBody />
                <ArticleTail />
            </div>
        )
    }
}

export default Article