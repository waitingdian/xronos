<template>
  <div class="index-page">
    <div class="banner">
      <div class="img-wrap">
        <img :src="bannerUrl" alt="">
        <div class="login-section">
          <p class="title">登 录</p>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" width="350px">
            <el-form-item label="用户名" prop="userName" required>
              <el-input v-model.number="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" required>
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div class="footer">
            <el-button type="primary" @click="login('ruleForm')">提交</el-button>
          </div>
        </div>
      </div>


    </div>
    <div class="product">
      <el-row>
        <el-col :span="8">
          <div class="product-item">
            <div class="top">
              <p>餐饮趋势分析</p>
              <p>是什么</p>
            </div>
            <div class="mid">啦啦啦啦啦啦啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
            <div class="bot">
              <el-button size="mini" round>了解更多</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="product-item">
            <div class="top">
              <p>餐饮趋势分析</p>
              <p>是什么</p>
            </div>
            <div class="mid"></div>
            <div class="bot">
              <el-button size="mini" round>了解更多</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="product-item">
            <div class="top">
              <p>餐饮趋势分析</p>
              <p>是什么</p>
            </div>
            <div class="mid"></div>
            <div class="bot">
              <el-button size="mini" round>了解更多</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="introduce">
      <div class="introduce-item1">
        <div class="introduce-content">
          <p class="title"> <span class="text-yellow">“</span>餐饮趋势分析<span class="text-yellow">”</span>是什么 </p>
          <el-row style="padding-top: 40px;">
            <el-col :span="12">
              <div>
                <img :src="introduceImgUrl1" alt="">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-wrap">
                啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
              </div>
            </el-col>
          </el-row>
          <el-row style="padding-top: 20px;">
            <el-col :span="12">
              <div class="text-wrap" style="padding-top: 25px;">
                啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
              </div>

            </el-col>
            <el-col :span="12">
              <div>
                <img :src="introduceImgUrl2" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="introduce-item2">
        <div class="introduce-content">
          <p class="title"> <span class="text-yellow">“</span>合作优势<span class="text-yellow">”</span></p>
          <div class="text-wrap" style="">
            啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          </div>
          <div class="advantage-contain">
            <div class="advantage-item">
              <div class="left">
                <img :src="advantageIconUrl1" alt="">
              </div>
              <div>
                <p class="advantage-title">多种开发工具</p>
                <p>提供多种开发IT工具</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="left">
                <img :src="advantageIconUrl2" alt="">
              </div>
              <div>
                <p class="advantage-title">丰富API接口</p>
                <p>餐饮业务一应俱全</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="left">
                <img :src="advantageIconUrl3" alt="">
              </div>
              <div>
                <p class="advantage-title">业务深度开放</p>
                <p>提供更多专业接口</p>
              </div>
            </div>
          </div>
          <div class="advantage-contain">
            <div class="advantage-item">
              <div class="left">
                <img :src="advantageIconUrl4" alt="">
              </div>
              <div>
                <p class="advantage-title">数据安全服务</p>
                <p>健全的安全体系保障</p>
              </div>
            </div>
            <div class="advantage-item" style="position: relative; left: -6px;">
              <div class="left">
                <img :src="advantageIconUrl5" alt="">
              </div>
              <div>
                <p class="advantage-title">完善服务保障</p>
                <p>24小时运维监控</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="left">
                <img :src="advantageIconUrl6" alt="">
              </div>
              <div>
                <p class="advantage-title">客服快速响应</p>
                <p>开发问题及时响应</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="introduce-item3">
        <div class="introduce-content">
          <p class="title"> <span class="text-yellow">“</span>接入流程<span class="text-yellow">”</span></p>
          <div class="text-wrap">
            啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
          </div>
          <div>
            <img :src="introduceProcessImgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="side-footer">
      <p class="copyright">@2020 P-issue</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    var validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      bannerUrl: require("../assets/images/banner.png"),
      introduceImgUrl1: require("../assets/images/introduce_img1.png"),
      introduceImgUrl2: require("../assets/images/introduce_img2.png"),
      advantageIconUrl1: require("../assets/images/advantage_icon1.png"),
      advantageIconUrl2: require("../assets/images/advantage_icon2.png"),
      advantageIconUrl3: require("../assets/images/advantage_icon3.png"),
      advantageIconUrl4: require("../assets/images/advantage_icon4.png"),
      advantageIconUrl5: require("../assets/images/advantage_icon5.png"),
      advantageIconUrl6: require("../assets/images/advantage_icon6.png"),
      introduceProcessImgUrl: require("../assets/images/introduce_process_img.png"),

      ruleForm: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-page .banner{
  }
  .index-page .banner > .img-wrap {
    display: block;
    margin: 0 auto;
    width: 1000px;
    position: relative;
  }
  .index-page .banner img{
    display: block;
    width: 100%;
  }
  .index-page .login-section {
    width: 420px;
    height: 290px;
    position: absolute;
    right: 50px;
    top: 50%;
    margin-top: -145px;
    background-color: #fff;
    border-radius: 10px;
  }
  .index-page .login-section .title{
    font-size: 22px;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .index-page .login-section .el-form{
    width: 360px;
  }
  .index-page .login-section .footer{
    text-align: center;
  }
  .index-page .product {
    background-color: #000000;
    padding-top: 40px;
    padding-bottom: 45px;
  }
  .product-item{
    width: 215px;
    height: 240px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
  }
  .index-page .product .el-row{
    width: 700px;
    margin: 0 auto;
  }
  .product-item .top{
    flex-direction: column;
    display: flex;
    justify-content: center;
    height: 90px;
    background-color: #ffbd04;
    font-size: 20px;
    padding: 10px 20px 5px 22px;
    color: #fff;
    box-sizing: border-box;
  }
  .product-item .mid{
    padding: 15px 25px;
    height: 105px;
    box-sizing: border-box;
    color: #303133;
  }
  .product-item .bot{
    text-align: center;
  }
  .product-item .bot .el-button--mini:hover{
    border-color: #ffbd04;
    background-color: rgba(255,289,4,0.2);
    color: #ffbd04;
  }

  .introduce-item1, .introduce-item3{
    background-color: #ededed;
    padding: 30px 0 40px;
  }
  .introduce-item1 .el-col div{
    width: 320px;
  }
  .introduce-item2{
    padding-top: 30px;
    background-color: #fff;
  }
  .introduce-item2 .text-wrap, .introduce-item3 .text-wrap{
    padding: 25px 20px 25px;
  }
  .introduce-item2 .advantage-contain{
    width: 670px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .introduce-item2 .advantage-item{
    display: flex;
    align-items: center;
    color: #b7b7b7;
    font-size: 12px;
    padding-bottom: 30px;
  }
  .introduce-item2 .advantage-item .left{
    padding-right: 10px;
  }
  .introduce-item2 .advantage-item .advantage-title{
    color: #303133;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .introduce-item3 {

  }
  .introduce-content{
    width: 710px;
    margin: 0 auto;
  }
  .introduce-content .el-col .text-wrap{
    padding-top: 10px;
    line-height: 1.5;
    color: #303133;
  }
  .introduce-content img {
    width: 100%;
  }
  .introduce .title{
    text-align: center;
    border-bottom: 1px solid #ffbd04;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    letter-spacing: 1px;
  }
  .introduce{
    color: #303133;
  }
  .introduce .text-yellow{
    color: #ffbd04;
  }
  .side-footer{
    background: #333;
    padding: 20px 0;
  }
  .side-footer .copyright {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }

</style>
