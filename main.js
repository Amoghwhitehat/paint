canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mousevent="empty";
var last_x,last_y;
colour="red";
width_of_line=4;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    colour=document.getElementById("colour").value;
 mousevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
 mousevent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
 mousevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y cordinates= ");
        console.log("x="+last_x,"y="+last_y);
        ctx.moveTo(last_x,last_y);

        console.log("current position of x and y cordinates= ");
        console.log("x="+current_x,"y="+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.arc(current_x,current_y,40,0,2*Math.PI);
        ctx.stroke();
    
    last_x=current_x;
    last_y=current_y;
}