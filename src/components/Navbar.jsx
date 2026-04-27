import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
       <nav className="flex items-center justify-between px-6 h-80px bg-(--color-primary) text-white">
            <div className="flex flex-col items-center leading-tight">
        <img
          src="/public/seni logo.png"
          alt="Senippah Logo"
          className="h-30 object-contain "
        />
        {/* <span className="uppercase font-bold text-sm tracking-wider">
          Senippah Catering
        </span> */}
      </div>
        <div className="space-x-4">
            <Link to="/" className="hover:text-(--color-accent) uppercase font-bold">Home</Link>
            <Link to="/services" className="hover:text-(--color-accent) uppercase font-bold">Services</Link>
            <Link to="/contact" className="hover:text-(--color-accent) uppercase font-bold">Contact</Link>
            <Link to="/about" className="hover:text-(--color-accent) uppercase font-bold">About</Link>
        </div>
       </nav>
    )
}

export default Navbar;