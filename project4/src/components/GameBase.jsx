import{animals} from '../data/AnimalsDb';
import {useState} from 'react';



export default function GameBase(){
   const randomAnimal=()=>{
    const animalId=Math.floor(Math.random()*10)+1;
    return animals[animalId].name;
   }
    
   const[targetAnimal,setTargetAnimal]=useState(randomAnimal);
   const[message,setMessage]=useState('');

   const handleClickAnimal=(selectAnimal)=>{
       if(targetAnimal===selectAnimal){
            setMessage('won');
       }else{
            setMessage('lose');
       }

    setTimeout(()=>{
          setTargetAnimal(randomAnimal());
          setMessage('');
    },2000)   
   }

    return(
        <div>
            
            <h1>find:{targetAnimal}</h1>
            <h1>{message}</h1>
            {animals.map((animal)=>(
                <button onClick={()=>handleClickAnimal(animal.name)}>
                    <img src={require('../assets/image/'+animal.img)}></img>
                </button>
            ))}
            
        </div>
    );
}