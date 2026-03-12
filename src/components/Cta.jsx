export default function Cta() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-navy-800 to-navy-600">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className="text-white text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          一緒に働きませんか？
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
          まずはお気軽にお電話ください。
          <br />
          見学のみのご相談も歓迎しております。
        </p>

        <a
          href="tel:03-3562-7877"
          className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-colors shadow-xl hover:shadow-2xl"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          電話で応募する
        </a>

        <p className="text-white/90 text-xl font-bold mt-4 tracking-wider">03-3562-7877</p>
        <p className="text-white/50 text-xs mt-2">受付時間：10:00〜18:00（休診日を除く）</p>
      </div>
    </section>
  )
}
