export default function Footer() {
  return (
    <footer className="bg-navy-950 py-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p
          className="text-white/80 text-sm font-bold tracking-wider mb-2"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          東京銀座歯科
        </p>
        <p className="text-white/40 text-xs">
          〒104-0061 東京都中央区銀座1-7-6 銀座河合ビル8F
        </p>
        <p className="text-white/30 text-xs mt-4">
          &copy; Tokyo Ginza Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
