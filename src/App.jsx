import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import AdminMessages from './pages/AdminMessages'
import ChatConversations from './pages/ChatConversations'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetail/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin/messages" element={<AdminMessages/>} />
          <Route path="/admin/conversations" element={<ChatConversations/>} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}
