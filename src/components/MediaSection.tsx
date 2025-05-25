
import { Play, FileText, Mail } from "lucide-react";

const MediaSection = () => {
  const mediaItems = [
    {
      id: 1,
      title: "Self Introduction Video",
      type: "video",
      description: "Personal introduction showcasing my background and aspirations",
      embedUrl: "https://drive.google.com/file/d/1EqGkLJU76yah3BQPaCRyECD0uhfOsWd0/preview",
      icon: Play
    },
    {
      id: 2,
      title: "Movie Review - Bomkesh Bakshi",
      type: "video", 
      description: "Movie review and analysis of the classic detective series",
      embedUrl: "https://drive.google.com/file/d/1i1f-s1NwdaZ-yPQT_yNAAz26-Ug5iv2u/preview",
      icon: Play
    },
    {
      id: 3,
      title: "Document",
      type: "document",
      description: "Important document and references",
      embedUrl: "https://drive.google.com/file/d/1hvZ3YDbvPNXRGeUQ_Ko1GUOdHAFr5aUn/preview",
      viewUrl: "https://drive.google.com/file/d/1hvZ3YDbvPNXRGeUQ_Ko1GUOdHAFr5aUn/view",
      icon: FileText
    },
    {
      id: 4,
      title: "Email Documentation",
      type: "document",
      description: "Email writing samples and communication examples",
      embedUrl: "https://drive.google.com/file/d/1JhSKOh3YUCi0Eqd6s09ilF-BIOCr6BKD/preview",
      viewUrl: "https://drive.google.com/file/d/1JhSKOh3YUCi0Eqd6s09ilF-BIOCr6BKD/view",
      icon: Mail
    }
  ];

  return (
    <section id="media" className="section-container bg-light-gray">
      <div className="text-center mb-12">
        <h2 className="section-heading">Media & Documents</h2>
        <p className="text-medium-gray max-w-2xl mx-auto">
          Explore my video presentations and important documents showcasing my communication skills and academic work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mediaItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video bg-gray-100 relative">
              <iframe
                src={item.embedUrl}
                className="w-full h-full border-0"
                allow="autoplay"
                title={item.title}
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <item.icon className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-medium-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {item.viewUrl && (
                <div className="mt-4">
                  <a
                    href={item.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-navy hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    View Full Document
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
