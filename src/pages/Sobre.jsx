import Navbar from "../components/Navbar";
import img from '../assets/imgs/aboutImg.svg'
import '../assets/styles/pages.css'

function About() {
  return (
    <>
    <Navbar />
    <main className='containerPage'>
        <h2 className='title'>Você está na página de sobre</h2>
        <img className='imgPage' src={img} alt="imagem sobre" />
      </main>
    </>
  );
}
export default About;
