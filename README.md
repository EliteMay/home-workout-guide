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
- 腕立て伏せ / 自重スクワット / プランク
- 各種目のフォーム図、主に効く筋肉、回数目安、注意点
- 筋肉痛・張りがある日の考え方
- 3kgが軽くなってきた場合の進め方
- Light / Dark theme切替
- 一般向け医療・公的情報への参考リンク

## 使い方

GitHub Pagesで `index.html` を開く前提の静的サイトです。

ページ上部には **3kg × 2 基本メニュー**を置き、4種目と回数をすぐ確認できます。上部ナビから「ダンベル / 座って / 自重 / 回復」へ移動できます。

各種目では、**フォーム画像 → 種目名 / 回数 → 効いている場所 → 詳しい手順 → 痛み・フォーム注意**の順で確認できます。

テーマはOSのLight / Dark設定を初期値として使い、ヘッダー右端の切替で手動変更できます。手動選択は`localStorage`の`home-workout-theme`へ保存し、次回も維持します。保存できない環境でも、そのページを開いている間の切替は利用できます。

座位メニューは、キャスターなし・ぐらつかない椅子を使い、足裏が床につく状態で行うことを前提にしています。ショルダープレスでは背もたれのある椅子を優先し、3kgを両手で持つのが重い場合は片手ずつに切り替えます。

「効いている場所」は、正しく行ったときに筋肉の張り・熱さ・疲れを感じやすい場所の目安です。関節の鋭い痛みやしびれは「効いている」とは扱いません。翌日に筋肉痛が来ないことだけで効果の有無を判断しません。

## Visual Direction

現在の候補は **Exercise-first Workout Board / Exercise Library** です。

### Target Type

- Primary Task: 種目を選ぶ → フォーム画像を見る → 回数と効く場所を確認 → 実行する
- Content Model: 少数のExercise collection + Safety / Recovery guidance
- Audience: 筋トレ初心者 / 自分用
- Density: medium
- Device: Desktop + Mobile
- Primary Visual Material: フォーム図
- Tone: 親しみやすい / 健康的 / 落ち着いた

### Domain Research

2026-09-02のVisual修正では、過去Projectの成功例を先に当てはめず、Fitness / Workout用途をWebで調査しています。

参考にした用途上の原理:

- **Hevy Exercise Library** — ExerciseごとにDemo / Equipment / Muscle target / Instructionsをまとめ、Exercise自体を主役にする。
- **Nike Training Club** — Workoutの目的、sets / reps、必要に応じたdrill demonstrationを分かりやすく提示する。
- **Fitbod Exercise Guide** — Exercise demonstrationとstep-by-step guidanceを近くに置く。

コピーしないもの:

- 各Service固有のBrand color / Font / Marketing Hero
- Tracking / Account / Social / Recommendation等、このSiteに存在しない機能
- Mobile AppのNavigationをそのままWebへ移すこと

### Current UIの判断

**KEEP**

- Userから「だいぶわかりやすくなった」と評価された開始→終了フォーム図
- 3kgダンベル2個 / 自重 / 座位というカテゴリ
- 「効いている場所」と「関節痛はNG」の安全上の区別
- 緑を主AccentにするIdentity
- Exercise imageを最初に見せる現在のCard順序

**FIX済み / 継続確認**

- `HW`の角丸ロゴ箱と`BEGINNER GUIDE`を表示から除外し、文字だけのHeaderへ変更
- Header navigationをPill Button型から普通のText navigationへ変更
- Light themeだけでなくDark themeを追加
- HeroをMarketing copyより「3kg×2で今日やる4種目」へ寄せる
- Quick Startを実際の回数が読めるWorkout Boardへ変更

**REMOVE / 表示を弱める**

- FPS / Technical Manualを連想させるSticky Rail
- 章番号、coded label、過度な英字Kicker
- 意味の薄いSquare logo / subtitleセット
- Cardを追加するだけの同型Section反復

User feedbackではExercise-first方向は「悪くない」ものの、まだ「ここが良い」と言える強いVisual validationには到達していません。現段階では成功Directionへ昇格させず、Workout BoardがこのProject固有のSignatureとして機能するか継続確認します。

## 崩してはいけない仕様

- GitHub Pagesだけで動く静的構成を維持する。
- 外部ライブラリや外部サービスを必須にしない。
- Theme切替が失敗しても運動情報の閲覧を妨げない。
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

- `index.html` — 本文、Navigation、Workout Board、Theme toggle、Exercise / Safety / Recovery構造
- `styles.css` — Light / Dark theme、Exercise-first UI、Typography、Responsive、Accessibility
- `theme.js` — Theme切替、OS theme連動、ユーザー選択保存、`theme-color`同期
- `assets/exercises/*.svg` — 各種目の開始 / 終了または正解 / NGフォーム図
- `PROJECT_LEARNINGS.md` — Visual失敗・成功候補・再発防止
- `README.md` — 現在仕様と更新時の基準

## Project

- Profiles: `STATIC + PUBLIC-CONTENT`
- Adopted web-project-guide: `1.13.0`
- External dependencies: なし
- Data storage: Theme preferenceのみ`localStorage`

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
- Light / Dark themeは同じInformation hierarchyを保つことを前提とし、Themeごとに別Layoutは持ちません。
- この環境ではGitHub Pagesの最終描画を実ブラウザで確認できない場合、Visual完成済みとは扱いません。
- このサイトは一般的な運動情報をまとめたもので、診断、治療、個別のリハビリ指示の代わりではありません。
