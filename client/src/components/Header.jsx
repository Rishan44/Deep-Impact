import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-950 font-teko text-sm'>
        <div className='flex justify-between items-center 
        max-w-6xl mx-auto p-3 text-white'>
            <Link to='/'>
            <img 
              src="src\assets\Frame_39.png"
              alt="deepimpact logo" 
              className="h-8  mx-auto pl-7" />
            </Link>
            <ul className='flex gap-8 font-semibold mx-auto text-2xl '>
               <Link to='/'> <li>HOME</li> </Link> 
               <Link to='/shop' > <li>SHOP</li> </Link>
               <Link to='/about' > <li>ABOUT</li> </Link>
               <Link to='/contact'> <li>CONTACT</li> </Link>
              <Link to='/etc'> <li>ETC.</li> </Link>
            </ul>
        </div>
    </div>
    

    
  )
}
