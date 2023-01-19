AFRAME.registerComponent("base", {
    schema: {
        height:{type:"number", default:0.1},
        radius:{type:"number",default:3.3}      
    },
  
    init: function () {
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        });
        this.el.setAttribute("material",{color:"#1769aa"})
        this.el.setAttribute("position",{x:0, y:-1, z:0})

    }
  });