+++
title = "イベント追加フォーム"
description = "2025年のイベントを追加するフォーム"
date = "2025-06-26"
+++

# 2025年イベント追加フォーム

新しいイベントを2025年の表に追加するためのフォームです。

<form name="addEvent" method="POST" action="#" netlify>
  <div>
    <label for="eventDate">開催日:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <small>例: 2025/01/01</small>
  </div>
  
  <div>
    <label for="eventName">イベント名:</label>
    <input type="text" id="eventName" name="eventName" required>
  </div>
  
  <div>
    <label for="venue">会場名:</label>
    <input type="text" id="venue" name="venue" required>
  </div>
  
  <div>
    <label for="notes">備考:</label>
    <textarea id="notes" name="notes" rows="2"></textarea>
  </div>
  
  <button type="submit">送信</button>
</form>

## 注意事項
- 送信された情報は管理者が確認の上、適宜追加させていただきます。
- 反映までにお時間をいただく場合がございます。
- 個人情報は適切に管理し、イベント情報の追加・更新以外の目的では使用しません。

<style>
  form div {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="date"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  small {
    color: #666;
    margin-left: 0.5rem;
  }
</style>
