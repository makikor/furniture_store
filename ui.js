let wrapper = document.getElementById('wrapper')
console.log(wrapper);

wrapper.onclick = function(event){
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    alert('Hello')
}

