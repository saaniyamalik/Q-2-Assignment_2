export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="childContainer">
       
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EhvSRI-me1CI8xdR88_KwZKt0Qlm_Q8eeg&s"
          alt="profile picture"
          width="120"
          height="90"
          loading="lazy"
          className= " rounded-full ml-60 align=left"
          />
          < div className="homeContainner"></div>
          <div className="w-fit h-[0px] m-[-80px] text-[90px] font-blue"></div>
          hey,
          <br />
          My name is <span className="text-blue-500">Saniya Malik</span>
          <br /> I am Next js Developer
        </div>
        <div className=""></div>
        <div className="childContainer"></div>
      </div>
       <div className="w-fit h-[90px] m-[30px] text-[20px] font-black">s
          Hey,
          <br />
          My Name is <span className="text-pink-500">shizza</span>
          <br />I am Next JS Developer
        </div>
        <div className=""></div>
    </>
  );
}