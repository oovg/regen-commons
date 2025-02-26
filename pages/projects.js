import Layout from '../components/Layout'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Community Garden Network",
      description: "Creating a network of community gardens to increase local food security and biodiversity.",
      category: "Food Systems"
    },
    {
      id: 2,
      title: "Watershed Restoration",
      description: "Collaborative efforts to restore local watersheds and improve water quality.",
      category: "Water"
    },
    {
      id: 3,
      title: "Regenerative Agriculture Training",
      description: "Educational programs teaching regenerative farming practices to new farmers.",
      category: "Education"
    },
    {
      id: 4,
      title: "Urban Composting Initiative",
      description: "Building community-scale composting systems to reduce waste and create soil.",
      category: "Waste"
    }
  ]

  return (
    <Layout title="Projects | Regen Commons">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Our Projects
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Explore the regenerative projects we're supporting in our community.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
