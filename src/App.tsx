import { useState } from "react";
import { ImWhatsapp } from "react-icons/im";
import { SiShopee } from "react-icons/si";
import bgDams from "./assets/BgDamsenigma.jpg";
import logo from "./assets/logos.jpg";
import topedGreen from "./assets/toped.svg";
import topedWhite from "./assets/topedWhite.svg";

function App() {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${bgDams})` }}
      className="flex flex-col w-screen h-screen bg-contain bg-center items-center bg-no-repeat bg-black "
    >
      <div className="flex flex-col items-center mt-10 mb-48 text-white">
        <img
          className="w-24 h-24 rounded-full mb-4 border border-white"
          src={logo}
          alt="logo"
          width="384"
          height="512"
        />
        <h1>DAMS ENIGMA</h1>
        <p>@damsenigma</p>
      </div>
      {/* <div className="flex flex-row gap-10 items-center text-white mb-32 ">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={people}
            alt="people"
            width="30px"
            height="30px"
          />
          <h1>Owner</h1>
          <p>@damsenigma</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={people}
            alt="people"
            width="30px"
            height="30px"
          />
          <h1>Owner</h1>
          <p>@damsenigma</p>
        </div>
      </div> */}
      <div className="flex flex-col gap-5">
        <a href="https://shopee.co.id/damsenigma">
          <button className="p-3 w-[350px] rounded-full bg-[#F05D40] text-white text-[24px] flex flex-row items-center justify-around hover:bg-gray-300 hover:text-[#F05D40]">
            <SiShopee size={30} />
            Shopee
            <span className="text-[#F05D40]">{""}</span>
          </button>
        </a>
        <a href="https://wa.me/+6281321213186">
          <button className="p-3 w-[350px] rounded-full bg-[#198F82] text-white text-[24px] flex flex-row items-center justify-around  hover:bg-gray-300 hover:text-[#198F82]">
            <ImWhatsapp size={30} />
            WhatsApp
            <span className="text-[#198F82]">{""}</span>
          </button>
        </a>
        <a href="https://tokopedia.link/ZITbJ4SQ4Jb">
          <button
            className="p-3 w-[350px] rounded-full bg-gray-300 text-[#00AA5B] text-[24px] flex flex-row items-center justify-around hover:bg-[#00AA5B] hover:text-white "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={hover ? topedWhite : topedGreen}
              alt="topedGreen"
              width={35}
              height={35}
            />
            Tokopedia
            <span className="text-[#198F82]">{""}</span>
          </button>
        </a>
        <p></p>
      </div>
    </div>
  );
}

export default App;
