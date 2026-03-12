import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'コンセプト', href: '#concept' },
    { label: '当院について', href: '#treatment' },
    { label: 'スタッフの声', href: '#staff' },
    { label: '3つのポイント', href: '#points' },
    { label: '募集要項', href: '#requirements' },
    { label: 'アクセス', href: '#access' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="text-white font-bold text-base md:text-lg tracking-wide" style={{ fontFamily: '"Noto Serif JP", serif' }}>
          東京銀座歯科
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-gold-400 text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:03-3562-7877"
            className="bg-gold-500 hover:bg-gold-400 text-white text-sm font-bold px-5 py-2 rounded transition-colors"
          >
            応募する
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 bg-transparent border-none"
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-navy-950/98 border-t border-white/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-white/80 hover:text-gold-400 text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:03-3562-7877"
              className="block text-center bg-gold-500 hover:bg-gold-400 text-white text-sm font-bold px-5 py-3 rounded transition-colors"
            >
              電話で応募する
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
