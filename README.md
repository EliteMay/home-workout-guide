# Home Workout Guide

自宅でできる基本的な自重トレーニングと、**3kgダンベル2個**を使った初心者向けメニューを、フォーム優先・無理をしない・続けやすい方針でまとめた個人用ガイドです。

## 収録内容

- 始める前の準備と中止目安
- 「筋肉に効いている感覚」と「中止する痛み」の見分け方
- 3kgダンベル2個でできる立位メニュー
  - ダンベルカール
  - ショルダープレス
  - ベントオーバーロー
  - ダンベルスクワット
- 座ってできるメニュー
  - 座ってダンベルカール
  - 座ってショルダープレス
  - 座って膝伸ばし
  - 座ってもも上げ
- 腕立て伏せ（Push-up）のフォーム図
- 自重スクワット（Squat）のフォーム図
- プランク（Plank）の正しい姿勢 / NG姿勢図
- 各種目で主に疲れ・張りを感じやすい筋肉
- 筋肉痛・張りがある日の考え方
- 3kgが軽くなってきた場合の進め方
- 一般向け医療・公的情報への参考リンク

## 使い方

GitHub Pagesで `index.html` を開く前提の静的サイトです。

ページ上部では「迷ったら今日はこれ」を確認し、上部ナビから立位ダンベル・座位・自重・回復へ移動できます。Desktop / Mobileともに、左側へ常設Railを置かず、運動画像と種目選択を主役にします。

各種目は、**フォーム図 → 効いている場所 → 詳しい手順 → 回数目安 → 痛み・フォーム注意**の順で確認できます。

座位メニューは、キャスターなし・ぐらつかない椅子を使い、足裏が床につく状態で行うことを前提にしています。ショルダープレスでは背もたれのある椅子を優先し、3kgを両手で持つのが重い場合は片手ずつに切り替えます。

「効いている場所」は、正しく行ったときに筋肉の張り・熱さ・疲れを感じやすい場所の目安です。関節の鋭い痛みやしびれは「効いている」とは扱いません。また、翌日に筋肉痛が来ないことだけで効果の有無を判断しません。

## Visual Direction

現在のUIは **Fitness App / Exercise Library** を方向性にしています。

- First Viewで「今日どれをやるか」を先に見せる。
- 常設の左RailやField Manual風のNavigationは使わず、上部の短いカテゴリNavigationへまとめる。
- 明るいNeutral backgroundと柔らかいGreen Accentを基本にし、FPS / Tactical / Technical Console風の印象を避ける。
- ダンベル・座位種目は、独立したExercise Objectとして画像 / 部位 / 回数 / 手順をCardにまとめる。
- Exercise Cardではフォーム画像を強くし、回数と効く部位を短いChip / Highlightで見つけやすくする。
- 自重3種目は大きい画像を使ったFeature Layoutを維持する。
- 回復・進め方はExercise Cardとは別のStatus / Step表現を使う。
- 既存SVGはユーザーから「だいぶわかりやすくなった」と評価されたためKEEPする。
- 参考情報は通常利用時のNoiseを減らすため`details`へまとめる。

Visual Referenceは、Project用途が近い実フィットネスサービスを優先します。HevyのExercise Libraryにある「Exercise image / equipment / target muscle / instruction」を一つのExercise Objectとして扱う考え方と、Nike Training Clubの「Workoutの目的・Sets / Repsを先に理解できる構成」を参考にします。具体的なBrand color、Layout、Assetはコピーしません。

以前試した **Training Manual / Sticky Rail** 方向は、Userから「FPS感があり、このサイトには違う」と評価されたためRejected Evidenceとして扱い、現在Directionへ再利用しません。

現時点では新しいFitness App方向もUser Visual Validation待ちであり、別Projectへ成功例として一般化しません。

## 崩してはいけない仕様

- GitHub Pagesだけで動く静的構成を維持する。
- 外部JavaScriptや外部サービスを必須にしない。
- 運動フォーム図はサイト単体で表示できる構成にする。
- フォーム図は初心者が「どこからどこへ動かすか」を見て理解できるものにする。
- 静止種目は、動作図より正しい姿勢 / NG姿勢の比較を優先してよい。
- 各種目で「主に効く筋肉」と「関節痛などのNGサイン」を混同しない。
- 座位種目は安定した椅子を前提にし、キャスター付きやぐらつく椅子を案内しない。
- 初心者向けの分かりやすさと安全側の表現を優先する。
- 未確認の健康情報を断定的に掲載しない。
- 小さい画面とキーボード操作でも主要情報へ到達できる状態を保つ。
- 手首などに痛みが出る種目を、我慢して継続するよう案内しない。
- Visual変更時も、既存の運動内容・安全注意・画像Assetを理由なく削除しない。
- 別ProjectのValidated Directionを、そのProject固有の雰囲気ごと持ち込まない。

## 基本ルール

- 筋肉が張る、熱くなる、重くなる、最後の数回がきつくなる感覚は起こりうる。
- 関節の鋭い痛み、しびれ、強い腫れなどがある場合は中止する。
- 強い筋肉痛が残る部位を無理に追い込まない。
- フォームが崩れたら、そのセットは終了する。
- 呼吸を止めない。
- ダンベルを握る種目では、基本的に手首を前腕と一直線に保つ。
- 古いダンベルは、プレートや持ち手のガタつき・割れ・危険なサビを確認してから使う。
- 強い症状、長引く痛み、日常動作に支障がある状態は医療機関へ相談する。

## ファイル構成

- `index.html` — Workoutカテゴリ、Quick Start、各Exercise情報、フォーム図への参照
- `styles.css` — Fitness App / Exercise Library方向のLayout、Typography、Exercise Card、Responsive、Accessibility
- `assets/exercises/dumbbell-curl.svg` — ダンベルカールの開始 / 終了図
- `assets/exercises/shoulder-press.svg` — ショルダープレスの開始 / 終了図
- `assets/exercises/bent-over-row.svg` — ベントオーバーローの開始 / 終了図
- `assets/exercises/dumbbell-squat.svg` — ダンベルスクワットの開始 / 終了図
- `assets/exercises/seated-biceps-curl.svg` — 座ってダンベルカールの開始 / 終了図
- `assets/exercises/seated-shoulder-press.svg` — 座ってショルダープレスの開始 / 終了図
- `assets/exercises/seated-knee-extension.svg` — 座って膝伸ばしの開始 / 終了図
- `assets/exercises/seated-march.svg` — 座ってもも上げの開始 / 終了図
- `assets/exercises/push-up.svg` — 腕立て伏せの開始 / 下げた姿勢図
- `assets/exercises/bodyweight-squat.svg` — 自重スクワットの開始 / しゃがんだ姿勢図
- `assets/exercises/plank.svg` — プランクの正しい姿勢 / NG姿勢図
- `PROJECT_LEARNINGS.md` — このProjectで再発させたくないVisual失敗と成功候補
- `README.md` — 現在仕様と更新時の基準

## Project

- Profiles: `STATIC + PUBLIC-CONTENT`
- Adopted web-project-guide: `1.11.0`
- External dependencies: なし
- Data storage: なし

## 参考情報

- Mayo Clinic — Biceps curl / Bent-over row / Squat / Modified pushup / Core strength
- American Council on Exercise (ACE) — Seated biceps curl / Seated overhead press
- NHS — Sitting exercises / Hip marching
- University College London Hospitals — Chair exercises / Knee extension / Seated marching
- Cleveland Clinic — Delayed Onset Muscle Soreness (DOMS)

参考情報はサイト本文の「参考情報・このサイトの位置づけ」から確認できます。

## 既知の制約 / 未確認

- フォーム図は初心者が動きの方向や姿勢を理解するための説明用イラストで、身体の細かな関節角度を医学的に再現するものではありません。
- 「効いている場所」は主に使われる筋肉の目安で、全員が同じ場所に同じ強さの感覚を持つとは限りません。
- 座位種目でも体調や可動域によって合わない場合があり、痛みを我慢して続けることは想定していません。
- `index.html`内には旧Training RailのHTMLが残っていますが、現行CSSでは非表示です。将来HTMLを整理するときは内容・Anchorを壊さず削除できます。
- この環境ではGitHub Pagesの最終描画を実ブラウザで確認できていないため、Visual最終確認は未完了です。
- このサイトは一般的な運動情報をまとめたもので、診断、治療、個別のリハビリ指示の代わりではありません。
