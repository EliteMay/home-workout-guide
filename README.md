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

各種目は、**フォーム図 → ここだけ覚えるポイント → 効いている場所 → 詳しい手順 → 回数目安**の順で確認できます。

座位メニューは、キャスターなし・ぐらつかない椅子を使い、足裏が床につく状態で行うことを前提にしています。ショルダープレスでは背もたれのある椅子を優先し、3kgを両手で持つのが重い場合は片手ずつに切り替えます。

「効いている場所」は、正しく行ったときに筋肉の張り・熱さ・疲れを感じやすい場所の目安です。関節の鋭い痛みやしびれは「効いている」とは扱いません。また、翌日に筋肉痛が来ないことだけで効果の有無を判断しません。

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

- `index.html` — 本文、ナビゲーション、各フォーム図への参照、効いている場所の案内
- `styles.css` — レイアウト、画像表示、座位メニュー、レスポンシブ、アクセシビリティ対応
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
- `README.md` — プロジェクト仕様と更新時の基準

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

参考情報はサイト本文から直接確認できるリンクを掲載しています。

## 既知の制約 / 未確認

- フォーム図は初心者が動きの方向や姿勢を理解するための説明用イラストで、身体の細かな関節角度を医学的に再現するものではありません。
- 「効いている場所」は主に使われる筋肉の目安で、全員が同じ場所に同じ強さの感覚を持つとは限りません。
- 座位種目でも体調や可動域によって合わない場合があり、痛みを我慢して続けることは想定していません。
- ブラウザ上の実表示・GitHub Pagesの最終デプロイ状態は、GitHub APIから完全には確認できないため別途実ブラウザ確認が必要です。
- このサイトは一般的な運動情報をまとめたもので、診断、治療、個別のリハビリ指示の代わりではありません。
