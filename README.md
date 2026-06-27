# 売却募集専門 不動産HP（HTML/CSS/JavaScriptのみ）

## 構成

- `index.html`：トップページ
- `sell.html`：無料査定ページ
- `flow.html`：売却の流れ
- `reason.html`：選ばれる理由
- `results.html`：売却実績
- `faq.html`：よくある質問
- `company.html`：会社概要
- `contact.html`：お問い合わせ
- `privacy.html`：プライバシーポリシー
- `assets/css/style.css`：共通デザイン
- `assets/js/site-config.js`：会社名・電話番号などの共通情報
- `assets/js/main.js`：スマホメニュー・フォーム・共通情報反映

## 最初に編集する場所

`assets/js/site-config.js` を開き、以下を実際の内容に変更してください。

```js
companyName: '株式会社ドリームワン',
phone: '0120-590-772',
phoneHref: '0120590772',
email: 'info@example.com',
address: '埼玉県さいたま市北区宮原町2-125-10',
license: '埼玉県知事（2）第24405号',
hours: '10:00〜19:00',
area: 'さいたま市・周辺エリア'
```

## サーバーへのアップロード

さくらのレンタルサーバ等の `www` フォルダに、この中身をそのままアップロードしてください。

## お問い合わせフォームについて

現在は静的サイト用の仮実装で、送信時にメール作成画面が開きます。
実運用では以下のどれかに差し替えるのがおすすめです。

1. レンタルサーバーのメールフォーム機能
2. 外部フォームサービス
3. Googleフォーム
4. PHP/CGIフォーム

## メンテナンス方針

- 色や余白を変える場合：`assets/css/style.css` の `:root` を編集
- 会社情報を変える場合：`assets/js/site-config.js` を編集
- 売却実績を追加する場合：`results.html` のカードをコピーして追加
- FAQを追加する場合：`faq.html` の `details` をコピーして追加
- Googleマップを入れる場合：`company.html` の `map-placeholder` 部分をiframeに差し替え

## 公開前チェック

- 宅建業免許番号が正しいか
- 所在地・電話番号・営業時間が正しいか
- プライバシーポリシーが実運用に合っているか
- 問い合わせフォームの送信先が正しいか
- Google Analytics / Search Console を設定したか
- 不動産広告表現に誇大表現がないか



## 販売実績の運用方針

販売中物件は外部ポータルサイトや外部掲載サービスで管理し、このHPでは販売中物件を掲載しない構成にしています。
その代わり、`results.html` に販売実績・成約実績を掲載します。

### 実績を追加する方法

実績は `results.html` ではなく、`assets/js/results-data.js` だけを編集します。

以下の1件分をコピーして追加し、内容を差し替えてください。

```js
{
  category: 'マンション',
  title: '〇〇市 3LDKマンション',
  closedAt: '2026年春',
  period: '約2か月',
  request: '住み替え',
  comment: '室内写真と販売資料を整え、近隣エリアで検討中の購入希望者へ訴求しました。'
}
```

差し替える項目は以下です。

- `category`：物件種別
- `title`：エリア・物件概要
- `closedAt`：成約時期
- `period`：売却期間
- `request`：相談内容
- `comment`：簡単な販売コメント

個人情報保護のため、番地・部屋番号・売主様が特定される情報は掲載しない運用をおすすめします。


## LINE導線について

この版ではLINE相談ボタン・LINEリンクは削除済みです。問い合わせ導線は電話・無料査定フォームを中心にしています。
