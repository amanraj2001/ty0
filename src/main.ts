// import { basic } from "./basic";
import "../node_modules/jquery/dist/jquery.min.js"
import { z } from "./vacancy";
console.log("ss")


$('#vac').click(function(){
  var res = ""
  for(let item of z){
    // console.log(item)
    res+=`<div class="card w-100 text-center"><p>${item.name}</p><p>${item.department}</p><p>${item.numberofvac}</p><div class="d-flex justify-content-center"><button class="btn btn-primary" type="button" onclick='a(${item.id})' id="x">Apply</button></div></div>`
    
  }
  $("#vacant").html(res)
  
  function a(id){
    console.log(z[id])
  }
  a()
  // $(".btn").click(function a(index){
  //   // console.log(z.length)
  // // console.log(z[index])
  // a();

  // })
})



