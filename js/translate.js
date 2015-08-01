  var translations = ""

  function translateText(response) {
    translations = "";
    if (!response.data){
      console.log("Response returned with error in daily limit." +response.error)
      return false
    }

    translations += response.data.translations[0].translatedText;
    console.log(translations)
    document.getElementById("target").innerHTML=translations;
  }

  function mouseDown() {
      var text = "";
      if (window.getSelection) {
          text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
          text = document.selection.createRange().text;
      }
      var selectedtext = text;
      var chatroomLanguage = getURLVars()["language"];
      //Note: in a full implementation, fluentLanguage would be passed to the page automatically, and have a language value that the user said they were fluent in.
      var fluentLanguage = "en";
      var userLanguage = fluentLanguage;

      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = source;
      document.getElementsByTagName('head')[0].appendChild(newScript);
  }
