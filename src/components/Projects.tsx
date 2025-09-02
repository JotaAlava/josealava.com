const projects = [
	{
		name: '1clave.com',
		url: 'https://1clave.com',
		description: 'Digital authentication platform',
		status: 'Active'
	},
	{
		name: 'christianbjerre.com',
		url: 'https://christianbjerre.com',
		description: 'Personal portfolio website',
		status: 'Inactive'
	},
	{
		name: 'elpomodoro.com',
		url: 'https://elpomodoro.com',
		description: 'Productivity application for remote employees',
		status: 'Active'
	},
	{
		name: 'josealava.com',
		url: 'https://josealava.com',
		description: 'Personal portfolio and resume',
		status: 'Active'
	},
	{
		name: 'nazavzhdy.com',
		url: 'https://nazavzhdy.com',
		description: 'Digital Memorial Platform for the Ukranian military',
		status: 'Active'
	},
	{
		name: 'siemprefy.com',
		url: 'https://siemprefy.com',
		description: 'Digital Memorial Platform',
		status: 'Inactive'
	},
	{
		name: 'sophrosyn3.com',
		url: 'https://sophrosyn3.com',
		description: 'Scalping Stock Calculator',
		status: 'Active'
	},
	{
		name: 'thelastpaywall.com',
		url: 'https://thelastpaywall.com',
		description: 'AI Agent - Summarizes News Behind Paywalls',
		status: 'Active'
	},
	{
		name: 'theoracl3.com',
		url: 'https://theoracl3.com',
		description: 'AI Agent - SMS Dating Coach',
		status: 'Active'
	},
	{
		name: 'thereal.reviews',
		url: 'https://thereal.reviews',
		description: 'Authentic review platform',
		status: 'Active'
	}
];

export default function Projects() {
	return (
		<section className="py-20 bg-white dark:bg-slate-800">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white">
					My Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-semibold text-slate-800 dark:text-white">
									{project.name}
								</h3>
								<span
									className={`px-3 py-1 text-sm rounded-full ${
										project.status === 'Active'
											? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
											: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
									}`}
								>
									{project.status}
								</span>
							</div>
							<p className="text-slate-600 dark:text-slate-300 mb-4">
								{project.description}
							</p>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
							>
								Visit Site
								<svg
									className="w-4 h-4 ml-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
