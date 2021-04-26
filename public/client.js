const socket = io();
const handle = document.getElementById('handle')
const output = document.getElementById('output')
const button = document.getElementById('button')

let element = document.querySelector('div[contenteditable]');
var observer = new MutationObserver(mutations =>
  mutations.forEach(mutation => {
    if(mutation.target.wholeText === undefined){
      console.log(mutation.target.innerHTML)
        observer = mutation.target.innerHTML;
    }else  console.log(mutation.target.wholeText); observer = mutation.target.wholeText;
  })
);

observer.observe(element, {
  childList: true,
  characterData: true,
  subtree: true,
});
function getText() {
    let element = document.querySelector('div[contenteditable]');
    let firstTag = element.firstChild.nodeName;
    let keyTag = new RegExp(
      firstTag === '#text' ? '<br' : '</' + firstTag,
      'i'
    );
    let tmp = document.createElement('p');
    tmp.innerHTML = element.innerHTML
      .replace(/<[^>]+>/g, (m, i) => (keyTag.test(m) ? '{ß®}' : ''))
      .replace(/{ß®}$/, '');
    return tmp.innerText.replace(/{ß®}/g, '\n');
  }

button.addEventListener('click', async function(){
    const message = observer
    appendMessage(`${message}`)
    socket.emit('userMessage', {
        message: observer
    })
    console.log(observer)
    fetch('/clicked', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        'message': message
      })
    })                                 
      .then(function(response) {
      if(response.ok) {
      console.log('click was recorded');
          return;
      }
      throw new Error('Request failed.');
      })
      .catch(function(error) {
      console.log(error);
      });
  })



socket.on('userMessage', (data) =>{
    appendMessage(`${data.message}`) 
})

socket.on('connection', function() {
    console.log("client connected");
});

socket.on('connect_error', function(err) {
    console.log("client connect_error: ", err);
});

socket.on('connect_timeout', function(err) {
    console.log("client connect_timeout: ", err);
});

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    output.appendChild(messageElement)
}

console.log('Client-side code running');

