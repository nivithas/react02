import React from 'react'
import axios from 'axios'
import VoteApp from './voteapp';

class DetailAPI extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cabs: []
        }
        this.handleVoteUp = this.handleVoteUp.bind(this)
        this.handleVoteDown = this.handleVoteDown.bind(this)
    }
    
    componentWillMount(){
        this.getCabData()
        console.log("mounted")
    }

    getCabData(){
        axios.get("http://localhost:3010/feedback")
        .then((response)=>{
            this.setState({
                cabs:response.data
            })
        })
    }
    handleVoteUp(cabId){
        const upcabs = this.state.cabs.map((cab)=>{
            if(cab.id === cabId){
                return Object.assign({},cab,{
                    votes:cab.votes + 1
                })  
            }
            else{
                return cab
            }
        })
        console.log(upcabs)
        this.setState({
            cabs: upcabs
            
        })
    }
    handleVoteDown(cabId){
        const upcabs = this.state.cabs.map((cab)=>{
            if(cab.id === cabId){
                return Object.assign({},cab,{
                    votes:cab.votes - 1
                })  
            }
            else{
                return cab
            }
        })
        this.setState({
            cabs: upcabs
        })
    }
    renderCabDetail(){
        const cabs = this.state.cabs.sort((a,b)=>(
            b.votes - a.votes
        ))
        return this.state.cabs.map((cab)=>{
            return (<VoteApp key={'product'+ cab.id} id={cab.id} cimage={cab.image} feedbacktitle ={cab.title} feedback={cab.description} icon={cab.usericon} votes={cab.votes} onVote={this.handleVoteUp} onVoteDown={this.handleVoteDown}></VoteApp>)
        })
    } 

 
    render() { 
        let mainWrapper = {
            maxWidth: '1198px',
            margin: '0 auto'
        }

        return (  
            <div style={mainWrapper}>
                {this.renderCabDetail()}
            </div>
        );
    }
}
 
export default DetailAPI;
