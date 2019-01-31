import React from 'react';

class ContolledForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: '',
        };
    }

    handleSubmit = (event) => {
        alert(`${this.state.value} 입력값을 서버로 전송합니다: `);
        event.preventDefault();
    }

    handleInputChange = ({target}) => {
        this.setState({
            value: target.value,
        });

        console.log(target, target.value);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name :
                    <input defaultValue="" type="text" onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ContolledForm;
