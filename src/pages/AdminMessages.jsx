import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AdminMessages() {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = () => {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    setMessages(submissions.reverse()) // Show newest first
  }

  const deleteMessage = (id) => {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    const filtered = submissions.filter(msg => msg.id !== id)
    localStorage.setItem('contactSubmissions', JSON.stringify(filtered))
    loadMessages()
    setSelectedMessage(null)
  }

  const exportMessages = () => {
    const dataStr = JSON.stringify(messages, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `contact-messages-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Contact Messages</h1>
        <p className="text-white/70">View and manage all contact form submissions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
          <div className="text-accent text-2xl mb-2">📨</div>
          <div className="text-3xl font-bold text-white">{messages.length}</div>
          <div className="text-white/60 text-sm">Total Messages</div>
        </div>
        <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
          <div className="text-green-500 text-2xl mb-2">✓</div>
          <div className="text-3xl font-bold text-white">
            {messages.filter(m => !m.status || m.status !== 'pending').length}
          </div>
          <div className="text-white/60 text-sm">Delivered</div>
        </div>
        <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
          <div className="text-yellow-500 text-2xl mb-2">⏳</div>
          <div className="text-3xl font-bold text-white">
            {messages.filter(m => m.status === 'pending').length}
          </div>
          <div className="text-white/60 text-sm">Pending</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={loadMessages}
          className="px-4 py-2 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2 text-sm"
        >
          <span>🔄</span> Refresh
        </button>
        <button
          onClick={exportMessages}
          className="px-4 py-2 bg-navy-2 text-white font-semibold rounded-lg hover:bg-navy-2/70 transition-all border border-accent/30 flex items-center gap-2 text-sm"
        >
          <span>📥</span> Export JSON
        </button>
      </div>

      {/* Messages List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List View */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">All Messages ({messages.length})</h2>
          {messages.length === 0 ? (
            <div className="bg-navy-2 rounded-xl p-8 border border-white/10 text-center">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-white/60">No messages yet</p>
              <p className="text-white/40 text-sm mt-2">Messages will appear here when someone fills the contact form</p>
            </div>
          ) : (
            messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-navy-2 rounded-xl p-4 border cursor-pointer transition-all ${
                  selectedMessage?.id === msg.id
                    ? 'border-accent shadow-lg'
                    : 'border-white/10 hover:border-accent/50'
                }`}
                onClick={() => setSelectedMessage(msg)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{msg.name}</h3>
                    <p className="text-accent text-sm">{msg.email}</p>
                  </div>
                  {msg.status === 'pending' && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded">
                      Pending
                    </span>
                  )}
                </div>
                <p className="text-white/80 font-medium text-sm mb-1">{msg.subject}</p>
                <p className="text-white/60 text-sm line-clamp-2 mb-2">{msg.message}</p>
                <p className="text-white/40 text-xs">{formatDate(msg.timestamp)}</p>
              </motion.div>
            ))
          )}
        </div>

        {/* Detail View */}
        <div className="lg:sticky lg:top-4 h-fit">
          <h2 className="text-xl font-semibold text-white mb-4">Message Details</h2>
          {selectedMessage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-navy-2 rounded-xl p-6 border border-accent/20"
            >
              <div className="space-y-4">
                {/* From */}
                <div>
                  <label className="text-white/60 text-sm font-medium">From:</label>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-white font-semibold">{selectedMessage.name}</p>
                    <button
                      onClick={() => copyToClipboard(selectedMessage.name)}
                      className="text-accent hover:text-accent/80 text-sm"
                    >
                      📋
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-white/60 text-sm font-medium">Email:</label>
                  <div className="mt-1 flex items-center justify-between">
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-accent hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(selectedMessage.email)}
                      className="text-accent hover:text-accent/80 text-sm"
                    >
                      📋
                    </button>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-white/60 text-sm font-medium">Subject:</label>
                  <p className="text-white mt-1 font-semibold">{selectedMessage.subject}</p>
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/60 text-sm font-medium">Message:</label>
                  <div className="mt-1 bg-navy/50 rounded-lg p-4 border border-white/10">
                    <p className="text-white/90 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedMessage.message)}
                    className="mt-2 text-accent hover:text-accent/80 text-sm flex items-center gap-2"
                  >
                    📋 Copy Message
                  </button>
                </div>

                {/* Timestamp */}
                <div>
                  <label className="text-white/60 text-sm font-medium">Received:</label>
                  <p className="text-white/80 mt-1">{formatDate(selectedMessage.timestamp)}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}&body=Hi ${selectedMessage.name},%0D%0A%0D%0A`}
                    className="flex-1 px-4 py-2 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 transition-all text-center text-sm"
                  >
                    📧 Reply
                  </a>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="px-4 py-2 bg-red-500/20 text-red-500 font-semibold rounded-lg hover:bg-red-500/30 transition-all border border-red-500/30 text-sm"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-navy-2 rounded-xl p-12 border border-white/10 text-center">
              <div className="text-5xl mb-4">👈</div>
              <p className="text-white/60">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-gradient-to-br from-accent/10 to-gold/5 rounded-xl p-6 border border-accent/20">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>💡</span> How to Access This Page
        </h3>
        <div className="text-white/80 text-sm space-y-2">
          <p>• <strong>Current URL:</strong> Add <code className="bg-navy px-2 py-1 rounded">/admin/messages</code> to your portfolio URL</p>
          <p>• Messages are stored in your browser's localStorage (works offline)</p>
          <p>• For EmailJS setup: Visit <a href="https://www.emailjs.com" target="_blank" className="text-accent hover:underline">emailjs.com</a> (Free plan: 200 emails/month)</p>
          <p>• Update the service_id, template_id, and user_id in ContactForm.jsx</p>
        </div>
      </div>
    </section>
  )
}
