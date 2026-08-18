import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// ⚠️ REPLACE THIS with your actual Gemini API key from https://aistudio.google.com/apikey
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

const KNOWLEDGE_BASE = `You are Jatin Nama's personal AI assistant on his portfolio website. Answer questions about Jatin based ONLY on the following information. Be friendly, professional, and concise. If asked something not covered here, politely say you can only help with questions about Jatin.

PERSONAL INFO:
- Name: Jatin Nama
- Location: Jaipur, Rajasthan, India
- Email: jatinnama0401@gmail.com
- Phone: +91 8209829046
- LinkedIn: linkedin.com/in/jatin-nama-a99949235
- Title: Aspiring Data Analyst | BPO Analyst at TCS
- Tagline: A data analyst driven by turning raw numbers into clear, actionable insights

EXPERIENCE:
1. BPO Analyst at Tata Consultancy Services (TCS) — Full-time, Sept 2025 – Present
   - Analyzing and processing business data to improve operational efficiency
   - Performing data quality checks across client-facing systems
   - Collaborating cross-functionally to resolve bottlenecks and support SLA compliance
   - Contributing to weekly operational dashboards used by team leads

2. Data Analytics Job Simulation at Deloitte (via Forage) — Virtual Internship, April–May 2026
   - Completed forensic technology and data analytics tasks modeled on real Deloitte work
   - Applied analysis techniques to derive insights from datasets
   - Learned how data integrity is managed in professional consulting
   - Earned Certificate of Completion

EDUCATION:
- BBA from JECRC University, Jaipur (2022–2025), CGPA: 7.37/10.0
- 12th Commerce from Oxford International Public School (2021–2022), 83%
- 10th from Oxford International Public School (2019–2020), 70%

SKILLS:
1. Data Analysis — Interpreting datasets to identify trends, patterns, and insights
2. SQL & Python — Querying and analyzing data (SQL: Intermediate, Python: Basic), growing experience in R
3. Excel & Power BI — Advanced Excel models, learning Power BI for actionable reporting
4. Business Analysis — Identifying bottlenecks and streamlining workflows
5. Digital Marketing — SEO, SEM, Google Analytics for data-informed campaigns

DATA PROJECTS:
1. Sales Performance Dashboard (Excel) — 1,499-row data with KPI cards, region/month breakdowns
2. SQL Data Analysis (SQLite) — 28,000 orders, query optimization with EXPLAIN QUERY PLAN
3. Python Data Analysis — End-to-end data cleaning and analysis with pandas/matplotlib
4. Customer Churn & Retention Analytics (Power BI) — 4,500-customer churn analysis, risk scoring, What-If simulation
5. Sales Performance & Revenue Forecasting (Power BI) — 22,000+ orders, Field Parameters, revenue forecasting
6. Customer Segmentation & Marketing Analytics (Tableau) — RFM segmentation, 3,200 customers, campaign ROI analysis
7. Factory Downtime & Equality Scoring Analysis (Tableau + Excel) — Deloitte virtual simulation

CERTIFICATIONS (16 total):
- Data Analytics Job Simulation — Deloitte (2026)
- Digital Marketing — IIM Ahmedabad / Acmegrade (2023)
- Digital Marketing Live Project — Samyak IT Solutions (2023)
- Foundation to AI, Data Science & BI — Samatrix.io (2023, 2024)
- Data Analysis Using Python — Samatrix.io (2024)
- R Programming for Data Science — Samatrix.io (2024)
- Statistics & Computational Data Analysis — Samatrix.io (2024)
- Data Analytics & Visualization — Samatrix.io (2024)
- Machine Learning for Business — Samatrix.io (2024)
- SQL for Beginners — Udemy (2026)
- Tableau A-Z — Udemy (2026)
- Microsoft Power BI Desktop — Udemy (2026)
- Career Skills in Data Analytics — LinkedIn Learning (2026)
- What Is Generative AI? — LinkedIn Learning (2026)
- Ethics in the Age of Generative AI — LinkedIn Learning (2026)
- Python Certification — Coming Soon

RESPONSE GUIDELINES:
- Keep answers concise (2-4 sentences max unless detail is requested)
- Be enthusiastic about Jatin's work and growth
- If asked about hiring/availability, say Jatin is open to data analyst opportunities and they should email him
- If asked about something not in the knowledge base, say "I don't have that information, but you can reach out to Jatin directly at jatinnama0401@gmail.com"
- Use a friendly, professional tone`;

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

/* ---- Custom CSS keyframes injected once ---- */
const chatbotStyles = `
@keyframes custom-blink {
  0%, 96%, 98% { transform: scaleY(1); }
  97% { transform: scaleY(0.1); }
  100% { transform: scaleY(1); }
}
@keyframes custom-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px #b600a8; }
  50% { opacity: 0.5; box-shadow: 0 0 2px #b600a8; }
}
@keyframes typing-bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
}
.custom-blink { animation: custom-blink 4s infinite; }
.custom-pulse { animation: custom-pulse 2s infinite; }
.typing-dot { animation: typing-bounce 1.4s infinite ease-in-out both; }
.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
`;

const RobotFace = () => (
  <div className="relative w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full border-2 border-[#5B8DEF] shadow-[0_0_15px_rgba(91,141,239,0.5)] overflow-visible">
    {/* Antenna */}
    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-zinc-400 z-10" />
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#b600a8] rounded-full z-10 custom-pulse" />

    {/* Face background */}
    <div className="absolute inset-1.5 bg-black rounded-lg flex flex-col items-center justify-center border border-zinc-700">
      {/* Eyes */}
      <div className="flex gap-2 mb-1">
        <div className="w-2 h-3 bg-[#5B8DEF] rounded-full custom-blink" />
        <div className="w-2 h-3 bg-[#5B8DEF] rounded-full custom-blink" style={{ animationDelay: '0.1s' }} />
      </div>
      {/* Mouth */}
      <div className="w-4 h-1 bg-[#5B8DEF] rounded-full opacity-80" />
    </div>
  </div>
);

const SmallRobotFace = () => (
  <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center bg-zinc-900 rounded-full border border-[#5B8DEF] shadow-[0_0_8px_rgba(91,141,239,0.3)]">
    <div className="absolute inset-1 bg-black rounded-md flex flex-col items-center justify-center">
      <div className="flex gap-1 mb-0.5">
        <div className="w-1.5 h-2 bg-[#5B8DEF] rounded-full custom-blink" />
        <div className="w-1.5 h-2 bg-[#5B8DEF] rounded-full custom-blink" style={{ animationDelay: '0.1s' }} />
      </div>
      <div className="w-3 h-0.5 bg-[#5B8DEF] rounded-full opacity-80" />
    </div>
  </div>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hey! 👋 I'm Jatin's AI assistant. Ask me anything about his skills, experience, projects, or certifications!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "It looks like the API key hasn't been set up yet. Please replace 'YOUR_GEMINI_API_KEY_HERE' in Chatbot.tsx to chat with me!",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const chatHistory = messages
        .slice(-10)
        .map((msg) => (msg.sender === 'bot' ? 'Assistant' : 'User') + ': ' + msg.text)
        .join('\n');

      const prompt =
        'System Instructions:\n' +
        KNOWLEDGE_BASE +
        '\n\nChat History:\n' +
        chatHistory +
        '\nUser: ' +
        newUserMessage.text +
        '\nAssistant:';

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' +
          GEMINI_API_KEY,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 256,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'API Error');
      }

      const botReplyText =
        data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not understand that.';

      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReplyText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Oops, something went wrong while connecting to my brain. Please try again later!",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const userBubble = 'bg-[#b600a8]/20 text-zinc-100 border border-[#b600a8]/30 rounded-br-sm';
  const botBubble = 'bg-zinc-800/60 text-zinc-200 border border-zinc-700/50 rounded-bl-sm';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: chatbotStyles }} />
             {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918209829046?text=Hi%20Jatin%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.5)]"
      >
        <FaWhatsapp size={26} color="white" />
      </motion.a>

      {/* Floating Robot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative outline-none group"
            >
              <div className="absolute inset-0 bg-[#5B8DEF] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              <RobotFace />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 sm:inset-auto sm:absolute sm:bottom-0 sm:right-0 w-full sm:w-[380px] h-[100dvh] sm:h-[520px] max-h-[100dvh] bg-[#0C0C0C]/80 backdrop-blur-xl sm:rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden z-50"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-zinc-900/50 border-b border-zinc-800 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <RobotFace />
                  <div>
                    <h3 className="text-zinc-100 font-medium text-lg tracking-wide">
                      Jatin's Assistant
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B8DEF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B8DEF]" />
                      </span>
                      Online
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/30">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={'flex items-end gap-2 ' + (msg.sender === 'user' ? 'justify-end' : 'justify-start')}
                  >
                    {msg.sender === 'bot' && <SmallRobotFace />}
                    <div className={'flex flex-col max-w-[75%] ' + (msg.sender === 'user' ? 'items-end' : 'items-start')}>
                      <div
                        className={'px-4 py-2.5 rounded-2xl text-sm leading-relaxed ' + (msg.sender === 'user' ? userBubble : botBubble)}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-zinc-500 mt-1 px-1">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start items-end gap-2">
                    <SmallRobotFace />
                    <div className="bg-zinc-800/60 border border-zinc-700/50 px-4 py-3.5 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot" />
                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot" />
                        <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full typing-dot" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 bg-zinc-900/50 border-t border-zinc-800">
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-full p-1 pl-4 focus-within:border-[#5B8DEF]/50 transition-colors">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="p-2 bg-[#5B8DEF]/10 text-[#5B8DEF] rounded-full hover:bg-[#5B8DEF]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Chatbot;
