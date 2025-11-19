import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center pt-20">
            <Helmet>
                <title>Elite AI Engineer - Portfolio</title>
                <meta name="description" content="Portfolio of the world's leading AI engineer. Pioneering breakthrough AI systems." />
            </Helmet>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center md:text-left flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 animate-fade-in space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide uppercase">
                        Available for Hire
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Architecting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Sentient Systems
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                        Pioneering the next generation of artificial intelligence. Specializing in Large Language Models, Autonomous Agents, and Neural Architecture Search.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <Link to="/projects" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                            View Projects
                        </Link>
                        <Link to="/experience" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-background hover:bg-accent/10 hover:text-accent transition-colors">
                            My Experience
                        </Link>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                    <div className="relative z-10 w-full max-w-md bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <span className="ml-4 text-xs text-muted-foreground font-mono">ai_kernel.py</span>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <p><span className="text-purple-400">class</span> <span className="text-yellow-300">SuperIntelligence</span><span className="text-muted-foreground">(Entity):</span></p>
                            <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                            <p className="pl-8">self.capabilities = [</p>
                            <p className="pl-12 text-green-400">'AGI_Research',</p>
                            <p className="pl-12 text-green-400">'Neural_Rendering',</p>
                            <p className="pl-12 text-green-400">'Quantum_ML'</p>
                            <p className="pl-8">]</p>
                            <p className="pl-8">self.status = <span className="text-green-400">'ONLINE'</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Tech Stack */}
            <section className="container mx-auto px-6 py-20 border-t border-white/5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Models Trained', value: '500+' },
                        { label: 'Research Papers', value: '12' },
                        { label: 'Open Source', value: 'Top 1%' },
                        { label: 'Years Experience', value: '6+' },
                    ].map((stat, index) => (
                        <div key={index} className="p-6 rounded-xl bg-card/30 border border-white/5 hover:border-primary/20 transition-colors">
                            <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
