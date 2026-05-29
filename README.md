一般社団法人OpenStreetMap Foundation Japanのページのソース
====================================================

このリポジトリは、[一般社団法人OpenStreetMap Foundation Japanのページ](https://www.osmf.jp/)のソースです。
web pageは、静的コンテンツとして公開されます。


ブランチ
======

`main` ブランチへのpushで、GitHub Actionsによって自動的にビルド・デプロイされます。


コンテンツ修正
==========

コンテンツの修正は、まず、変更したいことについて、[issue](https://github.com/osmfj/osmfj-website/issues)をあげてから、
課題番号をつけたTOPICブランチ( 例 topic/miurahr/issue-19 )を作成して,変更作業をおこなってください。

### コンテンツファイルの場所

| 修正内容                             | ファイル                              |
|-------------------------------------|--------------------------------------|
| ナビゲーション・ヘッダー                | `src/components/Header.astro`        |
| 活動概要セクション                     | `src/components/Services.astro`      |
| OSMFJについて（ポートフォリオ）         | `src/content/portfolio/project-*.md` |
| これまでの主な活動（タイムライン）        | `src/components/About.astro`         |
| 組織体制・役員情報                     | `src/data/site.ts`                   |
| 企業賛助会員                          | `src/components/Clients.astro`       |
| サイト設定（タイトル・SNSリンク等）      | `src/data/site.ts`                   |
| 画像・PDF等の静的ファイル              | `public/img/`                        |


処理系
=====

[Astro](https://astro.build/) を使用して静的HTMLを生成します。

### 開発環境のセットアップ

```
node >= 18 が必要です。
```

```bash
npm install
npm run dev      # 開発サーバー起動 (http://localhost:4321)
npm run build    # 本番ビルド (dist/ に出力)
npm run preview  # ビルド結果のプレビュー
```

### プロジェクト構成

```
src/
  layouts/    # HTMLレイアウト
  components/ # 各セクションのAstroコンポーネント
  content/
    portfolio/  # OSMFJについてのポートフォリオ記事 (Markdown)
  data/
    site.ts   # サイト設定・役員・SNSリンク
  pages/
    index.astro  # メインページ
public/
  img/        # 画像ファイル
  css/        # スタイルシート
  js/         # JavaScriptファイル
```


ライセンス&Copyright
=================

本コンテンツの著作権は、一般社団法人オープンストリートマップ ファウンデーション ジャパンが所有します。

本コンテンツのテーマは、
Agency theme based on [Agency bootstrap theme](https://startbootstrap.com/template-overviews/agency/)
です。
