export const test = () => {

    interface Quiz{
        question: string;
        answers: string[];
        correct: string;
    };

    const quiz: Quiz = [
        {
            question: 'どの動物がもっとも長寿でしょう？',
            answers:[
                'ゾウ',
                'ゴリラ',
                'カメ',
                'タイガー'
            ],
            correct: 'カメ'
        },{
            question: 'どの動物が夜行性でしょう？',
            answers:[
                'チーター',
                'オオカミ',
                'ハリネズミ',
                'ライオン'
            ],
            correct: 'ハリネズミ'
        },{
            question: 'ペンギンの主な生息地は何処でしょう？',
            answers:[
                '北極',
                '南極',
                'アメリカ大陸',
                'アフリカ大陸'
            ],
            correct: '南極'
        },{
            question: 'オオハシドリの主な生息地は？',
            answers:[
                'アフリカ',
                '中南米',
                'アジア',
                'オーストラリア'
            ],
            correct: '中南米' 
        }
        
    ];


    const quizLength = quiz.length;
    let quizIndex = 0;
    let score = 0;
    
    
    const $button = document.getElementsByTagName('button');
    const buttonLength = $button.length;
    
    // 問題と解答の選択肢に文字を代入
    const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question;
        $button[0].textContent = quiz[quizIndex].answers[0];
        $button[1].textContent = quiz[quizIndex].answers[1];
        $button[2].textContent = quiz[quizIndex].answers[2];
        $button[3].textContent = quiz[quizIndex].answers[3];
    };
    
    setupQuiz();
    
 
    
    const clickHandler = (e) => {
        if(quiz[quizIndex].correct === e.target.textContent){
            window.alert('正解！');
            score++;
        }else{
            window.alert('不正解！');
        }
    
        quizIndex++;
    
        if(quizIndex < quizLength){
            // まだ問題が残っていれば
            setupQuiz();
        } else {
            // 問題が残っていなければ
            window.alert('終了！あなたの正解数は'+ score +'/'+ quizLength + 'です！' );
        }
    
    };
    
    // ボタンを押したら生後判定
    let handlerIndex = 0;
    
    while(handlerIndex < buttonLength){
        $button[handlerIndex].addEventListener('click', (e) => {
            clickHandler(e);
        });
        handlerIndex++;
    }
    
    // 下記は↑でループ
    // $button[0].addEventListener('click', (e) => {
    //     clickHandler(e);
    // })
    
    // $button[1].addEventListener('click', (e) => {
    //     clickHandler(e);
    // })
    
    // $button[2].addEventListener('click', (e) => {
    //     clickHandler(e);
    // })
    
    // $button[3].addEventListener('click', (e) => {
    //     clickHandler(e);
    // })
    
    

}