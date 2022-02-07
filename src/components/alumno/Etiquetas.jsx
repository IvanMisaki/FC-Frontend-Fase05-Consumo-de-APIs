import React from "react";

export class Etiquetas extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            'Alemania',
            'Argentina',
            'Brasil',
            'Bolivia',
            'Francia'
        ];

        this.state={
            suggestions: [],
            texto:'',
            items2: []
        }
    }

    onTextChanged = (e) =>{
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions, texto:value}));
    }

    suggestionSelected(item){
        //  const newArr = [];
        //  newArr.unshift(this.items2);
        //  newArr.unshift(item);
        //  console.log(newArr)

        this.setState(() => ({
            items2:[item],
            texto: '',
            suggestions: []
        }))

    }

    renderSuggestions(){
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
                <ul>
                    {suggestions.map((item) => 
                    <li key={Math.random()+""} onClick={ () => this.suggestionSelected(item) }>{item}</li>
                    )}
                </ul>
        )
    }

    render(){
        const {texto} = this.state;
        return (
            <div>
                <input value={texto} onChange={this.onTextChanged} type="text"></input>
                { this.renderSuggestions() }
            </div>
        )
    }
}