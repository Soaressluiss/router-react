import img from "../assets/imgs/homeImg.svg"
import Navbar from "../components/Navbar";
import '../assets/styles/pages.css'

function Home() {
  return (
    <>
      <Navbar />
      <main className="containerPage">
        <h2 className="title">Você está na página de Home</h2>
        <img className="imgPage" src={img} alt="imagem da Home" />
      </main>
    </>
  );
}
export default Home;
