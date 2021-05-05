// console.log ("is our script working?");
const myFunction = () => {
    document.getElementById("dap").style.display = 'block';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("dapj").style.backgroundColor = '#DDFFA7';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> Hey you. Tell me what's on your mind.");
    }
const myFunction2 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'block';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("shij").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> What's cooking good looking?");
    }
const myFunction3 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'block';
    document.getElementById("bye").style.display = 'none';
    document.getElementById("headj").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> Hey...Do you chew your headphones too?");
    }
const myFunction4 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'block';
    document.getElementById("headj").style.backgroundColor = 'transparent';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> Okay, we can always chat later.");
    }
    

var debugMode = false;
  if (window.location.search.indexOf("debug=1") > -1) {
    $("#toggle").val("Disable Debug Mode");
    debugMode = true;
  } else {
    $("#toggle").val("Enable Debug Mode");
  }
  
  if (window.location.protocol === "file:") {
    document.querySelector("#local-file-error").style.display = "block";
  }



  var bot1;
  if (window.RiveScript === undefined) {
    document.querySelector("#webpack-error").style.display = "block";
  } else {
  
    var bot1 = new RiveScript({
      debug:   debugMode,
      onDebug: onDebug
    });
  
    bot1.loadFile([
      "js/brain.rive"
    ]).then(onReady).catch(onError);

    bot1.loadFile([
        "js/brain.rive"
    ]).then(jakeTwo).catch(onError)
  }
  


  function onReady() {
    $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> Hey you. Tell me what's on your mind.");
    $("#message").removeAttr("disabled");
    $("#message").attr("placeholder", "Send message to Jake");
    $("#message").focus();
    bot1.sortReplies();
  }
  
  function sendMessage () {
    var text = $("#message").val();
    $("#message").val("");
    $("#dialogue").append("<div class='user-container'><span class='user'>You:</span> " + text + "</div>");
    bot1.reply("soandso", text, this).then(function(reply) {
      reply = reply.replace(/\n/g, "<br>");
      $("#dialogue").append("<div class='bot-container'><span class='bot'>Jake:</span> " + reply + "</div>");
      $("#dialogue").animate({ scrollTop: $("#dialogue").height() }, 1000);
    }).catch(function(e) {
      window.alert(e.message + "\n" + e.line);
      console.log(e);
    });
  
    return false;
  }
  

  function toggleDebug () {
    if (debugMode) {
      window.location = "?debug=0";
    } else {
      window.location = "?debug=1";
    }
  }
  
  function onDebug(message) {
    if (debugMode) {
      $("#debug").append("<div>[RS] " + escapeHtml(message) + "</div>");
    }
  }
  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }