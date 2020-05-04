const DATA = [{
  "question": "<b>Câu 1:</b> Quần rộng nhất là quần gì?",
  "A": "<b>A</b> 	&#8594; Quần thô",
  "B": "<b>B</b> 	&#8594; Quần vải",
  "C": "<b>C</b> 	&#8594; Quần đảo",
  "D": "<b>D</b> 	&#8594; Quần rang",
  "Result": "C"


}, {
  "question": "<b>Câu 2:</b> Nắng ba năm ta chưa hề bỏ bạn?",
  "A": "<b>A</b> 	&#8594; Muối",
  "B": "<b>B</b> 	&#8594; Mưa",
  "C": "<b>C</b> 	&#8594; Gió",
  "D": "<b>D</b> 	&#8594; Cái bóng",
  "Result": "D"
}, {
  "question": "<b>Câu 3:</b> Càng chơi càng ra nước?",
  "A": "<b>A</b> 	&#8594; Chơi bời",
  "B": "<b>B</b> 	&#8594; Chơi bài",
  "C": "<b>C</b> 	&#8594; Chơi cờ",
  "D": "<b>D</b> 	&#8594; Chơi bóng",
  "Result": "C"
}, {
  "question": "<b>Câu 4:</b> 2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt??",
  "A": "<b> A </b> 	&#8594; 3",
  "B": "<b>B</b> 	&#8594; 4",
  "C": "<b>C</b> 	&#8594; 2",
  "D": "<b>D</b> 	&#8594; 6",
  "Result": "B"
}, {
  "question": "<b>Câu 5:</b> Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?",
  "A": "<b>A</b> 	&#8594; Quần",
  "B": "<b>B</b> 	&#8594; Bàn chải",
  "C": "<b>C</b> 	&#8594; Than",
  "D": "<b>D</b> 	&#8594; Dép",
  "Result": "C"
}

]

var key = document.getElementsByClassName("but");
var changecontent = document.getElementById("container");
var notification = document.getElementById("notification");

var i = 0;
key[0].innerHTML = DATA[i].question;
key[1].innerHTML = DATA[i].A;
key[2].innerHTML = DATA[i].B;
key[3].innerHTML = DATA[i].C;
key[4].innerHTML = DATA[i].D;

var point = 0;


function ud(check) {
  if (check === DATA[i].Result) {
    point++;
    console.log(point);
  }
  i++;
  if (i == 5) {
    if (point < 5) {
      notification.textContent = 'Bạn đã trả lời đúng ' + point + "/5 câu hỏi!";

      key[0].remove();
      key[0].remove();
      key[0].remove();
      key[0].remove();
      key[0].innerHTML ="<b>Chơi Lại!!!</b>";
      key[0].addEventListener('click',function(event){
        location.reload();
      })
     
    } else {
      changecontent.textContent = "Chúc mừng bạn đã trở thành trọc phú!"
    }
  }
    key[0].innerHTML = DATA[i].question;
    key[1].innerHTML = DATA[i].A;
    key[2].innerHTML = DATA[i].B;
    key[3].innerHTML = DATA[i].C;
    key[4].innerHTML = DATA[i].D;
  
}



