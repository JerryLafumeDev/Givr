const socket = io();
const handle = document.getElementById('handle')
const output = document.getElementById('output')
const button = document.getElementById('button')
const chatInfo = document.querySelector('#small')

let element = document.querySelector('div[contenteditable]');
var observer = new MutationObserver(mutations =>
  mutations.forEach(mutation => {
    if(mutation.target.wholeText === undefined){
        observer = mutation.target.innerHTML;
    }else observer = mutation.target.wholeText;
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
  var dad = document.querySelector('.chat-input'); 
  dad.classList.remove('lined')
    const message = observer
    appendMessage(`${message}`) 
    console.log(chatInfo.dataset.roomId)
    socket.emit('userMessage', chatInfo.dataset.roomId,{
       message: observer
        
    })
    console.log(observer)
    fetch('/DM', {
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
  console.log(data)
    sentMessage(`${data.message}`) 
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
socket.emit('new user', chatInfo.dataset.roomId)

function appendMessage(message){

    var d = new Date();
    var hour = d.getHours()
    var min = d.getMinutes()
    if( (""+min).length < 2)  min = "0"+ min
    
    var abbr = ""
    if(hour > 12){
      hour = hour - 12; 
      abbr = " PM"
    }else abbr = " AM" 
    
    
    let currentTime = hour + ':' + min + abbr
    
    const chatsRight = document.createElement('div')
    chatsRight.classList.add("chats", "chats-right")
    const chatContent = document.createElement('div')
    chatContent.classList.add("chat-content")
    const messageElement = document.createElement('div')
    messageElement.classList.add("message-content")
    const chatTime = document.createElement('div')
    chatTime.classList.add("chat-time")
    const rando = document.createElement('div')
    const time = document.createElement('div')
    time.classList.add("time")
    const icon = document.createElement('i')
    const check = document.createElement('img')
    check.setAttribute("src", "/assets/img/double-tick.png")
    
    time.innerText = currentTime
    messageElement.innerText = message  
    

    icon.appendChild(check)
    time.appendChild(icon)
    rando.appendChild(time)
    chatTime.appendChild(rando)
    chatContent.appendChild(messageElement)
    chatContent.appendChild(chatTime)
    chatsRight.appendChild(chatContent)
    output.appendChild(chatsRight)
}

function sentMessage(message){

    var d = new Date();
    var hour = d.getHours()
    var min = d.getMinutes()
    if( (""+min).length < 2)  min = "0"+ min
    
    var abbr = ""
    if(hour > 12){
      hour = hour - 12; 
      abbr = " PM"
    }else abbr = " AM" 
    
    
    let currentTime = hour + ':' + min + abbr
    
    const chatsLeft = document.createElement('div')
    chatsLeft.classList.add("chats")

    const chatsAvi = document.createElement('div')
    chatsAvi.classList.add("chat-avatar")

    const aviImg = document.createElement('img')
    aviImg.classList.add("rounded-circle", "dreams_chat")
    aviImg.setAttribute("src", "/assets/img/avatar-2.jpg")

    const chatContent = document.createElement('div')
    chatContent.classList.add("chat-content")

    const messageElement = document.createElement('div')
    messageElement.classList.add("message-content")

    const chatTime = document.createElement('div')
    chatTime.classList.add("chat-time")
    const rando = document.createElement('div')
    const time = document.createElement('div')
    time.classList.add("time")
    
    time.innerText = currentTime
    messageElement.innerText = message  
    
    rando.appendChild(time)
    chatTime.appendChild(rando)
    chatContent.appendChild(messageElement)
    chatContent.appendChild(chatTime)
    chatsAvi.appendChild(aviImg)
    chatsLeft.appendChild(chatsAvi)
    chatsLeft.appendChild(chatContent)
    output.appendChild(chatsLeft)
}

console.log('Client-side code running');

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

