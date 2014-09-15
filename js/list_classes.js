var languages2 = [
["Afrikaans","B3dEGvmlJ0aJkSTX8Svwaf1"],
["Albanian","BWcpDJ95K0aJkSTX8Svwaf1"],
["Arabic","BE3frNB5K0aJkSTX8Svwaf1"],
["Azerbaijani","BKr3j795K0aJkSTX8Svwaf1"],
["Basque","BpvyHu85K0aJkSTX8Svwaf1"],
["Bengali","BLC2Y6B5K0aJkSTX8Svwaf1"],
["Belarusian","B7Xs4I75K0aJkSTX8Svwaf1"],
["Catalan","BHn8jiB5K0aJkSTX8Svwaf1"],
["Chinese Simplified","ByP5La75K0aJkSTX8Svwaf1"],
["Chinese Traditional","BqiJHM75K0aJkSTX8Svwaf1"],
["Croation","BJ8fpo85K0aJkSTX8Svwaf1"],
["Czech","Bykcmi85K0aJkSTX8Svwaf1"],
["Danish","Bh4SyR95K0aJkSTX8Svwaf1"],
["Dutch","BBizxkB5K0aJkSTX8Svwaf1"],
["English","BIGqPSB5K0aJkSTX8Svwaf1"],
["Esperanto","BCuKfy85K0aJkSTX8Svwaf1"],
["Estonian","Bs6Yy6A5K0aJkSTX8Svwaf1"],
["Filipino","BrTAz4A5K0aJkSTX8Svwaf1"],
["Finnish","B7i43aB5K0aJkSTX8Svwaf1"],
["French","BNJoMR75K0aJkSTX8Svwaf1"],
["Galician","B4JaTSB5K0aJkSTX8Svwaf1"],
["Georgian","BkrHRAB5K0aJkSTX8Svwaf1"],
["German","BdZHrJmsW0aJhEDWp7OJdfG"],
["Greek","BWR2soXOK0aJkSTX8Svwaf1"],
["Gujarati","BnNWfhTOK0aJkSTX8Svwaf1"],
["Haitian Creole","BMmCCxXOK0aJkSTX8Svwaf1"],
["Hebrew","BXtstRXOK0aJkSTX8Svwaf1"],
["Hindi","BbRnXNTOK0aJkSTX8Svwaf1"],
["Hungarian","BhE6P8WOK0aJkSTX8Svwaf1"],
["Icelandic","BNqycoXOK0aJkSTX8Svwaf1"],
["Indonesian","BgGFthUOK0aJkSTX8Svwaf1"],
["Irish","BO4Cr2XOK0aJkSTX8Svwaf1"],
["Italian","Bsm6l3WOK0aJkSTX8Svwaf1"],
["Japanese","Bu4nkZWOK0aJkSTX8Svwaf1"],
["Kannada","Bl3EWeVOK0aJkSTX8Svwaf1"],
["Korean","Bgv7akWOK0aJkSTX8Svwaf1"],
["Latin","B7eXvNWOK0aJkSTX8Svwaf1"],
["Latvian","BQZBQQTOK0aJkSTX8Svwaf1"],
["Lithuanian","BowV80lwV0aJhEDWp7OJdfG"],
["Macedonian","BOfhEtwNU0aJhEDWp7OJdfG"],
["Malay","BaUUajuNU0aJhEDWp7OJdfG"],
["Maltese","Ba259fxNU0aJhEDWp7OJdfG"],
["Norwegian","BHFoS7xNU0aJhEDWp7OJdfG"],
["Persian","BF0UAgvNU0aJhEDWp7OJdfG"],
["Polish","BXaODrxNU0aJhEDWp7OJdfG"],
["Portuguese","B1RFNqyNU0aJhEDWp7OJdfG"],
["Romanian","BBCgG2xNU0aJhEDWp7OJdfG"],
["Russian","BsSqzeyNU0aJhEDWp7OJdfG"],
["Serbian","BRhX15xNU0aJhEDWp7OJdfG"],
["Slovak","BS24FzuNU0aJhEDWp7OJdfG"],
["Slovenian","B5mX76wNU0aJhEDWp7OJdfG"],
["Spanish","B5WQoluMhzZJhEDWp7OJdfG"],
["Swahili","B3Smk3vNU0aJhEDWp7OJdfG"],
["Swedish","BWgGDdxNU0aJhEDWp7OJdfG"],
["Tamil","BsR231KhU0aJhEDWp7OJdfG"],
["Telugu","BtLfZfHhU0aJhEDWp7OJdfG"],
["Thai","BRHNIBJhU0aJhEDWp7OJdfG"],
["Turkish","BDPEcSKhU0aJhEDWp7OJdfG"],
["Ukranian","Bu1O67LhU0aJhEDWp7OJdfG"],
["Urdu","BCdlDJKhU0aJhEDWp7OJdfG"],
["Vietnamese","BEruFULhU0aJhEDWp7OJdfG"],
["Welsh","BTzP4RIhU0aJhEDWp7OJdfG"],
["Yiddish","BAvQGGHhU0aJhEDWp7OJdfG"]];

var client_id = "k68WEo_fT9o";
var client_secret = "pyl69TB75wg";
var timestamp = new Date().getTime();

var system_unique_id = "system0001";

var system_hash = CryptoJS.HmacSHA256(client_id + system_unique_id + timestamp, client_secret);
var system_hashInBase64 = CryptoJS.enc.Base64.stringify(system_hash);
var system_signature = system_hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

function new_user_unique_id() {
  var rand=Math.floor(Math.random()*100)+1;
  return "user"+rand.toString();
}
var user_unique_id = new_user_unique_id();

var user_hash = CryptoJS.HmacSHA256(client_id + user_unique_id + timestamp, client_secret);
var user_hashInBase64 = CryptoJS.enc.Base64.stringify(user_hash);
var user_signature = user_hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
// ]]>

// Initialize System User and get access token
function openChat(binderID) {
  console.log("var setup");
  var init_options = {
    uniqueid: system_unique_id,
    firstname: "System",
    lastname: "User",
    timestamp: timestamp,
    signature: system_signature,
    get_accesstoken: function(result) {
      console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
      var system_access_token = result.access_token;
      setupUser(binderID,system_access_token);
    },
    error: function(result) {
      console.log("error code: " + result.error_code + " message: " + result.error_message);
    }
  };
  console.log("before setup");
  Moxtra.setup(init_options);
  console.log("MOXTRAA SETTUPP");
}

// Setup/Initialize the actual user who is requesting to join the chat
function setupUser(binderID,system_access_token) {
  var init_options = {
    uniqueid: user_unique_id,
    firstname: user_unique_id,
    lastname: "User",
    timestamp: timestamp,
    signature: user_signature,
    get_accesstoken: function(result) {
      console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
      var user_access_token = result.access_token;

      method="POST";
      url="addUser2Binder.php?system_access_token="+system_access_token+"&user_id="+user_unique_id+"&binderID="+binderID;
      addUser2Binder(url, method, binderID, user_access_token)
    },
    error: function(result) {
      console.log("error code: " + result.error_code + " message: " + result.error_message);
    }
  };
  Moxtra.setup(init_options);
}


// Ajax call to add user to Binder

function addUser2Binder(url, method, binderID, user_access_token) {
  var httpc = new XMLHttpRequest();
  httpc.open("POST", url, true);
  httpc.send(null);
  httpc.onreadystatechange=function()
  {
    if (httpc.readyState==4 && httpc.status==200)
      {
        start_chat(binderID,user_access_token);
      }
    }
  }

  // Show the chat and let the user start posting data into chat room
  function start_chat (binderID, user_access_token) {
    console.log(binderID);
    var chat_options = {
      binder_id: binderID,
      iframe: true,
      tagid4iframe: "container",
      iframewidth: "100%",
      iframeheight: "950px",
      access_token: user_access_token,
      autostart_meet: true,
      autostart_note: true,
      extension: { "show_dialogs": { "member_invite": true } },
      start_chat: function(event) {
        console.log("Chat started binder ID: " + event.binder_id);
        //Your application server can upload files to draw using the binder_id and access_token
      },
      start_meet: function(event) {
        console.log("Meet started session key: " + event.session_key + " session id: " + event.session_id);
      },
      end_meet: function(event) {
        console.log("Meet end event");
      },
      invite_member: function(event) {
        console.log("Invite member into binder Id: " + event.binder_id);
      },
      request_note: function(event) {
        console.log("Note start request");
      },
      error: function(event) {
        console.log("Chat error code: " + event.error_code + " error message: " + event.error_message);
      }
    };
    Moxtra.chat(chat_options);
  }

  function get_lang_binderID(lang_key) {
    console.log(lang_key);
    var fullNameLang = languages[indexOf2D(lang_key,languages)][1];
    console.log(languages2[indexOf2D(fullNameLang, languages2)][1]);
    return languages2[indexOf2D(fullNameLang, languages2)][1];
  /*  for(var i = 0; i<languages2.length; i++) {

      if (lang_key== languages2[i][0]) {
        lang_binderID=languages2[i][1];
        return(lang_binderID);
      }
    }*/
  }

  function create_lang_link(lang_key) {
    binderID = get_lang_binderID(lang_key);
    a = document.createElement('a');
    a.setAttribute("href", "javascript:openChat('"+binderID+"');");
    a.appendChild(document.createTextNode("lol"));
  }


function getURLVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function main() {
  console.log("main is being run");
  var binderID = get_lang_binderID(getURLVars()["language"]);
  console.log (binderID);
  openChat(binderID);
}

$(document).ready(main);
