//TODO: Write the script for getting the values from the options
// select element returns an object. And we can access the object keys 
// using the indices as ['0'].
class visualizeAlgo{
    constructor() {
        this.array=[];
        this.container=document.getElementById("bar_graph");
        this.speed=10; //defalult
        console.log(this)
    }
    setSpeed(sp=10){
        this.speed=sp;
    }
    generateArray(size=20){       
        this.array = Array.from({ length: size }, () => 
            Math.floor(Math.random() * 100) + 1
          );
          this.renderArray();
          console.log(this)
    }

    renderArray(){
        if(this.container!==null)
        {
            this.container.innerHTML='';
        }
        this.array.forEach((val,idx)=>{
            let bar= document.createElement('div');
            bar.classList.add("bar");
            bar.style.height=`${val}%`
            // we are using transform because if we don't then the blocks will be created only on a single place
            bar.style.transform = `translateX(${idx * 30}px)`;
            this.container.appendChild(bar);
         })
    }
  
}
const visualizer= new visualizeAlgo();
let btn= document.getElementById('Sortingbtn');
let barGraph=document.getElementById('bar_graph');
visualizer.generateArray();
btn.addEventListener(('click'),()=>{
    let ArraySize= document.querySelector("#A_size");
    let SelectedAlgo=document.querySelector("#S_algo");
    let Speed=document.querySelector("#S_speed");
    visualizeAlgo.generateArray(ArraySize);
    // Todo speed function and update bars function and color chane
    // visualizeAlgo.setSpeed()
})
