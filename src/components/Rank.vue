<template>
    <div class="card">
      <div class="card-header">
        <h2 class="header-title">图书排行</h2>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>排名</th>
              <th>书名 & 发布者</th>
              <th>发布日期</th>
              <th>类型</th>
              <th>书号</th>
              <th>借阅量</th>
              <th>评分</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="index">
              <td>{{ index + 1 }}</td>
              <td class="book-info">
                <img :src="book.coverImage" alt="Book Cover" class="cover-image" />
                <div class="text-info">
                  <div class="book-title">{{ book.title }}</div>
                  <div class="book-author">{{ book.publisher }}</div>
                </div>
              </td>
              <td class="book-author">{{ book.publishDate }}</td>
              <td class="book-author">{{ book.type }}</td>
              <td class="book-author">{{ book.isbn }}</td>
              <td class="book-author">{{ book.borrowCount }}</td>
              <td class="book-author">{{ book.rating }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import bookCover from '../assets/test.jpg';
  export default {
    name: 'BookTable',
    data() {
      return {
        books: [
          {
            title: '算法',
            publisher: '0x639c70fee450963ece73fa63063b83ee05b90dbb',
            publishDate: '2019-04-01',
            type: '综合性图书',
            isbn: '978-7-115-27579-0',
            borrowCount: 3,
            rating: 29,
            coverImage: bookCover, // 直接使用导入的变量
          },
          {
            title: '设计模式之禅',
            publisher: '0xf2b0ddd48b4fb78078aca47f54e340cb028ad409',
            publishDate: '2019-04-01',
            type: '综合性图书',
            isbn: '978-7-115-27579-0',
            borrowCount: 0,
            rating: 37,
            coverImage: bookCover, // 直接使用导入的变量
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    background: #ffffff;
    margin: 8px auto 20px;
    padding: 20px;
  }
  
  .card-header {
    margin-bottom: 20px;
  }
  
  .header-title {
    font-size: 1rem;
    color: #344767; /* Softer gray color for header */
    text-align: left; /* Left aligned */
  }
  
  .table {
    width: 100%;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    color: #8392ab;
    font-size: 0.8rem;
  }
  
  .cover-image {
    width: 50px;
    height: 60px;
    border-radius: 10px;
    margin-right: 10px;
  }
  
  .book-info {
    display: flex;
    align-items: center;
  }
  
  .text-info {
    display: flex;
    flex-direction: column;
  }
  
  .book-title {
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #344767; 
  }
  
  .book-author {
    font-size: 0.8rem;
    color: #8392ab; 
  }
  </style>