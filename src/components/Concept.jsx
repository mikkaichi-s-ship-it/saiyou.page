export default function Concept() {
  return (
    <section id="concept" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-navy-600 text-sm tracking-[0.2em] mb-2 font-medium">CONCEPT</p>
          <h2
            className="text-navy-950 text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            院長の想い
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        {/* Quote */}
        <div className="bg-navy-50 rounded-2xl p-6 md:p-10 mb-10">
          <p
            className="text-navy-800 text-lg md:text-xl font-bold leading-relaxed text-center mb-8"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            銀座で磨く、一歩先のホスピタリティ。
            <br className="hidden sm:block" />
            技術以上の「安心」を届ける仕事
          </p>
          <div className="space-y-5 text-navy-800/90 text-sm md:text-base leading-relaxed">
            <p>
              当院を訪れる患者様は、お口の中に深い悩みを抱え、大きな期待を持って銀座まで足を運んでくださいます。そんな方々が、診療室に入った瞬間にホッとできるような空気感。それを作れるのは、院長の私ではなく、一番近くで寄り添う歯科衛生士の皆さんです。
            </p>
            <p>
              自費診療だからこそ、一人ひとりの患者様とじっくりお話しする時間があります。「なぜこの治療が必要なのか」「治療後にどんな生活が待っているのか」。患者様の心に寄り添い、信頼関係を築くこと。それも立派な「治療」のひとつです。
            </p>
            <p>
              技術を磨くのはもちろんですが、それ以上に「人」として成長したい、患者様に感動を与えたい。そんなホスピタリティ溢れるあなたと一緒に、東京銀座歯科の新しい歴史を作っていきたいと願っています。
            </p>
          </div>
        </div>

        {/* Director info */}
        <div className="text-right">
          <p className="text-navy-600 text-sm">東京銀座歯科 院長</p>
          <p
            className="text-navy-900 text-xl font-bold mt-1"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            中平 宏
          </p>
        </div>
      </div>
    </section>
  )
}
