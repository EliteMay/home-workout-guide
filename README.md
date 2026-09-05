# Home Workout Guide

自宅でできる筋トレを、**種目を探す → フォームを見る → 回数・効く部位・注意点を確認 → 実行する**の流れで使う個人向け筋トレ図鑑です。

正式な要件は [`REQUIREMENTS.md`](REQUIREMENTS.md) をSource of Truthとします。

## 現在の実装

- 胸 / 背中 / 肩 / 腕 / 腹 / 脚の6部位、計18種目
- 自重 / 3kgダンベル2個 / 安定した椅子を中心に構成
- 部位 / 器具 / 難易度 / 種目名・筋肉名で検索・絞り込み
- 各種目の詳細Dialog
  - フォーム画像
  - 主に効く筋肉
  - 難易度 / 器具
  - 回数 / セット / 休憩
  - 開始姿勢 / 手順 / 呼吸
  - 意識するポイント / よくある間違い
  - 効いている感覚 / 中止サイン
  - 簡単版 / 難しい版
  - 3kgでの負荷UP
  - 次のProgression
- 筋トレ基礎16項目
- 全身 / 上半身 / 下半身 / 短時間のメニュー例
- 安全情報を独立Sectionで確認可能
- Light / Dark theme
- JavaScript / JSON読み込み失敗時も、安全情報と基本4種目はHTMLだけで確認可能

## Data構成

教材ContentはHTMLへ大量直書きせず、JSONを正本として管理します。

- `data/exercises.json` — 18種目の詳細Data
- `data/basics.json` — 筋トレ基礎
- `app.js` — Data読込、検索 / 絞り込み、種目詳細Dialog
- `index.html` — Information Architecture、静的Fallback、安全 / メニュー例
- `styles.css` — Exercise-first UI、Light / Dark、Responsive、Accessibility
- `theme.js` — Theme切替と`localStorage`保存
- `assets/exercises/*.svg` — 開始 → 終了、または正しい姿勢 / NG姿勢のフォーム図
- `tests/validate.mjs` — JSON Schema相当の必須値、18種目、6部位、Asset / HTML参照を検証

## 崩してはいけない仕様

- 初心者が画像と文章の両方から動作を理解できること
- 既存のユーザー評価済み「開始 → 終了」フォーム図を維持すること
- 「主に効く筋肉」と「関節の鋭い痛み・しびれ等の中止サイン」を混同しないこと
- 痛みを我慢して続ける案内をしないこと
- ダンベルの反動、崩れたフォーム、関節痛を負荷UP方法として使わないこと
- 椅子を使う種目はキャスターなし・ぐらつかない安定した椅子を前提にすること
- GitHub Pages単体で動く静的構成を維持すること
- Theme保存が失敗しても運動情報の閲覧を妨げないこと
- Mobile / Keyboardでも主要情報へ到達できること

## Visual Direction

現在は **Exercise-first Workout Guide / Exercise Library** を継続します。

KEEP:

- 緑Accent
- Light / Dark
- Exercise画像を主役にする
- 既存の開始 → 終了フォームSVG
- Safety / RecoveryをExercise Cardと別Semanticで扱う
- 意味のないSquare LogoやFPS / Technical Manual風表現を避ける

今回の実装は別のVisual Directionへ刷新せず、既存のFitness / Exercise Library方向を18種目の図鑑用途へ拡張しています。

## Safety

一般的な運動ガイドとして、次を共通ルールにしています。

- フォームが崩れたら回数より先に終了
- 関節の鋭い痛み、しびれ、強い腫れ等がある場合は中止
- ダンベルの破損・ガタつき・危険な錆を確認
- 椅子はキャスターなし・ぐらつかないものを使用
- 強い症状、長引く痛み、日常動作に支障がある場合は医療機関へ相談
- 体調・けが等で運動が適切か分からない場合は専門家へ確認

参考:

- U.S. Department of Health and Human Services — Physical Activity Guidelines
- Mayo Clinic — Strength training / Weight training technique

## Testing

ローカル / CIで次を確認します。

```bash
node --check app.js
node --check theme.js
node tests/validate.mjs
```

`tests/validate.mjs` は主に次を検証します。

- JSON構文
- 18種目が15〜20種目の完成範囲内
- 胸 / 背中 / 肩 / 腕 / 腹 / 脚の6部位Coverage
- 全種目の必須Data
- ID重複
- 画像参照
- HTML内の主要Local Asset参照
- 基礎知識Data

Browser / Visual / Pages確認はStatic Validationと区別して記録します。

## Project

- Profiles: `STATIC + DATA + LEARNING + PUBLIC-CONTENT`
- External runtime dependencies: なし
- User data storage: Theme preferenceのみ `localStorage`
- Source of Truth: `REQUIREMENTS.md`
- Long-term learnings: `PROJECT_LEARNINGS.md`
- Common production rules: `EliteMay/web-project-guide`
