

function GoForm() { //這裡要對應到自己的 javascript 名稱
    //宣告欄位
    var name = $("[name='name']").val();
    var tel = $("[name='tel']").val();
    var email = $("[name='email']").val();
    var add = $("[name='add']").val();
    var other = $("[name='other']").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXudG-t2AT_ux6vNg0CQVAjgHM46U8j5n2eFJcaPN6ZSfSjQ/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
        data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
            "entry.1642049601":name,
            "entry.882667109":tel,
            "entry.1636256834":email,
            "entry.177133982":add,
            "entry.195549181":other,
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            },
            200: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            }
        }
    });
}