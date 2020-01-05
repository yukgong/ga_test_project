const mainSlice = document.getElementsByClassName("main_slice");

const MAIN_SLICE_HOVER = 'main_slice_hover', 
    MAIN_SLICE = 'main_slice';

//마우스 호버시 애니메이션 시작
var changeWidth = function() {
    //hover 요소의 기존 스타일은 제거하고 [main_slice_hover] 스타일 추가하기
    this.classList.add(MAIN_SLICE_HOVER);
    this.classList.remove(MAIN_SLICE);
    // hover 요소의 현재 넓이와 높이값을 구하기.
    var width = this.clientWidth;
    var height = this.clientHeight;

    if(height < width){ // [main slice] 박스가 높이에 비해 넓이가 크다면.
        this.style.width = width + "px";
        this.style.height = width + "px";
        console.log(width);

        // 호버 상태일 때 [main slice]요소의 넓이 값 변수 지정.
        for(var i=0; i< mainSlice.length;i++){
            var pad1 = "calc( 20%" + " - " + (width - height)/5 + "px)";
            mainSlice[i].style.width = pad1;
        }
    } else if(height > width){ // [main slice] 박스가 넓이에 비해 높이가 크다면.
        this.style.width = height + "px";
        this.style.height = height + "px";
        console.log(height);

        // 호버 상태일 때 [main slice]요소의 넓이 값 변수 지정.
        for(var i=0; i< mainSlice.length;i++){
            var pad2 = "calc( 20%" + " - " + (height - width)/5 + "px)";
            mainSlice[i].style.width = pad2;
        }
    }
};

//마우스 아웃시 애니메이션 시작
var resetWidth = function() {
    this.classList.remove(MAIN_SLICE_HOVER);
    this.classList.add(MAIN_SLICE);
    this.style.width = "20%";
    this.style.height = "100%";

    for(var i=0; i< mainSlice.length;i++){
        mainSlice[i].style.width = "20%";
    }

    for(var i=0; i< mainSlice.length;i++){
        mainSlice[i].style.height = "100%";
    }
};


function init(){
    console.dir(mainSlice);

for (var i = 0; i < mainSlice.length; i++) {
    mainSlice[i].addEventListener('mouseenter', changeWidth, false);
};

for (var i = 0; i < mainSlice.length; i++) {
    mainSlice[i].addEventListener('mouseout', resetWidth, false);
};

}

init();