import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ChatConversations() {
  const [conversations, setConversations] = useState([])
  const [selectedConvo, setSelectedConvo] = useState(null)

  useEffect(() => {
    const convos = JSON.parse(localStorage.getItem('chatConversations') || '[]')
    setConversations(convos.reverse()) // Latest first
  }, [])

  const deleteConvo = (id) => {
    const updated = conversations.filter(c => c.id !== id)
    setConversations(updated)
    localStorage.setItem('chatConversations', JSON.stringify(updated.reverse()))
    setSelectedConvo(null)
  }

  const clearAll = () => {
    if (window.confirm('Delete all conversations?')) {
      localStorage.removeItem('chatConversations')
      setConversations([])
      setSelectedConvo(null)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Chat Conversations</h1>
          <p className="text-white/70">View all chatbot conversations with potential clients</p>
        </div>
        {conversations.length > 0 && (
          <button
            onClick={clearAll}
            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
          >
            Clear All
          </button>
        )}
      </div>

      {conversations.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-white/50 text-lg">No conversations yet</p>
          <p className="text-white/30 mt-2">Conversations will appear here when visitors use the chatbot</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversation List */}
          <div className="md:col-span-1 space-y-3">
            {conversations.map((convo) => (
              <motion.div
                key={convo.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedConvo(convo)}
                className={`p-4 rounded-lg border cursor-pointer ${
                  selectedConvo?.id === convo.id
                    ? 'bg-accent/20 border-accent'
                    : 'bg-navy-2 border-white/10 hover:border-accent/50'
                }`}
              >
                <div className="text-white/60 text-sm mb-2">
                  {new Date(convo.timestamp).toLocaleString()}
                </div>
                <div className="text-white text-sm">
                  {convo.messages.length} messages
                </div>
                <div className="text-white/40 text-xs mt-2 truncate">
                  {convo.messages[1]?.text || 'No user message'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conversation Detail */}
          <div className="md:col-span-2">
            {selectedConvo ? (
              <div className="bg-navy-2 rounded-lg border border-white/10 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Conversation Details</h2>
                    <p className="text-white/60 text-sm">
                      {new Date(selectedConvo.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteConvo(selectedConvo.id)}
                    className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 text-sm"
                  >
                    Delete
                  </button>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {selectedConvo.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-accent/20 text-white border border-accent/30'
                            : 'bg-navy border border-white/10 text-white/90'
                        }`}
                      >
                        <div className="text-xs text-white/40 mb-1">
                          {msg.sender === 'user' ? 'Client' : 'AI'}
                        </div>
                        <div className="whitespace-pre-line">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-navy-2 rounded-lg border border-white/10 p-20 text-center">
                <p className="text-white/50">Select a conversation to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
