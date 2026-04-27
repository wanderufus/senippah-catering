import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Cakes",
    image: "/cake.jpg",
    description: "Custom cakes for weddings, birthdays & events",
    path: "/services/cakes",
  },
  {
    title: "Small Chops",
    image: "/small-chop.jpg",
    description: "Tasty bite-sized treats for your guests",
    path: "/services/small-chops",
  },
  {
    title: "Catering",
    image: "/catering.jpg",
    description: "Full catering services for all occasions",
    path: "/services/catering",
  },
  {
    title: "Decoration",
    image: "/decoration.jpg",
    description: "Elegant event decoration & setup",
    path: "/services/decoration",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className=" relative py-20 px-6 bg-white">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-white text-(--color-secondary) uppercase tracking-wider">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600">
          Explore what we offer for your events
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => {
           navigate(service.path);
             
            }}
            className="group cursor-pointer bg-(--color-accent) rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-(--color-primary)]">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>

              {/* CTA */}
              <button className="mt-4 text-sm font-bold text-(--color-secondary)] group-hover:underline">
                View Service →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ServicesSection;