function Home() {
  var obj = {"opener": {
    "value": "<iframe type=\"text/html\" width='1px' height='1px' src='https://www.embedista.com/ok/instagramfeed1707' frameborder='0' allowFullScreen></iframe>"
  }}

  return (
    <>
      <div class="flex flex-col flex-grow min-h-screen justify-around">
        
        <div>
          <img class="my-5" src="./src/assets/logo.svg" alt="Temnițe și Dragoni" />
          <p class="text-2xl text-center tracking-wide text-gray-500 font-normal">Trăim mii de aventuri împreună!</p>
        </div>

        <div>
          <p class="font-light">Alăturați-ne pe:</p>

          <div class="flex justify-around">
            <a class="my-auto" href="https://www.instagram.com/temnite_si_dragoni/" target="_blank" rel="noreferrer">
              <img class="w-12 m-4" src="./src/assets/Instagram_white_logo.svg" />
            </a>
            <a class="my-auto" href="https://discord.com/invite/dcmp3Q5rAM" target="_blank" rel="noreferrer">
              <img class="w-12 m-4" src="./src/assets/Discord_white_logo.svg" />
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
  