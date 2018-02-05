function onLoad() {
    var storage=window.localStorage;
    storage.setItem("fruit","apple");
    storage.setItem("colour","red");
    storage.setItem("number","1");
    var value1=window.localStorage.getItem("fruit");
    var value2=window.localStorage.getItem("colour");
    window.alert(value1);
    window.alert("TEST");
    $("#myText").text("hoover");
    var chocbar={
        "brand":"Mars",
        "product":{
            "name":"MARS BAR 4 PACK",
            "weight":"157.6g"
        }
    };
    var chocbarString = JSON.stringify(chocbar);
    console.log(chocbar.brand+" "+chocbar.product.name+" "+chocbar.product.weight)
    storage.setItem("chocbar",chocbarString);
    var getChocbar = storage.getItem("chocbar");
    var chocbarJSON = JSON.parse(getChocbar);
    var txt;
    if(window.confirm("Is "+getChocbar+" your favorite chocbar?")==true)
        {
            txt="yes!";
        }else{
            txt="No!";
        }
    document.getElementById("test").innerHTML = txt;
    
    
    var data=[{
        "name":"Quan Junhui",
        "nickname":"saozhu",
        "region":"Shaoxing Keqiao"
    },{
        "name":"Zhang Zhongfang",
        "nickname":"lunch",
        "region":"Wenzhou"
    }];
    var output='';
    $.each(data,function(index,value){
        output += '<li>' + value.name + '</li>'+'<li>' + value.nickname + '</li>';
    });
    $('#searchName').html(output).listview("refresh");
}