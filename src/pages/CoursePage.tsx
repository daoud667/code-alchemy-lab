import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../lib/courses';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);
  const [openModule, setOpenModule] = useState<string | null>(null);

  const toggleModule = (title: string) => {
    setOpenModule(openModule === title ? null : title);
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Course not found!</h1>
        <Link to="/courses" className="text-blue-600 dark:text-blue-400 hover:underline">Go back to courses</Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <img src={course.imageUrl} alt={course.title} className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" />
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{course.description}</p>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>{course.detailedDescription}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum.map((module) => (
                <div key={module.title} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                    onClick={() => toggleModule(module.title)}
                  >
                    {module.title}
                    {openModule === module.title ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openModule === module.title && (
                    <div className="p-4 bg-white dark:bg-gray-800/50">
                      <ul className="space-y-4">
                        {module.lessons.map((lesson) => (
                          <li key={lesson.title} className="p-4 rounded-md bg-gray-50 dark:bg-gray-700/50">
                            <h4 className="flex items-center text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                              <BookOpen className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                              {lesson.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 ml-8">{lesson.content}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Start Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
