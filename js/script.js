// console.log ("is our script working?");
const myFunction = () => {
    document.getElementById("dap").style.display = 'block';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("dapj").style.backgroundColor = '#DDFFA7';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    }
    const myFunction2 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'block';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("shij").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    }
    const myFunction3 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'block';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("headj").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    }
    const myFunction4 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'block';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    }
    function showInput() {
    document.getElementById('messages').innerHTML = 
    document.getElementById("userinput").value;
    }