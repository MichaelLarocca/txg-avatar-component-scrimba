
import './App.css';
import Avatar from './components/Avatar';
import Bob from './img/bob-avatar-round.png';
import Michael from './img/MJL.png';
import ScrimbaLogo from './img/ScrimbaLogo.png';

function App() {
  return (
    <div className="ctn">
      {/* <Avatar src={Michael} alt="Michael Larocca" /> */}
      <Avatar src={Bob} alt="Bob Ziroll" />
      <Avatar src={ScrimbaLogo} alt="Scrimba Logo" />
      <Avatar>BZ</Avatar>
      <Avatar />
    </div>
  )
}

export default App;