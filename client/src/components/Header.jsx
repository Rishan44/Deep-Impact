import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-600'>
        <div className='flex justify-between items-center 
        max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>DEEP IMPACT</h1>
            </Link>
            <ul className='flex gap-5'>
               <Link to='/'> <li>HOME</li> </Link> 
               <Link to='/shop' > <li>SHOP</li> </Link>
               <Link to='/contact'> <li>CONTACT</li> </Link>
              <Link to='/etc'> <li>ETC</li> </Link>
            </ul>
        </div>
    </div>
  )
}
