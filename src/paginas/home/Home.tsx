
import homeLogo from '../../assets/img/home.jpg'


function Home() {
    return (
        <>
        <div className="bg-neutral-700 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold uppercase'>Seja bem vinde!</h2>
              <p className='text-xl'>Farmácia XYZ</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white font-bold text-neutral-950 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;