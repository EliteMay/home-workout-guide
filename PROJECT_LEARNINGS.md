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
- Root Cause: 画像を「装飾・補助」として作り、説明の主役として設計していなかった。
- Final Fix: 開始 / 終了を左右に並べ、ダンベル形状、矢印、日本語ラベルを持つ独立SVGへ置換。自重・座位種目にも同じ説明原則を展開。
- Detection method: User feedback「画像が意味わからん」。
- Regression Guard: 新しい運動図は開始状態・終了状態または正解 / NG比較と、説明用altを持つ。
- Prevention: 抽象的な棒人間だけで完成扱いせず、画像単体で動作方向が伝わるか確認する。

### PL-F-002 全情報を同じCard強度で並べ、長い説明ページに見えた

- Date: 2026-09-02
- Status: resolved
- Severity: medium
- Cost: medium
- Symptom: Hero、注意、種目、回復、進め方がほぼ同じCard / Section rhythmで縦に続き、情報量が増えるほどHierarchyが弱くなった。
- Expected: 最初に「今日何をやるか」が分かり、必要なフォームへすぐ移動できる。
- Actual: どの情報も同じ強さで見え、ページ全体が長い説明の集合に見えた。
- Root Cause: Content追加ごとに同じCard patternを足し、Information ArchitectureとPage Compositionを再設計していなかった。
- Final Fix: Exercise Cardは独立した種目に限定し、Safety / Recovery / Progressは別表現へ分ける。
- Detection method: User request「サイトの見た目を修正して」＋構造Review。
- Regression Guard: Section追加時に既存Cardを複製する前に、その情報が本当に独立Objectか判断する。

### PL-F-003 別Projectの成功Directionを題材の雰囲気ごと持ち込みFPS感が出た

- Date: 2026-09-02
- Status: resolved
- Severity: high
- Cost: medium
- Symptom: Training Manual / Sticky Rail / 暗色 / Grid / 番号Labelを組み合わせた結果、筋トレサイトなのにFPS攻略・Field Manualのような印象になった。
- Expected: 健康・筋トレ用途として、運動画像と種目選択が自然に主役になる。
- Actual: Tarkov Field Manualの構造原理を参照した際、Rail / dark manual / coded labelsなどSource固有のVisual moodまでTargetへ近づけてしまった。
- Root Cause: Validated DirectionからTransferすべき構造原理と、Copyすべきでない題材固有表層の切り分けが不十分だった。
- Final Fix: Sticky Railを非表示化し、Light neutral background + soft green + Exercise Library型Cardへ変更。ReferenceもFitnessサービスへ変更。
- Detection method: User feedback「この成功例はちょっと違う」「FPS感がある」。
- Regression Guard: Visual Referenceを選ぶ際、Project shapeだけでなく題材 / mood / primary visual materialまで近いか確認する。
- Guide candidate: yes

### PL-F-004 Light Fitness化だけではVisual validationに届かなかった

- Date: 2026-09-02
- Status: resolved / monitoring
- Severity: medium
- Cost: medium
- Symptom: Dark / FPS感を消してFitness App方向へ寄せた後も、Userから再度「サイトの見た目を修正して」とVisual修正依頼が発生した。
- Expected: Exercise image、回数、効く場所が自然に主役になり、普通のLanding PageやTechnical Manualに見えない。
- Actual: Light themeへ変えても、巨大Hero、章番号、英字Kicker、Header-firstのExercise Cardなど旧Compositionの名残が残っていた。
- Root Cause: 色・SurfaceはDomainへ合わせたが、Content hierarchyの一部が旧Manual / Landing構造のままだった。
- Final Fix: Domain-first Visual Researchを実施し、Exercise imageをCard先頭へ移動。章番号 / 英字Kicker / movement numberを表示上弱め、Safety / Prep / RecoveryはList / grouped surfaceへ変更。HeroもDashboard的なQuick Startへ寄せた。
- Affected files / systems: `styles.css`, `README.md`, `PROJECT_LEARNINGS.md`
- Detection method: 2026-09-02の繰り返しVisual修正依頼。
- Regression Guard: Theme変更だけで「別Directionになった」と判断しない。Primary Taskの視線順が変わったかを確認する。
- Prevention: meaningful Visual Changeでは `web-project-guide` のDomain-first Visual Researchを先に行う。
- Related Commit: `19288b03b360d4b9a092312ab993f8f5199e8a79`
- Guide candidate: no

---

## Success / Candidate

### PL-S-001 開始→終了の独立フォーム図

- Date: 2026-09-02
- Status: user validated
- Goal / Problem: 初心者でも運動動作を視覚的に理解できるようにする。
- Adopted Pattern: 左に開始、右に動作後、Accent色でダンベル / 矢印を強調し、日本語の短い説明を併記する。
- Why it worked: Userから「だいぶわかりやすくなった」と肯定Feedbackがあった。
- Trade-off: 厳密な解剖学図ではなく、動作理解を優先した説明図。
- Reuse when: 新しい運動種目を追加するとき。
- Avoid when: プランクのような静止種目。静止種目は正解 / NG比較を優先する。
- Related files: `assets/exercises/*.svg`, `index.html`

### PL-S-002 Fitness App / Exercise Library方向

- Date: 2026-09-02
- Status: superseded / not user validated
- Goal / Problem: FPS / Technical Manual感をなくし、運動用途として自然に見えるVisualへ戻す。
- Adopted Pattern: Light neutral background、soft green accent、Top category navigation、Quick Start、Exercise image + muscle target + reps + instruction。
- Result: Domain方向自体は適切だったが、旧Manual / Landing構造の名残が多く、User validationには届かなかった。
- Reuse when: 単独では再利用しない。PL-S-003のExercise-first hierarchyとセットで検討する。

### PL-S-003 Exercise-first Workout Board

- Date: 2026-09-02
- Status: candidate / user validation待ち
- Goal / Problem: 種目を探して実行するTaskを、装飾や説明より先に見せる。
- Adopted Pattern: Fitness domain research → Image-first Exercise Card → reps chip → target muscle → steps。章番号 / coded labelを表示上除去し、Safety / Prep / RecoveryはExercise Cardと別Semanticへ分ける。
- Research Basis: Hevy Exercise Library / Nike Training Club / Fitbod Exercise Guideの共通点を、BrandではなくTask単位で抽象化。
- Why it may work: UserのPrimary Task「画像を見る → 回数 / 効く場所を確認 → やる」と視線順を一致させる。
- Trade-off: 既存SVGがDark previewなので、Light UI内ではExercise previewとして意図的に分離して見せる。
- Reuse when: Userから肯定的Visual feedbackが得られた場合、このProject内で維持する。
- Avoid when: 再度Visual違和感が出た場合は、小さなPolishを重ねずFitness Editorial / Workout Plannerなど別構造と比較する。
- Related files: `styles.css`, `README.md`

---

## Guide Feedback Queue

| ID | Type | Summary | Evidence | Next action |
|---|---|---|---|---|
| HWG-VIS-001 | rejected | Tarkov / Field Manual系Directionの題材Mismatch | User feedback「FPS感がある」 | Domain-first ruleのEvidenceとして維持 |
| HWG-VIS-002 | superseded | Light Fitness App化だけでは不足 | 再度Visual修正依頼 | Theme変更とStructure変更を分離して評価 |
| HWG-VIS-003 | success candidate | Exercise-first Workout Board | Domain research + commit `19288b0` | User feedback後に維持 / 再設計を判断 |
