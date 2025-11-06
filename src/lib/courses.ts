export const courses = [
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'The language of the web. Build interactive and dynamic websites.',
    imageUrl: '/images/javascript.png',
    detailedDescription: 'Our JavaScript course takes you from beginner to advanced. You will learn the fundamentals of the language, including variables, data types, functions, and control structures. Then you will dive into more advanced topics like asynchronous programming, closures, and the event loop. By the end, you will be able to build complex client-side applications with confidence.',
    curriculum: [
      {
        title: 'Module 1: Introduction to JavaScript',
        lessons: [
          { title: 'Lesson 1: What is JavaScript?', content: 'Learn about the history of JavaScript, what it is used for, and its role in web development.' },
          { title: 'Lesson 2: Setting up your environment', content: 'How to set up a development environment with a text editor and a browser with developer tools.' }
        ]
      },
      {
        title: 'Module 2: JavaScript Fundamentals',
        lessons: [
          { title: 'Lesson 1: Variables and Data Types', content: 'Understanding variables (var, let, const) and the different data types in JavaScript (String, Number, Boolean, etc.).' },
          { title: 'Lesson 2: Operators', content: 'Learn about arithmetic, assignment, comparison, and logical operators.' },
          { title: 'Lesson 3: Control Flow', content: 'Using if/else statements, switch statements, and loops to control the flow of your program.' }
        ]
      },
      {
        title: 'Module 3: Functions and Scope',
        lessons: [
          { title: 'Lesson 1: Declaring Functions', content: 'Different ways to declare functions (function declarations, function expressions, arrow functions).' },
          { title: 'Lesson 2: Scope and Closures', content: 'Understanding function scope, block scope, and the concept of closures.' }
        ]
      },
      {
        title: 'Module 4: Arrays and Objects',
        lessons: [
          { title: 'Lesson 1: Working with Arrays', content: 'Creating arrays, accessing elements, and using common array methods.' },
          { title: 'Lesson 2: Object Literals', content: 'Creating and working with objects to store collections of data.' }
        ]
      },
      {
        title: 'Module 5: Asynchronous JavaScript',
        lessons: [
          { title: 'Lesson 1: Callbacks, Promises, and Async/Await', content: 'Handling asynchronous operations in JavaScript using modern techniques.' }
        ]
      },
    ]
  },
  {
    id: 'python',
    title: 'Python',
    description: 'A versatile language for web development, data science, and automation.',
    imageUrl: '/images/python.png',
    detailedDescription: 'This Python course is designed for everyone, from absolute beginners to programmers looking to switch languages. We cover everything from basic syntax, data structures, object-oriented programming, and file handling. You will also get an introduction to popular libraries like NumPy, Pandas, and Flask, opening doors to careers in data science and web development.',
    curriculum: [
      {
        title: 'Module 1: Introduction to Python',
        lessons: [
          { title: 'Lesson 1: What is Python?', content: 'An overview of Python, its philosophy, and its various applications.' },
          { title: 'Lesson 2: Installation', content: 'Installing Python and setting up a virtual environment on your machine.' }
        ]
      },
      {
        title: 'Module 2: Python Basics',
        lessons: [
          { title: 'Lesson 1: Syntax and Variables', content: 'Learn the basic syntax of Python and how to use variables.' },
          { title: 'Lesson 2: Data Types', content: 'Explore Python\'s built-in data types: integers, floats, strings, and booleans.' }
        ]
      },
      {
        title: 'Module 3: Control Structures',
        lessons: [
          { title: 'Lesson 1: Conditional Statements', content: 'Using if, elif, and else to make decisions in your code.' },
          { title: 'Lesson 2: Loops', content: 'Repeating code with for and while loops.' }
        ]
      },
      {
        title: 'Module 4: Functions and Modules',
        lessons: [
          { title: 'Lesson 1: Defining Functions', content: 'Creating your own functions to organize code.' },
          { title: 'Lesson 2: Importing Modules', content: 'How to use Python\'s extensive standard library and third-party packages.' }
        ]
      },
      {
        title: 'Module 5: Data Structures',
        lessons: [
          { title: 'Lesson 1: Lists, Tuples, and Dictionaries', content: 'Working with Python\'s powerful built-in data structures.' }
        ]
      },
    ]
  },
  {
    id: 'java',
    title: 'Java',
    description: 'A robust language for enterprise-level applications and Android development.',
    imageUrl: '/images/java.png',
    detailedDescription: 'Learn the fundamentals of Java, one of the most in-demand programming languages in the world. This course covers core Java concepts, including object-oriented programming (OOP), data structures, and algorithms. You will build several projects to solidify your understanding and prepare for technical interviews.',
    curriculum: [
      {
        title: 'Module 1: Introduction to Java',
        lessons: [
          { title: 'Lesson 1: Setting up the Environment', content: 'Installing the JDK and an IDE like IntelliJ IDEA or Eclipse.' },
          { title: 'Lesson 2: Your First Java Program', content: 'Writing and running a classic \'Hello, World!\' program in Java.' }
        ]
      },
      {
        title: 'Module 2: Core Concepts',
        lessons: [
          { title: 'Lesson 1: Variables and Data Types', content: 'Understanding primitive data types and variables in Java.' },
          { title: 'Lesson 2: Operators', content: 'Learn about Java\'s arithmetic, relational, and logical operators.' }
        ]
      },
      {
        title: 'Module 3: Control Flow',
        lessons: [
          { title: 'Lesson 1: If/Else Statements', content: 'Making decisions in your code with conditional statements.' },
          { title: 'Lesson 2: Loops', content: 'Using for, while, and do-while loops for iteration.' }
        ]
      },
      {
        title: 'Module 4: Object-Oriented Programming',
        lessons: [
          { title: 'Lesson 1: Classes and Objects', content: 'The fundamentals of OOP: creating classes and instantiating objects.' },
          { title: 'Lesson 2: Inheritance and Polymorphism', content: 'Key OOP concepts for building robust and reusable code.' }
        ]
      },
      {
        title: 'Module 5: Data Structures',
        lessons: [
          { title: 'Lesson 1: Arrays and ArrayLists', content: 'Storing and manipulating collections of data in Java.' }
        ]
      },
    ]
  },
  {
    id: 'c',
    title: 'C',
    description: 'The foundational language for systems programming, performance-critical applications, and IoT.',
    imageUrl: '/images/c.png',
    detailedDescription: 'Understand the building blocks of modern computing with our C programming course. This course provides a deep dive into memory management, pointers, and low-level programming. It is essential for anyone interested in operating systems, embedded systems, or high-performance computing.',
    curriculum: [
      {
        title: 'Module 1: Introduction to C',
        lessons: [
          { title: 'Lesson 1: Your First C Program', content: 'Setting up a C compiler and writing your first program.' }
        ]
      },
      {
        title: 'Module 2: Variables and Data Types',
        lessons: [
          { title: 'Lesson 1: Integer, Float, and Character Types', content: 'Learn about the basic data types available in C.' }
        ]
      },
      {
        title: 'Module 3: Pointers and Memory Management',
        lessons: [
          { title: 'Lesson 1: Understanding Pointers', content: 'A deep dive into one of C\'s most powerful and challenging features.' },
          { title: 'Lesson 2: Dynamic Memory Allocation', content: 'Using malloc and free to manage memory manually.' }
        ]
      },
    ]
  },
  {
    id: 'php',
    title: 'PHP',
    description: 'Powering a vast portion of the web, especially with content management systems like WordPress.',
    imageUrl: '/images/php.png',
    detailedDescription: 'Master the server-side scripting language that powers millions of dynamic websites. Our PHP course covers everything from the basics of web requests to interacting with databases and building a complete web application from scratch. You will also learn about modern PHP practices and frameworks.',
    curriculum: [
      {
        title: 'Module 1: Introduction to PHP',
        lessons: [
          { title: 'Lesson 1: Setting up XAMPP', content: 'Creating a local development environment for PHP and MySQL.' },
          { title: 'Lesson 2: Basic Syntax', content: 'Learn the fundamentals of PHP syntax, variables, and echo.' }
        ]
      },
      {
        title: 'Module 2: Handling Web Requests',
        lessons: [
          { title: 'Lesson 1: GET and POST', content: 'Understanding how to handle data submitted from HTML forms.' }
        ]
      },
      {
        title: 'Module 3: Database Interaction',
        lessons: [
          { title: 'Lesson 1: Connecting to MySQL', content: 'Using PHP to connect to a MySQL database.' },
          { title: 'Lesson 2: CRUD Operations', content: 'Performing Create, Read, Update, and Delete operations on a database.' }
        ]
      },
    ]
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'The standard markup language for creating web pages and web applications.',
    imageUrl: '/images/html.png',
    detailedDescription: 'HTML is the skeleton of every webpage. This course will teach you how to structure web content using the latest HTML5 standards. You will learn about semantic tags, forms, media elements, and accessibility best practices to create well-structured and meaningful web pages.',
    curriculum: [
      {
        title: 'Module 1: Introduction to HTML',
        lessons: [
          { title: 'Lesson 1: Basic Structure', content: 'Learn the basic boilerplate of an HTML document, including doctype, html, head, and body tags.' }
        ]
      },
      {
        title: 'Module 2: Essential Tags',
        lessons: [
          { title: 'Lesson 1: Headings, Paragraphs, and Links', content: 'Learn how to structure text and create hyperlinks.' }
        ]
      },
      {
        title: 'Module 3: Forms and Inputs',
        lessons: [
          { title: 'Lesson 1: Creating Forms', content: 'The basics of creating forms to collect user input.' },
          { title: 'Lesson 2: Input Types', content: 'An overview of the various input types available in HTML5.' }
        ]
      },
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages and create beautiful, responsive layouts.',
    imageUrl: '/images/css.png',
    detailedDescription: 'Bring your web pages to life with CSS. This course covers everything from basic selectors and properties to advanced topics like Flexbox, Grid, and animations. You will learn how to create responsive designs that look great on any device, ensuring a great user experience.',
    curriculum: [
      {
        title: 'Module 1: Introduction to CSS',
        lessons: [
          { title: 'Lesson 1: Syntax and Selectors', content: 'Learn the basic syntax of CSS and how to target HTML elements with selectors.' }
        ]
      },
      {
        title: 'Module 2: The Box Model',
        lessons: [
          { title: 'Lesson 1: Margin, Padding, and Border', content: 'Understanding the core concept of the CSS box model.' }
        ]
      },
      {
        title: 'Module 3: Layouts',
        lessons: [
          { title: 'Lesson 1: Flexbox', content: 'A deep dive into Flexbox for creating flexible one-dimensional layouts.' },
          { title: 'Lesson 2: Grid', content: 'Mastering CSS Grid for complex two-dimensional layouts.' }
        ]
      },
    ]
  }
];