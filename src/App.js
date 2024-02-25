import './App.css';
import login from './Img/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <section className=' bg-gray-50 min-h-screen flex items-center justify-center ' >
        {/* LOgin container */}
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
          {/* Form */}
          <div className='md:w-1/2 px-6' >
            <h2 className='font-bold text-2xl text-[#007DFE]'>Login</h2>
            <p className='text-sm mt-4 text-[#007DFE]'>Nice to see you again</p>

            <form action="" className='flex flex-col gap-4'>
              <div className='relative'>
              <input className='p-2 mt-8 rounded-xl border w-full' type="email" name="email" id="email" placeholder="Email" />
              <FontAwesomeIcon className=' absolute top-[44px] right-3 ' icon={faEnvelope} />
              </div>
              <div className='relative'>
              <input className='p-2 rounded-xl border w-full' type="password" name="password" id="password" placeholder="Enter password" />
              <FontAwesomeIcon className=' absolute top-1/2 right-3 -translate-y-1/2 ' icon={ faEye } />
              </div>
              <button className='bg-[#007DFE] rounded-xl text-white py-2'>Login</button>
            </form>

            <div className=' flex mt-10 space-x-2 text-xs border-b py-6'>
              <label htmlFor="check" className=' bg-gray-100 relative w-12 h-6 rounded-full border'>
                <input type="checkbox" id="check" className=' sr-only peer'/>
                <span className=' w-2/5 h-4/5 bg-gray-300 absolute rounded-full left-1 top-[2px] peer-checked:bg-[#007DFE] peer-checked:left-6 transition-all duration-500'></span>
              </label>
            <p className='mt-[4px]'>Remember me</p>
            <div>
            <button className='text-[#007DFE] mt-[4px] ml-[50px]'>Forgot password?</button>
            </div>
            </div>

            <div className=' text-xs flex justify-between mt-4'>
              <p>Don't have an account?<button className='text-[#007DFE] ml-3'>Sing up now</button></p>
            </div>
           
          </div>
          {/* image */}
          <div className='md:block hidden w-1/2'>
            <img className='rounded-2xl' src={login}></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
