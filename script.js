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
  showPage('page1');
},false);

let questionTimes = [];
const questionNumber=0;
recordQuestionTime(0);

function recordQuestionTime(questionNumber) {
  questionTimes[questionNumber] = new Date().getTime();
  console.log(questionNumber)
}

// Function to calculate the time spent on a question (in seconds)
function calculateTimeSpent(questionNumber) {
  const currentTime = new Date().getTime();
  const startTime = questionTimes[questionNumber];
  const timeSpent = (currentTime - startTime) / 1000;
  console.log(timeSpent)
  console.log()
  return timeSpent;
}

function showPage(pageId, questionNumber) {
  recordQuestionTime(questionNumber);

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
    
  }else{
    questionNumber+=1;
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
  document.getElementById('result').textContent = '这是根据您的选择生成的结果。';

  let longestTimeQuestion = -1;
  let longestTimeSpent = 0;
  for (let i = 1; i < questionTimes.length; i++) {
    if (questionTimes[i]) {
      const timeSpent = calculateTimeSpent(i);
      if (timeSpent > longestTimeSpent) {
        longestTimeQuestion = i + 1;
        longestTimeSpent = timeSpent;
      }
    }
  }

  if (longestTimeQuestion !== -1) {
    document.getElementById('longestTimeQuestion').textContent = `Question ${longestTimeQuestion} had the longest time spent: ${longestTimeSpent} seconds`;
  } else {
    document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
  }
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
