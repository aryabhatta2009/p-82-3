canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="";
width_of_line="";
radius="";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
MouseEvent="mouseDown";
}
canvas.addEventListener(mousemove,mymousemove);
function mymousemove(e){
current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
current_position_of_mouse_y=e.clientY - canvas.offsetTop;

if(MouseEvent=="mousedown"){
    console.log("Current position of x and y coordinates = ");
    console.log("x = "+ current_position_of_mouse_x + "y = "+ current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}
}