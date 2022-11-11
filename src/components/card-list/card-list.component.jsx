import { Component } from "react";

class CardLists extends Component {

    render(){

        const {monsters} = this.props;

        return(

            
            <div>

                
                {monsters.map (monster => (
                    <h1 key={monster.id}> {monster.name}</h1>
                ))}
            </div>
        )
    }
}


export default CardLists;