document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear()
  
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const mobileMenu = document.getElementById("mobileMenu")
  
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll(".mobile-nav-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenu.classList.remove("active")
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector(".sticky-header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({
          name,
          email,
          subject,
          message,
        })
  
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      })
    }
 
  
    // Image hover effects
    const projectImages = document.querySelectorAll(".project-image")
    projectImages.forEach((image) => {
      image.addEventListener("mouseenter", function () {
        this.querySelector("img").style.transform = "scale(1.05)"
      })
  
      image.addEventListener("mouseleave", function () {
        this.querySelector("img").style.transform = "scale(1)"
      })
    })
  })
  