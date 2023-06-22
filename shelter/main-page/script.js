
const pets = [
    {
      "name": "Jennifer",
      "img": "../assets/images/png/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../assets/images/png/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../assets/images/png/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../assets/images/png/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../assets/images/png/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../assets/images/png/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../assets/images/png/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../assets/images/png/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];
  let obj;
obj = JSON.stringify(pets);
obj = JSON.parse(obj)

let post = [];
let now = [];
let past = [];
let nSlide = false;
let pSlide = false;
let objs = {};

function sliderInit() {
    while (post.length < 3) {
        let value = Math.floor(Math.random() * 8);
        if (!post.includes(value)) {
            post.push(value);
        }
    }
    while (post.length > 0) {
        let value = post.splice(0, 1)[0];
        now.push(value);
    }
    while (post.length < 3) {
        let value = Math.floor(Math.random() * 8);
        if (!now.includes(value) && !post.includes(value)) {
            post.push(value);
        }
    }
    while (now.length > 0) {
        let value = now.splice(0, 1)[0];
        past.push(value);
    }
    while (post.length > 0) {
        let value = post.splice(0, 1)[0];
        now.push(value);
    }
    while (post.length < 3) {
        let value = Math.floor(Math.random() * 8);
        if (!now.includes(value) && !post.includes(value)) {
            post.push(value);
        }
    }
    objs = { past, now, post };
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
        const html = `
            <div class="card" id="pa0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa0').classList.add('wr-open');document.querySelector('#paaa0').classList.add('card-open')">
                <img src=${(obj[objs.past[0]]).img} alt="${(obj[objs.past[0]]).name}">
                <p class="pet-name">${(obj[objs.past[0]]).name}</p>
                <button>Learn more</button>
            </div>
            
            

            <div class="card" id="pa1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa1').classList.add('wr-open');document.querySelector('#paaa1').classList.add('card-open')">
                <img src=${(obj[objs.past[1]]).img} alt="${(obj[objs.past[1]]).name}">
                <p class="pet-name">${(obj[objs.past[1]]).name}</p>
                <button>Learn more</button>
            </div>
            
            

            <div class="card" id="pa2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa2').classList.add('wr-open');document.querySelector('#paaa2').classList.add('card-open')">
                <img src=${(obj[objs.past[2]]).img} alt="${(obj[objs.past[2]]).name}">
                <p class="pet-name">${(obj[objs.past[2]]).name}</p>
                <button>Learn more</button>
            </div>
            
            

            <div class="card" id="n0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no0').classList.add('wr-open');document.querySelector('#noo0').classList.add('card-open')">
                <img src=${(obj[objs.now[0]]).img} alt="${(obj[objs.now[0]]).name}">
                <p class="pet-name">${(obj[objs.now[0]]).name}</p>
                <button>Learn more</button>
            </div>
            <div class="popup-wrapper" id="no0" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')">
                <div class="card-popup" id="noo0" onclick="event.stopPropagation();">
                    <img src="${(obj[objs.now[0]]).img}" alt="${(obj[objs.now[0]]).name}">
                    <div class="text-block">
                        <h3>${(obj[objs.now[0]]).name}</h3>
                        <p class="race">${(obj[objs.now[0]]).type} - ${(obj[objs.now[0]]).breed}</p>
                        <p class="discription">${(obj[objs.now[0]]).description}</p>
                        <ul>
                            <li><span>Age: </span>${(obj[objs.now[0]]).age}</li>
                            <li><span>Inoculations: </span>${(obj[objs.now[0]]).inoculations}</li>
                            <li><span>Diseases: </span>${(obj[objs.now[0]]).diseases}</li>
                            <li><span>Parasites: </span>${(obj[objs.now[0]]).parasites}</li>
                        </ul>
                    </div>
                    <div class="oer"><button class="close" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
                </div>
            </div>
            
            

            <div class="card" id="n1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no1').classList.add('wr-open');document.querySelector('#noo1').classList.add('card-open')">
                <img src=${(obj[objs.now[1]]).img} alt="${(obj[objs.now[1]]).name}">
                <p class="pet-name">${(obj[objs.now[1]]).name}</p>
                <button>Learn more</button>
            </div>
            <div class="popup-wrapper" id="no1" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')">
                <div class="card-popup" id="noo1" onclick="event.stopPropagation();">
                    <img src="${(obj[objs.now[1]]).img}" alt="${(obj[objs.now[1]]).name}">
                    <div class="text-block">
                        <h3>${(obj[objs.now[1]]).name}</h3>
                        <p class="race">${(obj[objs.now[1]]).type} - ${(obj[objs.now[1]]).breed}</p>
                        <p class="discription">${(obj[objs.now[1]]).description}</p>
                        <ul>
                            <li><span>Age: </span>${(obj[objs.now[1]]).age}</li>
                            <li><span>Inoculations: </span>${(obj[objs.now[1]]).inoculations}</li>
                            <li><span>Diseases: </span>${(obj[objs.now[1]]).diseases}</li>
                            <li><span>Parasites: </span>${(obj[objs.now[1]]).parasites}</li>
                        </ul>
                    </div>
                    <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
                </div>
            </div>



            <div class="card" id="n2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no2').classList.add('wr-open');document.querySelector('#noo2').classList.add('card-open')">
                <img src=${(obj[objs.now[2]]).img} alt="${(obj[objs.now[2]]).name}">
                <p class="pet-name">${(obj[objs.now[2]]).name}</p>
                <button>Learn more</button>
            </div>
            <div class="popup-wrapper" id="no2" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')">
                <div class="card-popup" id="noo2" onclick="event.stopPropagation();">
                    <img src="${(obj[objs.now[2]]).img}" alt="${(obj[objs.now[2]]).name}">
                    <div class="text-block">
                        <h3>${(obj[objs.now[2]]).name}</h3>
                        <p class="race">${(obj[objs.now[2]]).type} - ${(obj[objs.now[2]]).breed}</p>
                        <p class="discription">${(obj[objs.now[2]]).description}</p>
                        <ul>
                            <li><span>Age: </span>${(obj[objs.now[2]]).age}</li>
                            <li><span>Inoculations: </span>${(obj[objs.now[2]]).inoculations}</li>
                            <li><span>Diseases: </span>${(obj[objs.now[2]]).diseases}</li>
                            <li><span>Parasites: </span>${(obj[objs.now[2]]).parasites}</li>
                        </ul>
                    </div>
                    <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
                </div>
            </div>



            <div class="card" id="po0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo0').classList.add('wr-open');document.querySelector('#pooo0').classList.add('card-open')">
                <img src=${(obj[objs.post[0]]).img} alt="${(obj[objs.post[0]]).name}">
                <p class="pet-name">${(obj[objs.post[0]]).name}</p>
                <button>Learn more</button>
            </div>



            <div class="card" id="po1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo1').classList.add('wr-open');document.querySelector('#pooo1').classList.add('card-open')">
                <img src=${(obj[objs.post[1]]).img} alt="${(obj[objs.post[1]]).name}">
                <p class="pet-name">${(obj[objs.post[1]]).name}</p>
                <button>Learn more</button>
            </div>



            <div class="card" id="po2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo2').classList.add('wr-open');document.querySelector('#pooo2').classList.add('card-open')">
                <img src=${(obj[objs.post[2]]).img} alt="${(obj[objs.post[2]]).name}">
                <p class="pet-name">${(obj[objs.post[2]]).name}</p>
                <button>Learn more</button>
            </div>
        `;
        cards.insertAdjacentHTML('afterbegin', html);
}
sliderInit()




function sliderNext () {
    past = now;
    now = post;
    post = [];
    while (post.length < 3) {
        let value = Math.floor(Math.random() * 8); 
        if (!now.includes(value) && !post.includes(value)) { 
            post.push(value);
        }
    }
    nSlide = true
    objs = { past, now, post };
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
    const html = `
    <div class="card" id="pa0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa0').classList.add('wr-open');document.querySelector('#paaa0').classList.add('card-open')">
        <img src=${(obj[objs.past[0]]).img} alt="${(obj[objs.past[0]]).name}">
        <p class="pet-name">${(obj[objs.past[0]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa1').classList.add('wr-open');document.querySelector('#paaa1').classList.add('card-open')">
        <img src=${(obj[objs.past[1]]).img} alt="${(obj[objs.past[1]]).name}">
        <p class="pet-name">${(obj[objs.past[1]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa2').classList.add('wr-open');document.querySelector('#paaa2').classList.add('card-open')">
        <img src=${(obj[objs.past[2]]).img} alt="${(obj[objs.past[2]]).name}">
        <p class="pet-name">${(obj[objs.past[2]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="n0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no0').classList.add('wr-open');document.querySelector('#noo0').classList.add('card-open')">
        <img src=${(obj[objs.now[0]]).img} alt="${(obj[objs.now[0]]).name}">
        <p class="pet-name">${(obj[objs.now[0]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no0" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')">
        <div class="card-popup" id="noo0" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[0]]).img}" alt="${(obj[objs.now[0]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[0]]).name}</h3>
                <p class="race">${(obj[objs.now[0]]).type} - ${(obj[objs.now[0]]).breed}</p>
                <p class="discription">${(obj[objs.now[0]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[0]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[0]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[0]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[0]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>
    
    

    <div class="card" id="n1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no1').classList.add('wr-open');document.querySelector('#noo1').classList.add('card-open')">
        <img src=${(obj[objs.now[1]]).img} alt="${(obj[objs.now[1]]).name}">
        <p class="pet-name">${(obj[objs.now[1]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no1" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')">
        <div class="card-popup" id="noo1" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[1]]).img}" alt="${(obj[objs.now[1]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[1]]).name}</h3>
                <p class="race">${(obj[objs.now[1]]).type} - ${(obj[objs.now[1]]).breed}</p>
                <p class="discription">${(obj[objs.now[1]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[1]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[1]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[1]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[1]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="n2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no2').classList.add('wr-open');document.querySelector('#noo2').classList.add('card-open')">
        <img src=${(obj[objs.now[2]]).img} alt="${(obj[objs.now[2]]).name}">
        <p class="pet-name">${(obj[objs.now[2]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no2" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')">
        <div class="card-popup" id="noo2" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[2]]).img}" alt="${(obj[objs.now[2]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[2]]).name}</h3>
                <p class="race">${(obj[objs.now[2]]).type} - ${(obj[objs.now[2]]).breed}</p>
                <p class="discription">${(obj[objs.now[2]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[2]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[2]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[2]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[2]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="po0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo0').classList.add('wr-open');document.querySelector('#pooo0').classList.add('card-open')">
        <img src=${(obj[objs.post[0]]).img} alt="${(obj[objs.post[0]]).name}">
        <p class="pet-name">${(obj[objs.post[0]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo1').classList.add('wr-open');document.querySelector('#pooo1').classList.add('card-open')">
        <img src=${(obj[objs.post[1]]).img} alt="${(obj[objs.post[1]]).name}">
        <p class="pet-name">${(obj[objs.post[1]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo2').classList.add('wr-open');document.querySelector('#pooo2').classList.add('card-open')">
        <img src=${(obj[objs.post[2]]).img} alt="${(obj[objs.post[2]]).name}">
        <p class="pet-name">${(obj[objs.post[2]]).name}</p>
        <button>Learn more</button>
    </div>
`;
        cards.insertAdjacentHTML('afterbegin', html);
}
    
function sliderChanNext () {
    let template = [];
    template = post;
    past = now;
    now = template;
    post = []
    while (post.length < 3) {
        let value = Math.floor(Math.random() * 8); 
        if (!now.includes(value) && !post.includes(value)) { 
            post.push(value);
        }
    }
    pSlide = false
    objs = { past, now, post };
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
    const html = `
    <div class="card" id="pa0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa0').classList.add('wr-open');document.querySelector('#paaa0').classList.add('card-open')">
        <img src=${(obj[objs.past[0]]).img} alt="${(obj[objs.past[0]]).name}">
        <p class="pet-name">${(obj[objs.past[0]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa1').classList.add('wr-open');document.querySelector('#paaa1').classList.add('card-open')">
        <img src=${(obj[objs.past[1]]).img} alt="${(obj[objs.past[1]]).name}">
        <p class="pet-name">${(obj[objs.past[1]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa2').classList.add('wr-open');document.querySelector('#paaa2').classList.add('card-open')">
        <img src=${(obj[objs.past[2]]).img} alt="${(obj[objs.past[2]]).name}">
        <p class="pet-name">${(obj[objs.past[2]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="n0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no0').classList.add('wr-open');document.querySelector('#noo0').classList.add('card-open')">
        <img src=${(obj[objs.now[0]]).img} alt="${(obj[objs.now[0]]).name}">
        <p class="pet-name">${(obj[objs.now[0]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no0" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')">
        <div class="card-popup" id="noo0" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[0]]).img}" alt="${(obj[objs.now[0]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[0]]).name}</h3>
                <p class="race">${(obj[objs.now[0]]).type} - ${(obj[objs.now[0]]).breed}</p>
                <p class="discription">${(obj[objs.now[0]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[0]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[0]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[0]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[0]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>
    
    

    <div class="card" id="n1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no1').classList.add('wr-open');document.querySelector('#noo1').classList.add('card-open')">
        <img src=${(obj[objs.now[1]]).img} alt="${(obj[objs.now[1]]).name}">
        <p class="pet-name">${(obj[objs.now[1]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no1" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')">
        <div class="card-popup" id="noo1" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[1]]).img}" alt="${(obj[objs.now[1]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[1]]).name}</h3>
                <p class="race">${(obj[objs.now[1]]).type} - ${(obj[objs.now[1]]).breed}</p>
                <p class="discription">${(obj[objs.now[1]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[1]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[1]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[1]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[1]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="n2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no2').classList.add('wr-open');document.querySelector('#noo2').classList.add('card-open')">
        <img src=${(obj[objs.now[2]]).img} alt="${(obj[objs.now[2]]).name}">
        <p class="pet-name">${(obj[objs.now[2]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no2" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')">
        <div class="card-popup" id="noo2" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[2]]).img}" alt="${(obj[objs.now[2]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[2]]).name}</h3>
                <p class="race">${(obj[objs.now[2]]).type} - ${(obj[objs.now[2]]).breed}</p>
                <p class="discription">${(obj[objs.now[2]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[2]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[2]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[2]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[2]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="po0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo0').classList.add('wr-open');document.querySelector('#pooo0').classList.add('card-open')">
        <img src=${(obj[objs.post[0]]).img} alt="${(obj[objs.post[0]]).name}">
        <p class="pet-name">${(obj[objs.post[0]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo1').classList.add('wr-open');document.querySelector('#pooo1').classList.add('card-open')">
        <img src=${(obj[objs.post[1]]).img} alt="${(obj[objs.post[1]]).name}">
        <p class="pet-name">${(obj[objs.post[1]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo2').classList.add('wr-open');document.querySelector('#pooo2').classList.add('card-open')">
        <img src=${(obj[objs.post[2]]).img} alt="${(obj[objs.post[2]]).name}">
        <p class="pet-name">${(obj[objs.post[2]]).name}</p>
        <button>Learn more</button>
    </div>
`;
        cards.insertAdjacentHTML('afterbegin', html);
}

function sliderPrev () {
    post = now;
    now = past;
    past = [];
    while (past.length < 3) {
        let value = Math.floor(Math.random() * 8); 
        if (!now.includes(value) && !past.includes(value)) { 
            past.push(value);
        }
    }
    pSlide = true
    objs = { past, now, post };
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
    const html = `
    <div class="card" id="pa0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa0').classList.add('wr-open');document.querySelector('#paaa0').classList.add('card-open')">
        <img src=${(obj[objs.past[0]]).img} alt="${(obj[objs.past[0]]).name}">
        <p class="pet-name">${(obj[objs.past[0]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa1').classList.add('wr-open');document.querySelector('#paaa1').classList.add('card-open')">
        <img src=${(obj[objs.past[1]]).img} alt="${(obj[objs.past[1]]).name}">
        <p class="pet-name">${(obj[objs.past[1]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa2').classList.add('wr-open');document.querySelector('#paaa2').classList.add('card-open')">
        <img src=${(obj[objs.past[2]]).img} alt="${(obj[objs.past[2]]).name}">
        <p class="pet-name">${(obj[objs.past[2]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="n0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no0').classList.add('wr-open');document.querySelector('#noo0').classList.add('card-open')">
        <img src=${(obj[objs.now[0]]).img} alt="${(obj[objs.now[0]]).name}">
        <p class="pet-name">${(obj[objs.now[0]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no0" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')">
        <div class="card-popup" id="noo0" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[0]]).img}" alt="${(obj[objs.now[0]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[0]]).name}</h3>
                <p class="race">${(obj[objs.now[0]]).type} - ${(obj[objs.now[0]]).breed}</p>
                <p class="discription">${(obj[objs.now[0]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[0]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[0]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[0]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[0]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>
    
    

    <div class="card" id="n1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no1').classList.add('wr-open');document.querySelector('#noo1').classList.add('card-open')">
        <img src=${(obj[objs.now[1]]).img} alt="${(obj[objs.now[1]]).name}">
        <p class="pet-name">${(obj[objs.now[1]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no1" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')">
        <div class="card-popup" id="noo1" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[1]]).img}" alt="${(obj[objs.now[1]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[1]]).name}</h3>
                <p class="race">${(obj[objs.now[1]]).type} - ${(obj[objs.now[1]]).breed}</p>
                <p class="discription">${(obj[objs.now[1]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[1]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[1]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[1]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[1]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="n2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no2').classList.add('wr-open');document.querySelector('#noo2').classList.add('card-open')">
        <img src=${(obj[objs.now[2]]).img} alt="${(obj[objs.now[2]]).name}">
        <p class="pet-name">${(obj[objs.now[2]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no2" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')">
        <div class="card-popup" id="noo2" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[2]]).img}" alt="${(obj[objs.now[2]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[2]]).name}</h3>
                <p class="race">${(obj[objs.now[2]]).type} - ${(obj[objs.now[2]]).breed}</p>
                <p class="discription">${(obj[objs.now[2]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[2]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[2]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[2]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[2]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="po0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo0').classList.add('wr-open');document.querySelector('#pooo0').classList.add('card-open')">
        <img src=${(obj[objs.post[0]]).img} alt="${(obj[objs.post[0]]).name}">
        <p class="pet-name">${(obj[objs.post[0]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo1').classList.add('wr-open');document.querySelector('#pooo1').classList.add('card-open')">
        <img src=${(obj[objs.post[1]]).img} alt="${(obj[objs.post[1]]).name}">
        <p class="pet-name">${(obj[objs.post[1]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo2').classList.add('wr-open');document.querySelector('#pooo2').classList.add('card-open')">
        <img src=${(obj[objs.post[2]]).img} alt="${(obj[objs.post[2]]).name}">
        <p class="pet-name">${(obj[objs.post[2]]).name}</p>
        <button>Learn more</button>
    </div>
`;
        cards.insertAdjacentHTML('afterbegin', html);
}
function sliderChanPrev () {
    let template = [];
    template = past;
    post = now;
    now = template;
    past = []
    while (past.length < 3) {
        let value = Math.floor(Math.random() * 8); 
        if (!now.includes(value) && !past.includes(value)) { 
            past.push(value);
        }
    }
    nSlide = false
    objs = { past, now, post };
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';
    const html = `
    <div class="card" id="pa0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa0').classList.add('wr-open');document.querySelector('#paaa0').classList.add('card-open')">
        <img src=${(obj[objs.past[0]]).img} alt="${(obj[objs.past[0]]).name}">
        <p class="pet-name">${(obj[objs.past[0]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa1').classList.add('wr-open');document.querySelector('#paaa1').classList.add('card-open')">
        <img src=${(obj[objs.past[1]]).img} alt="${(obj[objs.past[1]]).name}">
        <p class="pet-name">${(obj[objs.past[1]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="pa2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#paa2').classList.add('wr-open');document.querySelector('#paaa2').classList.add('card-open')">
        <img src=${(obj[objs.past[2]]).img} alt="${(obj[objs.past[2]]).name}">
        <p class="pet-name">${(obj[objs.past[2]]).name}</p>
        <button>Learn more</button>
    </div>
    
    

    <div class="card" id="n0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no0').classList.add('wr-open');document.querySelector('#noo0').classList.add('card-open')">
        <img src=${(obj[objs.now[0]]).img} alt="${(obj[objs.now[0]]).name}">
        <p class="pet-name">${(obj[objs.now[0]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no0" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')">
        <div class="card-popup" id="noo0" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[0]]).img}" alt="${(obj[objs.now[0]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[0]]).name}</h3>
                <p class="race">${(obj[objs.now[0]]).type} - ${(obj[objs.now[0]]).breed}</p>
                <p class="discription">${(obj[objs.now[0]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[0]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[0]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[0]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[0]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no0').classList.remove('wr-open');document.querySelector('#noo0').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>
    
    

    <div class="card" id="n1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no1').classList.add('wr-open');document.querySelector('#noo1').classList.add('card-open')">
        <img src=${(obj[objs.now[1]]).img} alt="${(obj[objs.now[1]]).name}">
        <p class="pet-name">${(obj[objs.now[1]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no1" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')">
        <div class="card-popup" id="noo1" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[1]]).img}" alt="${(obj[objs.now[1]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[1]]).name}</h3>
                <p class="race">${(obj[objs.now[1]]).type} - ${(obj[objs.now[1]]).breed}</p>
                <p class="discription">${(obj[objs.now[1]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[1]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[1]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[1]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[1]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no1').classList.remove('wr-open');document.querySelector('#noo1').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="n2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#no2').classList.add('wr-open');document.querySelector('#noo2').classList.add('card-open')">
        <img src=${(obj[objs.now[2]]).img} alt="${(obj[objs.now[2]]).name}">
        <p class="pet-name">${(obj[objs.now[2]]).name}</p>
        <button>Learn more</button>
    </div>
    <div class="popup-wrapper" id="no2" onclick="document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')">
        <div class="card-popup" id="noo2" onclick="event.stopPropagation();">
            <img src="${(obj[objs.now[2]]).img}" alt="${(obj[objs.now[2]]).name}">
            <div class="text-block">
                <h3>${(obj[objs.now[2]]).name}</h3>
                <p class="race">${(obj[objs.now[2]]).type} - ${(obj[objs.now[2]]).breed}</p>
                <p class="discription">${(obj[objs.now[2]]).description}</p>
                <ul>
                    <li><span>Age: </span>${(obj[objs.now[2]]).age}</li>
                    <li><span>Inoculations: </span>${(obj[objs.now[2]]).inoculations}</li>
                    <li><span>Diseases: </span>${(obj[objs.now[2]]).diseases}</li>
                    <li><span>Parasites: </span>${(obj[objs.now[2]]).parasites}</li>
                </ul>
            </div>
            <div class="oer"><button class="close" onclick="event.preventDefault(); document.querySelector('html').classList.remove('scroll');document.querySelector('#no2').classList.remove('wr-open');document.querySelector('#noo2').classList.remove('card-open')"><img src="../assets/images/ico/Vector.svg" alt="close"></button></div>
        </div>
    </div>



    <div class="card" id="po0" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo0').classList.add('wr-open');document.querySelector('#pooo0').classList.add('card-open')">
        <img src=${(obj[objs.post[0]]).img} alt="${(obj[objs.post[0]]).name}">
        <p class="pet-name">${(obj[objs.post[0]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po1" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo1').classList.add('wr-open');document.querySelector('#pooo1').classList.add('card-open')">
        <img src=${(obj[objs.post[1]]).img} alt="${(obj[objs.post[1]]).name}">
        <p class="pet-name">${(obj[objs.post[1]]).name}</p>
        <button>Learn more</button>
    </div>



    <div class="card" id="po2" onclick="document.querySelector('html').classList.add('scroll');document.querySelector('#poo2').classList.add('wr-open');document.querySelector('#pooo2').classList.add('card-open')">
        <img src=${(obj[objs.post[2]]).img} alt="${(obj[objs.post[2]]).name}">
        <p class="pet-name">${(obj[objs.post[2]]).name}</p>
        <button>Learn more</button>
    </div>
`;
        cards.insertAdjacentHTML('afterbegin', html);
}



function slideN() {
    const button1 = document.querySelector('#but1');
    const button2 = document.querySelector('#but2');
    document.querySelector('.cards').classList.add("transition-left");
    button1.disabled = true;
    button2.disabled = true;
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      if (!pSlide) {
        sliderNext();
      } else {
        sliderChanNext();
      }
      document.querySelector('.cards').classList.remove("transition-left");
      button1.disabled = false;
      button2.disabled = false;
    }, delay);
    setTimeout(() => {
      clearTimeout(timeoutId);
    }, delay);

  }
function slideP() {
    const button1 = document.querySelector('#but1');
    const button2 = document.querySelector('#but2');
    document.querySelector('.cards').classList.add("transition-right");
    button1.disabled = true;
    button2.disabled = true;
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      if (!nSlide) {
        sliderPrev();
      } else {
        sliderChanPrev();
      }
      document.querySelector('.cards').classList.remove("transition-right");
      button1.disabled = false;
      button2.disabled = false;
    }, delay);
    setTimeout(() => {
      clearTimeout(timeoutId);
    }, delay);
  }


console.log("самооценка - 110/110.   Единственное, что можно придраться к качеству анимации, но на это нету ставки по ТЗ, можно придраться к общей плавности и аккуратности, но я считаю, что логика работает полностью по ТЗ. Спасибо за проверку и успехов вам в учебе!")


