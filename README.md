# DojoCon Japan 2018

こちらは [DojoCon Japan 2018 Webサイト](https://dojocon2018.coderdojo.jp/) のリポジトリです。


## CSSのコンパイルについて

- [Bootstrap](https://getbootstrap.com/) を利用しています。
- コンパイルには [npm script](https://docs.npmjs.com/misc/scripts) を利用しています。以下のコマンドでコンパイルされます。

```
$ npm run build

/src/sass内のstyle.scssがコンパイルされ/cssに保存されます。
あわせて、/src/imgの中身は圧縮され、/imgに保存されます。

```

## Sessionページの作成について

`/session` の中に予め入っている `takashi-hosoya.md` を参考にしてください。上部の変数パートにそれぞれの内容を入力し、下部の本文部には、セッションの内容を記載してください。



```
title: Session ※ここは固定
j-title : セッションタイトル
description: メタで利用します。
thumbnail : スピーカー画像は600*600の正方形
speaker-name : 漢字（よみかた）
time-schedule : 時間
position : 役職名
speaker-info : "スピーカー情報を記載します。HTMLを利用したい場合は、ダブルクォーテーションで囲ってから記載してください。"
twitter : twitterのURL
facebook : FacebookのURL
url-link : リンクのURL
layout: session ※ここは固定
```



