# タスク一覧: ダッシュボード

**機能ブランチ**: `[002-dashboard-feature]`  
**計画ファイル**: [/home/saki/github/specDrivenDevelopmentSample/specs/002-dashboard-feature/plan.md]

---

## 並列実行ガイド

- [P] マーク付きタスクは依存関係がなければ並列実行可能です（異なるファイル）。
- [P] マークなしは順番に実行してください。
- セットアップ・テストタスクは必ず実装前に実行してください。
- `copilot task T00X` で個別タスクを実行できます。

---

## 番号付き・依存順タスク

### セットアップ

**T001**: プロジェクト構成の初期化  
 - `/src/`, `/tests/`, `/public/` ディレクトリ作成  
 - `index.html`, `main.js`, `style.css` の雛形追加  
 - `.eslintrc`, `.prettierrc`, README作成  
 - 依存: なし

**T002**: ChartJSの導入  
 - ChartJSをnpmまたはCDNで追加  
 - `/public/index.html` で読み込み  
 - 依存: T001

**T003**: ESLint・Prettierの設定  
 - JS/HTML/CSS用のLint/Formatツール設定  
 - 依存: T001

---

### モデル・エンティティ

**T004 [P]**: ウィジェットモデルの作成  
 - `/src/models/widget.js`  
 - 属性: 種類、表示順、内容  
 - 依存: T001

**T005 [P]**: ユーザーモデルの作成  
 - `/src/models/user.js`  
 - 属性: ID、設定  
 - 依存: T001

**T006 [P]**: 通知モデルの作成  
 - `/src/models/notification.js`  
 - 属性: 内容、日時、既読状態  
 - 依存: T001

---

### テスト駆動開発（TDD）

**T007 [P]**: ウィジェットモデルのコントラクトテスト作成  
 - `/tests/contract/widget.test.js`  
 - 依存: T004

**T008 [P]**: ユーザーモデルのコントラクトテスト作成  
 - `/tests/contract/user.test.js`  
 - 依存: T005

**T009 [P]**: 通知モデルのコントラクトテスト作成  
 - `/tests/contract/notification.test.js`  
 - 依存: T006

---

### コア実装

**T010**: ダッシュボード画面のUIコンポーネント作成  
 - `/src/components/dashboard.js`  
 - ウィジェットの表示・並び替え  
 - 依存: T004, T005, T006

**T011**: ChartJSによるグラフウィジェット実装  
 - `/src/components/chartWidget.js`  
 - ダッシュボード上でグラフ表示  
 - 依存: T002, T010

**T012**: 通知ウィジェットの実装  
 - `/src/components/notificationWidget.js`  
 - 通知の表示・大量通知時のUI  
 - 依存: T006, T010

**T013**: ユーザー設定管理機能の実装  
 - `/src/services/userSettings.js`  
 - 表示順・個人設定の保存  
 - 依存: T005, T010

**T014**: ダッシュボード情報の永続化（LocalStorage）  
 - `/src/services/storage.js`  
 - ウィジェット・設定・通知の保存  
 - 依存: T004, T005, T006, T013

---

### 統合・UI

**T015**: ダッシュボードのレスポンシブUI実装  
 - `/public/style.css`  
 - PC/スマホ対応  
 - 依存: T010

**T016**: ダッシュボード初期データロード・表示ロジック  
 - `/src/main.js`  
 - 依存: T010, T014

---

### 統合テスト

**T017 [P]**: ダッシュボード表示・ウィジェット操作の統合テスト  
 - `/tests/integration/dashboard.test.js`  
 - 依存: T010, T011, T012

**T018 [P]**: グラフ描画の統合テスト  
 - `/tests/integration/chartWidget.test.js`  
 - 依存: T011

**T019 [P]**: 通知ウィジェットの統合テスト  
 - `/tests/integration/notificationWidget.test.js`  
 - 依存: T012

**T020 [P]**: 永続化・設定保存の統合テスト  
 - `/tests/integration/storage.test.js`  
 - 依存: T014

---

### 仕上げ・ドキュメント

**T021 [P]**: ユーティリティ関数・境界ケースのユニットテスト  
 - `/tests/unit/utils.test.js`  
 - 依存: T016

**T022 [P]**: quickstart.mdにセットアップ・利用方法・制約を記載  
 - `/specs/002-dashboard-feature/quickstart.md`  
 - 依存: T001

**T023 [P]**: research.mdに技術選定・調査内容を記載  
 - `/specs/002-dashboard-feature/research.md`  
 - 依存: T002

---

## 備考

- すべてのUIはブラウザで動作し、グラフはChartJSを利用します。
- データ永続化はLocalStorageを推奨（要調査）。
- TDD（テスト先行）を厳守してください。
- [P]タスクは依存がなければ並列実行可