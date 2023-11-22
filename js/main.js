const startGame = () => {
  const buttonStartGame = document.querySelector("#buttonReady");
  const firstSection = document.querySelector("#firstSection");
  const magicNumber = Math.floor(Math.random() * 100) + 1;

  if (buttonStartGame.innerHTML.includes("¡Comenzar el Juego!")) {
    buttonStartGame.className = "d-none";
    const createDiv = document.createElement("div");
    createDiv.className = "d-flex flex-column justify-content-center"
    createDiv.innerHTML = `
        <p class="text-center fw-bold text-uppercase h1">Introduce un Numero</p>

        <div class="d-flex flex-column justify-content-center">
            <input
                type="number"
                name="number"
                id="numberPerson"
                class="text-center fw-bold"
                placeholder="Introduce un número"
                required
                value="0"                
            />
            <button id="sendNumber" class="btn btn-primary mt-2">Enviar</button>
        </div>

    `;
    firstSection.appendChild(createDiv)



    const sendNumber = () => {
        const numberUser = parseInt(document.querySelector("#numberPerson").value);

        if(numberUser === magicNumber) {
            const youWin = document.createElement("div");
            youWin.className = "d-flex flex-column justify-content-center"
            youWin.innerHTML = `        
            <div class="d-flex flex-column justify-content-center">
                <p class="display-3 text-center fw-bold">¡Felicidades has Ganado!</p>
                <a class="btn btn-success mt-2 text-uppercase lead" href="../index.html">Jugar de Nuevo</a>
            </div>
        
            `;
            firstSection.appendChild(youWin)
            firstSection.removeChild(createDiv)
        }else if(numberUser >= 100) {
            const alert = document.createElement("div");
            alert.className = "d-flex flex-column justify-content-center"
            alert.innerHTML = `        
            <div class="d-flex flex-column justify-content-center">
                <p class="text-white text-center fw-bold bg-danger rounded mt-2 shadow ">Introduce un número del 1 al 100</p>
            </div>
            `;
            firstSection.appendChild(alert)
            setTimeout(() => {
                firstSection.removeChild(alert)
            }, 1500);

        }else if (numberUser < magicNumber) {
            const continueForWin = document.createElement("div");
            continueForWin.className = "d-flex flex-column justify-content-center"
            continueForWin.innerHTML = `        
            <div class="d-flex flex-column justify-content-center">
                <p class="text-white text-center fw-bold bg-warning rounded mt-2 shadow ">El número es bajo. Continua intentando.</p>
            </div>
        
            `;
            firstSection.appendChild(continueForWin)
            setTimeout(() => {
                firstSection.removeChild(continueForWin)
            }, 1500);
        } else {
            const continueForWin = document.createElement("div");
            continueForWin.className = "d-flex flex-column justify-content-center"
            continueForWin.innerHTML = `        
            <div class="d-flex flex-column justify-content-center">
                <p class="text-white text-center fw-bold bg-danger rounded mt-2 shadow ">El número es alto. Continua intentando.</p>
            </div>
        
            `;
            firstSection.appendChild(continueForWin)
            setTimeout(() => {
                firstSection.removeChild(continueForWin)
            }, 1500);
        }
    }
    const playGame = document.querySelector("#sendNumber")
    playGame.addEventListener("click", sendNumber)
  } 
};



