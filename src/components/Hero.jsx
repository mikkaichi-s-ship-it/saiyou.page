export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Gradient background as hero image placeholder */}
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 40%, #1a4a6e 70%, #0d1f33 100%)',
          }}
        >
          <svg className="w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="300" r="150" fill="white" />
            <circle cx="600" cy="200" r="100" fill="white" />
            <circle cx="500" cy="450" r="120" fill="white" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold-400 text-sm md:text-base tracking-[0.3em] mb-4 font-medium">
          TOKYO GINZA DENTAL CLINIC
        </p>
        <h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          確かな技術で、
          <br />
          患者様の人生を豊かに
        </h1>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6" />
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
          インプラント治療の実績豊富な歯科衛生士募集
        </p>
        <p className="text-white/70 text-sm md:text-base mb-10">
          残業ほぼなし・年間休日125日・銀座一丁目駅 徒歩30秒
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03-3562-7877"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            電話で応募する
          </a>
          <a
            href="#requirements"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-lg text-base transition-colors"
          >
            募集要項を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
