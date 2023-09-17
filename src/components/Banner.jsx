import 'remixicon/fonts/remixicon.css'
import banner from '../static/img/banner.svg'

function Banner() {
  return (
    <div className="w-full h-[1400px] bg-blue-400 flex">
      {/* This is the left side of the banner */}
      <div className="flex-col space-y-10 w-1/2 p-10 pt-[400px]">
        {/* This is the heading inside the banner */}
        <div className="text-white text-8xl font-bold">Find the right <span className="italic">freelance</span> <br />service, right away</div>

        {/* This is the search box in the banner */}
        <div className="flex w-full bg-white h-[90px] rounded-lg">
          <div className="p-1 pl-4 w-full">
              {/* This is the input box to input the item to be searched */}
              <input contentEditable={true} className="w-full p-2 h-[80px] text-3xl rounded-lg bg-white focus:outline-none" placeholder="Search for any service...."></input>
          </div>

          {/* This is the button of the search box */}
          <button className="h-[90px] w-[150px] bg-[#1DBF73] rounded-tr-lg rounded-br-lg">
            <i className="ri-search-line text-white text-5xl"></i>
          </button>
        </div>

        <div className='flex space-x-10 text-2xl font-bold text-white px-3'>
          <span className='pt-1'>Popular :</span>
          <div className='flex space-x-10'>
            <button className='border-2 border-white rounded-full px-3 py-1 hover:bg-white hover:text-blue-600 duration-300 hover:duration-300'>Advocates</button>
            <button className='border-2 border-white rounded-full px-3 py-1 hover:bg-white hover:text-blue-600 duration-300 hover:duration-300'>Notaries</button>
            <button className='border-2 border-white rounded-full px-3 py-1 hover:bg-white hover:text-blue-600 duration-300 hover:duration-300'>Mediators</button>
          </div>
        </div>
      </div>

      {/* This is the right side of the banner */}
      <div className='pt-52'>
        {/* This has been left empty for now!! */}

        <div className='bg-white/50 w-full rounded-full'>
            <img src={banner} alt="image" className='w-full h-[800px]' />
        </div>
      </div>
    </div>
  )
}

export default Banner;