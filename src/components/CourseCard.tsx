import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
        <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">{course.description}</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Start Learning
          </button>
        </div>
      </div>
    </Link>
  );
}