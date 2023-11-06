import { IoPersonSharp } from "react-icons/io5"

function randomColor() {
    const colorArray = ['navy', 'pink', 'red', 'blue', 'green'];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function renderAvatar(props) {
  if (props.src && typeof props.src === 'string' && props.src.includes('.png') ||
      props.src && typeof props.src === 'string' && props.src.includes('.jpg')
  ) {
    return (
      <div className="avatar avatar-letters" style={{ backgroundColor: 'white' }}>
        <img src={props.src} alt="Avatar" />
      </div>
    );
  } else if (props.children) {
    return <div className="avatar avatar-letters" style={{ backgroundColor: randomColor() }}>{props.children}</div>;
  } else {
    return (
      <div className="avatar avatar-icon" style={{ backgroundColor: randomColor() }}>
        <IoPersonSharp />
      </div>
    );
  }
}

export default function Avatar(props) {

    return (
        renderAvatar(props)
    )
}