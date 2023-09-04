let a = document.getElementById(toggle);
function toggle() {
    if(a==1) {
        document.getElementById(slider).style.display="inline";
        return a=0;
    }
    else 
    {
        document.getElementById(slider).style.display="none";
        return a=1;
    }
}