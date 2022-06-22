const div = document.querySelector('.section');
div.innerHTML = `<div class="container">
<div class="columns">
    <div class="column is-half is-offset-one-quarter">
        <div class="card">
            <div class="card-image">
                <figure class="image is-2by1">
                    <img src="images/scores.jpg" alt="" srcset="">
                </figure>
            </div>
            <header class="card-header">
              <p class="card-header-title">
                Points Score Keeper
              </p>
              
            </header>
            <div class="card-content">
              <div class="content">
                <h1 class = title is-one><span id="p1Display"> 0</span> to <span id="p2Display"> 0</span></h1>
                <p class="subtitle">Use the button below to keep score</p>

                <label for="playto" class="label is-large is-inline">Playing To</label>
                <div class="select is-rounded">
                    <select name="" id="playto">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
              </div>
            </div>
            
            <footer class="card-footer">
                <button id="p1Button" class="is-primary button card-footer-item is-large">+1 Player One</button>
                <button id="p2Button" class="is-info button card-footer-item is-large">+1 Player Two</button>
                <button id="reset" class="is-danger button card-footer-item is-large">Reset</button>
            </footer>

          </div>
    </div>
</div>`

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore= 3;
let isGameOver = false;

p1Button.addEventListener ('click', function () {
    if (!isGameOver){
        p1Score += 1; 
    if (p1Score === winningScore){
        isGameOver = true;
        p1Display.classList.add('has-text-success')
        p2Display.classList.add('has-text-danger')
        p1Button.disabled = true;
        p2Button.disabled = true;


    }
        p1Display.textContent =p1Score
    }
})

p2Button.addEventListener ('click', function () {
    if (!isGameOver){
        p2Score += 1; 
    if (p2Score === winningScore){
        isGameOver = true;
        p2Display.classList.add('has-text-success')
        p1Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
        p2Display.textContent =p2Score
    }
})

winningScoreSelect.addEventListener('change', function() {
winningScore = parseInt(this.value)
reset();

})

resetButton.addEventListener('click', reset)


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
        p2Display.classList.remove('has-text-success', 'has-text-danger')
        p1Button.disabled = false;
        p2Button.disabled = false;
}

