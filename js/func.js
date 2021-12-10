// numero div
const divNumb = 200;

// container tabella
const el = document.getElementById("el");

for(let i = 1; i <= divNumb; i++) { 

// numerazione
let number = `<p>${i}</p>`;

//etichette
let a = "Fizz";
let b = "Buzz";
let c = "FizzBuzz";

// condizioni
let multThree = i % 3 == 0;
let multFive = i % 5 == 0;
let both = i % 3 == 0 && i % 5 == 0;

    if(both == true)
    {
        el.innerHTML += `
        <div class="box fizzBuzz">
        ${number + c}
        </div>
        `;
    }

    else if(multThree == true)
    {
        el.innerHTML += `
        <div class="box fizz">
        ${number + a}
        </div>
        `;

    }

    else if(multFive == true)
    {
        el.innerHTML += `
        <div class="box buzz">
        ${number + b}
        </div>
        `;
    }

    else
    {
        el.innerHTML +=
        `
        <div class="box noMultiple">
        <p>${i}</p>
        </div>
        `;
        console.log(i);
    }
}

// layout width container
const big = document.getElementById("big");
const med = document.getElementById("med");
const small = document.getElementById("small");

big.addEventListener ('click' , function() {
    el.style.width = "100%";
});

med.addEventListener ('click' , function() {
    el.style.width = "50%";
});

small.addEventListener ('click' , function() {
    el.style.width = "30%";
});
