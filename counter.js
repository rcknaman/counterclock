var countContainer = document.getElementsByClassName('number-container');
var curr = document.getElementsByClassName('curr');
var next = document.getElementsByClassName('next');
var btn = document.getElementsByTagName('button')[0];
var input = document.querySelector('#header input');
var currValue = "0";
var nextValue = "1";
var intId;
var count = 1;
for (let e of curr) {
    e.innerText = "0";
}
for (let e of next) {
    e.innerText = "1";
}
btn.addEventListener('click', function() {
    let fetchValue = input.value;
    if ((fetchValue + "").length == 0) {
        alert('please enter some value');
        clearInterval(intId);
        return;
    }
    if ((fetchValue + "").length > 5) {
        alert('Value out of bound ;/');
    }
    clearInterval(intId);
    currValue = "0";
    nextValue = "1";
    for (let e of curr) {
        e.innerText = "0";
    }
    for (let e of next) {
        e.innerText = "1";
    }
    timer(fetchValue);
})


function timer(fetchValue) {
    intId = setInterval(function() {
        if (parseInt(currValue) >= parseInt(fetchValue)) {
            clearInterval(intId);
            console.log('i am still here');
            alert('Timesup!!');
            return;
        }
        console.log(nextValue);
        let stringIter = nextValue.length - 1;
        let n = 10000;
        let val = 1;
        while (n) {
            if (nextValue % n === 0) {
                val = (n + "").length;
                break;
            }
            n /= 10;
        }
        console.log(val);
        let e = next.length - 1;
        let val1 = val;
        while (val1--) {
            next[e--].classList.add('animate');
        }




        setTimeout(function() {
            val1 = val;
            let e = next.length - 1;
            while (val1--) {

                next[e].classList.remove('animate');
                curr[e].innerText = next[e].innerText;
                e--;
            }


            currValue = nextValue + "";
            nextValue = "" + (parseInt(nextValue) + 1);

            stringIter = nextValue.length - 1;
            for (let e = next.length - 1; e >= (next.length - nextValue.length); e--) {
                next[e].innerText = nextValue[stringIter--];

            }



        }, 500);

    }, 1000);
}