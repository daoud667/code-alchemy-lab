import CourseCard from '../components/CourseCard';
import { courses } from '../lib/courses';

const HERO_IMAGE_URL = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5093ddb-7163-4b96-a6b1-ac9906fb7d58/soma-hero-banner-etsgyzp-1762469518599.webp';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-40 px-6"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">Unlock Your Coding Potential</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join Soma Code and master programming languages through interactive, hands-on learning experiences designed for the modern developer.</p>
          <a
            href="#courses"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 inline-block transform hover:scale-105"
          >
            Explore Courses
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Courses</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Start your journey with our expertly crafted courses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}