export default function ClinicInfo() {
  return (
    <section id="access" className="py-16 md:py-24 bg-navy-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-400 text-sm tracking-[0.2em] mb-2 font-medium">ACCESS</p>
          <h2
            className="text-white text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            医院情報・アクセス
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-5">
            <div>
              <h3
                className="text-white text-xl font-bold mb-1"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                東京銀座歯科
              </h3>
              <p className="text-white/60 text-sm">TOKYO GINZA DENTAL CLINIC</p>
            </div>

            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex gap-3">
                <span className="text-gold-400 shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <span>〒104-0061 東京都中央区銀座1-7-6 銀座河合ビル8F</span>
              </div>

              <div className="flex gap-3">
                <span className="text-gold-400 shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <a href="tel:03-3562-7877" className="hover:text-gold-400 transition-colors">03-3562-7877</a>
              </div>

              <div className="flex gap-3">
                <span className="text-gold-400 shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <p>診療時間：10:00〜13:00 / 14:00〜18:00</p>
                  <p className="text-white/50">休診日：木曜・隔週土日</p>
                </div>
              </div>
            </div>

            {/* Access info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <h4 className="text-gold-400 text-sm font-bold mb-2">アクセス</h4>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="bg-navy-700 text-white text-[10px] px-2 py-0.5 rounded">有楽町線</span>
                銀座一丁目駅から徒歩2分
              </p>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="bg-navy-700 text-white text-[10px] px-2 py-0.5 rounded">銀座線</span>
                京橋駅から徒歩5分
              </p>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="bg-navy-700 text-white text-[10px] px-2 py-0.5 rounded">浅草線</span>
                宝町駅から徒歩6分
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.169!2d139.7672!3d35.6742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be50b9a3097%3A0x4e5e40c498e2a0d6!2z5p2x5Lqs6YqA5bqn5q2v56eR!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="東京銀座歯科の地図"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
