<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="20" class="logo">
        <img src="../assets/logo4.png"/> <span>VUE<i class="txt">ADMIN</i></span>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><img
                  :src="this.sysUserAvatar"/> {{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen"
                 @close="handleclose" @select="handleselect"
                 theme="dark" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf" >
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden" :key="index">
                  {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
                    :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"

          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      sysUserName: '',
      sysUserAvatar: '',
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function (a, b) {
    },
    //退出登录
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
      }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
      }).catch(() => {

      });


    }
  },
  mounted() {
    /*var user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.name || '';
      this.sysUserAvatar = user.avatar || '';
    }*/
  }
}

</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  
  .header {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
    
    .userinfo {
      text-align: right;
      padding-right: 35px;
      
      .userinfo-inner {
        color: #c0ccda;
        cursor: pointer;
      
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
        
      }
    }
    .logo {
      font-size: 22px;
      
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      
      .txt {
        color: #20a0ff
      }
      
    }
  }
  .main {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    
    aside {
        width: 230px;
    }
    
    .content-container {
      background: #f1f2f7;
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      left: 230px;
      overflow-y: scroll;
      padding: 20px;
      
      .breadcrumb-container {
        margin-bottom: 15px;
      
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        
        .breadcrumb-inner {
          float: right;
        }
      
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    
    }
  }
}
</style>