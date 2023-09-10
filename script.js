// let questionTimes = [];
// recordQuestionTime(0);
// function recordQuestionTime(questionNumber) {
//   questionTimes[questionNumber+1] = new Date().getTime();
//   //console.log(questionTimes)
// }

// // Function to calculate the time spent on a question (in seconds)
// function calculateTimeSpent(questionNumber) {
//   const currentTime = new Date().getTime();
//   const startTime = questionTimes[questionNumber];
//   const timeSpent = (currentTime - startTime) / 1000;
//   console.log(timeSpent)
//   return timeSpent;
// }

// function showPage(pageId) {
//   recordQuestionTime(questionNumber);

// const pages = document.querySelectorAll('.book');

//   for (const page of pages) {
//     page.classList.remove('page-transition-in', 'page-transition-out');
//     page.style.display = 'none';
//   }

//   const nextPage = document.getElementById(pageId);
//   nextPage.style.display = 'block';
//   nextPage.classList.add('page-transition-in');

//   if (pageId === 'page5') {
//     showResult();
//   }
// }

// function showResult() {
//   // 在此添加根据问题显示分析结果的逻辑
//   // 将结果显示在页面上，例如：
//   document.getElementById('result').textContent = '这是根据您的选择生成的结果。';

//   let longestTimeQuestion = -1;
//     let longestTimeSpent = 0;
//     for (let i = 0; i < questionTimes.length; i++) {
//         if (questionTimes[i]) {
//             const timeSpent = calculateTimeSpent(i);
//             if (timeSpent > longestTimeSpent) {
//                 longestTimeQuestion = i + 1;
//                 longestTimeSpent = timeSpent;
//             }
//         }
//     }

//     if (longestTimeQuestion !== -1) {
//         document.getElementById('longestTimeQuestion').textContent = `Question ${longestTimeQuestion} had the longest time spent: ${longestTimeSpent} seconds`;
//     } else {
//         document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
//     }
// }

// function backPage(pageId) {
//   // let pageNumber = parseInt(pageId.match(/\d+/)[0]);
//   // showPage(pageId.replace(pageNumber,pageNumber-1));
//   const currentPage = document.getElementById(pageId);
//   const pageNumber = parseInt(pageId.match(/\d+/)[0]);

//   if (pageNumber > 1) {
//     currentPage.style.display = 'none';
//     currentPage.classList.remove('page-transition-in', 'page-transition-out');

//     const previousPageId = pageId.replace(pageNumber, pageNumber - 1);
//     const previousPage = document.getElementById(previousPageId);
//     previousPage.style.display = 'block';
//     previousPage.classList.add('page-transition-in');
//   }
// }


// const coordinatesElement = document.getElementById('coordinates');

var anim = document.querySelector("#image7");
anim.addEventListener("animationend",function(e){
  showPage('page1',0);
},false);

let questionTimes = [];
let calculateTime=[]
function recordQuestionTime(questionNumber) {
  // const questionNumber = parseInt(pageId.match(/\d+/)[0]);
  questionTimes[questionNumber] = new Date().getTime();
  console.log(questionTimes[questionNumber])
}

// Function to calculate the time spent on a question (in seconds)
// function calculateTimeSpent(questionNumber) {
//   const currentTime = new Date().getTime();
//   const startTime = questionTimes[questionNumber];
//   const timeSpent = (currentTime - startTime) / 1000;
//   console.log(timeSpent)
//   console.log()
//   return timeSpent;
// }
let TFQuestion=[]
function showPage(pageId,TF) {
  const questionNumber = parseInt(pageId.match(/\d+/)[0])-1;
  recordQuestionTime(questionNumber);
  if(questionNumber!=0){
    TFQuestion[questionNumber-1]=TF
    console.log(TF)
  }

  const pages = document.querySelectorAll('.book');

  for (const page of pages) {
    page.classList.remove('page-transition-in', 'page-transition-out');
    page.style.display = 'none';
  }

  const nextPage = document.getElementById(pageId);
  nextPage.style.display = 'block';
  nextPage.classList.add('page-transition-in');
  if (pageId === 'page0') {
    displayAndAnimateImages();
    
  }
  if (pageId === 'page5') {
    showResult();
  }
}

// function displayAndAnimateImages() {
//   const images = document.querySelectorAll('.book img');
//   console.log(1)
//   let currentIndex = 0;

//   function showNextImage() {
//     if (currentIndex < images.length) {
//       images[currentIndex].style.display = 'block';
//       setTimeout(() => {
//         images[currentIndex].style.transform = 'scale(1)'; // 放大图像
//         currentIndex++;
//         showNextImage();
//       }, 500); // 设置延迟以创建动画效果
//     }
//   }

//   showNextImage();
// }




function showResult() {
  // 在此添加根据问题显示分析结果的逻辑
  // 将结果显示在页面上，例如：
  document.getElementById('result').textContent = '在这次测试中，你观赏了50%的弃作，xx%的AI作品，xx%的established artist的作品。 ';
  // var longestTime=0;
  for(let i=0;i<questionTimes.length-1;i++){
    calculateTime[i]=(questionTimes[i+1]-questionTimes[i])/1000

  }
  const longestTime=Math.max.apply(null, calculateTime);
  const longestTimeQuestion=calculateTime.indexOf(longestTime)+1
  console.log(longestTimeQuestion)
  console.log(longestTime)
  console.log(calculateTime)
  if (longestTime>0.5) {
    document.getElementById('longestTimeQuestion').textContent = `你在看第${longestTimeQuestion} 道的时候犹豫了很久${longestTime}秒，是觉得它们都是很完善的作品吗？`;
  } else {
    document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
  }
  let countTF={1:0,0:0}
  for (let i=0;i<TFQuestion.length;i++){
    countTF[TFQuestion[i]]++
  }

  document.getElementById('TFQuestions').textContent = `你识别出了${countTF[1]}个正确的弃作，正确率${countTF[1]/(countTF[1]+countTF[0])*100}%`
}

function backPage(pageId) {
  const currentPage = document.getElementById(pageId);
  const pageNumber = parseInt(pageId.match(/\d+/)[0]);

  if (pageNumber > 1) {
    currentPage.style.display = 'none';
    currentPage.classList.remove('page-transition-in', 'page-transition-out');

    const previousPageId = pageId.replace(pageNumber, pageNumber - 1);
    const previousPage = document.getElementById(previousPageId);
    previousPage.style.display = 'block';
    previousPage.classList.add('page-transition-in');
  }
}

//const coordinatesElement = document.getElementById('coordinates');
