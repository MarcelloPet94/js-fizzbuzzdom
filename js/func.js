const el = document.getElementById("el");


for(let i = 1; i <= 100; i++) { 


    if(i % 3 == 0 && i % 5 == 0)
    {
        el.innerHTML += `
        <div class="box fizzBuzz">
        <p>${i}FizzBuzz</p>
        </div>
        `;
        console.log('FizzBuzz');
    }

    else if(i % 3 == 0)
    {
        el.innerHTML += `
        <div class="box fizz">
        <p>${i}Fizz</p>
        </div>
        `;
        console.log('Fizz');

    }

    else if(i % 5 == 0)
    {
        el.innerHTML += `
        <div class="box buzz">
        <p>${i}Buzz</p>
        </div>
        `;
        console.log('FizzBuzz');
        console.log('Buzz');
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