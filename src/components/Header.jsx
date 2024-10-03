import Logout from "./Logout";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Tasks</div>
          <nav className="hidden md:flex space-x-8">
            <Logout></Logout>
          </nav>
        </div>

        <div id="mobile-menu" className="md:hidden hidden bg-white shadow-md">
          <nav className="space-y-4 px-4 py-6">
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
