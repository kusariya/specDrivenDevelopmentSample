# data-model.md
// filepath: /home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/data-model.md

# データモデル: ダッシュボード

## エンティティ一覧

### ウィジェット
- 属性:
  - 種類（例：グラフ、通知、タスク進捗など）
  - 表示順（整数）
  - 内容（任意のデータ）

### ユーザー
- 属性:
  - ID（文字列または数値）
  - 設定（ウィジェット表示順、個人設定）

### 通知
- 属性:
  - 内容（テキスト）
  - 日時（ISO8601形式）
  - 既読状態（true/false）

## バリデーションルール
- ウィジェットの種類は事前定義されたもののみ許可
- 表示順は重複不可
- 通知の内容は255文字以内

## 状態遷移
- 通知: 未読 → 既読
- ウィジェット: 追加・削除・並び替え

---

# quickstart.md
// filepath: /home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/quickstart.md

# Quickstart: ダッシュボード

## セットアップ手順
1. リポジトリをクローン
2. `npm install` で依存関係（ChartJS等）をインストール
3. `public/index.html` をブラウザで開く

## テストシナリオ
- ダッシュボード画面が表示されること
- ウィジェットが複数表示されること
- ウィジェットの並び替えが反映されること
- グラフウィジェットがChartJSで描画されること
- 通知ウィジェットが大量通知時も見やすく表示されること
- 設定変更・保存がLocalStorageに反映されること

---

# contracts/（API不要のため空ディレクトリのみ作成）
// filepath: /home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/contracts/

（APIエンドポイントは不要のため、現時点ではファイルなし）

---

# フェーズ１完了報告

- 生成ファイル:
  - `/home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/data-model.md`
  - `/home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/quickstart.md`
  - `/home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/contracts/`（空ディレクトリ）

- 次フェーズ（タスク計画）に進む準備ができています。