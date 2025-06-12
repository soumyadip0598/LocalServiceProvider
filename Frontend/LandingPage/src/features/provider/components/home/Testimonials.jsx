
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Using this platform has helped me manage my beauty salon business efficiently. I can easily track bookings, manage services, and communicate with my customers all in one place.",
    author: "Sarah Johnson",
    position: "Owner, Glow Beauty Salon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "As a car rental service provider, I was struggling with managing my fleet and bookings. This platform streamlined everything and increased my revenue by 30% within three months.",
    author: "Michael Chen",
    position: "Director, Premium Auto Rentals",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "The analytics and reporting features help me understand my business performance and make data-driven decisions. It's been a game-changer for my tutoring service.",
    author: "Lisa Patel",
    position: "Founder, Excel Learning Center",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    content: "Managing my team of housekeepers and scheduling appointments has never been easier. The platform is intuitive and has all the features I need to run my housekeeping business.",
    author: "Robert Wilson",
    position: "CEO, CleanHome Services",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Trusted by Service Providers</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See what businesses like yours are saying about our platform
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="relative mx-auto max-w-3xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`
                  absolute inset-0 transition-opacity duration-500 flex flex-col items-center
                  ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              >
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>

                  <blockquote>
                    <p className="text-lg text-gray-700">{testimonial.content}</p>
                  </blockquote>

                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img 
                        className="h-12 w-12 rounded-full object-cover" 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Current visible testimonial for mobile layout */}
            <div className="relative bg-white p-8 rounded-xl shadow-md md:hidden">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>

              <blockquote>
                <p className="text-lg text-gray-700">{testimonials[activeIndex].content}</p>
              </blockquote>

              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-gray-500">{testimonials[activeIndex].position}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center justify-start z-20">
            <button 
              onClick={handlePrev} 
              className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-primary focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end z-20">
            <button 
              onClick={handleNext} 
              className="bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-primary focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
