<template>
    <div class="big-container">
      <el-main>
        <div class="card-container">
          <!-- Book Image and Description in a Single Card -->
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="card">
                <el-row>
                  <el-col :span="12">
                    <div class="image-container">
                      <el-image
                        src="src/assets/1.png"
                        fit="contain"
                        style="width: 100%; max-width: 250px"
                      />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="post-content">
                      <p class="post-title">书籍名称</p>
                      <p class="post_content">出版社</p>
                      <p class="post_content">书号</p>
                      <p class="post_content">页数</p>
                      <p class="post_content">在架状态</p>
                      <p class="post_content">借阅次数</p>
                    </div>
                    <el-button type="primary" class="custom-button" @click="showCommentDialog = true">立即评价</el-button>
                    <el-button type="success" class="custom-button">返回主页</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-col>
  
            <!-- Example Content Card -->
            <el-col :span="24">
              <div class="card">
                <div class="post-content">
                  <p class="post-title">书籍简介</p>
                  <p class="post_content">这是示例内容。</p>
                  <div class="author-info">
                    <span>2023-10-10 14:00</span>
                    <span>作者: 匿名</span>
                  </div>
                </div>
              </div>
            </el-col>
  
            <!-- Comments Card -->
            <el-col :span="24">
              <div class="card">
                <div class="comments-section">
                  <div v-if="showReplyInput" class="make_comment">
                    <el-input
                      class="input_comment"
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4 }"
                      placeholder="请输入"
                      v-model="newComment"
                    ></el-input>
                    <el-button class="custom-confirm-button" @click="submitComment">确认</el-button>
                    <el-button class="custom-cancel-button" @click="cancelComment">取消</el-button>
                  </div>
  
                  <div v-for="(comment, index) in comments" :key="index" class="comments">
                    <div class="comment">
                      <div class="comment-content">
                        <div class="name-line">{{ comment.author }}</div>
                        <div class="name-line">{{ comment.content }}</div>
                        <div class="name-line">
                          <span>{{ comment.time }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
  
          <!-- Comment Dialog -->
          <el-dialog title="立即评价" :model-value="showCommentDialog" @close="resetDialog">
            <el-form>
              <el-form-item label="评分">
                <el-rate v-model="rating"></el-rate>
              </el-form-item>
              <el-form-item label="评价">
                <el-input class="input"
                  type="textarea"
                  v-model="commentContent"
                  placeholder="输入您的评价"
                ></el-input>
              </el-form-item>
            </el-form>
            <div style="text-align: right;">
              <el-button @click="showCommentDialog = false">取消</el-button>
              <el-button type="primary" @click="submitRating">提交</el-button>
            </div>
          </el-dialog>
        </div>
      </el-main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { ElButton, ElInput, ElImage, ElRow, ElCol,ElDialog,ElRate } from 'element-plus';
  import 'element-plus/dist/index.css';
  const showReplyInput = ref(false);
  const newComment = ref('');
  
  const comments = ref([
    {
      author: '用户1',
      content: '111',
      time: '2023-10-10 16:30',
    },
    {
      author: '用户2',
      content: '222',
      time: '2023-10-10 16:31',
    },
  ]);
  
  const showCommentDialog = ref(false);
  const rating = ref(0);
  const commentContent = ref('');
  
  const resetDialog = () => {
    rating.value = 0;
    commentContent.value = '';
  };
  
  const submitRating = () => {
    console.log('Rating:', rating.value);
    console.log('Comment:', commentContent.value);
  
    resetDialog();
    showCommentDialog.value = false;
  };
  
  const submitComment = () => {
    console.log('Submit comment:', newComment.value);
    newComment.value = '';
  };
  
  const cancelComment = () => {
    showReplyInput.value = false;
    newComment.value = '';
  };
  </script>
  
  <style scoped>
  .big-container {
    margin: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .card {
    background-color: #c0daf1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .image-container {
    text-align: center;
    margin-top:50px;
  }
  
  .post-title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .post-content {
    text-align: left;
  }
  
  .post_content {
    color: gray; /* 设置文字颜色为灰色 */
    font-size: 14px; /* 调整字体大小，这个值可以根据您的需求进行调整 */
    line-height: 1.5; /* 增加行高以提高可读性（可选） */
  }
  
  .custom-button {
    margin-top: 10px;
    margin-right: 5px;
  }
  
  .author-info,
  .post-actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .like_button {
    width: 20px;
    cursor: pointer;
  }
  
  .comment {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
    padding: 10px 0;
    border-top: 1px solid #ddd;
  }
  
  .avatar {
    border-radius: 50%;
    width: 40px;
  }
  
  .comment-content {
    flex-grow: 1;
    text-align: left;
  }
  
  .name-line {
    font-weight: bold;
    
  }
  
  .el-dialog {
    width: 50%;
    max-width: 400px;
  }
  
  .input{
    margin-top:5px;
    margin-bottom: 10px;
  }
  </style>
