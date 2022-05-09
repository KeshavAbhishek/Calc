var buttonList = document.getElementsByClassName('styleme');

let globalfontcolor='white';
let globalbackgroundcolor='black';

function cngcolor(){
    document.getElementById('colorFont').click();
};

function cngbgcolor(){
    document.getElementById('colorBackground').click();
};

function colorFonts(){
    for (const x of buttonList) {
        x.style.color=document.getElementById('colorFont').value;
    }
    globalfontcolor=document.getElementById('colorFont').value;
};

function colorBackgrounds(){
    for (const x of buttonList) {
        x.style.backgroundColor=document.getElementById('colorBackground').value;
    }
    globalbackgroundcolor=document.getElementById('colorBackground').value;
};

// buttonList = document.getElementsByClassName('styleme');

for (const x of buttonList) {
    x.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            try {
                if(document.getElementById("screen").value!=''){
                    st = `${eval(document.getElementById("screen").value.replace('X','*'))}`;
                    document.getElementById("screen").value = st;
                }
            } catch (error) {
                document.getElementById('invalidBanner').style.display='flex';
                setTimeout(() => {
                    document.getElementById('invalidBanner').style.display='none';
                }, 500);
            }
        }
        else if(e.target.innerHTML=="DEL"){
            document.getElementById("screen").value = document.getElementById("screen").value.slice(0,document.getElementById("screen").value.length-1);
        }
        else if(e.target.innerHTML=="C"){
            document.getElementById("screen").value = '';
        }
        else if(e.target.innerHTML=="R"){
            document.getElementById('screen').value='';

            let list=['clear', 'reset', 'percent', 'delete', 'seven', 'eight', 'nine', 'division', 'four', 'five', 'six', 'multiply', 'one', 'two', 'three', 'minus', 'zero', 'dot', 'equal', 'plus'];
        
            for (let index = 0; index < list.length; index++) {
                document.getElementById(list[index]).style.backgroundColor='black';
                document.getElementById(list[index]).style.color='white';
                globalfontcolor='white';
                globalbackgroundcolor='black';
            }
        }
        else{
            document.getElementById("screen").value += e.target.innerHTML;
        };
    });
};