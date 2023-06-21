console.log('125/125 score, but js-animation on mobile/tabled screen look a little bit bad, but task is fully complited')

function wind(){
document.getElementById('onees').classList.toggle('htmlscroll')
document.getElementById('html').classList.toggle('htmlscroll')
}

function fun1() {
obox=document.getElementById('one');
wbox=document.getElementById('two')
tbox=document.getElementById('three')

	if (obox.checked || wbox.checked || tbox.checked) {
        document.querySelectorAll('.card').forEach(elem => elem.classList.add('nofocus'))
        document.querySelectorAll('.card').forEach(elem => elem.classList.remove('cardd'))
	}
    else {
        document.querySelectorAll('.card').forEach(elem => elem.classList.remove('nofocus'))
        document.querySelectorAll('.card').forEach(elem => elem.classList.add('cardd'))
    }

    if (obox.checked){
        document.querySelectorAll('.Garden').forEach(elem => elem.classList.add('cardd'))
        document.querySelectorAll('.Garden').forEach(elem => elem.classList.remove('nofocus'))
    }
    else {
    }
    if (wbox.checked){
        document.querySelectorAll('.Lawn').forEach(elem => elem.classList.add('cardd'))
        document.querySelectorAll('.Lawn').forEach(elem => elem.classList.remove('nofocus'))
    }
    else {
    }
    if (tbox.checked){
        document.querySelectorAll('.Planting').forEach(elem => elem.classList.add('cardd'))
        document.querySelectorAll('.Planting').forEach(elem => elem.classList.remove('nofocus'))
    }
    else {
    }

    if (obox.checked && wbox.checked) {
        tbox.disabled = true;
   }
   else{
    tbox.disabled = false;
   }
    if (wbox.checked && tbox.checked) {
        obox.disabled= true;
    }
    else{
        obox.disabled = false;
       }
    if (tbox.checked && obox.checked) {
        wbox.disabled= true;
    }
    else{
        wbox.disabled = false;
       }
}


function dropDown1() {
    if (document.getElementById("op2").classList.contains('but_open')){
        button = document.getElementById("op2");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci2");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar3')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar4')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or2')
        open.classList.toggle('opened')

        sub = document.getElementById('sub2')
        sub.classList.toggle('subb')

        per = document.getElementById('per2')
        per.classList.toggle('peper')
    }
    else if (document.getElementById("op3").classList.contains('but_open')){
        button = document.getElementById("op3");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci3");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar5')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar6')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or3')
        open.classList.toggle('opened')

        sub = document.getElementById('sub3')
        sub.classList.toggle('subb')

        per = document.getElementById('per3')
        per.classList.toggle('peper')
    }
    button = document.getElementById("op1");
    button.classList.toggle('but_open')

    circle = document.getElementById("ci1");
    circle.classList.toggle('cirdrop')
    circle.classList.toggle('circle')

    ar1 = document.getElementById('ar1')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar2')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')

    open = document.getElementById('or1')
    open.classList.toggle('opened')

    sub = document.getElementById('sub1')
    sub.classList.toggle('subb')

    per = document.getElementById('per1')
    per.classList.toggle('peper')

}


function dropDown2() {
    if (document.getElementById("op1").classList.contains('but_open')){
        button = document.getElementById("op1");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci1");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar1')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar2')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or1')
        open.classList.toggle('opened')
        sub = document.getElementById('sub1')
        sub.classList.toggle('subb')

        per = document.getElementById('per1')
        per.classList.toggle('peper')
    }
    else if (document.getElementById("op3").classList.contains('but_open')){
        button = document.getElementById("op3");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci3");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar5')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar6')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or3')
        open.classList.toggle('opened')

        sub = document.getElementById('sub3')
        sub.classList.toggle('subb')

        per = document.getElementById('per3')
        per.classList.toggle('peper')
    }
    button = document.getElementById("op2");
    button.classList.toggle('but_open')

    circle = document.getElementById("ci2");
    circle.classList.toggle('cirdrop')
    circle.classList.toggle('circle')

    ar1 = document.getElementById('ar3')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar4')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')

    open = document.getElementById('or2')
    open.classList.toggle('opened')

    sub = document.getElementById('sub2')
    sub.classList.toggle('subb')

    per = document.getElementById('per2')
    per.classList.toggle('peper')
}


function dropDown3() {
    if (document.getElementById("op2").classList.contains('but_open')){
        button = document.getElementById("op2");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci2");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar3')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar4')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or2')
        open.classList.toggle('opened')

        sub = document.getElementById('sub2')
        sub.classList.toggle('subb')

        per = document.getElementById('per2')
        per.classList.toggle('peper')
    }
    else if (document.getElementById("op1").classList.contains('but_open')){
        button = document.getElementById("op1");
        button.classList.toggle('but_open')

        circle = document.getElementById("ci1");
        circle.classList.toggle('cirdrop')
        circle.classList.toggle('circle')

        ar1 = document.getElementById('ar1')
        ar1.classList.toggle('ar-2')
        ar1.classList.toggle('ar-2-rev')
        ar1 = document.getElementById('ar2')
        ar1.classList.toggle('ar-3')
        ar1.classList.toggle('ar-3-rev')

        open = document.getElementById('or1')
        open.classList.toggle('opened')

        sub = document.getElementById('sub1')
        sub.classList.toggle('subb')

        per = document.getElementById('per1')
        per.classList.toggle('peper')
    }
    button = document.getElementById("op3");
    button.classList.toggle('but_open')

    circle = document.getElementById("ci3");
    circle.classList.toggle('cirdrop')
    circle.classList.toggle('circle')

    ar1 = document.getElementById('ar5')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar6')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')

    open = document.getElementById('or3')
    open.classList.toggle('opened')

    sub = document.getElementById('sub3')
    sub.classList.toggle('subb')

    per = document.getElementById('per3')
    per.classList.toggle('peper')
}




function cityDown() {
    document.getElementById('dropci').classList.toggle('accok')
    document.getElementById('dropper').classList.toggle('drop--drop')
    document.getElementById('dropci').classList.remove('set')
    document.getElementById('cit').textContent = 'City'
    ar1 = document.getElementById('ar7')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar8')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')
    circle = document.getElementById("ci4");
    circle.classList.toggle('cirdrope')
    
    document.querySelectorAll('.cities').forEach(elem => elem.classList.toggle('removee'))
    document.querySelectorAll('.drop-up').forEach(elem => elem.classList.toggle('remove'))

    document.querySelector('.adresses').style.left = '1000px'
}




function cityDown1(){
    document.getElementById('dropci').classList.toggle('accok')
    document.getElementById('dropci').classList.toggle('set')
    document.getElementById('dropper').classList.toggle('drop--drop')
    document.querySelector('.adresses').style.left = '0'

    ar1 = document.getElementById('ar7')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar8')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')
    circle = document.getElementById("ci4");
    circle.classList.toggle('cirdrope')
    
    document.querySelectorAll('.cities').forEach(elem => elem.classList.toggle('removee'))
    document.querySelectorAll('.drop-up').forEach(elem => elem.classList.toggle('remove'))

    document.getElementById('cit').textContent = 'Canandaigua, NY'
    document.getElementById('tel').setAttribute("href", "tel:+1	585	393 0001")

    document.getElementById('city').textContent = 'Canandaigua, NY'
    document.getElementById('phone').textContent = '+1	585	393 0001'
    document.getElementById('office').textContent = '151 Charlotte Street'
}
function cityDown2(){
    document.getElementById('dropci').classList.toggle('accok')
    document.getElementById('dropci').classList.toggle('set')
    document.getElementById('dropper').classList.toggle('drop--drop')
    document.querySelector('.adresses').style.left = '0'

    ar1 = document.getElementById('ar7')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar8')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')
    circle = document.getElementById("ci4");
    circle.classList.toggle('cirdrope')
    
    document.querySelectorAll('.cities').forEach(elem => elem.classList.toggle('removee'))
    document.querySelectorAll('.drop-up').forEach(elem => elem.classList.toggle('remove'))

    document.getElementById('cit').textContent = 'New York City'
    document.getElementById('tel').setAttribute("href", "tel:+1	212	456 0002")

    document.getElementById('city').textContent = 'New York City'
    document.getElementById('phone').textContent = '+1	212	456 0002'
    document.getElementById('office').textContent = '9 East 91st Street'
}

function cityDown3(){
    document.getElementById('dropci').classList.toggle('accok')
    document.getElementById('dropci').classList.toggle('set')
    document.getElementById('dropper').classList.toggle('drop--drop')
    document.querySelector('.adresses').style.left = '0'

    ar1 = document.getElementById('ar7')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar8')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')
    circle = document.getElementById("ci4");
    circle.classList.toggle('cirdrope')
    
    document.querySelectorAll('.cities').forEach(elem => elem.classList.toggle('removee'))
    document.querySelectorAll('.drop-up').forEach(elem => elem.classList.toggle('remove'))

    document.getElementById('cit').textContent = 'Yonkers, NY'
    document.getElementById('tel').setAttribute("href", "tel:+1	914	678 0003")

    document.getElementById('city').textContent = 'Yonkers, NY'
    document.getElementById('phone').textContent = '+1	914	678 0003'
    document.getElementById('office').textContent = '511 Warburton Ave'
}

function cityDown4(){
    document.getElementById('dropci').classList.toggle('accok')
    document.getElementById('dropci').classList.toggle('set')
    document.getElementById('dropper').classList.toggle('drop--drop')
    document.querySelector('.adresses').style.left = '0';

    ar1 = document.getElementById('ar7')
    ar1.classList.toggle('ar-2')
    ar1.classList.toggle('ar-2-rev')
    ar1 = document.getElementById('ar8')
    ar1.classList.toggle('ar-3')
    ar1.classList.toggle('ar-3-rev')
    circle = document.getElementById("ci4");
    circle.classList.toggle('cirdrope')
    
    document.querySelectorAll('.cities').forEach(elem => elem.classList.toggle('removee'))
    document.querySelectorAll('.drop-up').forEach(elem => elem.classList.toggle('remove'))

    document.getElementById('cit').textContent = 'Sherrill, NY'
    document.getElementById('tel').setAttribute("href", "tel:+1	315	908 0004")

    document.getElementById('city').textContent = 'Sherrill, NY'
    document.getElementById('phone').textContent = '+1  315	908 0004'
    document.getElementById('office').textContent = '14 WEST Noyes BLVD'
}


