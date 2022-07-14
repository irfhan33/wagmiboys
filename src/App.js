function App() {
  return (
    <div className="min-h-screen relative flex flex-col z-">
      <header className=" px-[3%]">
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          <a href="">
            <img
              src="/WbLogo.png"
              alt=""
              className="h-16 md:h-36 md:-translate-x-6"
              draggable="false"
            />
          </a>
          <a href="">
            <img
              src="/Twitter.png"
              alt=""
              className="h-10 md:h-16"
              draggable="false"
            />
          </a>
        </div>
      </header>
      <div className="px-[3%]">
        <img
          src="/logo.png"
          alt=""
          className="mx-auto max-w-[300px] sm:max-w-[500px] w-full mt-10 sm:mt-6"
          draggable="false"
        />
      </div>
      <div className="px-[3%]">
        <img
          src="/MintNow.png"
          alt=""
          draggable="false"
          className=" mx-auto max-w-[300px] sm:max-w-[600px] w-full mt-20 cursor-pointer"
        />
      </div>
      <div className="max-w-7xl mx-auto fixed inset-0 z-[-1]">
        <img src="/cloud.png" alt="" className="absolute  left-[30%] w-[40%]" />
        <img
          src="/cloud.png"
          alt=""
          className="absolute top-60  -left-10 lg:-left-40 w-[40%]"
        />
        <img
          src="/cloud.png"
          alt=""
          className="absolute top-[30rem] -right-10 lg:-right-60 w-[40%]"
        />
      </div>
      <footer className="mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <img
            src="/footer.png"
            alt=""
            className="hidden lg:block w-full object-cover mt-auto translate-y-8"
            draggable="false"
          />
          <img
            src="/footer-2.png"
            alt=""
            className="w-full block lg:hidden object-cover mt-auto"
            draggable="false"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
