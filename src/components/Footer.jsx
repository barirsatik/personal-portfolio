import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-auto border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto text-center">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Elite AI Engineer. Built with React & Tailwind CSS.
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
