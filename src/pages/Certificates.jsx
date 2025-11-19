import React from 'react';
import { Helmet } from 'react-helmet-async';

const Certificates = () => {
    const certificates = [
        {
            name: 'TensorFlow Developer Certificate',
            issuer: 'Google',
            date: '2023',
            id: 'Credential ID: 12345678'
        },
        {
            name: 'Deep Learning Specialization',
            issuer: 'Coursera / DeepLearning.AI',
            date: '2022',
            id: 'Credential ID: 87654321'
        },
        {
            name: 'AWS Certified Machine Learning - Specialty',
            issuer: 'Amazon Web Services',
            date: '2022',
            id: 'Credential ID: AWS-ML-123'
        },
        {
            name: 'Professional Data Engineer',
            issuer: 'Google Cloud',
            date: '2021',
            id: 'Credential ID: GCP-DE-456'
        }
    ];

    return (
        <div className="container mx-auto pt-32 pb-20 px-6">
            <Helmet>
                <title>Certificates | Elite AI Engineer</title>
                <meta name="description" content="Professional certifications in Machine Learning, Deep Learning, and Cloud Computing." />
            </Helmet>
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Certifications</h1>
                <p className="text-muted-foreground text-lg">Continuous learning and professional development.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certificates.map((cert, index) => (
                    <div key={index} className="group bg-card border border-border p-8 rounded-xl flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]">
                        <div className="w-16 h-16 mb-6 rounded-full bg-secondary flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🏆</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                        <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                        <div className="mt-auto text-sm text-muted-foreground">
                            <p>{cert.date}</p>
                            <p className="text-xs mt-1 opacity-70 font-mono">{cert.id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
