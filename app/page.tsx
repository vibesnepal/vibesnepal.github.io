export default function Home() {
  return (
    <main className="bg-[#f5f0e8] text-[#4b2e2e] min-h-screen font-sans">
      {/* Navbar */}
      <header className="w-full px-6 py-4 bg-[#f5f0e8] flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">VibesNepal</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center gap-8 px-6 py-12 max-w-7xl mx-auto">
        <img src="/images/hero-model.jpg" alt="Model" className="rounded-lg" />
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Bringing Nepalese Vibes to You</h2>
          <div className="space-x-4">
            <button className="bg-[#4b2e2e] text-white px-6 py-2 rounded hover:opacity-90">Shop T-Shirts</button>
            <button className="bg-[#4b2e2e] text-white px-6 py-2 rounded hover:opacity-90">Shop Handicrafts</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#f5f0e8] py-12 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Temple T-shirt", price: "69 kr", image: "/images/temple-shirt.jpg" },
            { name: "Singing Bowl", price: "€45 kr", image: "/images/singing-bowl.jpg" },
            { name: "Buddha T-shirt", price: "28 kr", image: "/images/buddha-shirt.jpg" },
            { name: "Handwoven Bag", price: "33 kr ", image: "/images/handwoven-bag.jpg" },
          ].map((product, idx) => (
            <div key={idx} className="text-center">
              <img src={product.image} alt={product.name} className="w-full rounded mb-2" />
              <p>{product.name}</p>
              <p className="text-sm text-[#7c5c5c]">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e6dace] text-[#4b2e2e] py-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 justify-start md:justify-end">
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/payment.svg" alt="Payments" className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
