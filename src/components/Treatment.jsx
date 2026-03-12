export default function Treatment() {
  return (
    <section id="treatment" className="py-16 md:py-24 bg-navy-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-400 text-sm tracking-[0.2em] mb-2 font-medium">ABOUT</p>
          <h2
            className="text-white text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            当院について
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://i.imgur.com/6VCcG9q.jpeg"
              alt="東京銀座歯科のインプラント治療"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <h3
              className="text-white text-xl md:text-2xl font-bold leading-relaxed mb-6"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              「噛めない人生」を、
              <br />
              もう終わらせませんか？
            </h3>
            <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed">
              <p>
                歯がほとんど残っていない、何度治療してもダメになる、総入れ歯が合わず、噛めない外れる、痛い。
              </p>
              <p>
                そのようなお悩みを抱えた方のためにあるのが、「全顎治療（フルマウス治療）」です。
              </p>
              <p>
                当院では、インプラント治療を軸に、噛み合わせ、機能、耐久性まで考え抜いた"人生を立て直すための治療"を行っています。
              </p>
            </div>

            {/* Services */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['インプラント', '審美歯科', 'ホワイトニング', '口腔外科'].map((service) => (
                <span
                  key={service}
                  className="bg-navy-800 text-white/90 text-xs md:text-sm px-4 py-2 rounded-full border border-navy-700"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
