import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">RDR Software Solutions</h3>
            <p>One-Stop Solutions for Training and Development</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-violet-300 transition duration-300">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-violet-300 transition duration-300">Programs</Link></li>
              <li><Link href="/services" className="hover:text-violet-300 transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-violet-300 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Contact Us</h4>
            <p>D-225 Vivekananda Nagar Colony, Kukatpally, Hyderabad, Telangana, India</p>
            <p>Phone: +91 7337 37 2250</p>
            <p>Email: info@rdrss.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-violet-300 transition duration-300">Facebook</a>
              <a href="#" className="text-white hover:text-violet-300 transition duration-300">Instagram</a>
              <a href="#" className="text-white hover:text-violet-300 transition duration-300">LinkedIn</a>
              <a href="#" className="text-white hover:text-violet-300 transition duration-300">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 RDR Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

