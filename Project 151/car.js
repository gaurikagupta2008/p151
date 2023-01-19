AFRAME.registerComponent("car", {
    schema: {
        height:{type:"number", default:5},
        width:{type:"number",default:5}      
    },
  
    init: function () {
        var modelEl=document.querySelector("#car-model")
        var carEl=document.createElement("a-entity")
        carEl.setAttribute("gltf-model","./assets/scene.gltf")
        modelEl.appendChild(carEl)
    }
  });