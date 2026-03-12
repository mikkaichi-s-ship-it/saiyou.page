export default function StaffVoices() {
  const voices = [
    {
      name: 'Aさん',
      role: '歯科衛生士（入職3年目）',
      text: '自費診療専門なので、一人の患者様とじっくり向き合えるのが魅力です。インプラントのアシストも最初は緊張しましたが、先輩が丁寧に教えてくれて、今では自信を持って取り組めるようになりました。',
    },
    {
      name: 'Bさん',
      role: '歯科衛生士（入職5年目）',
      text: '18時にはみんな退勤するので、仕事とプライベートのメリハリがしっかりつけられます。有給も100%消化できるので、旅行や趣味の時間も充実しています。',
    },
    {
      name: 'Cさん',
      role: '歯科衛生士（入職1年目）',
      text: 'セミナー参加費用を補助してもらえるので、スキルアップへの意欲がさらに高まりました。少人数のチームですが、だからこそ仲が良く、困ったときはすぐに相談できる環境です。',
    },
  ]

  return (
    <section id="staff" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-navy-600 text-sm tracking-[0.2em] mb-2 font-medium">STAFF VOICES</p>
          <h2
            className="text-navy-950 text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            スタッフの声
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        {/* Staff photo */}
        <div className="rounded-2xl overflow-hidden mb-10 md:mb-14 shadow-lg">
          <img
            src="https://i.imgur.com/KAiGcwc.jpeg"
            alt="東京銀座歯科のスタッフ"
            className="w-full h-48 md:h-72 object-cover"
          />
        </div>

        {/* Voice cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((voice, i) => (
            <div
              key={i}
              className="bg-navy-50 rounded-xl p-6 relative"
            >
              <div className="text-navy-300 text-5xl font-bold absolute top-3 right-4 opacity-30" style={{ fontFamily: 'serif' }}>
                "
              </div>
              <div className="mb-3">
                <p className="text-navy-900 font-bold text-base">{voice.name}</p>
                <p className="text-navy-500 text-xs mt-0.5">{voice.role}</p>
              </div>
              <p className="text-navy-800/80 text-sm leading-relaxed">{voice.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
