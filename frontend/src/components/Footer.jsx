import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Hospital Info */}
          <div>
            <p className="text-lg font-bold text-white">
              Ghurki Trust Teaching Hospital
            </p>
            <p className="mt-4 text-gray-300">
              Address:
              <span className="block">G.T RD-Burki Rd Link, Band</span>
              <span className="block">Road, Jallo Morr, Lahore, Pakistan</span>
            </p>
            <p className="mt-4 text-gray-300">UAN: (042) 111 348 348</p>
            <p className="mt-4 text-gray-300">
              WhatsApp: +923400203002
              <span className="block">+923481348348</span>
            </p>
            <p className="mt-4 text-gray-300">Email: info@ghurkitrust.org.pk</p>
          </div>

          {/* Section 2: Information Links */}
          <div>
            <p className="font-medium text-white">Information</p>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {["Make a Donation", "Doctors", "Hospital News", "Our Affiliations", "Privacy Policy"].map((link, idx) => (
                <a key={idx} href="#information" className="text-gray-300 hover:text-red-500 transition">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3: Useful Links */}
          <div>
            <p className="font-medium text-white">Useful Links</p>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {["Online Lab Reports", "Careers", "Live Audit Reports", "Employee Email", "Newsletters", "Privacy Policy"].map((link, idx) => (
                <a key={idx} href="#" className="text-gray-300 hover:text-red-500 transition">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <p className="text-lg font-bold text-white">Email Newsletter</p>
            <p className="mt-4 text-gray-300">
              Sign up with your name and email to
              <span className="block">get fresh updates.</span>
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="mt-4 w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="mt-2 w-full bg-red-700 px-4 py-2 text-white rounded hover:bg-red-600 transition">
              Subscribe
            </button>
            <p className="mt-4 text-gray-300">Or follow our social profile</p>
            <ul className="mt-2 flex gap-4">
              {[{ icon: Facebook, label: "Facebook" }, { icon: Instagram, label: "Instagram" }, { icon: Twitter, label: "Twitter" }].map(
                ({ icon: Icon, label }, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white transition" target="_blank" rel="noreferrer">
                      <span className="sr-only">{label}</span>
                      <Icon className="size-6" />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              Copyright  {new Date().getFullYear()} &copy; Ghurki Trust Teaching Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
