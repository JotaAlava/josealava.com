const skillsData = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Go"],
  "Frameworks & Tools": [".NET 8", "Angular", "React", "Node.js", "REST APIs", "WebSockets"],
  "Cloud & DevOps": [
    "AWS (Lambda, EC2, S3, SNS)",
    "Docker",
    "Kubernetes", 
    "Terraform",
    "GitHub Actions"
  ],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  "CI/CD & Testing": ["GitHub Actions", "Jenkins", "Jest", "Jasmine", "TD"]
};

export default function Skills() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-600 pb-2">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-slate-600 dark:text-slate-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}