gsap.registerPlugin(ScrollTrigger);

function smoothScrolling() {
  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
smoothScrolling();

function cursor() {
    gsap.set(".ball", {
      xPercent: -50,
      yPercent: -50,
    });
    let ball = document.querySelector(".ball");
    let pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    let mouse = {
      x: pos.x,
      y: pos.y,
    };
    let speed = 1;
    let xSet = gsap.quickSetter(ball, "x", "px");
    let ySet = gsap.quickSetter(ball, "y", "px");
  
    window.addEventListener("mousemove", function (e) {
      console.log(e);
      mouse.x = e.x;
      mouse.y = e.y;
    });
  
    gsap.ticker.add(function () {
      let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    let items = document.querySelectorAll(".anime-list li");
     items.forEach(function (el) {
         gsap.set(".hover-img", {
             xPercent: -50,
             yPercent: -50
         })
         let image = el.querySelector(".hover-img")
         let innerImage = el.querySelector(".hover-img img");
         let pos = {
             x: window.innerWidth / 2,
             y: window.innerHeight / 2
         }
         let mouse = {
             x: pos.x
         }
         let speed = 0.1;
         let xSet = gsap.quickSetter(image, "x", "px") //

         window.addEventListener("mousemove", function (e) {
             //console.log(e.x)
             mouse.x = e.x;
         })

         gsap.ticker.add(function () { //requestAnimationFrame()
             let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
             pos.x += (mouse.x - pos.x) * dt;
             xSet(pos.x)
         })

         let direction = "",
             oldx = 0,
             lastCursorX = null,
             cursorThreshold = 150;

         let mousemovemethod = function (e) {
             if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
                 direction = "left"
                 lastCursorX = e.clientX;
                 innerImage.style.transform = "rotate(-15deg)"

             } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
                 direction = "right"
                 lastCursorX = e.clientX;
                 innerImage.style.transform = "rotate(15deg)"
             }
             oldx = e.pageX;
         }
         let mouseMoveTimer;

         document.addEventListener("mousemove", function () {
             // setTimeout(할일,시간) 시간뒤에 함수 발생
             //setTimeout을 멈추고 싶을때 =>변수에 할당
             //변수=setTimeout(할일(함수),시간)
             //clearTimeout(변수)=>멈추는 명령

             clearTimeout(mouseMoveTimer)
             mouseMoveTimer = setTimeout(function () {
                 innerImage.style.transform = "translateX(0%) rotate(0deg)"
             }, 100)
         })
         document.addEventListener("mousemove", mousemovemethod)
     })
}
cursor();


$('a').click(function(e){
    e.preventDefault();})


$(window).scroll(function () {
    //$(this) -> $(window)
    let scrollTop = $(this).scrollTop();
    //offset().top : 전체 문서의 top에서 service영역의 top까지의 거리
    let offsets = $(".page1").offset().top;
    if (scrollTop > offsets) {
      $(".top-header").addClass("hide");
    } else {
      $(".top-header").removeClass("hide");
    }
    if (scrollTop > offsets) {
      $(".ani-right").addClass("show");
    } else {
      $(".ani-right").removeClass("show");
    }
    if (scrollTop > offsets) {
      $(".active-header").addClass("show");
    } else {
      $(".active-header").removeClass("show");
    }
});

function loading(){
gsap.set('.load .load-main > *',{yPercent:1200})
const loadAni = gsap.timeline({
  onComplete:function(){
    $('.load').remove()
  }
})
loadAni.addLabel('a')

loadAni
.to('.load',{height:0, delay:4}, 'a')
.to('.load .load-main > *',{
  stagger: .07,
  yPercent:0, 
  delay: .7,
},'a')
.to('.load .load-main > *',{
  stagger: .05,
  yPercent: -470,
  delay: 3,
  opacity: 0,
},'a')
.to('.load img',{
  opacity: 0,
  delay:3
},'a')
}
loading()

function svgText(){
gsap.to(".svgText",{
    scrollTrigger:{
      trigger:".page2",
      start:"-80% 20%",
      end:"bottom bottom",
      scrub:1,
    },opacity:0
  })
const svgText = document.querySelector("#textOnPath1");
const svgText2 = document.querySelector("#textOnPath2");
console.log(svgText);

gsap.fromTo(
    [svgText, svgText2],
    {
      attr: { startOffset: "100%" },
    },
    {
      attr: { startOffset: "0%" },
      scrollTrigger: {
        trigger: ".svg",
        start: "top top",
        scrub: 1,
        end: "+=100%",
      },
    }
  );
}
svgText();

function yellow(){
const splitMotion = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrap-visual',
    start: '20% 70%',
    end: '100% 0%',

  },
})

splitMotion
.addLabel('a')
.from('.yellow img',{
  opacity:0,
},'a')
} yellow();

function visual() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "0% 0%",
          end: "30% 0%",
          scrub: 1,
          // markers:true,
        },
      })
      .to(".thumb-box.box1", {
        "z-index": 1,
      })
      .to(".thumb-box.box2", {
        "z-index": 2,
      })
      .to(".thumb-box.box3", {
        "z-index": 3,
      })
      .to(".thumb-box.box4", {
        "z-index": 4,
      });
  
    const mainScrub = document.querySelectorAll(".section1 .visual_area");
    mainScrub.forEach((element) => {
      dataY = element.dataset.y;
      gsap.to(element, {
        scrollTrigger: {
          trigger: ".section1",
          start: "0% 50%",
          end: "50% 0%",
          scrub: 1,
          duration: 0.5,
          // markers: true,
        },
        yPercent: dataY,
      });
    });
}
visual();

function rotate (){
  let stickys = document.querySelectorAll("#page2");

stickys.forEach(function (sticky) {
    gsap.to(sticky, {
        scrollTrigger: {
            trigger: sticky,
            start: "top top",
            end: "+=150%",
            scrub: 1,
        },
        y: 250,
        scale: 0.75,
        rotation: -15,
        ease: "power3.out"

    })
})

gsap.to("#page3", {
  scrollTrigger: {
      trigger:"#page3",
      start: "top top",
      end: "+=150%",
      scrub: 1,
  },
  y: 250,
  scale: 0.6,
  opacity:0,
  rotation: 15,
  ease: "power3.out"
})
}
rotate();

function ani_txt() {
    let clutter = "";
    //textContent  --> 테스트만 추출
    let page2_h2 = document.querySelector("#page2>p").textContent.split("");
  
    page2_h2.forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
      //clutter = clutter + `<span>T</span>`
      document.querySelector("#page2>p").innerHTML = clutter;
    });
  
    gsap.to("#page2>p>span", {
      scrollTrigger: {
        trigger: "#page2>p>span",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
      color: "#222",
      stagger: 0.2,
    });
  }
  ani_txt();

function particle() {
    const footer = gsap.timeline();
    footer
      .addLabel("a")
      .to(
        ".particle1", {
          opacity: 1,
          rotate: -50,
          yPercent: 70,
          duration: 50
        },
        "a"
      )
      .to(".particle2", {
        opacity: 1,
        rotate: 10,
        duration: 40
      }, "a")
      .to(".particle3", {
          opacity: 1,
          rotate: 240,
          yPercent: -100,
          duration: 50
        },
        "a"
      );
  
    ScrollTrigger.create({
      animation: footer,
      trigger: "#page2",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
      pin: false,
    });
}
particle();

function text() {
    let pTag1 = document.querySelector(".first-parallel");
    let pTag2 = document.querySelector(".second-parallel");
    let pTag3 = document.querySelector(".third-parallel");
    let pTag4 = document.querySelector(".four-parallel");
    let pTag5 = document.querySelector(".five-parallel");
  
    let textArr1 =
      "Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque".split(
        " "
      );
    let textArr2 =
      "Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque".split(
        " "
      );
    let textArr3 =
      "Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to DiptyqueWelcome to Diptyque Welcome to Diptyque Welcome to Diptyque".split(
        " "
      );
    let textArr4 =
      "Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque".split(
        " "
      );
    let textArr5 =
      "Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque Welcome to Diptyque".split(
        " "
      );
  
  
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
  
    initTexts(pTag1, textArr1);
    initTexts(pTag2, textArr2);
    initTexts(pTag3, textArr3);
    initTexts(pTag4, textArr4);
    initTexts(pTag5, textArr5);
  
    function initTexts(element, textArray) {
      textArray.push(...textArray);
      for (let i = 0; i < textArray.length; i++) {
        //자바스크립트에서 띄워쓰기 &nbsp;
        //자바스크립트에서 공백 \u00A0;
  
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`;
      }
    }
  
    // let arr = [];
    // arr.push(...textArr1);
    // console.log(textArray);
  
    function aniamte() {
      count1++;
      count2++;
      count3++;
      count4++;
      count5++;
  
      count1 = marqueeText(count1, pTag1, -1);
      count2 = marqueeText(count2, pTag2, 1);
      count3 = marqueeText(count3, pTag3, -1);
      count4 = marqueeText(count4, pTag4, 1);
      count5 = marqueeText(count5, pTag5, -1);
      //window.requestAnimationFrame(aniamte)
      requestAnimationFrame(aniamte);
    }
  
    function marqueeText(count, element, direction) {
      if (count > element.scrollWidth / 5) {
        count = 0;
        element.style.transform = `translate(0,0)`;
      }
      element.style.transform = `translate(${count * direction}px,0)`;
      return count;
    }
  
    function scrollHandler() {
      count1 += 5;
      count2 += 5;
      count3 += 5;
      count4 += 5;
      count5 += 5;
    }
    window.addEventListener("scroll", scrollHandler);
  
    aniamte();
}
text()

function scroll() {
    const beautyMotion = gsap.timeline({
      defauts: {
        // duration:5,
      }
    })
    beautyMotion.addLabel('m1')
      .to('.sc_beauty .txt_wrap .title', {
        opacity: 0,
        y: -100
      }, 'm1+=0.1')
      .to('.sc_beauty .txt_wrap .desc', {
        opacity: 0,
        y: -100
      }, 'm1+=0.2')
      .to('.sc_beauty .prd-wrap', {
        // x:-window.innerWidth*2+($('.sc_beauty .prd-item').innerWidth()/2) - (window.innerWidth/2),
        xPercent: -118.7,
        duration: 5,
      }, 'm1+=0.3')
    ScrollTrigger.create({
      animation: beautyMotion,
      trigger: '.sc_beauty',
      start: "top top",
      end: "+=400%",
      scrub: 1,
      // markers:true,
      pin: true,
    })
  
  
    gsap.to('.sc_beauty .motion', 5, {
      scrollTrigger: {
        trigger: '.sc_new',
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
        // markers:true,
        // pin:true,
      },
      y: '100vh'
    })
  
  
    const beauty2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc_new",
        start: 'top top',
        end: '+=400%',
        // markers:true,
        scrub: 0.3,
        pin: true,
      }
    });
  
  
    beauty2.to('.motion', {
        'visibility': 'hidden'
      })
      .to('.du_ori', {
        'visibility': 'visible'
      }, 0)
      .to('.du', {
        'visibility': 'visible'
      }, 0.1)
      .to('.du1', {
        rotation: 30
      }, 0.1)
      .to('.du2', {
        rotation: 60
      }, 0.1)
      .to('.du3', {
        rotation: 90
      }, 0.1)
      .to('.du4', {
        rotation: 120
      }, 0.1)
      .to('.du5', {
        rotation: 150
      }, 0.1)
      .to('.du6', {
        rotation: 180
      }, 0.1)
      .to('.du7', {
        rotation: 210
      }, 0.1)
      .to('.du8', {
        rotation: 240
      }, 0.1)
      .to('.du9', {
        rotation: 270
      }, 0.1)
      .to('.du10', {
        rotation: 300
      }, 0.1)
      .to('.du11', {
        rotation: 330
      }, 0.1)
      .addLabel('m1')
      .to('.duouther img', {
        y: '20vw'
      }, 'm1')
      .to('.duouther img', {
        opacity: 0
      }, 'm1')
      .to('.du_ori img', {
        y: '20vw'
      }, 'm1')
      .to('.du_ori img', {
        opacity: 0
      }, 'm1')
      .to('.wrap', {
        opacity: 1
      })
  
  }
  scroll()

  function blurs() {
    let blurss = document.querySelectorAll(".prd-item")
  
    blurss.forEach((blur) => {  
      let siblings;
      let img ;
      blur.addEventListener("mouseover", function () {
       // 마우스를 올린 요소의 부모 요소
       const parent = this.parentElement;
       // 부모 요소의 모든 형제 요소들
       siblings = Array.from(parent.children).filter(child => child !== this);
  
       siblings.forEach(sibling => {
         img = sibling.querySelector('img');
        img.classList.add('blur');
    });
  
  
        })
      blur.addEventListener("mouseleave", function () {
        siblings.forEach(sibling => {
          img = sibling.querySelector('img');
         img.classList.remove('blur');
     });
      })
    }
  )
  
  }
  blurs();

    function canvas() {
        const canvas = document.querySelector("#myCanvas");
        const context = canvas.getContext("2d"); //canvas사용의 필수
      
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      
        window.addEventListener("resize", function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          render();
        });
      
        function files(index) {
            let data=`./img2/100.jpg
            ./img2/101.jpg
            ./img2/102.jpg
            ./img2/103.jpg
            ./img2/104.jpg
            ./img2/105.jpg
            ./img2/106.jpg
            ./img2/107.jpg
            ./img2/108.jpg
            ./img2/109.jpg
            ./img2/110.jpg
            ./img2/111.jpg
            ./img2/112.jpg
            ./img2/113.jpg
            ./img2/114.jpg
            ./img2/115.jpg
            ./img2/116.jpg
            ./img2/117.jpg
            ./img2/118.jpg
            ./img2/119.jpg
            ./img2/120.jpg
            ./img2/121.jpg
            ./img2/122.jpg
            ./img2/123.jpg
            ./img2/124.jpg
            ./img2/125.jpg
            ./img2/126.jpg
            ./img2/127.jpg
            ./img2/128.jpg
            ./img2/129.jpg
            ./img2/130.jpg
            ./img2/131.jpg
            ./img2/132.jpg
            ./img2/133.jpg
            ./img2/134.jpg
            ./img2/135.jpg
            ./img2/136.jpg
            ./img2/137.jpg
            ./img2/138.jpg
            ./img2/139.jpg
            ./img2/140.jpg
            ./img2/141.jpg
            ./img2/142.jpg
            ./img2/143.jpg
            ./img2/144.jpg
            ./img2/145.jpg
            ./img2/146.jpg
            ./img2/147.jpg
            ./img2/148.jpg
            ./img2/149.jpg
            ./img2/150.jpg
            ./img2/151.jpg
            ./img2/152.jpg
            ./img2/153.jpg
            ./img2/154.jpg
            ./img2/155.jpg
            ./img2/156.jpg
            ./img2/157.jpg
            ./img2/158.jpg
            ./img2/159.jpg
            ./img2/160.jpg
            ./img2/161.jpg
            ./img2/162.jpg
            ./img2/163.jpg
            ./img2/164.jpg
            ./img2/165.jpg
            ./img2/166.jpg
            ./img2/167.jpg
            ./img2/168.jpg
            ./img2/169.jpg
            ./img2/170.jpg
            ./img2/171.jpg
            ./img2/172.jpg
            ./img2/173.jpg
            ./img2/174.jpg
            ./img2/175.jpg
            ./img2/176.jpg
            ./img2/177.jpg
            ./img2/178.jpg
            ./img2/179.jpg
            ./img2/180.jpg
            ./img2/181.jpg
            ./img2/182.jpg
            ./img2/183.jpg
            ./img2/184.jpg
            ./img2/185.jpg
            ./img2/186.jpg
            ./img2/187.jpg
            ./img2/188.jpg
            ./img2/189.jpg
            ./img2/190.jpg
            ./img2/191.jpg
            ./img2/192.jpg
            ./img2/193.jpg
            ./img2/194.jpg
            ./img2/195.jpg
            ./img2/196.jpg
            ./img2/197.jpg
            ./img2/198.jpg
            ./img2/199.jpg
            ./img2/200.jpg
            ./img2/201.jpg
            ./img2/202.jpg
            ./img2/203.jpg
            ./img2/204.jpg
            ./img2/205.jpg
            ./img2/206.jpg
            ./img2/207.jpg
            ./img2/208.jpg
            ./img2/209.jpg
            ./img2/210.jpg
            ./img2/211.jpg
            ./img2/212.jpg
            ./img2/213.jpg
            ./img2/214.jpg
            ./img2/215.jpg
            ./img2/216.jpg
            ./img2/217.jpg
            ./img2/218.jpg
            ./img2/219.jpg
            ./img2/220.jpg
            ./img2/221.jpg
            ./img2/222.jpg
            ./img2/223.jpg
            ./img2/224.jpg
            ./img2/225.jpg
            ./img2/226.jpg
            ./img2/227.jpg
            ./img2/228.jpg
            ./img2/229.jpg
            ./img2/230.jpg
            ./img2/231.jpg
            ./img2/232.jpg
            ./img2/233.jpg
            ./img2/234.jpg
            ./img2/235.jpg
            ./img2/236.jpg
            ./img2/237.jpg
            ./img2/238.jpg
            ./img2/239.jpg
            ./img2/240.jpg
            ./img2/241.jpg
            ./img2/242.jpg
            ./img2/243.jpg
            ./img2/244.jpg
            ./img2/245.jpg
            ./img2/246.jpg
            ./img2/247.jpg
            ./img2/248.jpg
            ./img2/249.jpg
            ./img2/250.jpg
            ./img2/251.jpg
            ./img2/252.jpg
            ./img2/253.jpg
            ./img2/254.jpg
            ./img2/255.jpg
            ./img2/256.jpg
            ./img2/257.jpg
            ./img2/258.jpg
            ./img2/259.jpg
            ./img2/260.jpg
            ./img2/261.jpg
            ./img2/262.jpg
            ./img2/263.jpg
            ./img2/264.jpg
            ./img2/265.jpg
            ./img2/266.jpg
            ./img2/267.jpg
            ./img2/268.jpg
            ./img2/269.jpg
            ./img2/270.jpg
            ./img2/271.jpg
            ./img2/272.jpg
            ./img2/273.jpg
            ./img2/274.jpg
            ./img2/275.jpg
            ./img2/276.jpg
            ./img2/277.jpg
            ./img2/278.jpg
            ./img2/279.jpg
            ./img2/280.jpg
            ./img2/281.jpg
            ./img2/282.jpg
            ./img2/283.jpg
            ./img2/284.jpg
            ./img2/285.jpg
            ./img2/286.jpg
            ./img2/287.jpg
            ./img2/288.jpg
            ./img2/289.jpg
            ./img2/290.jpg
            ./img2/291.jpg
            ./img2/292.jpg
            ./img2/293.jpg
            ./img2/294.jpg
            ./img2/295.jpg
            ./img2/296.jpg
            ./img2/297.jpg
            ./img2/298.jpg
            ./img2/299.jpg
            ./img2/300.jpg
            ./img2/301.jpg
            ./img2/302.jpg
            ./img2/303.jpg
            ./img2/304.jpg
            ./img2/305.jpg
            ./img2/306.jpg
            ./img2/307.jpg
            ./img2/308.jpg
            ./img2/309.jpg
            ./img2/310.jpg
            ./img2/311.jpg
            ./img2/312.jpg
            ./img2/313.jpg
            ./img2/314.jpg
            ./img2/315.jpg
            ./img2/316.jpg
            ./img2/317.jpg
            ./img2/318.jpg
            ./img2/319.jpg
            ./img2/320.jpg
            ./img2/321.jpg
            ./img2/322.jpg
            ./img2/323.jpg
            ./img2/324.jpg
            ./img2/325.jpg
            ./img2/326.jpg
            ./img2/327.jpg
            ./img2/328.jpg
            ./img2/329.jpg
            ./img2/330.jpg
            ./img2/331.jpg
            ./img2/332.jpg
            ./img2/333.jpg
            ./img2/334.jpg
            ./img2/335.jpg
            ./img2/336.jpg
            ./img2/337.jpg
            ./img2/338.jpg
            ./img2/339.jpg
            ./img2/340.jpg
            ./img2/341.jpg
            ./img2/342.jpg
            ./img2/343.jpg
            ./img2/344.jpg
            ./img2/345.jpg
            ./img2/346.jpg
            ./img2/347.jpg
            ./img2/348.jpg
            ./img2/349.jpg
            ./img2/350.jpg
            ./img2/351.jpg
            ./img2/352.jpg
            ./img2/353.jpg
            ./img2/354.jpg
            ./img2/355.jpg
            ./img2/356.jpg
            ./img2/357.jpg
            ./img2/358.jpg
            ./img2/359.jpg
            ./img2/360.jpg
            ./img2/361.jpg
            ./img2/362.jpg
            ./img2/363.jpg
            ./img2/364.jpg
            ./img2/365.jpg
            ./img2/366.jpg
            ./img2/367.jpg
            ./img2/368.jpg
            ./img2/369.jpg
            ./img2/370.jpg
            ./img2/371.jpg
            ./img2/372.jpg
            ./img2/373.jpg
            ./img2/374.jpg
            ./img2/375.jpg
            ./img2/376.jpg
            ./img2/377.jpg
            ./img2/378.jpg
            ./img2/379.jpg
            ./img2/380.jpg
            ./img2/381.jpg
            ./img2/382.jpg
            ./img2/383.jpg
            ./img2/384.jpg
            ./img2/385.jpg
            ./img2/386.jpg
            ./img2/387.jpg
            ./img2/388.jpg
            ./img2/389.jpg
            ./img2/390.jpg
            ./img2/391.jpg
            ./img2/392.jpg
            ./img2/393.jpg
            ./img2/394.jpg
            ./img2/395.jpg
            ./img2/396.jpg
            ./img2/397.jpg
            ./img2/398.jpg
            ./img2/399.jpg
            ./img2/400.jpg`
          return data.split("\n")[index];
        }
      
        const frameCount = 301; //이미지전체갯수
        const images = [];
        const imageSeq = {
          frame: 0,
        };
      
        for (let i = 0; i < frameCount; i++) {
          const img = new Image(); //img태그만들기
          if(i>(frameCount - 1)){
            img.src=files(frameCount - 1)
        }else{
            img.src=files(i)
        }
        images.push(img)
        }
        //console.log(images)
      
        gsap.to(imageSeq, {
          frame: images.length - 1, //마지막 프레임의 index번호
          snap: "frame", //"frame"은 프레임 단위로 값을 맞추겠다는 의미
          ease: "none",
          scrollTrigger: {
            scrub: 0.1,
            trigger: "#page7",
            start: "top top",
            end: "400% top",
            //scroller: "#main",
          },
          onUpdate: render, //gsap.to가 변할때마다 업데이트가 일어남
        });
      
        images[0].onload = render;
      
        function render() {
          scaleImage(images[imageSeq.frame], context);
        }
      
        function scaleImage(img, ctx) {
          let canvas = ctx.canvas;
          let hRatio = canvas.width / img.width;
          let vRatio = canvas.height / img.height;
      
          let ratio = Math.max(hRatio, vRatio);
          let centershift_x = (canvas.width - img.width * ratio) / 2;
          let centershift_y = (canvas.height - img.height * ratio) / 2;
      
          ctx.clearRect(0, 0, canvas.width, canvas.height); //화면정리
      
          ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centershift_x,
            centershift_y,
            img.width * ratio,
            img.height * ratio
          );
        }
      
        ScrollTrigger.create({
          trigger: "#page7", //애니메이션이 시작될 요소
          //scroller: "#main", //스크롤이 발생하는 요소
          pin: true, //스크롤하는 동안 트리거 요소 고정시킴
          start: "top top", //애니메이션 시작
          end: "400% top",
        }
      )
      }
      canvas();


    // function canvas2() {
    //     const canvas = document.querySelector("#ani");
    //     const context = canvas.getContext("2d"); //canvas사용의 필수
      
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
      
    //     window.addEventListener("resize", function () {
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
    //       render();
    //     });
      
    //     function files(index) {
    //         let data=`/img3/1.jpg
    //         ./img3/2.jpg
    //         ./img3/3.jpg
    //         ./img3/4.jpg
    //         ./img3/5.jpg
    //         ./img3/6.jpg
    //         ./img3/7.jpg
    //         ./img3/8.jpg
    //         ./img3/9.jpg
    //         ./img3/10.jpg
    //         ./img3/11.jpg
    //         ./img3/12.jpg
    //         ./img3/13.jpg
    //         ./img3/14.jpg
    //         ./img3/15.jpg
    //         ./img3/16.jpg
    //         ./img3/17.jpg
    //         ./img3/18.jpg
    //         ./img3/19.jpg
    //         ./img3/20.jpg
    //         ./img3/21.jpg
    //         ./img3/22.jpg
    //         ./img3/23.jpg
    //         ./img3/24.jpg
    //         ./img3/25.jpg
    //         ./img3/26.jpg
    //         ./img3/27.jpg
    //         ./img3/28.jpg
    //         ./img3/29.jpg
    //         ./img3/30.jpg
    //         ./img3/31.jpg
    //         ./img3/32.jpg
    //         ./img3/33.jpg
    //         ./img3/34.jpg
    //         ./img3/35.jpg
    //         ./img3/36.jpg
    //         ./img3/37.jpg
    //         ./img3/38.jpg
    //         ./img3/39.jpg
    //         ./img3/40.jpg
    //         ./img3/41.jpg
    //         ./img3/42.jpg
    //         ./img3/43.jpg
    //         ./img3/44.jpg
    //         ./img3/45.jpg
    //         ./img3/46.jpg
    //         ./img3/47.jpg
    //         ./img3/48.jpg
    //         ./img3/49.jpg
    //         ./img3/50.jpg
    //         ./img3/51.jpg
    //         ./img3/52.jpg
    //         ./img3/53.jpg
    //         ./img3/54.jpg
    //         ./img3/55.jpg
    //         ./img3/56.jpg
    //         ./img3/57.jpg
    //         ./img3/58.jpg
    //         ./img3/59.jpg
    //         ./img3/60.jpg
    //         ./img3/61.jpg
    //         ./img3/62.jpg
    //         ./img3/63.jpg
    //         ./img3/64.jpg
    //         ./img3/65.jpg
    //         ./img3/66.jpg
    //         ./img3/67.jpg
    //         ./img3/68.jpg
    //         ./img3/69.jpg
    //         ./img3/70.jpg
    //         ./img3/71.jpg
    //         ./img3/72.jpg
    //         ./img3/73.jpg
    //         ./img3/74.jpg
    //         ./img3/75.jpg
    //         ./img3/76.jpg
    //         ./img3/77.jpg
    //         ./img3/78.jpg
    //         ./img3/79.jpg
    //         ./img3/80.jpg
    //         ./img3/81.jpg
    //         ./img3/82.jpg
    //         ./img3/83.jpg
    //         ./img3/84.jpg
    //         ./img3/85.jpg
    //         ./img3/86.jpg
    //         ./img3/87.jpg
    //         ./img3/88.jpg
    //         ./img3/89.jpg
    //         ./img3/90.jpg
    //         ./img3/91.jpg
    //         ./img3/92.jpg
    //         ./img3/93.jpg
    //         ./img3/94.jpg
    //         ./img3/95.jpg
    //         ./img3/96.jpg
    //         ./img3/97.jpg
    //         ./img3/98.jpg
    //         ./img3/99.jpg
    //         ./img3/100.jpg
    //         ./img3/101.jpg
    //         ./img3/102.jpg
    //         ./img3/103.jpg
    //         ./img3/104.jpg
    //         ./img3/105.jpg
    //         ./img3/106.jpg
    //         ./img3/107.jpg
    //         ./img3/108.jpg
    //         ./img3/109.jpg
    //         ./img3/110.jpg
    //         ./img3/111.jpg
    //         ./img3/112.jpg
    //         ./img3/113.jpg
    //         ./img3/114.jpg
    //         ./img3/115.jpg
    //         ./img3/116.jpg
    //         ./img3/117.jpg
    //         ./img3/118.jpg
    //         ./img3/119.jpg
    //         ./img3/120.jpg
    //         ./img3/121.jpg
    //         ./img3/122.jpg
    //         ./img3/123.jpg
    //         ./img3/124.jpg
    //         ./img3/125.jpg
    //         ./img3/126.jpg
    //         ./img3/127.jpg
    //         ./img3/128.jpg
    //         ./img3/129.jpg
    //         ./img3/130.jpg
    //         ./img3/131.jpg
    //         ./img3/132.jpg
    //         ./img3/133.jpg
    //         ./img3/134.jpg
    //         ./img3/135.jpg
    //         ./img3/136.jpg
    //         ./img3/137.jpg
    //         ./img3/138.jpg
    //         ./img3/139.jpg
    //         ./img3/140.jpg
    //         ./img3/141.jpg
    //         ./img3/142.jpg
    //         ./img3/143.jpg
    //         ./img3/144.jpg
    //         ./img3/145.jpg
    //         ./img3/146.jpg
    //         ./img3/147.jpg
    //         ./img3/148.jpg
    //         ./img3/149.jpg
    //         ./img3/150.jpg
    //         ./img3/151.jpg
    //         ./img3/152.jpg
    //         ./img3/153.jpg
    //         ./img3/154.jpg
    //         ./img3/155.jpg
    //         ./img3/156.jpg
    //         ./img3/157.jpg
    //         ./img3/158.jpg
    //         ./img3/159.jpg
    //         ./img3/160.jpg
    //         ./img3/161.jpg
    //         ./img3/162.jpg
    //         ./img3/163.jpg
    //         ./img3/164.jpg
    //         ./img3/165.jpg
    //         ./img3/166.jpg
    //         ./img3/167.jpg
    //         ./img3/168.jpg
    //         ./img3/169.jpg
    //         ./img3/170.jpg
    //         ./img3/171.jpg
    //         ./img3/172.jpg
    //         ./img3/173.jpg
    //         ./img3/174.jpg
    //         ./img3/175.jpg
    //         ./img3/176.jpg
    //         ./img3/177.jpg
    //         ./img3/178.jpg
    //         ./img3/179.jpg
    //         ./img3/180.jpg
    //         ./img3/181.jpg
    //         ./img3/182.jpg
    //         ./img3/183.jpg
    //         ./img3/184.jpg
    //         ./img3/185.jpg
    //         ./img3/186.jpg
    //         ./img3/187.jpg
    //         ./img3/188.jpg
    //         ./img3/189.jpg
    //         ./img3/190.jpg
    //         ./img3/191.jpg
    //         ./img3/192.jpg
    //         ./img3/193.jpg
    //         ./img3/194.jpg
    //         ./img3/195.jpg
    //         ./img3/196.jpg
    //         ./img3/197.jpg
    //         ./img3/198.jpg
    //         ./img3/199.jpg
    //         ./img3/200.jpg`
    
    //       return data.split("\n")[index];
    //     }
      
    //     const frameCount = 200; //이미지전체갯수
    //     const images = [];
    //     const imageSeq = {
    //       frame: 0,
    //     };
      
    //     for (let i = 0; i < frameCount; i++) {
    //       const img = new Image(); //img태그만들기
    //       if(i>(frameCount - 1)){
    //         img.src=files(frameCount - 1)
    //     }else{
    //         img.src=files(i)
    //     }
    //     images.push(img)
    //     }
    //     //console.log(images)
      
    //     gsap.to(imageSeq, {
    //       frame: images.length - 1, //마지막 프레임의 index번호
    //       snap: "frame", //"frame"은 프레임 단위로 값을 맞추겠다는 의미
    //       ease: "none",
    //       scrollTrigger: {
    //         scrub: 0.1,
    //         trigger: "#page7",
    //         start: "top top",
    //         end: "400% top",
    //         //scroller: "#main",
    //       },
    //       onUpdate: render, //gsap.to가 변할때마다 업데이트가 일어남
    //     });
      
    //     images[0].onload = render;
      
    //     function render() {
    //       scaleImage(images[imageSeq.frame], context);
    //     }
      
    //     function scaleImage(img, ctx) {
    //       let canvas = ctx.canvas;
    //       let hRatio = canvas.width / img.width;
    //       let vRatio = canvas.height / img.height;
      
    //       let ratio = Math.max(hRatio, vRatio);
    //       let centershift_x = (canvas.width - img.width * ratio) / 2;
    //       let centershift_y = (canvas.height - img.height * ratio) / 2;
      
    //       ctx.clearRect(0, 0, canvas.width, canvas.height); //화면정리
      
    //       ctx.drawImage(
    //         img,
    //         0,
    //         0,
    //         img.width,
    //         img.height,
    //         centershift_x,
    //         centershift_y,
    //         img.width * ratio,
    //         img.height * ratio
    //       );
    //     }
      
    //     ScrollTrigger.create({
    //       trigger: "#page7", //애니메이션이 시작될 요소
    //       //scroller: "#main", //스크롤이 발생하는 요소
    //       pin: true, //스크롤하는 동안 트리거 요소 고정시킴
    //       start: "top top", //애니메이션 시작
    //       end: "400% top",
    //     }
    //   )
    // }
    // canvas2();
      
      let workInfoItems=document.querySelectorAll(".work__photo-item");
workInfoItems.forEach((item,index)=>{
    item.style.zIndex=workInfoItems.length - index;
})

//inset(top right bottom left)

gsap.set(".work__photo-item",{
    clipPath:function(){
        return "inset(0px 0px 0px 0px)"
    }
})

let ani= gsap.to(".work__photo-item:not(:last-child)" ,{
    clipPath:function(){
        return "inset(0px 0px 100% 0px)"
    },
    stagger:.5,
    ease:"none"
})

ScrollTrigger.create({
    trigger:".work",
    start:"top top",
    end:"bottom bottom",
    animation:ani,
    scrub:1
})
gsap.to(".work",{
    scrollTrigger:{
        trigger:"#page9",
        start:"top 80%",
        end:"bottom bottom",
        scrub:1,
    }
})

function line() {
    gsap.to(".header__marq-wrapp", {
      scrollTrigger: {
        trigger: ".footer_line",
        start: "top 20%",
        scrub: 1.9,
      },
      xPercent: -50,
    });
  
    gsap.to(".header__marq-star", {
      scrollTrigger: {
        trigger: ".footer_line",
        start: "top 20%",
        scrub: 1.9,
      },
      // rotation:-720
      rotate: -100,
    });
  }
  line();

 


 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  //이미지 애니
  let items = document.querySelectorAll(".anime-list li");
  items.forEach(function (el) {
      gsap.set(".hover-img", {
          xPercent: -50,
          yPercent: -50
      })
      let image = el.querySelector(".hover-img")
      let innerImage = el.querySelector(".hover-img img");
      let pos = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
      }
      let mouse = {
          x: pos.x
      }
      let speed = 0.1;
      let xSet = gsap.quickSetter(image, "x", "px") //

      window.addEventListener("mousemove", function (e) {
          //console.log(e.x)
          mouse.x = e.x;
      })

      gsap.ticker.add(function () { //requestAnimationFrame()
          let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
          pos.x += (mouse.x - pos.x) * dt;
          xSet(pos.x)
      })

      let direction = "",
          oldx = 0,
          lastCursorX = null,
          cursorThreshold = 150;

      let mousemovemethod = function (e) {
          if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
              direction = "left"
              lastCursorX = e.clientX;
              innerImage.style.transform = "rotate(-15deg)"

          } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
              direction = "right"
              lastCursorX = e.clientX;
              innerImage.style.transform = "rotate(15deg)"
          }
          oldx = e.pageX;
      }
      let mouseMoveTimer;

      document.addEventListener("mousemove", function () {
          // setTimeout(할일,시간) 시간뒤에 함수 발생
          //setTimeout을 멈추고 싶을때 =>변수에 할당
          //변수=setTimeout(할일(함수),시간)
          //clearTimeout(변수)=>멈추는 명령

          clearTimeout(mouseMoveTimer)
          mouseMoveTimer = setTimeout(function () {
              innerImage.style.transform = "translateX(0%) rotate(0deg)"
          }, 100)
      })
      document.addEventListener("mousemove", mousemovemethod)
  })
  // 글자애니
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let interval = null;
  let list = document.querySelectorAll(".anime-list li")
  //  console.log(list)
  list.forEach(function (el) {
      // el.onmouseenter = function () {}
      // el.addEventListener("mouseenter",function(){})
      el.addEventListener("mouseenter", function (e) {
          let target_element = e.target.querySelector("h2")
          let iteration = 0;
          // setInterval(할 일,시간)
          //setInterval를 멈추고싶다면 setInterval을 변수에 할당
          // let interval=setInterval(할 일,시간)
          // 멈출때 = clearInterval(변수) // clearInterval(interval)
          // console.log(target_element.innerText)
          // target_element.innerText="메롱";
          // console.log(target_element.dataset.value[0])
          //.map(function(){//map 합수는 배열안에 요스를 하나씩 불러서 할 일//새로운 배열을 만든다//item은 요소를 하나씩 받음 index는 그 요소의 index 번호})
          console.log(Math.random()) //0이상 1미만 사이의 부동소수점의 숫자
          let interval = setInterval(function () {
              target_element.innerText = target_element.innerText
                  .split("") //배열이 만들어짐
                  .map(function (letter, index) { //위의 배열의 각각의 item의 할 일
                      if (index < iteration) {
                          return target_element.dataset.value[index]
                      }
                      return letters[Math.floor(Math.random() * 26)]
                  })
                  .join("") //글자화
              // console.log(target_element.innerText.split(""))
              if (iteration >= target_element.dataset.value.length) {
                  clearInterval(interval)
              }
              iteration += 1 / 3; // iteration = iteration + 1/3
          }, 20)
      })
  })

});


gsap.set(".slider-left img:first-child",{
  xPercent:50,
})
gsap.set(".slider-left img:not(:first-child)",{
  xPercent:100,
})

gsap.to(".slider-left .img-1",{
  ease:"none",
  xPercent:-95,
  scale:0.6,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+180+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-left .img-2",{
  ease:"none",
  xPercent:-70,
  scale:0.7,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+360+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-left .img-3",{
  ease:"none",
  xPercent:-40,
  scale:0.8,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+540+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-left .img-4",{
  ease:"none",
  xPercent:-10,
  scale:0.9,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+720+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-left .img-5",{
  ease:"none",
  xPercent:20,
  scale:1,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+900+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})


gsap.set(".slider-right img:first-child",{
  xPercent:-50,
})
gsap.set(".slider-right img:not(:first-child)",{
  xPercent:-100,
})

gsap.to(".slider-right .img-1",{
  ease:"none",
  xPercent:95,
  scale:0.6,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+180+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-right .img-2",{
  ease:"none",
  xPercent:70,
  scale:0.7,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+360+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-right .img-3",{
  ease:"none",
  xPercent:40,
  scale:0.8,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+540+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-right .img-4",{
  ease:"none",
  xPercent:10,
  scale:0.9,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+720+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})

gsap.to(".slider-right .img-5",{
  ease:"none",
  xPercent:-20,
  scale:1,
  scrollTrigger:{
      trigger:".slider-card",
      start:"center+="+900+" center",
      end:"center+="+900+" center",
      scrub:1
  }
})


gsap.to(".slider-card",{
  ease:"linear",
  scrollTrigger:{
      trigger:".slider-card",
      start:"center center",
      end:"+=1000",
      pin:false,
      pin:true,
      scrub:1
  }
})