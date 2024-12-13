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
      </div>
    </>
  )
}

export default Home
  