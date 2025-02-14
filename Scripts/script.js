//TODO: Write the script for getting the values from the options
// select element returns an object. And we can access the object keys 
// using the indices as ['0'].
class visualizeAlgo{
    constructor() {
        this.array=[];
        this.container=document.getElementById("bar_graph");
        this.speed=1000; //defalult
    }
    setSpeed(sp=1000){
        this.speed=sp;
    }
    generateArray(size=10){       
        this.array = Array.from({ length: size }, () => 
            Math.floor(Math.random() * 80) + 5
          );
          this.renderArray();
    }

    renderArray(){
        if(this.container!==null)
        {
            this.container.innerHTML='';
        }
        this.array.forEach((val,idx)=>{
            let bar= document.createElement('div');
            bar.classList.add("bar");
            bar.style.height=`${val*4}px`
            bar.style.border=`1px solid black`;
            bar.style.borderRadius=`5px`;
           
            bar.innerHTML=`<h3>${val}</h3>`
            // we are using transform because if we don't then the blocks will be created only on a single place
            bar.style.transform = `translateX(${idx*40}px)`;
            this.container.appendChild(bar);
         })
    }
    showBars(size){
        this.generateArray(size)
    }
    swapBars(idx1,idx2){
        let height1=this.container.children[idx1].style.height;
        let height2=this.container.children[idx2].style.height;
        this.container.children[idx1].style.height=height2;
        this.container.children[idx2].style.height=height1;
    }
    changeInnerVal(idx1,idx2){
        let tempv=this.container.children[idx1].innerHTML;
        this.container.children[idx1].innerHTML=this.container.children[idx2].innerHTML;
        this.container.children[idx2].innerHTML=tempv;
    }
    async bubbleSort(){
        // algo---
        // run two for loops and inside the inner for loop check for arr[j]>arr[j+1]swap;
        let idx1=-1
        let len=this.array.length;
        for(let i=0;i<len;i++){
            idx1=-1;
                for(let j=0;j<len-i-1;j++){
                    if(this.array[j]>this.array[j+1]){
                    this.container.children[j].style.backgroundColor='red';
                    this.container.children[j+1].style.backgroundColor='purple';
                    idx1=j+1;
                    await new Promise((resolver)=>{
                        setTimeout(resolver,this.speed);
                    })
                    this.changeInnerVal(j,j+1)
                    let temp=this.array[j];
                    this.array[j]=this.array[j+1];
                    this.array[j+1]=temp;
                    this.swapBars(j,j+1);
                    this.container.children[j].style.backgroundColor='#7CEB45';
                    this.container.children[j+1].style.backgroundColor='#7CEB45';
                }
            }
            this.container.children[idx1].style.backgroundColor='blue'
        }
    }
  
}
const visualizer= new visualizeAlgo();
let Sortingbtn= document.getElementById('Sortingbtn');
let Array_generatebtn= document.getElementById('GeneraeBtn')
let barGraph=document.getElementById('bar_graph');
let ArraySize= document.querySelector("#A_size");
Array_generatebtn.addEventListener(('click'),()=>{
    visualizer.showBars(ArraySize.value);
})
Sortingbtn.addEventListener(('click'),()=>{
    let SelectedAlgo=document.querySelector("#S_algo");
    let Speed=document.querySelector("#S_speed");
    switch(Speed.value){
        case '0.5x':
            visualizer.setSpeed(5000);
            break;
        case '1x':
            visualizer.setSpeed(1000);
            break;
        case '0.25x':
            visualizer.setSpeed(2500);
            break;
        case '1.25x':
            visualizer.setSpeed(250);
            break;
        case '1.5x':
            visualizer.setSpeed(500);
            break;
        case '2x':
            visualizer.setSpeed(200);
            break;
    }

    switch(SelectedAlgo.value){
        case 'Bubble Sort':
            visualizer.bubbleSort();
            break;
    }
})
