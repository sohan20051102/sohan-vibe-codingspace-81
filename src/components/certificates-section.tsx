import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"
import { useIsMobile } from "@/hooks/use-mobile"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Building, Users, Eye, Download } from "lucide-react"

// Import certificate images
import ethicalHackingCert from "@/assets/certificates/ethical_hacking_cert.jpg"
import pythonCert from "@/assets/certificates/python_cert.jpg"
import gitTrainingCert from "@/assets/certificates/git_training_cert.jpg"
import kaliLinuxCert from "@/assets/certificates/kali_linux_cert.jpg"

const certificates = [
  {
    title: "Ethical Hacking Workshop",
    organization: "KLE Society Degree College, Nagarbhavi",
    duration: "2 Days Workshop",
    date: "September 23-24, 2024",
    type: "Security",
    description: "Comprehensive workshop covering ethical hacking fundamentals, penetration testing basics, and cybersecurity principles.",
    skills: ["Ethical Hacking", "Penetration Testing", "Cybersecurity", "Network Security"],
    icon: <Award className="h-5 w-5" />,
    color: "tech-purple",
    image: ethicalHackingCert,
    pdfUrl: "/certificates/ethical_hacking_cert.pdf"
  },
  {
    title: "Python for Data Science", 
    organization: "Analogica India & KLE BCA",
    duration: "54 Hours Certification Course",
    date: "September 4-13, 2023",
    type: "Programming",
    description: "Intensive certification course covering Python programming fundamentals and data science applications.",
    skills: ["Python", "Data Science", "Data Analysis", "Programming"],
    icon: <Award className="h-5 w-5" />,
    color: "tech-blue",
    image: pythonCert,
    pdfUrl: "/certificates/python_cert.pdf"
  },
  {
    title: "Git Training",
    organization: "Simplilearn SkillUp",
    duration: "Online Course",
    date: "August 4, 2025",
    type: "Development",
    description: "Comprehensive Git training covering version control, collaboration workflows, and best practices.",
    skills: ["Git", "Version Control", "GitHub", "Collaboration"],
    icon: <Award className="h-5 w-5" />,
    color: "tech-orange",
    image: gitTrainingCert,
    pdfUrl: "/certificates/git_training_cert.pdf"
  },
  {
    title: "Introduction to Kali Linux Basics",
    organization: "Simplilearn SkillUp", 
    duration: "Online Course",
    date: "August 3, 2025",
    type: "Security",
    description: "Foundational course on Kali Linux for cybersecurity and penetration testing purposes.",
    skills: ["Kali Linux", "Linux Commands", "Security Tools", "System Administration"],
    icon: <Award className="h-5 w-5" />,
    color: "tech-green",
    image: kaliLinuxCert,
    pdfUrl: "/certificates/kali_linux_cert.pdf"
  }
]

const CertificateCard = ({ cert, handleDownload }: { cert: typeof certificates[0]; handleDownload: (pdfUrl: string, title: string) => void }) => (
  <Card className="card-hover group h-full">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-${cert.color}/10 group-hover:bg-${cert.color}/20 transition-colors`}>
            {cert.icon}
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {cert.title}
            </CardTitle>
            <Badge variant="outline" className="mt-1">
              {cert.type}
            </Badge>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="relative group/preview">
        <img
          src={cert.image}
          alt={`${cert.title} Certificate`}
          className="w-full h-32 object-cover rounded-lg border border-border/50 transition-all duration-300 group-hover/preview:shadow-lg"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(cert.pdfUrl, cert.title)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => handleDownload(cert.pdfUrl, cert.title)}
          >
            <Download className="h-4 w-4 mr-1" />
            PDF
          </Button>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{cert.description}</p>
      <div className="space-y-2 pt-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Building className="h-3 w-3" />
          <span>{cert.organization}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{cert.date}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export function CertificatesSection() {
  const isMobile = useIsMobile()

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certificates" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="hero-text-gradient">Learning</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Continuous learning is at the heart of my development journey. Here are some 
            key certifications and courses that have shaped my technical expertise.
          </p>
        </div>

        {isMobile ? (
          <div className="grid gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} cert={cert} handleDownload={handleDownload} />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: !isMobile,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <CertificateCard cert={cert} handleDownload={handleDownload} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card-gradient">
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                I'm always exploring new technologies and expanding my skill set. 
                Currently pursuing advanced DevOps certifications and cloud computing courses 
                to enhance my full-stack development capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}