<template>
  <div class="profile-card">
      <button class="button borrow">借阅榜</button>
      <button class="button rating">评分榜</button>
      <button class="button time">时间榜</button>
  </div>
</template>

<script>
</script>

<style>
.profile-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  height: 60px;
}

.button {
  padding: 10px 20px;
  margin-right: 10px; /* 按钮之间的间距 */
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
}

/* 借阅榜按钮 */
.button.borrow {
  background-color: #4CAF50; /* 绿色 */
}

.button.borrow:hover {
  background-color: #388E3C; /* 深绿色 */
}

/* 评分榜按钮 */
.button.rating {
  background-color: #FF9800; /* 橙色 */
}

.button.rating:hover {
  background-color: #F57C00; /* 深橙色 */
}

/* 时间榜按钮 */
.button.time {
  background-color: #2196F3; /* 蓝色 */
}

.button.time:hover {
  background-color: #1976D2; /* 深蓝色 */
}
</style>