export default function Requirements() {
  const rows = [
    { label: '募集職種', value: '歯科衛生士（正職員）' },
    {
      label: '仕事内容',
      value: (
        <ul className="space-y-1">
          <li>歯科衛生士業務全般</li>
          <li>インプラントオペのアシスト</li>
          <li>審美歯科</li>
          <li>院内清掃</li>
          <li>滅菌・消毒</li>
          <li>器具の管理</li>
          <li className="text-navy-500 text-xs mt-2">※受付対応はほぼありません</li>
        </ul>
      ),
    },
    {
      label: '給与',
      value: (
        <div>
          <p className="font-bold text-navy-900 text-lg">月給 300,000円〜</p>
          <div className="text-sm text-navy-600 mt-2 space-y-0.5">
            <p>基本給 240,000円〜</p>
            <p>資格手当 30,000円〜</p>
            <p>住宅手当 30,000円〜</p>
            <p>皆勤手当 30,000円</p>
          </div>
          <div className="text-sm text-navy-600 mt-2 space-y-0.5">
            <p>昇給あり（年1回）</p>
            <p>賞与あり（年2回）</p>
            <p>固定残業代なし</p>
          </div>
        </div>
      ),
    },
    { label: '勤務時間', value: '9:00〜18:00（休憩60分）\n残業ほぼなし・18時までに退社可能' },
    {
      label: '休日・休暇',
      value: (
        <div className="space-y-1">
          <p>週休2日制（木曜日、土日隔週）</p>
          <p className="font-bold">年間休日：125日</p>
          <p className="text-sm text-navy-600 mt-1">有給休暇 / 年末年始休暇 / 夏季休暇 / ゴールデンウィーク</p>
        </div>
      ),
    },
    {
      label: '福利厚生',
      value: (
        <div className="flex flex-wrap gap-2">
          {['社会保険完備', '雇用保険', '労災保険', '健康保険', '厚生年金', '住宅手当', '賞与あり', 'セミナー参加費補助'].map((item) => (
            <span key={item} className="bg-navy-100 text-navy-800 text-xs px-3 py-1.5 rounded-full">
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: '応募要件',
      value: (
        <div className="space-y-1">
          <p>歯科衛生士資格</p>
          <p className="text-sm text-navy-600">年齢不問 / ブランクOK / 新卒可 / 学歴不問</p>
          <p className="text-sm text-navy-600">インプラントアシスト経験者大歓迎</p>
        </div>
      ),
    },
    {
      label: '求める人物像',
      value: (
        <ul className="space-y-1">
          <li>素直で学ぶ姿勢のある方</li>
          <li>チームで業務に取り組める方</li>
          <li>インプラントアシスト経験者大歓迎</li>
        </ul>
      ),
    },
  ]

  return (
    <section id="requirements" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-navy-600 text-sm tracking-[0.2em] mb-2 font-medium">REQUIREMENTS</p>
          <h2
            className="text-navy-950 text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            募集要項
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
        </div>

        {/* Table */}
        <div className="border border-navy-200 rounded-2xl overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${i < rows.length - 1 ? 'border-b border-navy-200' : ''}`}
            >
              <div className="bg-navy-50 px-5 py-4 md:w-40 md:shrink-0 font-bold text-navy-800 text-sm">
                {row.label}
              </div>
              <div className="px-5 py-4 text-navy-700 text-sm leading-relaxed whitespace-pre-line">
                {row.value}
              </div>
            </div>
          ))}
        </div>

        {/* Selection process */}
        <div className="mt-10 bg-navy-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-navy-900 font-bold text-base mb-4">選考プロセス</h3>
          <div className="flex flex-col gap-3">
            {[
              'お電話にてご応募ください',
              '採用担当より面接日程の調整などのご連絡',
              '面接実施',
              '採用決定のご連絡',
              '入職手続き',
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="bg-navy-700 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold">
                  {i + 1}
                </span>
                <span className="text-navy-700 text-sm">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-navy-500 text-xs mt-4">
            ※応募から内定までは平均1週間〜1ヶ月ほどになります。
            <br />
            ※在職中で今すぐ転職が難しい方も調整のご相談が可能です。
          </p>
        </div>
      </div>
    </section>
  )
}
