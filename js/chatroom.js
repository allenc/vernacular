var client_id = "k68WEo_fT9o";
var client_secret = "pyl69TB75wg";
var timestamp = new Date().getTime();
var unique_id = "system"; //Unique ID of how user is identified in your system
var lang = "Spanish";
var hash = CryptoJS.HmacSHA256(client_id + unique_id + timestamp, client_secret);
var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

function start_chat (access_token, lang) {
  var chat_options = {
    //unique id of the users who will be part of the chat. These users should already exist in Moxtra.
    binder_name: lang,
    iframe: true,
    tagid4iframe: "container",
    iframewidth: "100%",
    iframeheight: "100%",
    access_token: access_token,
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

function get_token() {
  var init_options = {
    uniqueid: "system",
    firstname: "System",
    lastname: "User",
    timestamp: timestamp,
    signature: signature,
    get_accesstoken: function(result) {
      console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
      start_chat(result.access_token, lang);
    },
    error: function(result) {
      console.log("error code: " + result.error_code + " message: " + result.error_message);
    }
  };
  Moxtra.setup(init_options);
}
