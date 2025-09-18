interface AudioPlayer{
    volume: number;
    second: number;
    song: string;
    details: Details;
}       

interface Details{
   author: string;
   year: number;
}

const audioPlayer:AudioPlayer = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details:{
       author: 'Ed Sheeran',
       year: 2015,
    }
}

const {details} = audioPlayer;

const {volume, second, song, details:{author}} = audioPlayer; 


console.log('El volumen actual es de: ', volume);
console.log('El segundo actual es de: ', second);
console.log('La canción actual es de: ', song);
console.log('El autor es: ', author);

export{};