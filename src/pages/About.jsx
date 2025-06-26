export const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Get to know who we are, what we do, and why we love doing it.
        </p>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full flex justify-center">
  <img
    src="/images/webit.jpg"
    alt="About"
    style={{ maxWidth: "200px", width: "50%", height: "auto" }}
    className="rounded-xl shadow-lg"
  />
</div>



          {/* Right: Text */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are a passionate team of developers, designers, and problem-solvers
              helping businesses build impactful digital products. With years of experience
              in web development, mobile apps, and creative design, we bring ideas to life.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower businesses with technology that drives growth,
              efficiency, and innovation. Whether you're a startup or an enterprise, we
              create solutions tailored to your needs.
            </p>

            <a
              href="/proposal"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Work With Us
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
          <div>
            <h4 className="text-3xl font-bold text-blue-600">50+</h4>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600">20+</h4>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600">5+</h4>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
