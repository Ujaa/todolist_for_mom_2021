const TODAY_LS = 'today',
    TODOS_LS = 'toDos',
    TODOSCOUNT_LS = 'toDosCount',
    TODOFINISGED_CN = 'to-do-finished';

let toDos = [];
let newId = 0;
let toDosCountArr = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveCurrentDate(todayDate){
    localStorage.setItem(TODAY_LS, JSON.stringify(todayDate));
}

function updateCurrentDate(year,month,date){
    const todayDate = {
        year,
        month,
        date
    };
    saveCurrentDate(todayDate);
}

function checkDate(){
    const loadSavedDate = localStorage.getItem(TODAY_LS);
    const date = new Date();
    if(loadSavedDate !== null){
        /*현재 날짜와 저장된 날짜 비교
        ->다르다 
        어레이 앞에 0,0추가 뒤에 하나삭제
        todo 초기화
        현재날짜 갱신 */
        if(loadSavedDate.year !== date.getFullYear() 
            || loadSavedDate !== date.getMonth()+1 
            || ef !== loadSavedDate.getDate()){
                toDosCountArr.unshift({
                    total: 0,
                    done: 0
                });
                toDosCountArr.pop();

                toDos = [];
                saveToDos();
        }
    }
    updateCurrentDate(date.getFullYear(), date.getMonth()+1, date.getDate());
}

function init(){
    checkDate();
}

init();