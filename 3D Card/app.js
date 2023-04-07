
const card = document.getElementById('card');
const container = document.getElementById('contain');

//items
const Name = document.getElementById('Name');
const btn =  document.getElementById('but');
const Image = document.getElementById('prof');
const mut = document.getElementById('mut');

// Moving Animation
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 -e.pageX)/5;
    let yAxis = (window.innerHeight/2 -e.pageY)/5;
    card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    
});

// Animate In
container.addEventListener('mouseenter',e =>{
    card.style.transition="all 0.1s ease";
    //pop-out
    Name.style.transform ="translateZ(50px)";
    Image.style.transform =`translateZ(70px) scale(1.25) `;
    btn.style.transform ="translateZ(70px)";
    Image.style.borderRadius ="25px";
    
    mut.style.transform ="translateZ(50px)";
})

// Animate Out

container.addEventListener('mouseleave',e=>{
    card.style.transform=`rotateY(0deg) rotateX(0deg)  `;
    card.style.transition=`all 0.5s ease-out`;
    
    Name.style.transform ="translateZ(0)";
    Image.style.transform ="translateZ(0)";
    btn.style.transform ="translateZ(0)";
    Image.style.borderRadius ="0";


})