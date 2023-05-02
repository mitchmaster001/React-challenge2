import React from 'react';
import '../App.css'

function EachBot({bot, onClick, listedBots, setListedBots}) {

    function removeBot(id){
        fetch(`http://localhost:8001/bots/${id}`, { 
        method: 'DELETE' 
    })
        .then(() => {
          setListedBots(listedBots.filter(bot => bot.id !== id));
        })
        .catch(error => console.error(error));

    }

  return (
    <>
    <div className='each'onClick={() => onClick(bot)} key={bot.id} display={bot} >
      <ul>
        <h5 className='label'>Name: </h5>
        <li>
          {bot.name}
        </li>
        <h5 className='label'>Health: </h5>
        <li>
          {bot.health}
        </li>
        <h5 className='label'>Damage: </h5>
        <li>
          {bot.damage}
        </li>
        <h5 className='label'>Armor: </h5>
        <li>
          {bot.armor}
        </li>
        <h5 className='label'>Bot_Class: </h5>
        <li>
          {bot.bot_class}
        </li>
        <h5 className='label'>Catchphtase: </h5>
        <li>
          {bot.catchphrase}
        </li>
        <h5 className='label'>Avatar_Image: </h5>
        <li>
          <img src={bot.avatar_url} alt='avatar'/>
        </li>
        <h5 className='label'>Created_At: </h5>
        <li>
          {bot.created_at}
        </li>
        <h5 className='label'>Updated_At: </h5>
        <li>
          {bot.updated_at}
        </li>
      </ul>
    </div>
    <button id='btn2'onClick={()=> removeBot(bot.id)}>x</button>
    </>
  );
}

export default EachBot;