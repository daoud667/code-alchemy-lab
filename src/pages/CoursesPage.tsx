import { courses } from '../lib/courses';
import CourseCard from '../components/CourseCard';

export default function CoursesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          All Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}