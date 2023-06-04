function next_page()
{
   window.location="photo.html";
}
function play_sound()
{
audio_play=document.getElementById("audio_sound");
audio_play.play();
document.getElementById("starter").style.visibility="hidden";
document.getElementById("next_page_turner").style.visibility="visible";
document.getElementById("p1").style.visibility="visible";
document.getElementById("p2").style.visibility="visible";
document.getElementById("p3").style.visibility="visible";
}