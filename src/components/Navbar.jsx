
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <>
      <ul className='containerNav'>
        <li className='navItens'>{<Link className='links' to={'/'}>home </Link>}</li>
        <li className='navItens'>{<Link className='links' to={'/contact'}> contatos</Link>}</li>
        <li className='navItens'>{<Link className='links' to={'/about'}>sobre </Link>}</li>
      </ul>
    </>
  );
}
export default Navbar;
