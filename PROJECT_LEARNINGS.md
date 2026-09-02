# PROJECT LEARNINGS

このファイルは、Home Workout Guideで発生した再発防止価値の高い失敗と、今後も再利用したい成功候補を長期的に残すための正本です。

## Failure

### PL-F-001 フォーム図が抽象的すぎて動きが伝わらなかった

- Date: 2026-09-02
- Status: resolved
- Severity: medium
- Cost: medium
- Symptom: ダンベル種目の図が棒人間中心で、開始姿勢・終了姿勢・ダンベルの位置が直感的に分かりにくかった。
- Expected: 初心者が画像だけでも「どこからどこへ動かすか」を理解できる。
- Actual: 英語ラベルと単純線画に情報を寄せすぎ、動作説明として弱かった。
- Trigger / Reproduction: ダンベル種目の旧インラインSVGを見る。
- Root Cause: 画像を「装飾・補助」として作り、説明の主役として設計していなかった。
- Final Fix: 開始 / 終了を左右に並べ、ダンベル形状、矢印、日本語ラベルを持つ独立SVGへ置換。自重・座位種目にも同じ説明原則を展開。
- Affected files / systems: `index.html`, `assets/exercises/*.svg`
- Detection method: User feedback「画像が意味わからん」
- Regression Guard: 新しい運動図は開始状態・終了状態または正解/NGの比較と、説明用altを持つ。
- Prevention: 抽象的な棒人間だけで完成扱いせず、画像単体で動作方向が伝わるか確認する。
- Related Issue / PR / Commit: 2026-09-02 image redesign commits
- Guide candidate: no
- Guide note: Project固有のVisual説明ルールとして維持する。

### PL-F-002 全情報を同じCard強度で並べ、長い説明ページに見えた

- Date: 2026-09-02
- Status: monitoring
- Severity: medium
- Cost: medium
- Symptom: Hero、注意、種目、回復、進め方がほぼ同じCard / Section rhythmで縦に続き、情報量が増えるほどHierarchyが弱くなった。
- Expected: 最初に「今日何をやるか」が分かり、必要なフォームへすぐ移動できる。
- Actual: どの情報も同じ強さで見え、ページ全体が長い説明の集合に見えた。
- Trigger / Reproduction: 2026-09-02 redesign前の`index.html` / `styles.css`。
- Root Cause: Content追加ごとに同じCard patternを足し、Information ArchitectureとPage Compositionを再設計していなかった。
- Final Fix: Training Manual方向へFoundation Reset。First ViewにQuick Start、DesktopにSticky Rail、Exercise Cardは比較対象だけへ限定、自重はFeature Layout、回復はList、進め方はStepへ役割分担。
- Affected files / systems: `index.html`, `styles.css`
- Detection method: User request「サイトの見た目を修正して」＋構造Review。
- Regression Guard: Section追加時に既存Cardを複製する前に、List / Feature / Step / Dividerのどれが情報関係に合うか判断する。
- Prevention: 2回以上同型Sectionが続き情報が増えた場合、Card追加よりPage Compositionを再評価する。
- Related Issue / PR / Commit: `1c065ac5a9e8cacd6e472c2a3a1bd8250d6cd359`, `b20aeacd000242b0dd07d4bd0ce8aecebe30b639`
- Guide candidate: no
- Guide note: web-project-guideのVisual Foundation Reset / Decorative Cardificationを適用したProject例。

---

## Success

### PL-S-001 開始→終了の独立フォーム図

- Date: 2026-09-02
- Goal / Problem: 初心者でも運動動作を視覚的に理解できるようにする。
- Adopted Pattern: 左に開始、右に動作後、Accent色でダンベル / 矢印を強調し、日本語の短い説明を併記する。
- Why it worked: Userから「だいぶわかりやすくなった」と肯定Feedbackがあった。
- Trade-off: 厳密な解剖学図ではなく、動作理解を優先した説明図。
- Reuse when: 新しい運動種目を追加するとき。
- Avoid when: プランクのような静止種目。静止種目は正解 / NG比較を優先する。
- Related files / tests: `assets/exercises/*.svg`, `index.html`
- Guide candidate: no
- Guide note: Home Workout Guide内の画像説明Contractとして再利用する。

### PL-S-002 Training Manual型のVisual Direction

- Date: 2026-09-02
- Goal / Problem: 長くなった運動ガイドで、Hierarchyと移動のしやすさを改善する。
- Adopted Pattern: Quick Start + Sticky Training Index + Manual Content。Exercise Card / Feature Layout / List / StepをContent semanticsで使い分ける。
- Why it worked: 構造上はFirst Task、Navigation、画像、補助情報の優先順位を明確にできる。User Visual Validationはまだ待機中。
- Trade-off: Desktopでは情報構造が明確になる一方、MobileではRailを使えないためTop navigationをHorizontal scrollへ再構成する必要がある。
- Reuse when: このProjectでUserから肯定的Visual feedbackが得られた場合、今後のHome Workout Guide更新で維持する。
- Avoid when: Userが現行より悪いと評価した場合。Polishを重ねずDirectionを再検討する。
- Related files / tests: `index.html`, `styles.css`
- Guide candidate: no
- Guide note: 現時点ではCandidate。Validated Directionへ昇格させない。

---

## Guide Feedback Queue

| ID | Type | Summary | Evidence | Next action |
|---|---|---|---|---|
| HWG-VIS-001 | success candidate | Training Manual型Compositionが運動ガイドに合うか | 2026-09-02 redesign、User visual validation待ち | User feedback後に維持 / 再設計を判断 |
