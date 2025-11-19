import React from 'react';

const ProjectCard = ({ title, description, tags, link, image }) => {
    return (
        <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] flex flex-col h-full">
            <div className="h-48 bg-muted relative overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-background">
                        <span className="text-4xl opacity-50 group-hover:scale-125 transition-transform duration-500">🚀</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform">
                        View Code
                    </a>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
