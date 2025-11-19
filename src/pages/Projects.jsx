import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    const projects = [
        {
            title: 'AI Image Generator',
            description: 'A deep learning model capable of generating photorealistic images from text descriptions using Stable Diffusion.',
            tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
            link: '#',
            image: null // Placeholder
        },
        {
            title: 'Natural Language Chatbot',
            description: 'An advanced chatbot powered by LLMs, fine-tuned for technical support and code generation.',
            tags: ['OpenAI API', 'LangChain', 'Node.js'],
            link: '#',
            image: null
        },
        {
            title: 'Computer Vision System',
            description: 'Real-time object detection and tracking system for autonomous vehicles.',
            tags: ['YOLOv8', 'OpenCV', 'C++'],
            link: '#',
            image: null
        },
        {
            title: 'Predictive Analytics Dashboard',
            description: 'A comprehensive dashboard for visualizing and predicting stock market trends using LSTM networks.',
            tags: ['TensorFlow', 'D3.js', 'Flask'],
            link: '#',
            image: null
        }
    ];

    return (
        <div className="container mx-auto pt-32 pb-20 px-6">
            <Helmet>
                <title>Projects | Elite AI Engineer</title>
                <meta name="description" content="Showcase of AI and Machine Learning projects including Image Generators, Chatbots, and Computer Vision systems." />
            </Helmet>
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A selection of my work in Artificial Intelligence, Machine Learning, and Software Engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
