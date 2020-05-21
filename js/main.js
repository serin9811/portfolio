//////////////////////////////////////////////////////////맵 아이콘/////////////////////////////////////////////////////
//메일 박스에 메일이 들어오는 애니메이션
let mailing = setInterval(receiveMail, 1200);

function receiveMail() {
    var mailbox = document.getElementById('mailbox');
    mailbox.src = 'media/icons/mailbox2.png';
    setTimeout(function() {
        mailbox.src = 'media/icons/mailbox3.png';
    }, 400);
    setTimeout(function() {
        mailbox.src = 'media/icons/mailbox1.png';
    }, 800);
}

//시계탑에 시계가 돌아가는 애니메이션
let ticktok = setInterval(clockTicking, 1200);

function clockTicking() {
    var clock = document.getElementById('clock');
    clock.src = 'media/icons/clock2.png';
    setTimeout(function() {
        clock.src = 'media/icons/clock3.png';
    }, 400);
    setTimeout(function() {
        clock.src = 'media/icons/clock1.png';
    }, 800);
}

//나무에 열매가 열리는 애니메이션
let growing = setInterval(bearingFruits, 1200);

function bearingFruits() {
    var tree = document.getElementById('tree');
    tree.src = 'media/icons/tree2.png';
    setTimeout(function() {
        tree.src = 'media/icons/tree3.png';
    }, 400);
    setTimeout(function() {
        tree.src = 'media/icons/tree1.png';
    }, 800);
}

//건물에 책이 쌓이는 애니메이션
let building = setInterval(pilingBooks, 1200);

function pilingBooks() {
    var school = document.getElementById('school');
    school.src = 'media/icons/school2.png';
    setTimeout(function() {
        school.src = 'media/icons/school3.png';
    }, 400);
    setTimeout(function() {
        school.src = 'media/icons/school1.png';
    }, 800);
}

////////////////////////////////////////////////////////////팀의 js 시작///////////////////////////////////////////////////////////////

//팝업: 시계 - 타임라인 t----------------------------------------------------
var btn1 = document.getElementById('clock');

//버튼 누르면 팝업 보이기.팀
btn1.onclick = function() {
    document.getElementById('popupBoxT').style.display = 'block';
    document.scrollingElement.style.overflow = 'hidden';
};

//클로즈버튼 닫는부분.팀
var closeBtn1 = document.getElementById('closeT');

//클로즈버튼 클릭시.팀 //////////////////////200521 오전 1시9분 버전1.3 타임라인 수정

closeBtn1.onclick = function() {
    items2[0].classList.remove('in-view');
    items2[1].classList.remove('in-view');
    items2[2].classList.remove('in-view');
    items2[3].classList.remove('in-view');
    items2[4].classList.remove('in-view');
    items2[5].classList.remove('in-view');
    items2[6].classList.remove('in-view');
    items2[7].classList.remove('in-view');
    count = 0;
    document.getElementById('popupBoxT').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};

//팝업: 학교 - 스킬 g -------------------------------------------------------
var btn2 = document.getElementById('school');

//버튼 누르면 팝업 보이기.팀
btn2.onclick = function() {
    document.getElementById('popupBoxG').style.display = 'flex';
    createGraph();
    document.scrollingElement.style.overflow = 'hidden';
};

//클로즈버튼 닫는부분.팀
var closeBtn2 = document.getElementById('closeG');

closeBtn2.onclick = function() {
    document.getElementById('popupBoxG').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
    resetGraph();
};

//팝업: 나무 - 포트폴리오 pf -------------------------------------------------------
var btn3 = document.getElementById('tree');

//버튼 누르면 팝업 보이기.팀
btn3.onclick = function() {
    document.getElementById('popupBoxPf').style.display = 'block';
    pfShowDivs(1);
    document.scrollingElement.style.overflow = 'hidden';
};

//클로즈버튼 닫는부분.팀
var closeBtn3 = document.getElementById('closePf');

closeBtn3.onclick = function() {
    document.getElementById('popupBoxPf').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};

//팝업: 메일박스 - 연락처 f---------------------------------------------------
var btn4 = document.getElementById('mailbox');

//버튼 누르면 팝업 보이기.팀
btn4.onclick = function() {
    document.getElementById('popupBoxf').style.display = 'block';
    document.scrollingElement.style.overflow = 'hidden';
    repeatType();
};

//클로즈버튼 닫는부분.팀
var closeBtn4 = document.getElementById('closef');

closeBtn4.onclick = function() {
    document.getElementById('popupBoxf').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};

////////////////////////////////////////////////////////////팀의 js 끝/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////timeline 시작 by JW////////////////////////////////////////////////////////

var items = document.querySelectorAll('.timeline ul');
var items2 = document.querySelectorAll('.timeline ul li');

var count = 0;

items[0].onwheel = function() {
    //////////////////////200521 오전 1시9분 버전1.3 타임라인 수정

    items2[0].classList.add('in-view');
    count++;
    if (count == 2) {
        items2[1].classList.add('in-view');
    } else if (count == 3) {
        items2[2].classList.add('in-view');
    } else if (count == 4) {
        items2[3].classList.add('in-view');
    } else if (count == 5) {
        items2[4].classList.add('in-view');
    } else if (count == 6) {
        items2[5].classList.add('in-view');
    } else if (count == 7) {
        items2[6].classList.add('in-view');
    } else if (count == 8) {
        items2[7].classList.add('in-view');
    }
};

////////////////////////////////////////////////////////////end of. timeline by JW//////////////////////////////////////////////////

////////////////////////////////////////////////////////////ProgressBar 시작///////////////////////////////////////////////////////

var $tto = $('.top');
var $about = $('.rodeImg');
var $progress = $('.progress-label');
var $ProgressBar = $('.ProgressBar');
var $colorChange = $('.progressGnb>div');

$(window).on('scroll', function() {
    var i = 1;

    var scrollH = $(window).scrollTop(); //현재 스크롤탑 값

    if (scrollH > $('#background-wrap').height()) {
        $tto.addClass('n-fixed');
        $('.progressGnb .circle:nth-of-type(' + i + ')').addClass('active');
        $progress.css({
            display: 'block',
        });
    } else {
        $tto.removeClass('n-fixed');
        $progress.css({
            display: 'none',
        });
    }
});

let crushingRockCounter = 1;
$('#rock').on('click', function() {
    window.removeEventListener('scroll', lockScroll);
    //#rock이미지를 4번 클릭하면 이벤트가 해제되고 스크롤잠금 이벤트도 해제됨
    if (crushingRockCounter >= 4) {
        $('#rock').remove();
        $('body').css('overflow', 'auto');
        return;
    }
    $(this).attr('src', 'media/icons/rock' + crushingRockCounter + '.png');
    //$('#rock').css('cursor', 'url(media/icons/hammer.gif), auto');
    crushingRockCounter++;
});

// 화면에 스크롤이 잠금되는 이벤트부착
window.addEventListener('scroll', lockScroll);

// 스크롤이 잠금되는 기능
function lockScroll() {
    let scrollPositionE =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
    if (scrollPositionE > 0.76) {
        $('body').css('overflow', 'hidden');
        $('#char').css('top', '3800px');
    }
}

// var i = 1;
// $('.progress .circle').removeClass().addClass('circle');
// $('.progress .bar').removeClass().addClass('bar');
// setInterval(function() {
//   $('.progress .circle:nth-of-type(' + i + ')').addClass('active');

//   $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');

//   $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');

//   $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');

//   $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');

//   i++;

//   if (i==0) {
//     $('.progress .bar').removeClass().addClass('bar');
//     $('.progress div.circle').removeClass().addClass('circle');
//     i = 1;
//   }
// }, 1000);

$(document).ready(function() {
    var arrContH = new Array();

    var $top = $('.rodeImg'); //top으로 쳐야하는 요소
    var top_size = $top.size();
    var topH = 68; //탑메뉴 높이값 저장 변수

    var scrollH = $(this).scrollTop(); // 스크롤의 높이값
    console.log('scrollH=', scrollH); //scrollH= 2200

    for (var i = 0; i < top_size; i++) {
        if (scrollH >= arrContH[i] - topH) {
            console.log('작동');
        }
    } //스크롤 높이값에 따른 메뉴의 롤오버 색상 변화 - 경우의 수

    console.log('$top.size() =', $top.size());

    const win = $(window);
    const doc = $(document);

    var top = 2200;
    scrollTop = top;

    // const winST = 2263;
    const progressBar = $('progress');
    const progressLabel = $('.progress-label');
    const setValue = () => win.scrollTop() - 2200;
    const setMax = () => doc.height() - 2350 - win.height();
    const setPercent = () =>
        Math.round(
            ((win.scrollTop() - 2200) / (doc.height() - win.height())) * 185,
        );

    // progressLabel.text(setPercent() + '%');
    progressBar.attr({ value: setValue(), max: setMax() });

    doc.on('scroll', () => {
        // progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue() });
    });

    win.on('resize', () => {
        // progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue(), max: setMax() });
    });
});

////////////////////////////////////////////////////////////end of. ProgressBar by JW//////////////////////////////////////////////////

///////////////////////////////바 클릭시 팝업 생성 시작///////////////////////////////

var popMove = document.getElementsByClassName('label');

popMove[0].onclick = function() {
    $('html').scrollTop(0);
};

popMove[1].onclick = function() {
    document.getElementById('popupBoxT').style.display = 'block';
    document.scrollingElement.style.overflow = 'hidden';
};

popMove[2].onclick = function() {
    document.getElementById('popupBoxG').style.display = 'block';
    createGraph();
    document.scrollingElement.style.overflow = 'hidden';
};

popMove[3].onclick = function() {
    document.getElementById('popupBoxPf').style.display = 'block';
    pfShowDivs(1);
    document.scrollingElement.style.overflow = 'hidden';
};

popMove[4].onclick = function() {
    document.getElementById('popupBoxf').style.display = 'block';
    document.scrollingElement.style.overflow = 'hidden';
};

///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////Portfolio 시작 by SH/////////////////////////////////////////////////////////////

var pfIndex = 1; //프로젝트 순서
pfShowDivs(pfIndex);

function pfPlusDivs(n) {
    //순서를 변경한다
    pfShowDivs((pfIndex += n));
}

function pfCurrentDivs(n) {
    //현재 순서를 알려준다
    pfShowDivs((pfIndex = n));
}

function pfShowDivs(n) {
    //해당 순서의 프로젝를 보여준다
    let slides = document.getElementsByClassName('pfSlides'); //선택된 프로젝트의 이미지와 설명
    let list = document.getElementsByClassName('pfList'); //하단부의 프로젝트 리스트

    //슬라이드 순서 순환
    if (n > slides.length) pfIndex = 1;
    if (n < 1) pfIndex = slides.length;

    //선택된 슬라이드 보여주기
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    for (let i = 0; i < list.length; i++)
        list[i].className = list[i].className.replace(' pf-opacity-off', '');
    slides[pfIndex - 1].style.display = 'block';
    list[pfIndex - 1].className += ' pf-opacity-off';
}

////////////////////////////////////////////////////////////end of. Portflio by SH///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////form 시작 by MR///////////////////////////////////////////////////////////////

// 타이핑효과
var i = 0;
var txt = '“See things in the present, even if they are in the future. ” ';
var speed = 50;

// document.getElementById('middle1MR').onload =

function repeatType() {
    typeWriterMR();
    setInterval(function() {
        document.getElementById('typingMR').innerHTML = '';
        i = 0;
        typeWriterMR();
    }, 5000);
}

function typeWriterMR() {
    if (i < txt.length) {
        document.getElementById('typingMR').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterMR, speed);
    }
}

////////////////////////////////////////////////////////////end of. form by MR///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////Chart 시작 by SR/////////////////////////////////////////////////////////////

// 바 그래프를 그리는 canvas.세린

var yLabels = {
    0: 'Beginner',
    2: 'Elementary',
    4: 'Intermediate',
    6: 'Inter meridate',
    8: 'Advanced',
};

/* eslint-disable no-undef */
Chart.defaults.global.defaultFontFamily = 'Black Han Sans';
Chart.defaults.global.defaultFontSize = '25';
let chart;
function createGraph() {
    const canvas = document.getElementById('myChart').getContext('2d');
    chart = new Chart(canvas, {
        type: 'bar',
        data: {
            //바 그래프 x축
            labels: ['Java', 'jQuery', 'Javascript', 'HTML', 'CSS'],
            datasets: [
                {
                    //x축에 올라갈 그래프
                    data: [6, 8, 6, 4, 4],
                    backgroundColor: [
                        '#0f4c81',
                        '#5781a7',
                        '#cfdbe6',
                        '#5781a7',
                        '#87a5c0',
                    ],
                    borderColor: [
                        '#0f4c81',
                        '#5781a7',
                        '#cfdbe6',
                        '#5781a7',
                        '#87a5c0',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            tooltips: { enabled: false },
            layout: {
                padding: {
                    left: 0,
                    right: 20,
                    top: 40,
                    bottom: 20,
                },
            },
            legend: {
                display: false,
            },
            //바가 올라오는 속도
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function(value, index, values) {
                                return yLabels[value];
                            },
                            max: 8,
                            min: 0,
                            stepSize: 2,
                        },
                    },
                ],
            },
        },
    });
}

function resetGraph() {
    chart.destroy();
}
////////////////////////////////////////////////////////////end of. Chart by SR///////////////////////////////////////////////////////////////
