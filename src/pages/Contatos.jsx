import Navbar from '../components/Navbar';
import img from '../assets/imgs/contactImg.svg'
import '../assets/styles/pages.css'


function Contatos() {
  return (
    <>
      <Navbar />
      <main className='containerPage'>
        <h2 className='title'>Você está na página de contatos</h2>
        <img className='imgPage' src={img} alt="imagem contatos" />
      </main>
    </>
  );
}
export default Contatos;
