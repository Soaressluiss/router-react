// import { Link } from 'react-router-dom'



import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <ul>
        <li>{<Link to={'/'}>home </Link>}</li>
        <li>{<Link to={'/contact'}> contatos</Link>}</li>
        <li>{<Link to={'/about'}>sobre </Link>}</li>
      </ul>
    </>
  );
}
export default Navbar;
