"ui";
//激活码
var ActivationCode = "a1234568";
var URL = "https://test.mingchetech.com/v1.0/";
var brandId = 188;
var appName = "抖音精灵";
var companyName = "抖音精灵";
var user = {};

ui.statusBarColor("#409EFF");
// 颜色
var color_app_theme = "#409EFF";
var color_f = "#ffffff";
var color_f5 = "#f5f5f5";
var color_4 = "#444444";
var btnText = "获取验证码";
var color_input_bg = "#f5f5fa";

var isInit = true;
curveBrushScreen = false;//是否曲线滑动true取消滑动false直线滑动 v_close

var storage = storages.create("ABC");
storage.put("resp_message", "再试一次");
storage.put("err_message", "再试一次");
var date= new Date();
var currentTime=date.getTime();
var timer = storage.get("timer",currentTime)

console.log("---------------");
console.log("timer:"+timer);
console.log("currentTime:"+currentTime);
console.log(typeof  timer);
console.log(typeof  currentTime);
console.log("---------------");
//进入界面

if(timer >= currentTime){
    main();
}else{
    smslogin();
}


//时间
function getDay(day){
    return day*24*60*60*1000;
    // return day*60*1000;
}

//手机信息
// phoneInformation();
// smslogin  短信登录
// smslogin();
// register();
// main();
// mine();
// useProtocol();
//假设主界面
//<text w="*" h="*" gravity="center" text="正在拼命开发中，请耐心等待。。。"></text>
// toConfigure()
//我的界面
function mine() {

    var uphone = storage.get("phone");



    ui.layout(
        <frame bg={color_f}>
            <vertical>
                <horizontal bg={color_app_theme} paddingTop="5" paddingBottom="5" paddingLeft="20" paddingRight="20">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goBack.png" id="ivback" w="23" h="23" gravity="horizontal" />

                </horizontal>
                <horizontal padding="20" bg={color_app_theme} gravity="center_vertical">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/userHead.png" w="60" h="60" circle="true" ></img>
                    <vertical w="auto" marginLeft="12">
                        <text id="phone" text={uphone} textColor={color_f} textSize="15sp"></text>
                        <text text="注册码：a******8" id="ma" marginTop="5" textColor={color_f} textSize="15sp"></text>
                    </vertical>
                </horizontal >
                {/* <horizontal id="forgetThePassword" paddingTop="20" paddingRight="20" paddingBottom="10" paddingLeft="20" gravity="center_vertical">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/resetPassword.png" w="25" h="25"  ></img>
                    <text text="修改密码" marginLeft="5" layout_weight="1" textSize="15sp"></text>
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goNext.png" layout_gravity="right" w="25" h="25"   ></img>
                </horizontal> */}
                <horizontal padding="1" marginLeft="20" marginRight="20" bg={color_f5}></horizontal>

                <button id="back" marginTop="100" marginLeft="20" marginRight="20" bg={color_app_theme} circle="true" textColor={color_f}>退出登录</button>
            </vertical>
        </frame>
    );








    // if(推荐码.toString().length()!=0){
    //     ui.ma.setText(getEncryptma(推荐码));
    // }

    //修改密码
    // ui.forgetThePassword.on("click", () => {
    //     ForgetThePassword();
    // })

    //返回
    ui.ivback.on("click", () => {
        main();
    })
    //退出
    ui.back.on("click", () => {
        smslogin();
    })
}
//电话
function getEncryptPhone(phone) {
    return phone.substring(0, 3) + "****" + phone.substring(phone.length() - 4)
    //return new StringBuilder(phone.substring(0, 3)).append("****").append(phone.substring(phone.length() - 4)).toString();
}
function getEncryptma(ma) {
    return new StringBuilder(ma.substring(0, 2)).append("****").append(ma.substring(phone.length() - 2)).toString();
}
//主界面
function main() {

    ui.layout(

        // <drawer id="drawer">
        <frame>
            <vertical>
                {/* <horizontal bg={color_app_theme} >
                    <img src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" id="back" w="23" h="23" gravity="horizontal" />
                    <text text="忘记密码" layout_weight="1" gravity="center" textColor={color_4} textSize="20sp" />
                    <img src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="23" h="23" gravity="horizontal" visibility="invisible" />
                </horizontal> */}
                <appbar bg={color_app_theme}>
                    <toolbar id="toolbar" title={appName} />
                    <tabs id="tabs" />
                </appbar>
                <viewpager id="viewpager">
                    <frame>
                        <vertical bg={color_f5} padding="15">

                            <horizontal layout_weight="1" >
                                <vertical id="item1" layout_weight="1" bg={color_f} w="*" h="*" marginRight="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/batchConcerned.png" w="70" h="70"></img>
                                    <text text="批量关注/取消" textStyle="bold" textColor={color_4} gravity="center"></text>
                                    <text text="批量添加关注好友," gravity="center" marginTop="10" ></text>
                                    <text text="取消关注好友" gravity="center" marginTop="5"></text>
                                </vertical>

                                <vertical id="item2" layout_weight="1" bg={color_f} w="*" h="*" marginLeft="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/giveLike.png" w="70" h="70"></img>
                                    <text text="自动点赞" textStyle="bold" textColor={color_4} gravity="center" ></text>
                                    <text text="自动为用户点赞" gravity="center" marginTop="10" ></text>

                                </vertical>
                            </horizontal>
                            <horizontal layout_weight="1" marginTop="20" radius="20">
                                <vertical id="item3" layout_weight="1" bg={color_f} w="*" h="*" marginRight="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/newsSection.png" w="70" h="70"></img>
                                    <text text="消息专区" textStyle="bold" textColor={color_4} gravity="center"></text>
                                    <text text="自动给关注的好友" gravity="center" marginTop="10" ></text>
                                    <text text="发送消息" gravity="center" marginTop="5"></text>
                                </vertical>

                                <vertical id="item4" layout_weight="1" bg={color_f} w="*" h="*" marginLeft="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/liveInteraction.png" w="70" h="70"></img>
                                    <text text="直播间互动" textStyle="bold" textColor={color_4} gravity="center" ></text>
                                    <text text="自动给关注的好友" gravity="center" marginTop="10" ></text>
                                    <text text="直播间发送消息" gravity="center" marginTop="5"></text>
                                </vertical>
                            </horizontal>
                            <horizontal layout_weight="1" marginTop="20" radius="20">
                                <vertical id="item5" layout_weight="1" bg={color_f} w="*" h="*" marginRight="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/giftGive.png" w="70" h="70"></img>
                                    <text text="赠送礼物" textStyle="bold" textColor={color_4} gravity="center" ></text>
                                    <text text="自动给关注的好友" gravity="center" marginTop="10" ></text>
                                    <text text="赠送礼物" gravity="center" marginTop="5"></text>
                                </vertical>
                                <vertical id="item6" layout_weight="1" bg={color_f} w="*" h="*" marginLeft="10" gravity="center" padding="20 0">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/commentSection.png" w="70" h="70"></img>
                                    <text text="评论专区" textStyle="bold" textColor={color_4} gravity="center" ></text>
                                    <text text="自动对视频进行评论" gravity="center" marginTop="10" ></text>

                                </vertical>
                            </horizontal>
                        </vertical>
                    </frame>
                    <frame>
                        <text w="*" h="*" gravity="center" text="正在拼命开发中，请耐心等待。。。"></text>
                    </frame>

                </viewpager>
            </vertical>
        </frame>

        // {/* <vertical layout_gravity="left" bg="#ffffff" w="280">

        //     <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
        //     <list id="menu">
        //         <horizontal bg="?selectableItemBackground" w="*">
        //             <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
        //             <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
        //         </horizontal>
        //     </list>
        // </vertical> */}
        // </drawer>
    );
    // storage.put("comments",comments);
    //         storage.put("frequency",frequency);
    //         storage.put("watch",watch);

    var storage = storages.create("ABC");

    var comments = storage.get("comments", "hi,我来了");
    //概率自动点赞、评论、关注的概率
    var frequency = storage.get("frequency", 3);
    var watch = storage.get("watch", 3);
    var gift = storage.get("gift", 1);

    watch = watch * 1000;

    //关注
    ui.item1.on("click", () => {
        // toast("正在拼命开发中，请耐心等待。。。")
        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        var thread6 = threads.start(function () {
            launchApp("抖音短视频")
            sleep(8000)
            var i = 0;
            while (i <= frequency) {
                className("android.widget.Button").desc("关注").findOne().click();
                sleep(watch);
                let x1 = random(device.width * 0.2, device.width * 0.3);
                let y1 = device.height * 0.8
                let x2 = random(device.width * 0.2, device.width * 0.3);
                let y2 = device.height * 0.1;
                console.log("屏幕向下滑动");
                swipe(x1, y1, x2, y2, 500);
                sleep(watch);
                i = i+1;
            }
        });
    });
    //点赞
    ui.item2.on("click", () => {

        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        var thread7 = threads.start(function () {
            var i = 0;
            launchApp("抖音短视频")
            sleep(8000)
            while (i < frequency) {

                sleep(2000);
                // console.log("i start点赞:" + i)
                // // var dian = className("android.widget.Lin").depth(7)
                // // .packageName("com.ss.android.ugc.aweme").findOne(5000).click()
                // var dian = className("android.widget.LinearLayout").depth(6).findOne(5000).click("未选中");
                // console.log("dian:"+dian);
                // if(dian == true){
                //     dian.click()
                // }else{
                //     // className("android.widget.FrameLayout").depth(6).
                //     // packageName("com.ss.android.ugc.aweme").findOne().click()
                //     className("android.widget.LinearLayout").depth(6).findOne(5000).click("未选中");
                // }
                点赞();
                sleep(watch);
                let x1 = random(device.width * 0.2, device.width * 0.3);
                let y1 = device.height * 0.8
                let x2 = random(device.width * 0.2, device.width * 0.3);
                let y2 = device.height * 0.1;
                console.log("屏幕向下滑动");
                swipe(x1, y1, x2, y2, 500);
                sleep(watch);
                console.log("i end点赞:" + i)
                i= i+1;
            }
        });
    });
    function 点赞() {
        var 点赞 = className("android.widget.FrameLayout").descContains("未选中").depth(7).drawingOrder(1).find()
        if (点赞.length > 0) {
            for (var i = 0; i < 点赞.length; i++) {
                var 点赞坐标 = 点赞[i].bounds()
                if (点赞坐标.left >= 0 && 点赞坐标.left <= device.width &&
                    点赞坐标.top >= 0 && 点赞坐标.top <= device.height &&
                    点赞坐标.right >= 0 && 点赞坐标.right <= device.width &&
                    点赞坐标.bottom >= 0 && 点赞坐标.bottom <= device.height) {
                    sleep(500)
                    单击(点赞坐标.centerX(), 点赞坐标.centerY())
                    // toastLog("点赞")
                    sleep(1500)
                    return true
                }
            }
        } else {
            // log("找不到点赞")
            className("android.widget.LinearLayout").descContains("未选中").findOne().click();
        }
    }
    function 单击(x1, y1) {
        var x = random(x1 - 3, x1 + 3)
        var y = random(y1 - 3, y1 + 3)
        log("\n" + "前坐标：" + x1 + "," + y1 + "\n" + "后坐标：" + x + "," + y)
        sleep(50)
        press(Number(x), Number(y), 50)
        sleep(400)
    }
    // 关注  发消息
    ui.item3.on("click", () => {
        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        let thread7 = threads.start(function () {
            launchApp("抖音短视频")
            sleep(8000)
            let k = 0
            while (k <= frequency) {


                id("bi3").className("android.widget.Button").desc("关注").findOne().click();
                sleep(watch);
                id("adf").className("android.widget.ImageView").descContains("评论").findOne().parent().click();
                sleep(watch);
                id("cfa").findOne().click();
                sleep(watch);
                id("cfa").findOne().click();
                sleep(watch);
                setText(comments.toString());
                sleep(watch);
                id("adt").findOne().click();
                sleep(watch);
                id("ks").findOne().click();
                sleep(watch);
                // sleep(frequency);
                // lineDown(500);
                let x1 = random(device.width * 0.2, device.width * 0.3);
                let y1 = device.height * 0.8
                let x2 = random(device.width * 0.2, device.width * 0.3);
                let y2 = device.height * 0.1;
                console.log("屏幕向下滑动");
                swipe(x1, y1, x2, y2, 500);
                // swipe(596,1438);
                sleep(3000);

                console.log("k:" + k);
                k++;



                // var 发送 = className("android.widget.ImageView").depth(3).drawingOrder(8).find()
                // sleep(frequency)
                // console.log("发送:" + 发送.length);
                // if (发送.length > 0) {
                //     for (var i = 0; i < 发送.length; i++) {
                //         var 发送坐标 = 发送[i].bounds()
                //         if (发送坐标.left >= 0 && 发送坐标.left <= device.width &&
                //             发送坐标.top >= 0 && 发送坐标.top <= device.height &&
                //             发送坐标.right >= 0 && 发送坐标.right <= device.width &&
                //             发送坐标.bottom >= 0 && 发送坐标.bottom <= device.height) {
                //             sleep(500)
                //             单击(发送坐标.centerX(), 发送坐标.centerY())
                //             console.log("发送坐标")
                //             sleep(1500)
                //             break;
                //         }
                //     }
                // } else {
                //     console.log("找不到发送坐标");
                //     id("adt").findOne().click();
                // }

                // var 关闭 = className("android.widget.ImageView").depth(2).drawingOrder(8).find()

                // console.log("关闭:" + 关闭.length);
                // if (关闭.length > 0) {
                //     for (var i = 0; i < 关闭.length; i++) {
                //         var 关闭坐标 = 关闭[i].bounds()
                //         if (关闭坐标.left >= 0 && 关闭坐标.left <= device.width &&
                //             关闭坐标.top >= 0 && 关闭坐标.top <= device.height &&
                //             关闭坐标.right >= 0 && 关闭坐标.right <= device.width &&
                //             关闭坐标.bottom >= 0 && 关闭坐标.bottom <= device.height) {
                //             sleep(500)
                //             单击(关闭坐标.centerX(), 关闭坐标.centerY())
                //             // toastLog("关闭坐标")
                //             sleep(1500)
                //             break;
                //         }
                //     }
                // } else {
                //     back();
                //     // id("ks").findOne().click();
                //     log("找不到发送坐标");
                // }



                // lineDown(400);
                // console.log("k:" + k);
                // k++;


            }
        });
    });
    // 直播间 评价
    ui.item4.on("click", () => {
        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        var thread8 = threads.start(function () {
            // var 直播间 = className("android.widget.FrameLayout").depth(3).drawingOrder(7).find();
            // console.log("直播间:" + 直播间.length);
            // if (直播间.length > 0) {
            //     for (var i = 0; i < 直播间.length; i++) {
            //         var 直播间坐标 = 直播间[i].bounds()
            //         if (直播间坐标.left >= 0 && 直播间坐标.left <= device.width &&
            //             直播间坐标.top >= 0 && 直播间坐标.top <= device.height &&
            //             直播间坐标.right >= 0 && 直播间坐标.right <= device.width &&
            //             直播间坐标.bottom >= 0 && 直播间坐标.bottom <= device.height) {
            //             sleep(500)
            //             单击(直播间坐标.centerX(), 直播间坐标.centerY())
            //             console.log("直播间")
            //             sleep(1500)
            //             break;
            //         }
            //     }
            // } else {
            //     id("bfc").findOne().click();
            //     console.log("找不到直播间");
            // }
            launchApp("抖音短视频");
            sleep(8000);
            id("bfc").findOne().click();
            var k = 0;
            while (k < frequency) {
                id("hu").findOne().click();
                sleep(watch);
                className("android.widget.TextView").text("+关注").findOne().click();
                sleep(watch);
                click(device.width / 2, device.height / 2);
                sleep(watch);
                className("android.widget.TextView").text("说点什么...").findOne().click();
                sleep(watch);
                setText(comments.toString());
                console.log("comments:" + comments.toString());
          
                id("fdl").findOne().click();
                sleep(watch);
                let x1 = random(device.width * 0.2, device.width * 0.3);
                let y1 = device.height * 0.8
                let x2 = random(device.width * 0.2, device.width * 0.3);
                let y2 = device.height * 0.1;
                console.log("屏幕向下滑动");
                swipe(x1, y1, x2, y2, 500);
                sleep(watch);
                k = k+1;
                console.log("K:" + k);
            }


        });

    });
    ui.item5.on("click", () => {
        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        console.log("gt", gift);
        var thread8 = threads.start(function () {
            launchApp("抖音短视频")
            sleep(8000)
            id("bfc").findOne().click();
            var k = 0;
            while (k < frequency) {
                id("hu").findOne().click();
                sleep(watch);
                className("android.widget.TextView").text("+关注").findOne().click();
                sleep(watch);
                click(device.width / 2, device.height / 2);
                sleep(watch);
                var a=0;
                while(a<=gift){
                    className("android.widget.ImageView").clickable(true).findOne().click();
                    sleep(watch);
                    console.log("送礼物");
                    a= a+1;
                }
                let x1 = random(device.width * 0.2, device.width * 0.3);
                let y1 = device.height * 0.8
                let x2 = random(device.width * 0.2, device.width * 0.3);
                let y2 = device.height * 0.1;
                console.log("屏幕向下滑动");
                swipe(x1, y1, x2, y2, 500);
                sleep(watch);
                k = k+1;
                console.log("K:" + k);
            }
        });
    });
    ui.item6.on("click", () => {
        console.log("cc:" + comments);
        console.log("ff:" + frequency);
        console.log("wwc:" + watch);
        var thread7 = threads.start(function () {
            var k = 0
            launchApp("抖音短视频")
            sleep(8000)
            while (k < frequency) {
                lineDown(400);
                var 评论 = className("android.widget.LinearLayout").descContains("评论").depth(6).find()
                console.log("评论:" + 评论.length);
                if (评论.length > 0) {
                    for (var i = 0; i < 评论.length; i++) {
                        var 评论坐标 = 评论[i].bounds()
                        if (评论坐标.left >= 0 && 评论坐标.left <= device.width &&
                            评论坐标.top >= 0 && 评论坐标.top <= device.height &&
                            评论坐标.right >= 0 && 评论坐标.right <= device.width &&
                            评论坐标.bottom >= 0 && 评论坐标.bottom <= device.height) {
                            sleep(500)
                            单击(评论坐标.centerX(), 评论坐标.centerY())
                            console.log("评论")
                            sleep(1500)
                            break;
                        }
                    }
                } else {
                    id("ae9").className("android.widget.LinearLayout").descContains("评论").findOne().click()
                    console.log("找不到评论")
                }

                var biao = className("android.widget.ImageView").desc("表情").findOne(5000).click();
                if (biao != true) {
                    className("android.widget.ImageView").desc("表情").findOne().click();
                } else {
                    id("cfa").findOne().click()
                }
                sleep(1000)
                setText(comments.toString())
                var 发送 = className("android.widget.ImageView").depth(3).drawingOrder(8).find()
                sleep(1000)
                console.log("发送:" + 发送.length);
                if (发送.length > 0) {
                    for (var i = 0; i < 发送.length; i++) {
                        var 发送坐标 = 发送[i].bounds()
                        if (发送坐标.left >= 0 && 发送坐标.left <= device.width &&
                            发送坐标.top >= 0 && 发送坐标.top <= device.height &&
                            发送坐标.right >= 0 && 发送坐标.right <= device.width &&
                            发送坐标.bottom >= 0 && 发送坐标.bottom <= device.height) {
                            sleep(500)
                            单击(发送坐标.centerX(), 发送坐标.centerY())
                            console.log("发送坐标")
                            sleep(1500)
                            break;
                        }
                    }
                } else {
                    id("adt").findOne().click();
                    console.log("找不到发送坐标");
                }
                var 关闭 = className("android.widget.ImageView").depth(2).drawingOrder(8).find()
                sleep(2000)
                console.log("关闭:" + 关闭.length);
                if (关闭.length > 0) {
                    for (var i = 0; i < 关闭.length; i++) {
                        var 关闭坐标 = 关闭[i].bounds();
                        if (关闭坐标.left >= 0 && 关闭坐标.left <= device.width &&
                            关闭坐标.top >= 0 && 关闭坐标.top <= device.height &&
                            关闭坐标.right >= 0 && 关闭坐标.right <= device.width &&
                            关闭坐标.bottom >= 0 && 关闭坐标.bottom <= device.height) {
                            sleep(500);
                            单击(关闭坐标.centerX(), 关闭坐标.centerY());
                            console.log("关闭坐标");
                            sleep(1500);
                            break;
                        }
                    }
                } else {
                    id("ks").findOne().click();
                    // back();
                    console.log("找不到发送坐标");
                }
                lineDown(500);
                k = k+1;
                console.log("k:" + k);

            }
        });
    });

    // ui.emitter.on("resume", function () {
    //     // 此时根据无障碍服务的开启情况，同步开关的状态
    //     ui.autoService.checked = auto.service != null;
    // });
    console.log("isInit:" + isInit);
    if (isInit) {
        //创建选项菜单(右上角)
        ui.emitter.on("create_options_menu", menu => {
            menu.add("我的");
            menu.add("配置");
        });
        isInit = false;
    }

    //监听选项菜单点击
    ui.emitter.on("options_item_selected", (e, item) => {
        switch (item.getTitle()) {
            case "我的":
                mine();
                break;
            case "配置":
                toConfigure();
                break;
        }
        e.consumed = true;
    });
    activity.setSupportActionBar(ui.toolbar);


    // //设置滑动页面的标题
    ui.viewpager.setTitles(["抖音", "快手"]);
    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);

    // //让工具栏左上角可以打开侧拉菜单
    // ui.toolbar.setupWithDrawer(ui.drawer);

};

// 配置
function toConfigure() {
    var storage = storages.create("ABC");
    var cms = storage.get("comments","hi,我来了");
    var fqy = storage.get("frequency",3);
    var wth = storage.get("watch",3);
    var gt= storage.get("gift",1);
    ui.layout(
        <frame bg={color_f5} >
            <vertical>

                <horizontal bg={color_app_theme} paddingTop="5" paddingBottom="5" paddingLeft="20" paddingRight="20">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goBack.png" id="ivback" w="15" h="15" gravity="horizontal" />
                    <text text="配置" layout_weight="1" gravity="center" textColor={color_f} textSize="20sp" />
                    <text text="保存" id="save" textColor={color_f}></text>
                </horizontal>
                <text text="基本配置" paddingTop="5" paddingBottom="5" paddingLeft="20" paddingRight="20" textStyle="bold"></text>
                <vertical marginTop="5" marginBottom="5" marginLeft="20" marginRight="20" padding="10" bg={color_f} >
                    <horizontal gravity="center_vertical">
                        <text text="无障碍" textSize="14sp" layout_weight="1"></text>
                        {/* <img  src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" id="back" w="20" h="20" gravity="right" /> */}
                        <Switch id="autoService" checked="{{auto.service != null}}" />
                    </horizontal>
                    <text bg={color_f5} h="1" marginTop="10" marginBottom="10"></text>
                    <horizontal gravity="center_vertical">
                        <text text="本机配置" id="phoneInformation" textSize="14sp" layout_weight="1"></text>
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goNext.png" id="back" w="20" h="20" gravity="right" />
                    </horizontal>
                    {/* <text bg={color_f5} h="1" marginTop="10" marginBottom="10"></text>
                    <horizontal gravity="center_vertical" id="stopIt">
                        <text text="停止项目" textSize="14sp" layout_weight="1"></text>
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goNext.png" id="back" w="20" h="20" gravity="right" />
                    </horizontal> */}
                </vertical>
                <text text="参数配置" marginTop="20" paddingTop="5" paddingBottom="5" paddingLeft="20" paddingRight="20" textStyle="bold"></text>
                <vertical marginTop="5" marginBottom="5" marginLeft="20" marginRight="20" padding="10" bg={color_f} >

                    <text text="评论语" textSize="14sp"></text>
                    <input hint={cms} id="comments" bg={color_f} marginTop="8" textColor={color_4} textSize="16sp"></input>
                    <text bg={color_f5} h="1" marginBottom="10"></text>
                    <text text="操作次数" textSize="14sp"></text>
                    <input hint={fqy} id="frequency" inputType="number" bg={color_f} marginTop="8" textColor={color_4} textSize="16sp"></input>
                    <text bg={color_f5} h="1" marginBottom="10"></text>
                    <text text="送主播礼物" textSize="14sp"></text>
                    <input hint={gt} id="gift" inputType="number" bg={color_f} marginTop="8" textColor={color_4} textSize="16sp"></input>
                    <text bg={color_f5} h="1" marginBottom="10"></text>
                    <text text="观看时间(单位：秒)" textSize="14sp"></text>
                    <input hint={wth} id="watch" inputType="number" bg={color_f} marginTop="8" textColor={color_4} textSize="16sp"></input>
                    <text bg={color_f5} h="1" marginBottom="10"></text>

                </vertical>




            </vertical>
        </frame>
    );



    //返回
    ui.ivback.on("click", () => {
        main();
    })


    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;
    });

    // 停止项目
    // ui.stopIt.on("click", () => {
    //     engines.stopAllAndToast();
    // })

    ui.save.on("click", () => {
        var comments = ui.comments.getText();
        var frequency = ui.frequency.getText();
        var watch = ui.watch.getText();
        var gift =ui.gift.getText();

        if (comments.length() == 0) {
            toast("评论语不能为空");
            comments="hi,我来了";
        } else if (frequency.length() == 0) {
            toast("操作次数不能为空");
            frequency=3;
        } else if (watch.length() == 0) {
            toast("观看视频时间不能为空");
            watch=3;
        }else if (gift.length() == 0) {
            toast("送主播抖币");
            gift=1;
        } else {
            var thread4 = threads.start(function () {
                console.log("watch = " + watch);
                console.log("frequency = " + frequency);
                console.log("comments = " + comments);
                console.log("gift" + gift);
                // toast("保存成功");
                var thread5 = threads.start(function () {
                    var storage = storages.create("ABC");

                    storage.put("comments", ui.comments.getText().toString());
                    storage.put("frequency", ui.frequency.getText().toString());
                    storage.put("watch", ui.watch.getText().toString());
                    storage.put("gift", ui.gift.getText().toString());
                    
                });

                // toast(watch)
                toast("保存成功");
            });
            // toConfigure();
            main();


        }

    })
    ui.phoneInformation.on("click", () => {
        phoneInformation();
    })


}

/**
 * 用户协议界面
 */
function useProtocol() {
    var v0 = "第一章 总则"
    var v1 = "\u3000\u3000" + appName + "软件用户服务协议（以下简称本协议）双方为" +
        appName + "与使用" + appName + "软件的用户（以下简称“用户”）。本协议用于规范双方之间全部的法律关系及权利义务，具有合同效力。" +
        appName + "软件旨在利用移动网络所具有的便利性，为广大用户提供自助式的银行卡账户查询、公共事业缴费等服务。为明确双方的权利和义务，规范双方业务行为，甲方（用户）、乙方（" + appName + "）本着平等互利的原则，就使用" + appName + "软件的相关事宜达成本协议。\n"
    var v2 = "第二章 定义";
    var v3 = "\u3000\u30001." + appName;
    var v4 = "\u3000\u3000本协议中的" + appName + "软件指“" + appName + "”手机客户端软件，为客户提供自助式的银行卡查询、收款、付款等服务。\n";
    var v5 = "\u3000\u30002. 用户注册\n";
    var v6 = "\u3000\u3000用户注册是指用户在" + appName + "软件中填写相关信息并确认相关用户协议的过程。";
    var v7 = "\u3000\u30003. 确认";
    var v8 = "\u3000\u3000确认本协议以及其他服务，是指点击相关页面上的“确认”或表示用户同意的按钮。";
    var v9 = "\u3000\u30004. 通知";
    var v10 = "\u3000\u3000除本协议另有特别规定的，本协议中的“通知”系指以网站公告形式或电子邮件方式通知。";
    var v11 = "\u3000\u30005. 服务协议的中断、终止"
    var v12 = "\u3000\u3000本协议所称的服务协议中断是指" + appName + "软件停止向用户提供全部或部分服务但不注销用户资格的情形。";
    var v13 = "\u3000\u3000本协议所称的服务协议终止是指" + appName + "软件注销用户资格、解除与用户服务协议的情形。"
    var v14 = "\u3000\u30006. 交易";
    var v15 = "\u3000\u3000本协议中所称的“交易”是指用户在" + appName + "软件上进行的支付交易。";
    var v16 = "第三章 用户资格";
    var v17 = "\u3000\u3000适用本协议注册的用户，应当具备的资格是：";
    var v18 = "\u3000\u3000必须是具备《中华人民共和国民法通则》规定的完全民事行为能力的自然人，或者是具有相应合法证照的实体组织。无民事行为能力人、限制民事行为能力人以及无合法证照的组织不得注册并使用" + appName + "软件。无民事行为能力人、限制民事行为能力人以及无合法证照的组织以不当方式注册为" + appName + "软件用户，其与" + appName + "之间的服务协议自始无效，乙方一经发现，有权注销用户。";
    var v19 = "\u3000\u3000无民事行为能力人或限制民事行为能力人以不当方式注册为" + appName + "软件用户且利用" + appName + "软件进行交易的，无民事行为能力人所进行的交易行为自始无效，限制民事行为能力人所进行的超出其民事能力范围的交易行为自始无效。";
    var v20 = "第四章 服务";
    var v21 = "\u3000\u3000本协议所指的服务包括：" + appName + "软件供用户使用的服务。";
    var v22 = "第五章 用户的权利和义务";
    var v23 = "\u3000\u3000一 权利";
    var v24 = "\u3000\u30001.甲方自愿下载和使用乙方" + appName + "软件。";
    var v25 = "\u3000\u30002.甲方自愿申请注册成为乙方" + appName + "软件用户，经乙方同意后，将有权根据注册项目的不同享受不同的服务。";
    var v26 = "\u3000\u30003.甲方在注册期内有权办理手机支付注销手续。";
    var v27 = "\u3000\u30004.甲方对乙方手机支付服务如有疑问、建议或意见时，到乙方合作机构网点进行咨询和投诉。";
    var v28 = "\u3000\u3000二 义务";
    var v29 = "\u3000\u30001. 甲方自行配备安装软件所需的手机设备。";
    var v30 = "\u3000\u30002. 甲方自愿申请注册乙方" + appName + "软件，经乙方同意后，将有权根据注册项目的不同享受不同的服务。";
    var v31 = "\u3000\u30003. 甲方自行负担下载" + companyName + "软件和个人上网所支付的与此服务有关的电话费用、网络费用。";
    var v32 = "\u3000\u30004. 甲方应按照机密的原则设置和保管自设密码：避免使用姓名、生日、电话号码等与本人明显相关的信息作为密码；不得将本人自设密码提供给除法律规定外的任何人； 采取其他合理措施，防止本人密码被窃取。由于密码泄露造成的后果由甲方承担。";
    var v33 = "\u3000\u30005. 甲方必须妥善保管自己的手机、用户名、密码，用户擅自转让或授权他人使用自己的手机、用户名和密码产生的不良结果。乙方不承担相应责任。";
    var v34 = "\u3000\u30006. 甲方有义务在注册时提供自己的真实资料，并保证诸如真实姓名、身份证号码、联系电话等内容的有效性及安全性。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。用户保证不以他人资料在" + appName + "软件进行注册或认证。";
    var v35 = "\u3000\u30007. 甲方办理手机支付业务，应遵守乙方在网站上公布的交易规则。";
    var v36 = "\u3000\u30008. 甲方不得利用技术手段及其他手段破坏及扰乱" + appName + "软件程序的正常运行。";
    var v37 = "\u3000\u30009. 甲方在登录" + appName + "软件后，只能使用本人的银行卡或银行账户进行支付操作。因使用或盗用他人的银行卡及银行账户而完成的支付交易所产生的任何责任由甲方自行承担。";
    var v38 = "\u3000\u300010. 甲方在支付过程中，应确保银行卡或银行账户之真实、有效。若因银行卡或银行账户被取消、过期或账户余额不足而造成缴纳失败所产生的损失及后果，由甲方负责。";
    var v39 = "\u3000\u300011. 甲方应学习和掌握使用手机及网络的基本知识，特别是网络安全防范的基本知识，防止自己的用户名、密码、注册信息、信用卡账户密码等信息因自己的疏忽大意或操作失误而被他人获取。";
    var v40 = "\u3000\u300012. 甲方承诺自己在使用" + appName + "软件时实施的所有行为遵守国家法律、法规相关规定以及各种社会公共利益或公共道德。对于任何法律后果的发生，甲方将以自己的名义独立承担所有相应的法律责任。";
    var v41 = "第六章 乙方的权利和义务";
    var v42 = "\u3000\u3000一 权利";
    var v43 = "\u3000\u30001. 乙方有权根据甲方资信情况，决定是否受理甲方的注册申请。";
    var v44 = "\u3000\u30002. 乙方有权制定手机支付业务收费标准，并在网站及营业网点进行公布。";
    var v45 = "\u3000\u30003. 乙方具有对手机支付系统进行升级、改造的权利。";
    var v46 = "\u3000\u30004. 甲方存在未按时支付有关费用、不遵守乙方有关业务规定或存在恶意操作、诋毁、损害乙方声誉等情况的，乙方有权单方终止对甲方提供网上支付服务，并保留追究甲方责任的权利。甲方利用乙方系统从事违反国家法律法规活动的，乙方将按照有权部门的要求停止为其办理业务。";
    var v47 = "\u3000\u30005. 乙方根据甲方的手机支付业务指令办理业务，对所有使用甲方账户账号、客户编号、密码及客户证书进行的操作均视为甲方所为，该操作所产生的电子信息记录均为乙方处理手机支付业务的有效凭证。";
    var v48 = "\u3000\u30006. 乙方因以下情况没有正确执行甲方提交的手机支付业务指令，不承担任何责任。";
    var v49 = "\u3000\u30001）乙方接收到的指令信息不明、存在乱码、不完整等。";
    var v50 = "\u3000\u30002）甲方账户存款余额或信用额度不足。";
    var v51 = "\u3000\u30003）甲方账户内资金被依法冻结或扣划。";
    var v52 = "\u3000\u30004）甲方未能按照乙方的有关业务规定正确操作。";
    var v53 = "\u3000\u30005）甲方的行为出于欺诈或其他非法目的。";
    var v54 = "\u3000\u30006）乙方遇到不可抗力、计算机黑客袭击、系统故障、通讯故障、网络拥堵、供电系统故障、电脑病毒、恶意程序攻击及其它不可归因于乙方的情况时。";
    var v55 = "\u3000\u30007. 协议终止或服务有效期内中止时，乙方不退回甲方已支付的有关费用。";
    var v56 = "\u3000\u30008. 如果甲方因乙方系统差错、故障或其他原因获得不当得利的，乙方有权从甲方账户中扣划甲方的不当得利所得或暂停对甲方的服务。";
    var v57 = "\u3000\u3000二 义务";
    var v58 = "\u3000\u30001. 在乙方系统正常运行情况下，乙方负责及时准确地处理甲方发送的手机支付业务指令，并及时向甲方提供查询交易记录、资金余额、账户状态等服务。";
    var v59 = "\u3000\u30002. 乙方对于支付所使用的手机支付软件的合法性承担责任。";
    var v60 = "\u3000\u30003. 乙方负责向甲方提供业务咨询服务，并在乙方网站公布功能介绍、热点解答、交易规则等内容。";
    var v61 = "\u3000\u30004. 乙方在法律法规许可和甲方授权的范围内使用甲方的资料和交易记录。乙方对甲方提供的申请资料和其他信息有保密的义务，但法律法规另有规定的除外。";
    var v62 = "\u3000\u30005. 因工作失误导致支付结算处理延误，乙方按中国人民银行《支付结算办法》的有关规定赔偿。";
    var v63 = "\u3000\u30006. 乙方有义务在技术上确保手机支付软件和整个平台的正常运行，保证用户交易活动的顺利。";
    var v64 = "\u3000\u30007. 乙方对交易的接入系统的安全、有效、实时性负责。但不承担因通讯故障等非主观因素所引起交易中断、交易错误引起的交易纠纷。";
    var v65 = "\u3000\u30008. 乙方有权根据具体情况增加、减少或撤销业务种类，也有权拒绝或取消不符合要求的用户的交易资格，而无须预先通知客户。";
    var v66 = "第七章 服务中断及终止";
    var v67 = "\u3000\u30001. 乙方提供的手机支付服务受甲方注册卡（账户）状态的制约，如该卡（账户）挂失、止付等原因不能使用，相关服务自动中止。甲方注册卡（账户）状态恢复正常时，乙方重新提供相应服务。";
    var v68 = "\u3000\u30002. 甲方在" + companyName + "软件中注销手续办理完毕，本协议即为终止。但注销用户后，乙方仍保留下列权利及义务：";
    var v69 = "\u3000\u3000a)用户注销后，乙方有权保留和合理使用用户的注册资料及以前的交易行为记录。";
    var v70 = "\u3000\u3000b)用户注销后，如用户在注销前在交易中存在违法行为或违反本协议的行为，乙方仍可行使追究的权利。";
    var v71 = "\u3000\u30003. 在甲方违反本协议规定或其他乙方业务规定的情况下，乙方有权中止或终止本协议。协议终止并不意味着终止前所发生的未完成交易指令的撤销，也不能消除因终止前的交易所带来的任何法律后果。";
    var v72 = "\u3000\u30004. 在下列情况下，乙方可以中断对用户的服务：";
    var v73 = "\u3000\u3000a）不可抗力；";
    var v74 = "\u3000\u3000b）为维护、检修、升级系统的需要以及相关第三方为维护、检修、升级系统所使用的主机、电力设备、公共网络等相关配套设施需要；";
    var v75 = "\u3000\u3000c）用户存在违反法律法规及本协议内容的行为，经乙方通知后在规定期限内不予更正的；";
    var v76 = "\u3000\u3000d）司法机关或政府行政机关依照法定程序要求乙方中断对用户服务的；";
    var v77 = "\u3000\u3000e）为公共利益的需要必须中断对用户服务的；";
    var v78 = "\u3000\u3000f）其他必须中断服务的情况。";
    var v79 = "第八章 协议修改";
    var v80 = "\u3000\u30001." + appName + "有权随时修改本协议的有关条款，一旦本协议的内容发生变动，" + appName + "将会通过适当方式向用户提示修改内容。";
    var v81 = "\u3000\u30002. 如果用户不同意" + appName + "对本协议相关条款所做的修改，有权停止使用" + appName + "提供的服务。如果用户继续使用" + appName + "提供的服务，则视为其接受" + appName + "对本协议相关条款的修改。";
    var v82 = "第九章 违约责任";
    var v83 = "\u3000\u30001. 本协议任何一方违反本协议规定的内容，给另一方造成损害的，应当承担违约责任，赔偿另一方因此而造成的损失，包括但不限于物质损失、利息损失、因追索或诉讼而支出的诉讼费、合理的通讯费、交通费、住宿费、律师费等。";
    var v84 = "\u3000\u30002. 协议一方违反协议规定内容给另一方造成损害的，受损害一方应当采取合理措施避免损失扩大的，因防止损失扩大而支出的合理费用，由违约方承担。一方没有采取合理措施避免损失扩大的，对损失扩大部分违约方不承担赔偿责任。";
    var v85 = "第十章 协议的效力和生效";
    var v86 = "\u3000\u3000本协议的任何条款如因任何原因而被确认无效，都不影响本协议其他条款的效力。本协议自甲方在" + appName + "软件完成注册起生效。";
    var v87 = "第十一章 解释权";
    var v88 = "\u3000\u3000本服务协议条款的解释权归" + appName + "运营商所有。";
    // .create()

    ui.layout(

        <vertical padding="0 15 5">
            <horizontal>
                <img id="ivback" src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="23" h="23" />
                <text text="用户协议" layout_weight="1" layout_gravity="center" gravity="center" textColor={color_4} textSize="16sp"></text>
                <img src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="23" h="23" visibility="invisible" />
            </horizontal>
            <scroll>
                <vertical>
                    <text text={v0} textStyle="bold"></text>
                    <text text={v1}></text>
                    <text></text>
                    <text text={v2} textStyle="bold"></text>
                    <text text={v3}></text>
                    <text text={v4}></text>
                    <text text={v5}></text>
                    <text text={v6}></text>
                    <text text={v7}></text>
                    <text text={v8}></text>
                    <text text={v9}></text>
                    <text text={v10}></text>
                    <text text={v11}></text>
                    <text text={v12}></text>
                    <text text={v13}></text>
                    <text text={v14}></text>
                    <text text={v15}></text>
                    <text></text>
                    <text text={v16} textStyle="bold"></text>
                    <text text={v17}></text>
                    <text text={v18}></text>
                    <text text={v19}></text>
                    <text></text>
                    <text text={v20} textStyle="bold"></text>
                    <text text={v21}></text>
                    <text></text>
                    <text text={v22} textStyle="bold"></text>
                    <text text={v23}></text>
                    <text text={v24}></text>
                    <text text={v25}></text>
                    <text text={v26}></text>
                    <text text={v27}></text>
                    <text text={v28}></text>
                    <text text={v29}></text>
                    <text text={v30}></text>
                    <text text={v31}></text>
                    <text text={v32}></text>
                    <text text={v33}></text>
                    <text text={v34}></text>
                    <text text={v35}></text>
                    <text text={v36}></text>
                    <text text={v37}></text>
                    <text text={v38}></text>
                    <text text={v39}></text>
                    <text text={v40}></text>
                    <text></text>
                    <text text={v41} textStyle="bold"></text>
                    <text text={v42}></text>
                    <text text={v43}></text>
                    <text text={v44}></text>
                    <text text={v45}></text>
                    <text text={v46}></text>
                    <text text={v47}></text>
                    <text text={v48}></text>
                    <text text={v49}></text>
                    <text text={v50}></text>
                    <text text={v51}></text>
                    <text text={v52}></text>
                    <text text={v53}></text>
                    <text text={v54}></text>
                    <text text={v55}></text>
                    <text text={v56}></text>
                    <text text={v57}></text>
                    <text text={v58}></text>
                    <text text={v59}></text>
                    <text text={v60}></text>
                    <text text={v61}></text>
                    <text text={v62}></text>
                    <text text={v63}></text>
                    <text text={v64}></text>
                    <text text={v65}></text>
                    <text></text>
                    <text text={v66} textStyle="bold"></text>
                    <text text={v67}></text>
                    <text text={v68}></text>
                    <text text={v69}></text>
                    <text text={v70}></text>
                    <text text={v71}></text>
                    <text text={v73}></text>
                    <text text={v74}></text>
                    <text text={v75}></text>
                    <text text={v76}></text>
                    <text text={v77}></text>
                    <text text={v78}></text>
                    <text></text>
                    <text text={v79} textStyle="bold"></text>
                    <text text={v80}></text>
                    <text text={v81}></text>
                    <text></text>
                    <text text={v82} textStyle="bold"></text>
                    <text text={v83}></text>
                    <text text={v84}></text>
                    <text></text>
                    <text text={v85} textStyle="bold"></text>
                    <text text={v86}></text>
                    <text></text>
                    <text text={v87} textStyle="bold"></text>
                    <text text={v88}></text>
                </vertical>
            </scroll>
        </vertical>

    );

    ui.ivback.on("click", () => {
        register();
    })
}

var tiemout = -1;
/**
 * 验证码登录界面
 */
function smslogin() {


    ui.layout(
        <frame bg={color_f5}>
            <vertical>
                <text text="欢迎加入抖音精灵" gravity="center" textColor={color_f} textSize="20sp" bg={color_app_theme} paddingTop="10" paddingBottom="50" />
                <horizontal paddingLeft="20" paddingRight="20" bg={color_app_theme}>
                    <linear orientation="vertical" paddingTop="20" paddingLeft="20" paddingRight="20" layout_weight="1" radiusTopLeft="12" radiusTopRight="12" bg={color_f}>
                        <text text="短信快捷登录" textSize="18sp" textColor={color_app_theme}></text>
                        <horizontal h="40" bg={color_input_bg} marginTop="30" gravity="center_vertical">
                            <img src="https://pingguoshu.jagamin.com/link/douyinIcon/phone.png" w="23" h="23" gravity="horizontal" marginLeft="10" />
                            <input id="name" marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="请输入您的手机" inputType="phone" bg={color_input_bg} />
                        </horizontal>
                        <horizontal h="40" marginTop="16" gravity="center_vertical">
                            <horizontal layout_weight="1" bg={color_input_bg} gravity="center_vertical">
                                <img src="https://pingguoshu.jagamin.com/link/douyinIcon/security.png" w="23" h="23" gravity="horizontal" marginLeft="10" />
                                <input id="inputvcode" marginLeft="15" marginRight="15" textColor={color_4} maxlength="6" w="*" textSize="16sp" hint="验证码" inputType="number" bg={color_input_bg} />
                            </horizontal>
                            <text text={btnText} id="vcode" marginLeft="15" paddingTop="8" paddingBottom="8" paddingLeft="10" paddingRight="10" bg={color_app_theme} textColor={color_f} ></text>
                        </horizontal>

                    </linear>
                    {/* <text w="30"bg={appthemecolor}></text> */}

                </horizontal >
                <vertical marginLeft="20" marginRight="20" bg={color_f} paddingTop="15" paddingBottom="15" paddingLeft="16" paddingRight="16">
                    <text text="密码登录" id="pwelogin" gravity="right" ></text>
                    <button id="vcodelogin" marginTop="30" text="立即登录" textColor={color_f} bg={color_app_theme} radiusTopLeft="15" />

                    <horizontal gravity="center" marginTop="16">
                        <text text="还没有账号?"></text>
                        <text text="立即注册" textColor={color_app_theme} id="register" ></text>
                    </horizontal>
                </vertical>
            </vertical>
        </frame>
    );

    // ui.vcode.setText("获取" + timer + "s");

    //注册
    ui.register.click(() => {
        register();
    })

    /**
     * 密码登录
     */
    ui.pwelogin.click(function () {
        if (tiemout != -1) {
            clearInterval(tiemout);
        }

        pwdlogin();
    });




    /**
     * 验证码登录界面  登录事件
     */
    ui.vcodelogin.on("click", () => {


        var phone = ui.name.getText();
        var vericode = ui.inputvcode.getText();
        console.log("phone:" + phone.length());
        console.log("vericode:" + vericode.length());
        if ((phone.length() != 0) && (vericode.length() != 0)) {

            var thread0 = threads.start(function () {
                requestVericodeLoginApi(phone, vericode)
            });
            var storage = storages.create("ABC");
            var resp_message = storage.get("resp_message");
            var err_message = storage.get("err_message");
            console.log("resp_message:" + resp_message);
            if (resp_message === "成功") {
                var tt =currentTime+getDay(2);
                storage.put("timer", tt);
                main();
            } else {
                toast(err_message)
            }
        } else {
            toast("手机号码或者验证码不能为空");
        }


    });


    /**
     * 验证码登录界面 获取验证码事件  ok
     */
    ui.vcode.click(function () {
        var phone = ui.name.getText();

        //请求获取验证码接口 api 
        var thread = threads.start(function () {
            requestSMSApi(phone);
            // ui.start(()=>{

            // })
        });


        // function setInterval(timer){

        timer = 60;
        gettimer(timer);
        // }

    })

    /**
     * 请求验证码登录接口 api 
     * @param {*} phone 
     * @param {*} vericode  验证码
     */
    function requestVericodeLoginApi(phone, vericode) {
        var url = URL + "user/app/smslogin";
        var res = http.post(url, {
            "phone": phone,
            "vericode": vericode,
            "brandId": brandId
        }, {}, function (res, err) {
            var data = res.body.json();
            if (res.statusCode != 200) {
                toast(data.resp_message);
                console.log("res.resp_code:" + data.resp_code);
                console.log("res.resp_message:" + data.resp_message);
            } else {
                // var data = res.body.json();
                if (data.resp_code != 000000) {
                    console.log("res.resp_code:" + data.resp_code);
                    console.log("res.resp_message:" + data.resp_message);
                    storage.put("err_message", data.resp_message)
                } else {
                    console.log("res.resp_code:" + data.resp_code);
                    console.log("res.resp_message:" + data.resp_message);
                    user = data.result;
                    console.log("userToken:" + user.userToken);
                    storage.put("phone:" + user.phone);

                    storage.put("resp_message", data.resp_message)

                }

            }
        });
    }



};

/**
 * 注册界面
 */
function register() {

    ui.layout(
        <frame bg={color_f5}>
            <vertical>
                <text text="欢迎加入抖音精灵" gravity="center" textColor={color_f} textSize="20sp" bg={color_app_theme} paddingTop="10" paddingBottom="50" />
                <horizontal paddingLeft="20" paddingRight="20" bg={color_app_theme}>
                    <vertical paddingTop="16" paddingLeft="20" paddingRight="20" layout_weight="1" bg={color_f}>
                        <text text="注册" textSize="18sp" textColor={color_app_theme}></text>
                        <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                            <img src="https://pingguoshu.jagamin.com/link/douyinIcon/phone.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                            <input id="name" marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="手机号码" inputType="phone" bg={color_input_bg} />
                        </horizontal>
                        <horizontal h="40" marginTop="16" gravity="center_vertical">
                            <horizontal layout_weight="1" bg={color_input_bg} gravity="center_vertical">
                                <img src="https://pingguoshu.jagamin.com/link/douyinIcon/security.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                                <input id="inputvcode" marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="验证码" inputType="number" bg={color_input_bg} />
                            </horizontal>
                            <text text={btnText} id="vcode" marginLeft="15" paddingTop="8" paddingBottom="8" paddingLeft="10" paddingRight="10" bg={color_app_theme} textColor={color_f} ></text>
                        </horizontal>
                    </vertical>
                </horizontal >
                <vertical marginLeft="20" marginRight="20" bg={color_f} paddingTop="15" paddingBottom="15" paddingLeft="20" paddingRight="20" >
                    <horizontal h="40" bg={color_input_bg} gravity="center_vertical">
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/password.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                        <input id="userpwd" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="密码" inputType="textPassword" />
                    </horizontal>
                    <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/password.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                        <input id="xuserpwd" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="确认密码" inputType="textPassword" />
                    </horizontal>
                    <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/invitaCode.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                        <input id="registrationCode" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="注册码(8位)" />
                    </horizontal>
                    <text text="温馨提示：" marginTop="16" textStyle="bold" textSize="13sp"></text>
                    <text text="1.建议先阅读用户协议" marginTop="16" textStyle="bold" textSize="13sp"></text>
                    <text text="2.建议密码使用字母和数字" marginTop="5" textStyle="bold" textSize="13sp"></text>
                    <text text="3.使用软件需购买注册码" marginTop="5" textStyle="bold" textSize="13sp"></text>
                    {/* <text text="温馨提示：请先阅读用户协议" marginTop="2" textStyle="bold" textSize="13sp"></text> */}
                    <horizontal marginTop="16" h="30" gravity="center"  >
                        {/* <img id="iv" src="http://www.autojs.org/assets/uploads/profile/1-profilecover.jpeg" w="40" h="40" gravity="horizontal" marginLeft="15" /> */}

                        <checkbox id="chebox" text="您已阅读并同意" textSize="14sp"></checkbox>
                        {/* <text text="您已阅读并同意"  marginLeft="10" textSize="12sp"></text> */}
                        <text id="agreement" text="《用户协议和隐私条款》" textColor={color_app_theme} textSize="14sp" ></text>
                    </horizontal>
                    <button id="vcodelogin" marginTop="30" text="立即注册" textColor={color_f} bg={color_app_theme} radiusTopLeft="15" />
                    <horizontal gravity="center" marginTop="30">
                        <text text="已有账号?"></text>
                        <text text="去登录" textColor={color_app_theme} id="login"></text>
                    </horizontal>
                </vertical>
            </vertical>
        </frame>
    );
    ui.agreement.click(() => {
        // toast("协议")
        useProtocol();
    });

    ui.login.on("click", () => {
        pwdlogin();
    });
    ui.vcodelogin.on("click", () => {
        var phone = ui.name.getText();
        var inputvcode = ui.inputvcode.getText();
        var userpwd = ui.userpwd.getText();
        var xuserpwd = ui.xuserpwd.getText();
        var registrationCode = ui.registrationCode.getText();
        if (phone.length() == 0) {
            toast("手机号码不能为空")
        } else if (inputvcode.length() == 0) {
            toast("验证码不能为空")
        } else if (userpwd.length() == 0 || xuserpwd.length() == 0) {
            toast("密码不能为空")
        } else if (userpwd.toString() != xuserpwd.toString()) {
            toast("密码不一致")
        } else if (registrationCode.length() == 0) {
            toast("注册码不能为空")
        } else if (ui.chebox.checked == false) {
            toast("请您先阅读协议")
        } else if (registrationCode != ActivationCode) {
            toast("注册码错误,请新输入")
        } else {
            ui.name.setText(phone);
            ui.inputvcode.setText(inputvcode);
            ui.userpwd.setText(userpwd);
            ui.xuserpwd.setText(xuserpwd);
            ui.registrationCode.setText(registrationCode);

            var thread22 = threads.start(function () {
                requestregisterApi(phone, inputvcode, userpwd);
            });

            var storag = storages.create("ABC");

            var resp_message = storag.get("resp_message");
            var err_message = storag.get("err_message");


            console.log("resp_message:" + resp_message);
            console.log("err_message:" + resp_message);
            if (resp_message === "成功") {
                pwdlogin();
            } else {
                toast(err_message)
            }
        }

    })


    /**
     * 发送验证码
     */
    ui.vcode.click(function () {
        var phone = ui.name.getText();
        //请求获取验证码接口 api 
        var thread = threads.start(function () {
            requestSMSApi(phone);
        });
        timer = 60;
        gettimer(timer);


    })
    //注册 接口
    function requestregisterApi(phone, inputvcode, userpwd) {
        var url = URL + "user/app/register/";
        var res = http.post(url, {
            "phone": phone,
            "vericode": inputvcode,
            "paypass": "123456",
            "password": userpwd,

            "brand_id": brandId
        }, {

        }, (res, err) => {
            // console.log("res:" + res.body.string());
            var data = res.body.json();

            var storag = storages.create("ABC");
            // if (res.statusCode != 200) {
            //     toast(data.resp_message);
            //     console.log("res.resp_code:" + data.resp_code);
            //     console.log("res.resp_message:" + data.resp_message);

            // } else {
            if (data.resp_code != 000000) {
                console.log("res.resp_code:" + data.resp_code);
                console.log("err.resp_message:" + data.resp_message);
                storag.put("err_message", data.resp_message)
            } else {
                console.log("res.resp_code:" + data.resp_code);
                console.log("res.resp_message:" + data.resp_message);
                user = data.result;
                console.log("userToken:" + user.userToken);
                storag.put("resp_message", data.resp_message)

            }
            // }
        })
    }

}

/**
 * 密码登录界面  
 */
function pwdlogin() {

    ui.layout(
        <frame>
            <vertical>

                <text text="欢迎加入抖音精灵" gravity="center" textColor={color_f} textSize="20sp" bg={color_app_theme} paddingTop="10" paddingBottom="50" />

                <horizontal paddingLeft="20" paddingRight="20" bg={color_app_theme}>

                    <linear orientation="vertical" paddingLeft="20" paddingTop="20" paddingRight="20" layout_weight="1" radiusTopLeft="12" radiusTopRight="12" bg={color_f}>
                        <text text="密码登录" textSize="18sp" textColor={color_app_theme}></text>
                        <horizontal h="40" bg={color_input_bg} marginTop="30" gravity="center_vertical">
                            <img src="https://pingguoshu.jagamin.com/link/douyinIcon/phone.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                            <input id="username" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" maxlength="11" textSize="16sp" hint="请输入您的手机" inputType="phone" textColor={color_4} />
                        </horizontal>
                        <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                            <img src="https://pingguoshu.jagamin.com/link/douyinIcon/password.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                            <input id="userpwd" bg={color_input_bg} marginLeft="15" marginRight="20" w="*" textColor={color_4} textSize="16sp" hint="请输入您的密码" inputType="textPassword" />
                        </horizontal>

                    </linear>


                </horizontal >
                <vertical marginLeft="20" marginRight="20" bg={color_f} paddingTop="15" paddingBottom="15" paddingLeft="16" paddingRight="16">
                    <horizontal>
                        <text text="忘记密码" id="forgetpwd"></text>
                        <text layout_weight="1"></text>
                        <text text="验证码登录" id="vericodelogin"></text>
                    </horizontal>

                    <button id="vcodelogin" marginTop="30" text="立即登录" textColor={color_f} bg={color_app_theme} radiusTopLeft="15" />
                    <horizontal gravity="center" marginTop="30">
                        <text text="还没有账号?"></text>
                        <text text="立即注册" textColor={color_app_theme} id="register"></text>
                    </horizontal>
                </vertical>
            </vertical>
        </frame>
    );
    /**
     * 立即注册
     */
    ui.register.click(() => {
        register();
    })
    /**
     * 忘记密码
     */
    ui.forgetpwd.click(function () {
        ForgetThePassword();
    });
    ui.vericodelogin.click(function () {
        // toast("验证码登录");
        smslogin();
    });
    ui.vcodelogin.click(() => {
        var name = ui.username.getText();
        var pwd = ui.userpwd.getText();
        if (name.length() != 0 && pwd.length() != 0) {

            var thread21 = threads.start(function () {
                //请求登录接口 api 
                requestLoginApi(name, pwd);
            });
            var storage = storages.create("ABC");
            var resp_message = storage.get("resp_message");
            var err_message = storage.get("err_message");

            console.log("resp_message:" + resp_message);
            if (resp_message === "成功") {
                var tt =currentTime+getDay(2);
                storage.put("timer", tt);
                main();

            } else {
                toast(err_message)
            }
        } else {
            toast("手机号码或者密码不能为空")
        }

    });

    /**
     * 用密码登录
     * @param {*} name 
     * @param {*} pwd 
     */
    function requestLoginApi(name, pwd) {
        var url = URL + "user/app/login";
        var res = http.post(url, {
            "phone": name,
            "password": pwd,
            "brand_id": brandId,
        },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            },
            function (res, err) {
                var data = res.body.json();


                if (res.statusCode != 200) {
                    toast(data.resp_message);
                    console.log("res.resp_code:" + data.resp_code);
                    console.log("res.resp_message:" + data.resp_message);

                } else {
                    // var data = res.body.json();
                    if (data.resp_code != 000000) {
                        console.log("res.resp_code:" + data.resp_code);
                        console.log("res.resp_message:" + data.resp_message);
                        storage.put("err_message", data.resp_message)
                    } else {
                        console.log("res.resp_code:" + data.resp_code);
                        console.log("res.resp_message:" + data.resp_message);
                        user = data.result;
                        console.log("userToken:" + user.userToken);
                        storage.put("resp_message", data.resp_message)
                    }
                }
            });
    }
}
/**
 * 忘记密码界面
 */
function ForgetThePassword() {
    ui.layout(
        <frame bg={color_f5} >
            <vertical>

                <horizontal bg={color_f} paddingTop="5" paddingBottom="5" paddingLeft="20" paddingRight="20">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goBackBlack.png" id="back" w="23" h="23" gravity="horizontal" />
                    <text text="忘记密码" layout_weight="1" gravity="center" textColor={color_4} textSize="20sp" />
                    <img src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="23" h="23" gravity="horizontal" visibility="invisible" />
                </horizontal>
                <horizontal paddingLeft="20" paddingRight="20" h="232" bg={color_app_theme}>
                    <vertical w="*">
                        <text w="*" h="80" bg={color_app_theme}></text>
                        <linear orientation="vertical" paddingTop="20" paddingLeft="20" paddingRight="20" layout_weight="1" radiusTopLeft="12" radiusTopRight="12" bg={color_f}>
                            <text text="忘记密码" textSize="18sp" textColor={color_app_theme}></text>
                            <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                                <img src="https://pingguoshu.jagamin.com/link/douyinIcon/phone.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                                <input id="phone" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="手机号码" inputType="phone" />
                            </horizontal>
                            <horizontal h="40" marginTop="16" gravity="center_vertical">
                                <horizontal layout_weight="1" bg={color_input_bg} gravity="center_vertical">
                                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/security.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                                    <input id="inputvcode" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="验证码" inputType="number" />
                                </horizontal>
                                <text text={btnText} id="vcode" marginLeft="15" paddingTop="8" paddingBottom="8" paddingLeft="10" paddingRight="10" bg={color_app_theme} textColor={color_f} ></text>
                            </horizontal>

                        </linear>
                    </vertical>
                </horizontal >

                <vertical marginLeft="20" marginRight="20" bg={color_f} paddingTop="15" paddingRight="20" paddingBottom="100" paddingLeft="20">
                    <horizontal h="40" bg={color_input_bg} gravity="center_vertical">
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/password.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                        <input id="userpwd" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="新密码" inputType="textPassword" />
                    </horizontal>
                    <horizontal h="40" bg={color_input_bg} marginTop="16" gravity="center_vertical">
                        <img src="https://pingguoshu.jagamin.com/link/douyinIcon/password.png" w="23" h="23" gravity="horizontal" marginLeft="15" />
                        <input id="xuserpwd" bg={color_input_bg} marginLeft="15" marginRight="15" w="*" textColor={color_4} textSize="16sp" hint="确认密码" inputType="textPassword" />
                    </horizontal>

                    <button id="vcodelogin" marginTop="50" text="提交" textColor={color_f} bg={color_app_theme} radiusTopLeft="15" />

                </vertical>

            </vertical>
        </frame>
    );
    //返回
    ui.back.click(() => {
        pwdlogin();
        // back()
    });
    //验证码
    ui.vcode.click(() => {
        //请求获取验证码接口 api 
        var phone = ui.phone.getText();
        var thread = threads.start(function () {
            requestSMSApi(phone);
        });
        timer = 60;
        gettimer(timer)
    });
    //提交
    ui.vcodelogin.click(() => {
        var phone = ui.phone.getText();
        var pwd = ui.userpwd.getText();
        var pwd1 = ui.xuserpwd.getText();
        var inputvcode = ui.inputvcode.getText();
        if (phone.length() == 0) {
            toast("手机号码不能为空")
        } else if (pwd.length() == 0 || pwd1.length() == 0) {
            toast("密码不能为空")
        } else if (pwd.toString() != pwd1.toString()) {
            toast("密码不一致")
        } else if (inputvcode.length() == 0) {
            toast("验证码不能为空")
        } else {
            var thread3 = threads.start(function () {
                requestForgetThePassword(phone, pwd, inputvcode);
            });
        }


    })


    /**
     * 忘记密码 api 
     * @param {*} phone 
     * @param {*} vericode 
     * @param {*} password 
     */
    function requestForgetThePassword(phone, password, vericode) {
        var url = URL + "user/app/password/update/";
        var res = http.post(url, {
            "phone": phone,
            "vericode": vericode,
            "password": password,
            "brandId": brandId
        }, {

        }, (res, err) => {
            // console.log("res:" + res.body.string());
            var data = res.body.json();

            if (data.resp_code != 000000) {
                toast(data.resp_message);
                console.log("data.resp_code:" + data.resp_code);
                console.log("data.resp_message:" + data.resp_message);
            } else {
                // toast(data.resp_message);
                console.log("data.resp_code:" + data.resp_code);
                console.log("data.resp_message:" + data.resp_message);
                pwdlogin();
            }
            // if (res.statusCode != 200) {
            //     toast(res.resp_message)
            // } else {
            //     var data = res.body.json();
            //     toast("修改" + data.resp_message);
            //     
            // }
        })
    }
}

/**
* 验证码 api 接口   ok
*/
function requestSMSApi(phone) {
    var url = URL + "notice/app/sms/send";
    var res = http.get(url + "?phone=" + phone + "&brand_id=" + brandId)
    if (res.statusCode != 200) {
        toast("获取验证码失败，请重试！")
    } else {
        // toast("获取验证码成功，正在下发您的手机，请注意查收！")
        console.log("获取验证码res:" + res.body.string());
    }
}

/**
 * 计时器
 * @param {} timer 
 */
function gettimer(timer) {
    var tiemout = setInterval(function () {
        if (timer <= 0) {
            ui.vcode.setText("获取验证码");
            clearInterval(tiemout);
        } else {
            if (ui.vcode != null) {
                // btnText = "获取" + timer + "s";
                ui.vcode.setText(timer + "S后重新发送");
            }
            timer--;
        }
    }, 1000)
}

/**
 * 获取手机设备信息  ok
 */
function phoneInformation() {
    var pbrand = device.brand;
    var pdevice = device.device;
    var pwh = device.width + "*" + device.height;
    var pmodel = device.model;
    var pversionCode = app.versionCode;
    var psdkInt = device.sdkInt;
    var prelease = device.release;
    var pbuildId = device.buildId;
    var pboard = device.board;
    var product = device.product;
    var pbootloader = device.bootloader;
    var phardware = device.hardware;
    var pfingerprint = device.fingerprint;
    var pIMEI = device.getIMEI();
    var androidId = device.getAndroidId();
    var macAddress = device.getMacAddress();
    ui.layout(
        <frame bg={color_f5} >
            <vertical>
                <horizontal bg={color_app_theme} padding="5 20">
                    <img src="https://pingguoshu.jagamin.com/link/douyinIcon/goBack.png" id="ivback" w="20" h="20" gravity="horizontal" />
                    <text text="本机配置" layout_weight="1" gravity="center" textColor={color_f} textSize="20sp" />
                    <img src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="20" h="20" gravity="horizontal" visibility="invisible" />
                </horizontal>
                <vertical margin="10 20" padding="10" bg={color_f}>
                    <horizontal>
                        <text text="主板：" gravity="center" layout_weight="1"></text>
                        <text text={pboard} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="制造商：" gravity="center" layout_weight="1"></text>
                        <text text={pbrand} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="硬件名称：" gravity="center" layout_weight="1"></text>
                        <text text={phardware} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="产品名称：" gravity="center" layout_weight="1"></text>
                        <text text={product} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="手机品牌：" gravity="center" layout_weight="1"></text>
                        <text text={pdevice} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="屏幕宽高：" gravity="center" layout_weight="1"></text>
                        <text text={pwh} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="设备型号：" gravity="center" layout_weight="1"></text>
                        <text text={pmodel} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="软件版本：" gravity="center" layout_weight="1"></text>
                        <text text={pversionCode} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="安卓系统API版本：" gravity="center" layout_weight="1"></text>
                        <text text={psdkInt} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="Android系统版本号：" gravity="center" layout_weight="1"></text>
                        <text text={prelease} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                    <horizontal>
                        <text text="唯一标识码：" gravity="center" layout_weight="1"></text>
                        <text text={pfingerprint} layout_weight="4"></text>
                    </horizontal>
                    <text bg={color_f5} h="1" margin="5 0 5 "></text>
                </vertical>
            </vertical>
        </frame>
    );
    ui.ivback.on("click", () => {
        toConfigure();
    })

    console.log("唯一标识码：" + device.fingerprint);
    console.log("IMEI：" + device.getIMEI());
    console.log("Mac：" + device.getMacAddress());
    console.log("AndroidId：" + device.getAndroidId());
    console.log("bootloader版本：" + device.bootloader);
    console.log("buildId：" + device.buildId);


    // console.log("屏幕分辨率宽度：" + device.width);
    // console.log("屏幕分辨率高度：" + device.height);
    // console.log("制造商：" + device.brand);
    // console.log("手机品牌：" + device.device);
    // console.log("设备型号：" + device.model);
    // console.log("当前软件版本号：" + app.versionCode);
    // console.log("安卓系统API版本：" + device.sdkInt);
    // console.log("Android系统版本号：" + device.release);

    // console.log("主板：" + device.board);
    // console.log("产品名称：" + device.product);

    // console.log("硬件名称：" + device.hardware);











    console.log("当前媒体音量：" + device.getMusicVolume());
    console.log("当前电量百分比：" + device.getBattery());

}

function closeAd() {
    let x1 = random(device.width * 0.2, device.width * 0.3);
    let y1 = device.height * 0.8
    let x2 = random(device.width * 0.2, device.width * 0.3);
    let y2 = device.height * 0.1
    let pressTime = random(300, 500);
    if (id("v_close").exists()) {
        id("v_close").findOnce().click();
    }

}
/**
 * 滑动(默认概率是百分之三十)
 * @param {*} qx 
 * @param {*} qy 
 * @param {*} zx 
 * @param {*} zy 
 * @param {*} time 
 * @param {*} timesInterval 
 */
// function slideScreenDown(qx, qy, zx, zy, time, timesInterval, CurveBrushScreen) {
//     if (CurveBrushScreen) {
//         curveDown(qx, qy, zx, zy, time, timesInterval); //曲线概率
//     } else {
//         lineDown(qx, qy, zx, zy, time, timesInterval); //直线概率
//     }
// }

/**
* 屏幕向下滑动并延迟8至12秒
*/
function lineDown(pressTime) {
    let x1 = random(device.width * 0.2, device.width * 0.3);
    let y1 = device.height * 0.8
    let x2 = random(device.width * 0.2, device.width * 0.3);
    let y2 = device.height * 0.1;
    console.log("屏幕向下滑动");
    swipe(x1, y1, x2, y2, pressTime);
}
// function lineDown(startX, startY, endX, endY, pressTime, timesInterval) {
//     console.log("屏幕向下滑动");
//     swipe(startX, startY, endX, endY, pressTime);
//     let randomMin = timesInterval * 1000;
//     let randomMax = (parseInt(timesInterval) + 2) * 1000;
//     let delayTime = random(randomMin, randomMax);
//     sleep(delayTime);
// }
function curveDown(qx, qy, zx, zy, time, timesInterval) {
    console.log("曲线滑动");
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };
    for (let i = 0; i < 1; i += 0.08) {
        let newPoint = bezier_curves(point, i);
        xxyy = [parseInt(newPoint.x), parseInt(newPoint.y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);

    let randomMin = timesInterval * 1000;
    let randomMax = (parseInt(timesInterval) + 2) * 1000;
    let delayTime = random(randomMin, randomMax);
    sleep(delayTime);
}
