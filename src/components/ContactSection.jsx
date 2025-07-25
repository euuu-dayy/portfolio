"use client"
import React, { useState } from 'react'
import { Mail, Briefcase, User, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="contact-item flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-300 mb-1">Email</h3>
                <p className="text-gray-300">udaykaple5@gmail.com</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-300 mb-1">Work Inquiries</h3>
                <p className="text-gray-300">I'm open to freelance opportunities and collaborations.</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-300 mb-1">Social Profiles</h3>
                <div className="flex gap-4 mt-2">
                  
                  <a href="https://www.linkedin.com/in/uday-kaple-090847231/" className="social-icon text-gray-300 hover:text-indigo-400">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  
                  <a href="https://www.instagram.com/euuu.dayy/" className="social-icon text-gray-300 hover:text-indigo-400">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/+919322250836" className="social-icon text-gray-300 hover:text-indigo-400">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/euuu-dayy" className="social-icon text-gray-300 hover:text-indigo-400">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default ContactSection