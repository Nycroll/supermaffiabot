const Discord = require('discord.js');
const client = new Discord.Client();

const process.env.BOT_TOKEN = "NzEzMTQ1ODI1NTc1ODI5NTM1.Xse5Pw.Bs1FRNNmS2WhiBsHRw24N8TzCuo";

client.on('ready', () =>{
    console.log('gen bot is now online')
});
client.on('message', message =>{
    if (message.content === 'Tattaglia'){
        message.author.send('**Invite nu je vrienden! https://discord.gg/jDCZbab **');
    };
});
client.on('message', message =>{
    if (message.content === '+gen'){
        message.author.send('**Uw naam wordt verzonnen!**');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){
        var string = `Kade 'Fire' Santostefano**
        Kyle 'Coughing' Correnti
        Joaquin 'The Grim Reaper' Maccini
        Kelly 'The Vet' Inglese
        Immanuel 'Eyepatch' Twitty
        Atanasio 'Smiling' Livermore
        Ellis 'The Rat' Dorchester
        Carter 'Two-Knife' Hames
        Frankie 'Numbers' Dynes
        Serafino 'Tommy Gun' Lampo
        Secondiano 'The Ear' Natale
        Carlos 'The Cook' Dina
        Lidio 'The Plumber' Tumminello
        Charlie 'The Boss' Marandola
        Clark 'The Jackal' Beers
        Lewis 'The Horse' Blankenship
        Dalmazio 'The Writer' Airington
        Levi 'Tommy Gun' Brought
        Zanobi 'The Cook' Duell
        Endrigo 'Blind' Rallo
        Jonas 'Eagle Eyes' Paolo
        Quinton 'The Eagle' Baiocchi
        Ruben 'Buddy' D'Orazio
        Edgardo 'The Skinny' Mortara
        Cordell 'Coughing' Arundel
        Cody 'Rusty' Hargreaves
        Lonnie 'The Terminator' Perks
        Leroy 'Iceman' Parmentier
        Orlando 'The Bull' Parrish
        Elita 'The Whisper' Ugolini
        Concordio 'The Jackal' Baccaro
        Mancio 'Professional' Taglieri
        Ferdinando 'The Boss' Torres
        Wilson 'Wings' Agate
        Egeo 'The Boot' Few
        Melchiade 'The Bear' Cross
        Barry 'The Referee' Pressley
        Sico 'The Boot' Fireman
        Abel 'Silence' Vial
        Nash 'Good Looking' Politano
        Gianmaria 'Buzzy' Ferrara
        Geronzio 'The Phantom' Catizone
        Nikhil 'Old Guy' Leano
        Josef 'The Chin' Schipani
        Lauriano 'The Cat' Warne
        Quinn 'The Butcher' Gavett
        Soccorso 'Machette' Jaquess
        Desmond 'Angel Eyes' Wildes
        Nathaniel 'Pretty Boy' Shelfer
        Gualberto 'Lucky' Gibilisco
        Nereo 'No Cigar' Filippini
        Beato 'Blackjack' Suppa
        Maccabeo 'The Writer' Nicotera
        Walter 'Watchman' Del Bene
        Ermanno 'Pitbull' Oborn
        Barsimeo 'The Serpent' Bodin
        Kody 'Blondey' Milner
        Rainaldo 'Mad Bomber' Hodnett
        Leopardo 'Goliath' Caplin
        Duncan 'The Barber' Briguglio
        Gerard 'The Owl' Sciara
        Baldomero 'The Boot' Gionfriddo
        Julius 'The Chin' Marotto
        Ruben 'The Bystander' Orefice
        Uriele 'The Cook' Clemence
        Terzo 'The Bull' Spellman
        Denzel 'The Snitch' Crittenden
        Hamza 'The Bug' Lemm
        Taide 'The Shark' Goldston
        Viviano 'Repo Man' Bonato
        Quasimodo 'Pitbull' Mascolo
        Gaio 'Danger' Roberto
        Ursino 'Beans' Zaffuto
        Gerardo 'Smiling' Tomasulo
        Marzio 'The Hatchet' Selling
        Saturniano 'The Enforcer' Ackland
        Onofrio 'Angel Eyes' Varcoe
        Austen 'The Eagle' Noblet
        Nathaniel 'Mad Bomber' Collingwood
        Telemaco 'Nightmare' Sollecito
        Monaldo 'The Scourge' Oberto
        Casimiro 'Ammo' Boso
        Radolfo 'The Grin' Staffa
        Kevon 'The Duke' Danese
        Cornelius 'Big Brains' Easley
        Iacopone 'The Rat' Weeden
        Nazzaro 'Numbers' Smee
        Vidiano 'Knuckles' Kings
        Isaiah 'No Name' Norsworthy
        Amedeo 'Blue Eyes' Castaldo
        Cuniberto 'The Jester' Cucinotta
        Cupido 'Sweet Cakes' Dito
        Eddie 'Nightmare' Aulicino
        Gualberto 'Poison' Azzopardi
        Girolamo 'The Bull' Winney
        Jaylin 'Poison' Jaggars
        Uberto 'The Fixer' Raison
        Orso 'Venom' Cooling
        Houston 'The Poet' Sellers
        Keagan 'The Mouse' Vasile
        Carson 'Sweet Cakes' Caproni
        Bruno 'Shades' Caporale
        Declan 'The Dwarf' Macchia
        Edmondo 'Nightmare' Indelicato
        Fabrizio 'Shotgun' Kitchin
        Giustiniano 'Buttercup' Morehouse
        Jagger 'Flowers' Doar
        Gabriele 'Buddy' Crouch
        Syed 'The Brain' Choyce
        Sarbello 'The Snake' Derasmo
        Sawyer 'The Weasel' Sorbo
        Desiderato 'Two Tricks' D'Elia
        Roy 'Two-Knife' Cartelli
        Milo 'The Blast' Ursillo
        Winston 'The Whisper' Stockdill
        Nicezio 'Beans' Arbon
        Concetto 'Smokes' Foulkes
        Jadon 'Crazy' Benford
        Alan 'Gold Digger' Randal`
        var words = string.split('\n');
        let random = words[Math.floor(Math.random()*words.length)];
        message.author.send(`${random}`);
};
});
client.login(process.env.BOT_TOKEN);
