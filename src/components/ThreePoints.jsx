export default function ThreePoints() {
  const points = [
    {
      number: '01',
      title: '充実の福利厚生',
      items: [
        '年間休日125日以上',
        '完全週休2日制',
        '有給取得率100%',
        '社会保険完備',
        '住宅手当あり',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: '残業ほぼなし',
      items: [
        '18時には全員退勤',
        'プライベートにも時間を使える',
        '持ち帰り仕事もなし',
        '固定残業代なし',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'スキルアップできる職場',
      items: [
        '自費専門医院で高度な技術を習得',
        'カリキュラム完備で安心のフォロー体制',
        'セミナー参加費用補助あり',
        'インプラントの専門知識が身につく',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="points" className="py-16 md:py-24 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-400 text-sm tracking-[0.2em] mb-2 font-medium">3 POINTS</p>
          <h2
            className="text-white text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            東京銀座歯科の3つのポイント
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        {/* Point cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors"
            >
              <div className="text-gold-400 mb-4">
                {point.icon}
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-gold-400 text-3xl font-bold" style={{ fontFamily: '"Noto Serif JP", serif' }}>
                  {point.number}
                </span>
                <h3 className="text-white text-lg font-bold">{point.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {point.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-gold-400 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
