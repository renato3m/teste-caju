import './styles.css'

export function Header(props) {
  return (
    <header>
      <img src={props.logo} alt={props.altLogo} />
    </header>
  );
}