//variables

let vidLink = document.getElementById('search-field');
const searchBtn = document.getElementById('search-button');
const container = document.getElementById('container');
const widgetCon = document.getElementById('widget-container');

// event listeners for search-button

searchBtn.addEventListener('click', function(){
let widget = document.createElement('div');
widget.classList.add('widget-load');


let vlink = `${vidLink.value}`;
widget.innerHTML = `<iframe class="widgetApi" src="https://convert2mp3s.com/api/widget?url=${vlink}"  scrolling="no"></iframe><script>iFrameResize({log:false,minHeight:400},'#widgetApi')</script>`

if(vidLink.value === ""){
    // insert modal
    alert('please enter link')
} else {
    //html edit code
    widgetCon.appendChild(widget)

}

vidLink.value ="";



});

