
import './App.css';
import Avatar from './components/Avatar';
import Bob from './img/bob-avatar-round.png';
import Michael from './img/MJL.png';

function App() {
  return (
    <div className="ctn">
      <div>
        <Avatar src={Bob} alt="Bob Ziroll" />
        <Avatar>BZ</Avatar>
        <Avatar />
      </div>
      <div>
        <Avatar src={Michael} alt="Michael Larocca" />
        <Avatar>ML</Avatar>
        <Avatar />
      </div>
    </div>
  )
}

export default App;