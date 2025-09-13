/**
 * ウィジェットモデル
 * - 種類（例：グラフ、通知、タスク進捗など）
 * - 表示順（整数）
 * - 内容（任意のデータ）
 */
export class Widget {
  /**
   * @param {string} type - ウィジェットの種類（例：chart, notification, progress）
   * @param {number} order - ダッシュボード上の表示順
   * @param {any} content - ウィジェットの内容
   */
  constructor(type, order, content) {
    this.type = type;
    this.order = order;
    this.content = content;
  }
}