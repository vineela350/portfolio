// strings.js
const projects_strings = {
    projects: [
      {
        title: 'Item Dashboard',
        description: 'React, Django, MySQL, Auth token Security',
        details: [
          'Led design and development of Item Dashboard web app for efficient inventory management.',
          'Utilized Django for robust backend functionality, React(Javascript) for an intuitive and dynamic user interface, SQLite for efficient database storage',
          'Implemented token-based security for enhanced data protection and deployed the application on Heroku for seamless scalability and accessibility.'
        ],
        imageUrl: 'itemDashboard.jpg', // Replace with the path to your image
        gitUrl2: [
            {
                front_end: 'https://github.com/vineela350/frontend_react_item_dashboard',
                back_end: 'https://github.com/vineela350/backend_django_item_dashboard'
            }
        ]
      },
      {
        title: 'Hunger Help Hub',
        description: 'React, Node.js, MongoDB',
        details: [
          'Connected food donors and receivers through a web application.',
          'Developed Hunger Help Hub, a MERN stack application, integrating Google Maps API to visualize donation locations, enhancing user engagement and platform utility.',
          'Architected secure backend services with Node.js and managed a MongoDB database, ensuring efficient data handling and system scalability.',
          'Crafted a responsive user interface with React.js, incorporating dynamic map functionalities and real-time updates to facilitate easy donor-recipient interactions.'
        ],
        imageUrl: 'hungerHelp.jpeg', // Replace with the path to your image
      },
      {
        title: 'Alumni Marketplace',
        description: 'Spring Boot, React, MySQL, Outh 2.0 security',
        details: [
          'Created an alumni marketplace web application  using Spring Boot and React, enabling secure alumni-to-student transactions through OAuth 2.0.',
          'Implemented user-friendly features such as registration, advanced search, reviews, and efficient data management with a Postgresql database.'
        ],
        imageUrl: 'alumni.jpeg', // Replace with the path to your image
      },
      {
        title: 'Easy Print',
        description: 'Flutter, Google Firebase',
        details: [
          'Devised a Flutter mobile application facilitating online document printing, allowing users to choose a store, specify completion times, and receive notifications upon order completion.'
        ],
        imageUrl: 'easyPrint.jpeg', // Replace with the path to your image
        gitUrl1: [
            
            {
                code: 'https://github.com/vineela350/EasyPrint',
            }
            
        ]
      },
      {
        title: 'Quora Sincere  and Insincere Questions',
        description: 'Pandas, Bert',
        details: [
          'Successfully increased the F1-Score of a machine learning model from 47% to 81% by integrating advanced NLP techniques, including TF-IDF for feature representation and BERT for improved accuracy, showcasing deep expertise in natural language processing and model optimization.',
          'Leveraged pandas for sophisticated data preprocessing and analysis, enabling the effective use of diverse machine learning algorithms. Demonstrated exceptional skill in data analytics, contributing to the development of a model that outperformed existing solutions in identifying sincere versus insincere questions on Quora.'
        ],
        imageUrl: 'quora.png', // Replace with the path to your image
        gitUrl1: [
            
            {
                code: 'https://github.com/vineela350/Quora-sincere-and-Insincere-Questions',
            }
            
        ]
      }
      // ... Add more projects as needed
    ]
  };
  
  export default projects_strings;
  