<template>
    <div class="card-container">
        <div class="card">
            <h1>发布书籍</h1>
            <form ref="form" @submit.prevent="publishBook">
                <div class="form-group inline-input">
                    <label for="nameWriter">作者姓名：</label>
                    <input type="text" id="nameWriter" v-model="nameWriter" placeholder="作者姓名" required />
                </div>

                <div class="form-group inline-input">
                    <label for="style">书籍类型：</label>
                    <input type="text" id="style" v-model="style" placeholder="书籍类型" required />
                </div>

                <div class="form-group inline-input">
                    <label for="publisherPublishAge">出版年份：</label>
                    <input type="text" id="publisherPublishAge" v-model="publisherPublishAge" placeholder="出版年份" required />
                </div>

                <div class="form-group inline-input">
                    <label for="ISBN">ISBN：</label>
                    <input type="text" id="ISBN" v-model="ISBN" placeholder="书籍ISBN" required />
                </div>

                <div class="form-group inline-input">
                    <label for="pages">页数：</label>
                    <input type="number" id="pages" v-model="pages" placeholder="页数" required min="1" style="width: 100px;" />
                </div>

                <!-- 书籍状态按钮 -->
                <div class="form-group inline-input">
                    <label for="status">书籍状态：</label>
                    <el-button
                        :type="status === 'draft' ? 'primary' : 'default'"
                        :class="{ 'is-active': status === 'draft' }"
                        @click="status = 'draft'"
                        class="status-btn"
                    >草稿</el-button>
                    <el-button
                        :type="status === 'published' ? 'primary' : 'default'"
                        :class="{ 'is-active': status === 'published' }"
                        @click="status = 'published'"
                        class="status-btn"
                    >已发布</el-button>
                </div>

                <!-- 书籍简介：保持输入框一致的样式，放在同一行 -->
                <div class="form-group inline-input">
                    <label for="intro">书籍简介：</label>
                    <textarea id="intro" v-model="intro" placeholder="书籍简介" required></textarea>
                </div>

                <!-- 封面上传：输入框与其他输入框在同一行 -->
                <div class="form-group inline-input">
                    <label for="cover">封面上传：</label>
                    <input type="file" id="cover" ref="cover" @change="handleCoverChange" v-if="!coverUrl" />
                    <div v-if="coverUrl" class="cover-preview">
                        <img :src="coverUrl" alt="封面预览" width="150" />
                        <button type="button" class="remove-cover" @click="removeCover">×</button>
                    </div>
                </div>

                <button type="submit" :disabled="isSubmitting">发布书籍</button>
            </form>

            <div v-if="isSubmitting">正在发布，请稍等...</div>
        </div>
    </div>
</template>

<script>
    import { ElButton } from 'element-plus';

    export default {
        components: {
            ElButton
        },
        data() {
            return {
                nameWriter: '',
                style: '',
                publisherPublishAge: '',
                ISBN: '',
                pages: 0,
                status: 'draft', // 默认状态是草稿
                intro: '',
                cover: null,
                coverUrl: '',
                isSubmitting: false,
            };
        },
        methods: {
            handleCoverChange(event) {
                const file = event.target.files[0];
                if (file) {
                    this.cover = file;
                    this.coverUrl = URL.createObjectURL(file);
                }
            },

            removeCover() {
                this.cover = null;
                this.coverUrl = '';
                this.$refs.cover.value = ''; // Reset file input
            },

            async publishBook() {
                if (!this.$refs.form.checkValidity()) return;

                this.isSubmitting = true;

                try {
                    // 模拟书籍发布成功
                    alert("书籍发布成功！");
                    window.location.reload();
                } catch (err) {
                    alert("发布失败: " + err);
                } finally {
                    this.isSubmitting = false;
                }
            },
        },
    };
</script>

<style scoped>
    .card-container {
        display: flex;
        justify-content: flex-start; /* 向左对齐 */
        padding: 20px;
        margin-left: 20%;
    }

    .card {
        width: 100%;
        max-width: 800px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-left: 20px;
    }

    h1 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .inline-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }

        .inline-input label {
            font-weight: bold;
            display: inline-block;
            margin-right: 10px;
            white-space: nowrap;
            width: 150px; /* 设置标签宽度 */
        }

        .inline-input input,
        .inline-input select,
        .inline-input .el-radio,
        .inline-input textarea {
            flex: 1;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

    textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        min-height: 100px; /* 设置一个最小高度 */
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #81D4FA;
        cursor: pointer;
        transition: border-color 0.25s;
    }

        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

    img {
        margin-top: 10px;
        max-width: 150px;
        height: auto;
    }

    .cover-preview {
        position: relative;
        display: inline-block;
        margin-right: 500px;  /* 给封面预览添加左边距，确保不与输入框重叠 */
        width: 150px;  /* 设置预览容器的固定宽度 */
        height: 150px;  /* 设置固定高度 */
    }
    
    .cover-preview img {
        width: 100%;  /* 图片宽度填满父容器 */
        height: 100%;  /* 图片高度填满父容器 */
        object-fit: cover;  /* 保持图片比例，裁剪多余部分 */
    }

    .remove-cover {
        background-color: transparent;
        border: none;
        color: red;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
    }

    /* 默认按钮样式 */
    .status-btn {
        border-radius: 4px;
        padding: 10px;
        border: 1px solid #ccc; /* 默认边框 */
        background-color: white;
        color: black;
        width: 320px;
        transition: all 0.3s ease;
        outline: none; /* 去掉焦点时的轮廓 */
}

    .status-btn:hover {
        background-color:   #B3E5FC; /* 悬停背景色 */
        border-color:#B3E5FC; /* 鼠标悬停时边框颜色 */
    }

    .status-btn.is-active {
        background-color: #81D4FA; /* 选中时背景色 */
        color: black;  /* 选中时的文字颜色 */
        border: none; /* 去掉选中后的边框 */
    }

    .status-btn:active {
        background-color: #81D4FA; /* 点击时的背景色 */
        border-color: #81D4FA; /* 保持选中时的边框颜色 */
    }

</style>