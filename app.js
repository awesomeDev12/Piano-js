// https://archive.org/details/24-piano-keys

const pianoKeys = document.querySelectorAll('.key')

function playSound(url){
    return new Audio(url).play()
}


pianoKeys.forEach((pianoKey,i)=>{

    const number  = (i+1<=9) ? `0${i+1}` : `${i+1}`
    const newUrl =  './audio/key' + number + '.mp3'
    
    pianoKey.addEventListener('click', () => {
        playSound(newUrl)
        // console.log(newUrl)
    })
})
