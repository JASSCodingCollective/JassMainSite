function ProjectCard({ title, description, tags, image, link }) {
  try {
    return (
      <div 
        className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 mx-4"
        data-name="project-card" 
        data-file="components/ProjectCard.js"
      >
        <div className="h-48 overflow-hidden bg-slate-700">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          ) : (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-light)] mb-3">{title}</h3>
          <p className="text-[var(--text-gray)] mb-4 text-sm line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-20 text-[var(--primary-color)] rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProjectCard component error:', error);
    return null;
  }
}
