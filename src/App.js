//App.js
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const commands = [
 {
    command: 'reset',
    callback: ({ resetTranscript }) => {
  resetTranscript();
  }
},

{
  command: 'clear',
  callback: ({resetTranscript}) => {
    resetTranscript();
  }
},
{
  command: 'open *',//* will capture the "google.com"
  callback: (site) => {window.open('http://'+site)}
},
{
  command: 'increase text size',
  callback: () => {document.getElementById('content').style.fontSize = '22px'}
},
{
  command: 'decrease text size',
  callback: () => {document.getElementById('content').style.fontSize = '16px'}
},
{
  command: 'change text color to *',
  callback: (color) => {document.getElementById('content').style.color =  color}
}


  ]
 SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});//commands should be passed as 
  //object and not as props

  

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



return (
 <div className="container">
  <div className="nav">
    <h2>Please speak something</h2>
  </div>
  <div id='content'>
{transcript}
  </div>
 </div>
);
};
export default App;
