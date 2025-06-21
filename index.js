let obj=document.body;
let layer=document.querySelector('.layer');


var ary=[];
obj.addEventListener('keydown',(e)=>{
    console.log(e.key)
 ary.push(e.key);
  if(ary[0]=='Shift' &  ary[1]=='Control' & ary[2]=='Tab' ){
layer.remove()
  }
})