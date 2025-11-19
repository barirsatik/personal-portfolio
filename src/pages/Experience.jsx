import React from 'react';
import { Helmet } from 'react-helmet-async';

const Experience = () => {
    const experiences = [
        {
            role: 'Senior AI Engineer',
            company: 'Tech Innovations Inc.',
            period: '2023 - Present',
            description: 'Leading the generative AI team, developing proprietary LLMs and deploying them to production at scale.'
        },
        {
            role: 'Machine Learning Engineer',
            company: 'DataFlow Systems',
            period: '2021 - 2023',
            description: 'Built recommendation engines and predictive models for e-commerce clients. Optimized model inference time by 40%.'
        },
        {
            role: 'Junior Data Scientist',
            company: 'StartUp AI',
            period: '2019 - 2021',
            description: 'Conducted exploratory data analysis and implemented computer vision pipelines for quality control.'
        }
    ];

    return (
        <div className="container mx-auto pt-32 pb-20 px-6">
            <Helmet>
                <title>Experience | Elite AI Engineer</title>
                <meta name="description" content="Professional experience in AI Engineering, Data Science, and Machine Learning." />
            </Helmet>
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Work Experience</h1>
                <p className="text-muted-foreground text-lg">My professional journey in the tech industry.</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-12 last:pb-0 group">
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 h-full w-px bg-border group-last:h-0"></div>
                        {/* Timeline Dot */}
                        <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>

                        <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
