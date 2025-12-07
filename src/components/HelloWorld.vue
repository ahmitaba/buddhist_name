<template>
  <div class="hello">
    <h2>
      <a @click="step = 0">
        <img src="../assets/fuo.jpg" class="avatar" alt="fuo"/>
          南無阿彌陀佛覺醒團隊&nbsp;&nbsp;&nbsp;&nbsp;<br class="thin-only"/>
          <div style="width: 1em; height: 1em; display: inline-block;" class="thin-only"></div>明峰佛寺念佛共修
        </a>
      </h2>

   <!--<h2 v-show="step == 0">App免費下載</h2> -->



      <!-- 
        Use Google Form（Google）    -->

     <!-- <div class="ui buttons" v-show="step == 0">
      <a class="ui huge blue button" href="https://apps.apple.com/tw/app/%E5%BF%B5%E4%BD%9B%E8%99%9F/id1637378153" target="_blank"><i class="app store icon" />App Store下載
      </a>

      <a class="ui huge orange button" href="https://play.google.com/store/apps/details?id=tw.bestian.fuo" target="_blank"><i class="google play icon" />Google Play下載
      </a> 
    </div>-->

    <div class="ui divider" v-show="step == 0"></div>

    <a @click="step = 1" v-show="step == 0">
      <img class = "fuo" src="../assets/fuo.jpg" />
    </a>
    <br v-show="step == 0" />
    <div class="ui buttons up" v-show="step == 0">
      <a class="ui huge teal button" @click="step = 1"><i class="globe icon" />網站版
      </a>
    </div>


    <div class="ui segment container" v-show="step == 1">

      <h4 class="ui header">一億佛號活動(2025/02/22~2025/09/28)</h4>

      <div class="ui active inverted dimmer" v-show="myTotal === undefined">
        <div class="ui text loader">資料載入中...</div>
      </div>

      <div v-show="myTotal !== null" class="ui indicating green progress" :data-value="myTotal" data-total="10000000" id="ex">
        <div class="bar" :style="{width: (Math.min(myS, 100)) + '%'}">
          <div class="progress"></div>
        </div>
        <div class="label">已達成：{{ myTotal }} / 10000000</div>
      </div>

      <div class="label">
        <span v-show="myToDay">本日加總：<b>{{ myToDay }}</b>聲佛號</span>
        <router-link to="/recent_count" class="ui tiny button" style="margin-left: 10px; font-size: 14px;">
          <i class="chart line icon"></i>查看近期統計
        </router-link>
      </div>

      <div class="ui divider"></div>

      <div>
        <h3 class ="ui header">南無阿彌陀佛 六字洪名太不可思議 🟢🔵<span class="fat-only">🟢🔵</span></h3>
        <div class="buddha-blessing">
          <div style="margin-bottom: 0.5em;">
            西方極樂世界進入的通關密碼 💚🩷💚🩷💚
          </div>
          <ul style="margin-left: 1.2em;" class="vertical-list">
            <li>
              <span style="font-weight: bold;">🌎 信：</span>30% 完全相信人類不會生病不會死亡。
            </li>
            <li>
              <span style="font-weight: bold;">🌎 願：</span>30% 一心一意的透過通關密碼<br/><b style="margin-left: 1.2em;">「南無阿彌陀佛」</b>六字大法好。
            </li>
            <li>
              <span style="font-weight: bold;">🌎 行：</span>40% 積極無私、無怨無悔地幫助眾生<br/><span style="margin-left: 1.2em;">創造實相世界！</span>
            </li>
          </ul>
        </div>
      </div>


      <!-- <h4 class="ui header">
        2023 永明佛寺行腳行程表
      <br/>
        <a href="https://docs.google.com/spreadsheets/d/19pJLqZK6HpKzg1W9rxkezJ2_g4BM5-FspMF3qZaLPQI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        行程表請按此</a>
      </h4> -->

      <!--<h4 class="ui header">
        永明佛寺+明峰佛寺點亮心燈光明燈迴向表：
      <br/>
        <a href="https://forms.gle/zeuANUaxF5AWhrBH" target="_blank" rel="noopener noreferrer">https://forms.gle/zeuANUaxF5AWhrBH</a>
      <br/>
        永明佛寺+明峰佛寺為您守護一輩子光明心燈
      </h4>-->

      <div v-show="!dismiss">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBmqo2vukf9_0566w9c-ASXfov5mfqGwmZdUEx-RHiBd6SAw/viewform?embedded=true" width="88%" height="676" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>

        <h3 class ="ui header"> 使用說明</h3>
        <p>白淨家人佛安<br/>為世界千萬和平祈福！集結人們善念共振存儲無形富貴財富！</p>
        <p>請在網站上登錄您的名字和今天念了幾聲佛號，再按「登錄佛號」按鈕即可。</p>
        
        <p>每個名字每天只能登錄一次，請在晚上7:30前登錄以便回向，永明佛寺+明峰佛寺會在晚上7:30-8:00間回向。</p>

        <p>永明佛寺地址：台東縣太麻里鄉華源村南北坑58-1號。永明佛寺+明峰佛寺電話：<a herf="tel:0937280910">0937280910</a>、<a herf="tel:0982029814">0982029814</a></p>

        <p>明峰佛寺地址：台東縣卑南鄉明峰村龍過脈171之一號</p>

        <p>目前有<router-link class = "item" to ="/about"><i class ="plus icon"/>
          <span class="fat-only">加總</span></router-link>的功能，您可以輸入關鍵字打自己的名字，查到所有的記錄和加總。</p>

        <p>若您希望在其他佛寺使用類似的軟體，<br/>可以在<i class = "github icon"/>Github上，將本專案創建分叉版(Fork)，自行修改架站。</p>
        <p>原始碼完全公開，請見此：<a href="https://github.com/ahmitaba/buddhist_name" target="_blank"><i class = "github icon"/>原始碼</a>

        &nbsp;&nbsp;&nbsp;&nbsp;<a class="ui red basic button" @click="dismiss = true">不再顯示提示</a></p>
      </div>
    </div>

    <form class="ui form container" v-show="step == 1">
      <div class="fields">
        <div class="field">
          <label><i class = "calendar icon"/>今天日期：{{date}}</label>
        </div>
        <div class="field">

          <label><i class = "user icon"/>您的姓名/法名：
          <input type="text" name="" v-model = "name"/> </label> 
        
        </div>
        <div class="field">
          <label><i class = "comment icon"/>您今天念了幾聲佛號：</label>
          <input type="number" v-model = "number" />
        </div>
        <div class="field">
          <label><i class = "question icon"/>念佛號原因：</label>
          <input type="text" v-model = "reason" />
        </div>

        <!-- <div class="field left aligned">
          <input type="checkbox" v-model = "notJoin" />
          <label>不加入千萬佛號統計請勾此</label>
        </div> -->
      </div>

      <div class="field">
        <div class="ui buttons">
          <button type="button" class="ui huge green button ani tada" @click.prevent="addNumber"><i class = "upload icon"/>登錄佛號</button>
          <!--<div class="or"></div>
          <button  type="button" class = "ui huge orange button ani tada" @click.prevent ="loginGoogle" v-if="!user"><i class = "google  icon"/>google登入</button> -->
          <!--<button  type="button" class = "ui huge blue button ani tada" @click.prevent ="logout" v-else>
            <img id = "r" :src="photoURL" />
            <i class = "sign-out icon"/>登出</button>-->
        </div>
      </div>
    </form>

    <div class="ui divider" v-show="step == 1"></div>

    <select id="s" class="ui dropdown" v-model="mode" v-show="step == 1">
      <option value="">模式</option>
      <option value="today">今日</option>
      <option value="all">所有</option>
    </select>

    <div class="ui list container left aligned" v-show="mode == 'today' && step == 1">
      <div class="item" v-for = "(n, k) in t(s(names))" :key="k"> <img class="avatar" :src="par(n.photoURL)" v-show="n.photoURL" :alt="n.n"/> {{n.date}}: {{n.n}}念了<span class="highlight"> {{parseInt(n.number)}} 聲</span>佛號!! </div>
    </div>

    <div id="infinite" class="ui list container left aligned" v-show="mode == 'all' && step == 1">
      <div class="item" v-for = "(n, j) in s(allnames).slice(0, len)" :key="j"> <img class="avatar" :src="par(n.photoURL)" v-show="n.photoURL" :alt="n.n"/> {{n.date}}: {{n.n}}念了<span class="highlight"> {{parseInt(n.number)}} 聲</span>佛號!! </div>
    </div>

    <div class="ui divider" v-show="step == 1"></div>
    
    <form class="ui form container" v-show="names[0] && step == 1">
      <div class="fields">
        <div class="field">
          <label><i class = "calendar icon"/>今天日期：{{date}}</label>
        </div>
        <div class="field">

          <label><i class = "user icon"/>您的姓名/法名：
          <input type="text" name="" v-model = "name"/> </label> 
        
        </div>
        <div class="field">
          <label><i class = "comment icon"/>您今天念了幾聲佛號：</label>
          <input type="number" v-model = "number" />
        </div>
        <div class="field">
          <label><i class = "question icon"/>您念佛號的原因：</label>
          <input type="text" v-model = "reason" />
        </div>
      </div>

      <!-- <div class="field left aligned">
        <input type="checkbox" v-model = "notJoin" />
        <label>不加入千萬佛號統計請勾此</label>
      </div> -->

      <div class="field">
        <div class="ui buttons">
          <button type="button" class="ui huge green button ani tada" @click.prevent="addNumber"><i class = "upload icon"/>登錄佛號</button>
          <!-- <div class="or"></div>
          <button type="button" class = "ui huge orange button ani tada" @click.prevent ="loginGoogle" v-if="!user"><i class = "google icon"/>google登入</button> -->
          <!--<button type="button" class = "ui huge blue button ani tada" @click.prevent ="logout" v-else>
            <img id = "r" :src="photoURL" />
            <i class = "sign-out icon"/>登出</button> -->
        </div>
      </div>
    </form>
    <div id = "container" style="disply:none">
      <!-- <a id ="downloadAnchorElem"></a>
      <a id ="downloadAnchorElem1"></a> -->
    </div>

  </div>
</template>

<script>
import { db } from '../firebase.js'
import { useFirebaseAuth } from 'vuefire'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref as dbRef, set } from 'firebase/database'

const auth = useFirebaseAuth()

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

export default {
  name: 'HelloWorld',
  metaInfo: {
    title: '歡迎',
  },
  props: ['names', 'myTotal', 'myToDay', 'allnames', 'len'],
  data: () => ({
      step: 1,
      date: new Date().getFullYear() +'/'+ parseInt(1+new Date().getMonth()) +'/'+ new Date().getDate(),
      mode: 'today',
      number: 0,
      notJoin: false,
      p: '',
      msg: '',
      reason: '',
      key: '',
      edit: '',
      read: 0,
      user: '',
      name: '',
      token: '',
      uid: '',
      provider: '',
      photoURL: '',
      dismiss: false
  }),
  computed: {
    myS () {
      const ans = (this.myTotal || 0) * 100 / 100000000
      // console.log(ans)
      return ans
    }
  },
  methods: {
    par (u) {
      if (u == 'https://bestian.github.io/number/img/number.jpeg') {
        u = 'https://bestian.github.io/number/img/number.jpg'
      }
      return u
    },
    t: function (list) {
      var ans = list.filter(function(u) {
        return u.date == new Date().getFullYear() +'/'+ parseInt(1+new Date().getMonth()) +'/'+ new Date().getDate();
      });
      return ans;
    },
    s: function (list) {
      // console.log(list)
      list = list || []
      var l = list.slice().sort(function(a, b) {
        var arr1 = a.date.split('/');
        var arr2 = b.date.split('/');
        var ans = (parseInt(arr2[0]) * 36500 + parseInt(arr2[1]) * 3000 + parseInt(arr2[2]) * 100) - (parseInt(arr1[0]) * 36500 + parseInt(arr1[1]) * 3000 + parseInt(arr1[2]) * 100) + parseInt(b.time) - parseInt(a.time);
        return ans;
      })
      return l
    },
    obj_to_list (obj) {
      if (Array.isArray(obj)) {
        return [...obj]
      } else {
        const ks = Object.keys(obj)
        const list = ks.map(function (i) {
          return obj[i]
        })
        return list
      }
    },
    addNumber () {
      const vm = this
      var arr = this.obj_to_list(this.names)
      // console.log(arr)
      
      if (!this.name) {
        alert('請輸入您的大名');
        return;
      }
      var o = {
        uid: this.uid || '123',
        n: this.name,
        reason: this.reason,
        photoURL: (this.photoURL && this.photoURL !== 'https://bestian.github.io/number/img/number.jpeg') ? this.photoURL : 'https://bestian.github.io/number/img/number.jpg',
        time: (new Date()).getTime(),
        date: this.date,
        notJoin: this.notJoin,
        number: this.number
      }
      if (this.number && parseInt(this.number) > 0) {
        if (this.names.filter(function (o) {
          return o.n === vm.name && o.date === vm.date
        }).length === 0) {
          const idx = arr.length
          // arr.push(o)
          // console.log(arr)
          console.log('push new data')
          set(dbRef(db, 'names/' + idx), o).then(() => {
            window.alert('登入成功:' + o.n + '今天念了' + o.number +  '聲佛號')
            localStorage.name = this.name;
            this.number = 0;
          })
        } else {
          window.alert('您今天已登入過，請明天再來')
        }
      } else {
        window.alert('請輸入您今天念了幾聲佛號')
      }
    },
    logout () {
      const vm = this
      auth.signOut().then(function() {
        vm.user = null
        vm.uid = null
        vm.photoURL = null
      })
    },
    loginGoogle () {
      const vm = this

      /* var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.allnames.slice(0, this.allnames.length - 100)));
      var dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute("href",     dataStr     );
      dlAnchorElem.setAttribute("download", "data-old.json");
      dlAnchorElem.click();


      var dataStr1 = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.allnames.slice(this.allnames.length - 100, this.allnames.length + 1)));
      var dlAnchorElem1 = document.getElementById('downloadAnchorElem1');
      dlAnchorElem1.setAttribute("href",     dataStr1     );
      dlAnchorElem1.setAttribute("download", "data-new.json");
      dlAnchorElem1.click(); */

      if (this.isInApp) {
        window.alert('本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝')
      } else {
        signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        vm.user = user
        vm.email = user.providerData[0].email
        vm.token = token
        vm.uid = user.uid
        vm.photoURL = decodeURI(user.photoURL)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode)
        console.log(errorMessage)
      });
      // signInWithRedirect(auth, provider)
      }
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.dismiss) {
      this.dismiss = JSON.parse(localStorage.dismiss);
    }
    if (localStorage.reason) {
      this.reason = localStorage.reason;
    }
  },
  watch: {
    reason(newReason) {
      localStorage.reason = newReason;
    },
    dismiss(newDismiss) {
      localStorage.dismiss = newDismiss;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.ani {
}

.ani:hover {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}


@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada:hover {
  -webkit-animation: tada 4s linear 3;
  animation: tada 4s linear 3;
}

#s {
  font-size: 16px;
}

.fuo {
  width: 33vmin;
  border-radius: 15px;
  position: relative;
  top: 3.8em;
  z-index: -1;
}

#r {
  height: 2em;
  width: 2em;
  border-radius: 50%;
}

#ex {
  position: relative;
  width: 100%;
}

.vertical-list {
  list-style-type: none;
  padding: 0;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 360px;
  text-align: left;
}

</style>

