import React from 'react';
class VoteApp extends React.Component {
    constructor(props){
        super(props)
    
        this.downVote = this.downVote.bind(this)
        this.upVote = this.upVote.bind(this)
    }

    upVote(){
        this.props.onVote(this.props.id)
    }
    downVote(){
        this.props.onVoteDown(this.props.id)
    }
    render() { 
        let imageWrapper ={
            width:'10%',
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '20px'
        }
        let voteWrapper ={
            width:'30%',
            display: 'inline-block'
        }
        let dscWrapper ={
            width:'100%',
        }
        
        let wrapper ={
            margin:'50px 0px',
        }
        let image ={
            width:'100%'
        }
        let avatarimage = {
            width: '10%',
            verticalAlign: 'text-bottom'
        }
        let btn ={
            backgroundColor : 'white',
            color : 'green',
            border: '1px solid green',
            borderRadius: '15%',
            height: '35px',
            marginRight: '10px'
        }

        return ( 
            
            <div style={wrapper}>
                <div style={imageWrapper}>
                    <img style={image} src={this.props.cimage} alt="cabimages"></img>
                </div>
                <div style={voteWrapper} >
                    <h3>{this.props.votes}</h3>
                    <button style={btn} onClick={this.upVote}>Upvote</button>
                    <button style={btn} onClick={this.downVote}>Downvote</button>
                    <div style={dscWrapper}>
                        <p><b>{this.props.feedbacktitle}</b></p>
                        <p>{this.props.feedback}</p>
                        <p>Submitted By: <img style={avatarimage} src={this.props.icon} alt="usericon"></img></p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default VoteApp;