export default function Resume() {
	return (
		<section className="py-20 bg-white dark:bg-slate-800">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white">
					Professional Experience
				</h2>

				<div className="space-y-12">
					<div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-8 shadow-lg">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-slate-800 dark:text-white">
									Senior Software Engineer
								</h3>
								<p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
									Remote
								</p>
							</div>
						</div>
						<ul className="space-y-3 text-slate-600 dark:text-slate-300">
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Supported a Node.js backend API powering a mobile app with
									over 1 million users in the last 180 days.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Migrated backend jobs from AWS to GCP using Dagster, GCP
									Functions, Python and Typescript.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Architected and deployed scalable backend APIs (Python,
									Node.js, .NET) on AWS, powering 34,000+ monthly scheduling
									events.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Led development of event-driven features using AWS SNS and SQS
									for real-time customer service notifications.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Designed a sentiment-analysis engine using ChatGPT, integrated
									with Slack to monitor 4,000+ monthly customer interactions.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Supported and extended an HRMS application for tracking
									Payrol, and insurance information using ASP.Net, C#, MVC, MS
									SQL Server. Javascript and Bootstrap in the front-end.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Partnered with product and ops teams to align cloud-first
									backend systems with traceable KPIs to yield valuable data
									driven decision to make a real business impact.
								</span>
							</li>
						</ul>
					</div>

					<div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-8 shadow-lg">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
							<div>
								<h3 className="text-2xl font-bold text-slate-800 dark:text-white">
									Software Engineer
								</h3>
								<p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
									Remote
								</p>
							</div>
						</div>
						<ul className="space-y-3 text-slate-600 dark:text-slate-300">
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Rebuilt legacy .NET and Silverlight systems as Angular-based,
									testable SPAs, enhancing usability and accessibility.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Advocated for scalable frontend architecture and introduced
									Electron and test automation to the dev process.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Collaborated closely with product and QA to prioritize
									high-impact features and improve release cadence.
								</span>
							</li>
							<li className="flex items-start">
								<div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
								<span>
									Contributed to inclusive onboarding and mentorship practices
									within the engineering org.
								</span>
							</li>
						</ul>
					</div>

					<div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-8 shadow-lg">
						<h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
							Education
						</h3>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between">
							<div>
								<p className="text-xl font-semibold text-slate-700 dark:text-slate-200">
									Florida Atlantic University
								</p>
								<p className="text-lg text-slate-600 dark:text-slate-300">
									Bachelor of Science in Computer Science
								</p>
							</div>
							<div className="text-slate-600 dark:text-slate-300 font-medium">
								Boca Raton, FL • August 2013
							</div>
						</div>
					</div>
				</div>

				<div className="text-center mt-16">
					<a
						href="mailto:jalava85@gmail.com"
						className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Get In Touch
					</a>
				</div>
			</div>
		</section>
	);
}
