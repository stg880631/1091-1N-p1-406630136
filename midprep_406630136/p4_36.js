function change(index){
    const p = document.getElementById('section')
    switch(index){
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./p1/myclass_xx.html" />'
            break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="./p2/div_xx.html" />'
            break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./p3/profile_xx.html" />'
            break;
    }
}