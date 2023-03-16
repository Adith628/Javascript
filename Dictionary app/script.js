const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn =document.getElementById('btn');
const sound = document.getElementById('audio');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    const inpu_word = document.getElementById('input_word').value;
    fetch(`${url}${inpu_word}`)
    .then(data=>data.json())
    .then(item=>{
        console.log(item);
        result.innerHTML=`
        <div class="word">
            <h3 class="head">${inpu_word}</h3>
            <button id="sound" onclick="playSound()">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
        <div class="details">
            <p>${item[0].meanings[0].partsOfSpeech}</p>
            <p>/${item[0].phonetic}</p>
        </div>
        <p class="word_meaning">
            ${item[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word_example">
            ${item[0].meanings[0].definitions[0].example || ""}
        </p>`;
        sound.setAttribute("src",`${item[0].phonetics[0].audio}`);
        console.log(sound);

    });
});

function playSound(){
    sound.play();
}


