import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
    setCurrent(current){
        this.setState({current});
    }
    setScore(score){
        this.setState({score});
    }
    constructor(props){
        super(props);
        this.state={
            questions:[
                {
                    id:1,
                    text:"What is your name?",
                    choices:[
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Andrew'
                        },
                        {
                            id:'c',
                            text:'Sara'
                        },
                        {
                            id:'d',
                            text:'John'
                        }
                    ],
                    correct:'b'
                },
                {
                    id:2,
                    text:"What is your favorite animal?",
                    choices:[
                        {
                            id:'a',
                            text:'cat'
                        },
                        {
                            id:'b',
                            text:'dog'
                        },
                        {
                            id:'c',
                            text:'mouse'
                        },
                        {
                            id:'d',
                            text:'tiger'
                        }
                    ],
                    correct:'c'
                },
                {
                    id:3,
                    text:"What is your mothers name?",
                    choices:[
                        {
                            id:'a',
                            text:'Mary'
                        },
                        {
                            id:'b',
                            text:'Andra'
                        },
                        {
                            id:'c',
                            text:'Sara'
                        },
                        {
                            id:'d',
                            text:'Joe'
                        }
                    ],
                    correct:'d'
                },
                {
                    id:4,
                    text:"What is your fathers name?",
                    choices:[
                        {
                            id:'a',
                            text:'Michael'
                        },
                        {
                            id:'b',
                            text:'Andrew'
                        },
                        {
                            id:'c',
                            text:'Billy'
                        },
                        {
                            id:'d',
                            text:'John'
                        }
                    ],
                    correct:'b'
                }
            ],
            score:0,
            current:1
        }
    }
    render(){
        if(this.state.current>this.state.questions.length){
            var scorebox='';
            var results=<Results {...this.state}/>
        }
        else{
            var scorebox=<Scorebox {...this.state}/>;
            var results='';
        }
        return(
            <div>
                {scorebox}
               <QuestionList setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} {...this.state}/>
                {results}
            </div>
        )
    }
}

export default App