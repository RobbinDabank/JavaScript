 
var dur_time =  234245645335;
var sec_left  = dur_time % 3600;

var r_text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, sunt. Placeat pariatur est, exercitationem ad ipsum sed nihil rerum inventore culpa minus ducimus sint temporibus officiis hic quasi velit nulla!"
var a = [];
for (i=0; i < r_text.length; i++){
    if (r_text.charAt(i) == "a"){
        a.push(i);
    }
}
document.write("Seconds left: " + sec_left + '<br \/>'+ "a-position: ", a);
