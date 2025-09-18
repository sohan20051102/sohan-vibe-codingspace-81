import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Check initial size
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? "top-4 left-1/2 transform -translate-x-1/2 w-auto" 
        : "top-0 left-0 right-0 w-full"
    } ${
      isMobile && !scrolled ? "transform -translate-y-full" : ""
    }`}>
      <div className={`transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-background/70 backdrop-blur-xl border border-border/30 rounded-2xl px-6 py-3 shadow-xl mx-4" 
          : "bg-background/95 backdrop-blur-sm border-b border-border/20 px-8 py-4 shadow-sm"
      }`}>
        <div className={`flex items-center w-full ${
          scrolled ? "justify-center" : "justify-between"
        }`}>
          {/* Portfolio Brand - only show when not scrolled */}
          {!scrolled && (
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold hero-text-gradient">
                Portfolio
              </h1>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className={`hidden md:flex ${scrolled ? "" : "absolute left-1/2 transform -translate-x-1/2"}`}>
            <div className={`flex items-center ${scrolled ? "space-x-2" : "space-x-1"}`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
                >
                  {item.name}
                </button>
              ))}
              {scrolled && (
                <div className="ml-6 pl-6 border-l border-border/30">
                  <ThemeToggle />
                </div>
              )}
            </div>
          </div>

          {/* Theme toggle for full-width state */}
          {!scrolled && (
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex-1">
              <h1 className="text-xl font-bold hero-text-gradient">
                Portfolio
              </h1>
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-border/50 mt-3 pt-3">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}