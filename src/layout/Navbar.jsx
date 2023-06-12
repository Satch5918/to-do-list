import logo from '../assets/img/logo1.jpg'
import login from '../assets/img/login.png'

export default function Navbar() {
  return (
    <nav className="bg-black flex justify-between items-center ">
      <img className="w-[350px] h-[200px]" src={logo} alt="" />
      <div className='text-white flex flex-row mt-4'>
        <ul className='flex flex-row gap-[80px] text-[40px] list-disc'>
        <li className='text-white transition-colors duration-500 hover:text-red-500'><a  href="#">HOME</a> </li>
        
        <li className='text-white transition-colors duration-500 hover:text-red-500'><a  href="#">TO-DO LIST</a></li>
        <li className='text-white transition-colors duration-500 hover:text-red-500' ><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div className='mr-[100px] mt-[20px]'>
      <a className="text-white flex flex-col items-center text-[40px]" href=""><img className="w-[90px] h-[90px]" src={login} alt="" />Login</a>
      </div>
    </nav>
  )
}
